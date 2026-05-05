'use client';

import React, { ReactNode } from 'react';
import { metadata } from './aboutMetadata';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="mt-12 text-center text-3xl font-bold">Skyler Minsu Bang</h1>
      <p className="text-center text-sm mt-2 text-gray-500">
        bang618@hotmail.com &nbsp;•&nbsp; 0490 881 075 &nbsp;•&nbsp; Melbourne, Australia &nbsp;•&nbsp;{' '}
        <a href="https://linkedin.com/in/skylerminsubang" target="_blank" rel="noopener noreferrer" className="underline">
          linkedin.com/in/skylerminsubang
        </a>{' '}
        &nbsp;•&nbsp;{' '}
        <a href="https://github.com/skylermbang" target="_blank" rel="noopener noreferrer" className="underline">
          github.com/skylermbang
        </a>
      </p>
      <div className="mt-8">
        <Section title="Summary">
          <Summary />
        </Section>
        <Section title="Experience">
          <Experience />
        </Section>
        <Section title="Projects">
          <Projects />
        </Section>
        <Section title="Education">
          <Education />
        </Section>
        <Section title="Skills">
          <Skills />
        </Section>
        <Section title="Honors & Awards">
          <Awards />
        </Section>
      </div>
    </div>
  );
}

type SectionProps = {
  title: string;
  children: ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <div className="p-6 mt-6 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}

function Summary() {
  return (
    <p>
      Backend-focused Software Engineer with 4+ years of experience designing and delivering production systems across
      billing, customer management, and complex third-party integrations. Skilled in building and scaling APIs using
      Node.js, TypeScript, C#, and .NET, with hands-on ownership of cloud infrastructure on AWS. Experienced in
      improving deployment pipelines, building internal tooling, and resolving high-severity production incidents under
      SLA. Currently expanding into full-stack development with Next.js, NestJS, and React through a personal
      AI-powered reading platform. Seeking a backend or full-stack engineering role where I can contribute strong
      system design fundamentals and a bias for shipping reliable software.
    </p>
  );
}

function Experience() {
  return (
    <div>
      <h3 className="font-semibold">Gentrack — Software Engineer, Delivery Engineering</h3>
      <p className="text-sm text-gray-500 mb-2">Aug 2022 – Present</p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Designed and rebuilt a billing/invoicing system serving 30,000+ end customers across energy retailers including Amber Electric, Solstice Energy, and Vocus on AWS-hosted infrastructure.</li>
        <li>Implemented AEMO/AEMC regulatory changes across the Australian Energy Market (AUE) product, including NEM12/NEM13 meter data format updates and R46 schema changes to maintain compliance with evolving market rules.</li>
        <li>Contributed to the Improving Consumer Confidence in Retailer Energy Plan (ICCIREP) initiative by implementing vulnerable customer account detection logic and offset transaction processing to meet regulatory consumer protection requirements.</li>
        <li>Implemented NAB bank payment integration and designed the Service Order Charge feature end-to-end, including APIs, business rules, and data models to support annual pricing updates across multiple client environments.</li>
        <li>Built a Python-based internal pricing automation tool that replaced a manual annual process, eliminating human error and reducing update time from days to minutes; also developed onboarding tooling that standardised environment setup and accelerated new engineer ramp-up.</li>
        <li>Diagnosed and resolved recurring failures in legacy CI/CD pipelines, implementing automated fixes that achieved zero deployment failures across 20+ consecutive releases and cut average release cycle time by ~40%.</li>
        <li>Led root-cause analysis and resolved 100+ production incidents within SLA, conducting post-mortems and implementing preventive fixes that strengthened system reliability for customer-facing platforms.</li>
        <li>Authored technical runbooks, environment documentation, and onboarding guides that reduced new engineer ramp-up time and established repeatable processes for incident response and production support.</li>
      </ul>

      <h3 className="font-semibold mt-6">Underwatch — Backend Developer</h3>
      <p className="text-sm text-gray-500 mb-2">Nov 2021 – Jul 2022</p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Engineered 45+ RESTful APIs using Node.js, TypeScript, and SQL, improving system reliability by 52% through structured logging and fault-tolerant error handling.</li>
        <li>Architected and operated cost-efficient serverless AWS workloads, including a data crawler, maintaining infrastructure costs under $200/month.</li>
      </ul>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h3 className="font-semibold">StoryAI — AI Reading Platform</h3>
      <p className="text-sm text-gray-500 mb-1">Personal Project &nbsp;•&nbsp;{' '}
        <a href="https://storyai.study" target="_blank" rel="noopener noreferrer" className="underline text-blue-500">
          storyai.study
        </a>
      </p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Building an end-to-end reading platform for AI-generated children&apos;s stories, quizzes, images, and audio using Next.js, NestJS, TypeScript, Prisma, MySQL, Redis, and AWS/S3.</li>
        <li>Designed and implemented backend APIs, Prisma data models, and media handling workflows for books, pages, quizzes, user progress, and generated assets.</li>
        <li>Developed frontend reading and quiz flows with API integration, state-driven user progress handling, and an extensible content pipeline for future multi-tenant deployment.</li>
      </ul>
    </div>
  );
}

function Education() {
  return (
    <div>
      <h3 className="font-semibold">Queensland University of Technology (QUT)</h3>
      <p>Master of Information Technology (Software Development)</p>

      <h3 className="font-semibold mt-4">University of Liverpool</h3>
      <p>Bachelor of Engineering, Electrical Engineering (Honours)</p>
    </div>
  );
}

function Skills() {
  return (
    <div className="space-y-1">
      <p><strong>Languages &amp; Frameworks:</strong> JavaScript, TypeScript, Python, C#, .NET, Node.js, NestJS, Next.js, React, SQL, REST APIs, GraphQL</p>
      <p><strong>Cloud &amp; Infrastructure:</strong> AWS (Lambda, S3, EC2), Docker, CI/CD, Jenkins, GitHub Actions</p>
      <p><strong>Databases &amp; Tools:</strong> MySQL, PostgreSQL, Redis, Prisma, Git, Jira</p>
    </div>
  );
}

function Awards() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold">Rising Star Award — Gentrack Ltd (Global)</h3>
        <p>Exceptional contributions to Delivery Engineering through incident resolution, documentation, and workflow improvements.</p>
      </div>
      <div>
        <h3 className="font-semibold">Creative Award — Chinese Ministry of Education</h3>
        <p>An independent side project demonstrating innovation and creativity in engineering and technology, recognised at a national level.</p>
      </div>
      <div>
        <h3 className="font-semibold">IET Best Poster Award — Institution of Engineering and Technology (IET)</h3>
        <p>Recognised for delivering the best research poster presentation on a Final Year Project, Smart Home Robot, showcasing strong technical and visual communication.</p>
      </div>
    </div>
  );
}
