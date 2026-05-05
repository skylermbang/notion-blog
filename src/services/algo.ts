import { unstable_cache } from 'next/cache';

import { getRecordMap, mapImageUrl } from '@/libs/notion';
import { Post } from '@/types/post';
import { getBlurImage } from '@/utils/get-blur-image';

async function fetchAllPostsFromNotion() {
  const allPosts: Post[] = [];
  const recordMap = await getRecordMap(process.env.NOTION_DATABASE_ID_ALGO!);
  const { block, collection } = recordMap;

  const schema = (Object.values(collection)[0] as any).value.schema;
  const propertyMap: Record<string, string> = {};

  Object.keys(schema).forEach((key) => {
    propertyMap[schema[key].name] = key;
  });

  Object.keys(block).forEach((pageId) => {
    const val = block[pageId].value as any;
    if (val?.type === 'page' && val?.properties?.[propertyMap['Slug']]) {
      const { properties, last_edited_time } = val;

      const contents = val.content || [];
      const dates = contents.map((content: string) => {
        return (block[content]?.value as any)?.last_edited_time;
      });
      dates.push(last_edited_time);
      dates.sort((a: number, b: number) => b - a);
      const lastEditedAt = dates[0];

      const slug = properties[propertyMap['Slug']][0][0];
      const title = properties[propertyMap['Page']][0][0];
      const categories = properties[propertyMap['Category']][0][0].split(',');
      const cover = properties[propertyMap['Cover']][0][1][0][1];
      const date = properties[propertyMap['Date']][0][1][0][1]['start_date'];
      const published = properties[propertyMap['Published']][0][0] === 'Yes';

      allPosts.push({
        id: pageId,
        title,
        slug,
        categories,
        cover: mapImageUrl(cover, block[pageId].value) || '',
        date,
        published,
        lastEditedAt,
      });
    }
  });

  const blurImagesPromises = allPosts.map((post) => getBlurImage(post.cover));
  const blurImages = await Promise.all(blurImagesPromises);
  allPosts.forEach((post, i) => (post.blurUrl = blurImages[i].base64));

  return allPosts;
}

export const getAllPostsFromNotion = unstable_cache(
  fetchAllPostsFromNotion,
  ['algo-posts'],
  { revalidate: 3600 }
);
