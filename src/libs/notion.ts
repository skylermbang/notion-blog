import { NotionAPI } from 'notion-client';
import { Block } from 'notion-types';

const notion = new NotionAPI({
  authToken: process.env.NOTION_AUTH_TOKEN,
});

function normalizeRecordMap(recordMap: any) {
  // notion-client now returns block[id] = { spaceId, value: { value: Block, role } }
  // but react-notion-x expects block[id] = { role, value: Block }
  // Unwrap the extra nesting so both libs are compatible.
  for (const id of Object.keys(recordMap.block)) {
    const entry = recordMap.block[id] as any;
    if (entry?.value?.value !== undefined) {
      recordMap.block[id] = { role: entry.value.role, value: entry.value.value };
    }
  }
  for (const id of Object.keys(recordMap.collection ?? {})) {
    const entry = recordMap.collection[id] as any;
    if (entry?.value?.value !== undefined) {
      recordMap.collection[id] = { role: entry.value.role, value: entry.value.value };
    }
  }
  return recordMap;
}

export async function getRecordMap(id: string) {
  const recordMap = await notion.getPage(id);
  normalizeRecordMap(recordMap);

  // Find the collection_view block to get collection + view IDs
  const cvBlock = Object.values(recordMap.block).find((b: any) => {
    return b?.value?.type === 'collection_view';
  }) as any;

  if (cvBlock) {
    const collectionId = cvBlock?.value?.collection_id;
    const viewId = cvBlock?.value?.view_ids?.[0];

    if (collectionId && viewId) {
      const collData = await notion.getCollectionData(collectionId, viewId, { limit: 999 });
      normalizeRecordMap(collData.recordMap);
      Object.assign(recordMap.block, collData.recordMap.block ?? {});
    }
  }

  return recordMap;
}

export function mapImageUrl(url: string, block: Block): string | null {
  if (!url) {
    return null;
  }

  if (url.startsWith('data:')) {
    return url;
  }

  // more recent versions of notion don't proxy unsplash images
  if (url.startsWith('https://images.unsplash.com')) {
    return url;
  }

  try {
    const u = new URL(url);

    if (
      u.pathname.startsWith('/secure.notion-static.com') &&
      u.hostname.endsWith('.amazonaws.com')
    ) {
      if (
        u.searchParams.has('X-Amz-Credential') &&
        u.searchParams.has('X-Amz-Signature') &&
        u.searchParams.has('X-Amz-Algorithm')
      ) {
        // if the URL is already signed, then use it as-is
        return url;
      }
    }
  } catch {
    // ignore invalid urls
  }

  if (url.startsWith('/images')) {
    url = `https://www.notion.so${url}`;
  }

  url = `https://www.notion.so${
    url.startsWith('/image') ? url : `/image/${encodeURIComponent(url)}`
  }`;

  const notionImageUrlV2 = new URL(url);
  let table = block.parent_table === 'space' ? 'block' : block.parent_table;
  if (table === 'collection' || table === 'team') {
    table = 'block';
  }
  notionImageUrlV2.searchParams.set('table', table);
  notionImageUrlV2.searchParams.set('id', block.id);
  notionImageUrlV2.searchParams.set('cache', 'v2');

  url = notionImageUrlV2.toString();

  return url;
}
