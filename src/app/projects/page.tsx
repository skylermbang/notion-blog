import { ReactNode } from 'react';

export const metadata = {
  title: 'Projects',
  description: 'Projects by Skyler Minsu Bang.',
};

function ProjectCard({
  title,
  url,
  stack,
  children,
}: {
  title: string;
  url?: string;
  stack: string[];
  children?: ReactNode;
}) {
  return (
    <div className="p-6 mt-6 border border-gray-300 rounded-lg shadow-md">
      <div className="flex items-center gap-3 flex-wrap">
        <h2 className="text-xl font-semibold">{title}</h2>
        {url && (
          <a
            href={`https://${url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline text-sm"
          >
            {url}
          </a>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
      {children && <div className="mt-3">{children}</div>}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="mt-12 text-center text-3xl font-bold">Projects</h1>
      <div className="mt-8">
        <ProjectCard
          title="StoryAI"
          url="storyai.study"
          stack={['NestJS', 'Next.js', 'TypeScript', 'Prisma', 'AWS', 'OpenAI']}
        >
          <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
            <li>End-to-end reading platform for AI-generated children&apos;s stories, quizzes, images, and audio.</li>
            <li>Leveraged Next.js Server-Side Rendering (SSR) to improve SEO and initial page load performance.</li>
            <li>Backend built with NestJS following a modular MVC architecture — controllers, services, and repositories — for clean separation of concerns.</li>
            <li>Implemented CI/CD pipeline using GitHub Actions to automate testing and deployment.</li>
            <li>Designed backend APIs, Prisma data models, and media handling workflows for books, pages, quizzes, and user progress.</li>
            <li>Developed frontend reading and quiz flows with state-driven user progress handling.</li>
          </ul>
        </ProjectCard>

        <ProjectCard
          title="StoryVault"
          url="storyvault.study"
          stack={['NestJS', 'Next.js', 'TypeScript', 'Prisma', 'AWS', 'OpenAI']}
        >
          <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
            <li>Leveraged Next.js Server-Side Rendering (SSR) to improve SEO and initial page load performance.</li>
            <li>Backend built with NestJS following a modular MVC architecture — controllers, services, and repositories — for clean separation of concerns.</li>
          </ul>
        </ProjectCard>

        <ProjectCard
          title="Sprout Learning"
          url="sproutlearning.xyz"
          stack={['React', 'Express']}
        >
          <p className="text-sm">
            Built a full-stack learning platform to practise JWT token authentication and RESTful API design with Express.js using the MVC pattern.
          </p>
        </ProjectCard>

        <ProjectCard
          title="TBD"
          stack={[]}
        >
          <p className="text-sm text-gray-400 italic">Coming soon.</p>
        </ProjectCard>
      </div>
    </div>
  );
}
