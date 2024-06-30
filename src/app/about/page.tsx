'use client';

import React, { ReactNode } from 'react';
import { metadata } from './aboutMetadata'; // Import the metadata

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="mt-12 text-center text-3xl font-bold">Skyler Minsu Bang</h1>
      <div className="mt-8">
        <Section title="Work Experience">
          <WorkExperience />
        </Section>
        <Section title="Education">
          <Education />
        </Section>
        <Section title="Project Experience">
          <ProjectExperience />
        </Section>
        <Section title="Other Relevant Information">
          <OtherInformation />
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

function WorkExperience() {
  return (
    <div>
      <h3 className="font-semibold">Gentrack, Melbourne, Australia</h3>
      <p>Junior Software Engineer, Delivery Engineering | Aug 2022 - Present</p>
      <ul className="list-disc list-inside ml-4">
        <li>Resolved over 100 incidents and bugs within SLA timeframes.</li>
        <li>Collaborated on key projects, enhancing customer management and satisfaction.</li>
        <li>Authored over 60 comprehensive engineering documents.</li>
        <li>Established new processes to improve team output.</li>
        <li>Implemented best practices in coding standards and quality guidelines.</li>
        <li>Leveraged SQL, AWS, and APIs to troubleshoot and optimize system functionality.</li>
      </ul>

      <h3 className="font-semibold mt-4">Underwatch, Seoul, Korea</h3>
      <p>Backend Developer | Nov 2021 - Jul 2022</p>
      <ul className="list-disc list-inside ml-4">
        <li>Developed 45 RESTful API interfaces with clear log and error message features.</li>
        <li>Designed and implemented serverless architecture to reduce backend server costs.</li>
      </ul>

      <h3 className="font-semibold mt-4">Renault Korea, Seoul, Korea</h3>
      <p>Sales Administrator Staff, RG Team, Sales and Marketing Division | Aug 2019 - Aug 2020</p>
      <ul className="list-disc list-inside ml-4">
        <li>Managed 43 direct sales outlets and 550 salesmen in Korea.</li>
        <li>Collaborated with various teams to maximize sales performance.</li>
      </ul>

      <p>Intern Engineer, System and Vehicle Team, Research and Development Division | Jun 2016 - Jan 2017</p>
      <ul className="list-disc list-inside ml-4">
        <li>Involved in 5 major car chassis performance tests.</li>
        <li>Learned engineering documentation and reporting for presentations.</li>
      </ul>
    </div>
  );
}

function Education() {
  return (
    <div>
      <h3 className="font-semibold">Queensland University of Technology (QUT), Brisbane, Australia</h3>
      <p>Master of Information Technology in Software Development</p>

      <h3 className="font-semibold mt-4">University of Liverpool, Liverpool, UK</h3>
      <p>Bachelor&apos;s of Engineering in Electrical Engineering (Honors) - Dual Degree Obtained from XJTLU China</p>
    </div>
  );
}

function ProjectExperience() {
  return (
    <div>
      <h3 className="font-semibold">Blockchain Research</h3>
      <p>Decentralized Web Service, Brisbane, Australia</p>
      <ul className="list-disc list-inside ml-4">
        <li>Implemented prototype using Hyperledger Fabric and Node.js.</li>
        <li>Obtained Blockchain professional certification from ICT Korea Research Institute.</li>
      </ul>

      <h3 className="font-semibold mt-4">Opendoor E-Learning, Seoul, Korea</h3>
      <p>Education Card Game</p>
      <ul className="list-disc list-inside ml-4">
        <li>Developed business plan, card game, and website using JavaScript, Node, React, MongoDB, and AWS services.</li>
        <li>Received Creative Award from the Chinese Ministry of Education in 2022.</li>
      </ul>

      <h3 className="font-semibold mt-4">Web Development Bootcamp, Seoul, Korea</h3>
      <p>Backend Curriculum</p>
      <ul className="list-disc list-inside ml-4">
        <li>Accomplished bootcamp specializing in backend curriculum (Node.js, AWS EC2, MongoDB).</li>
        <li>Developed Restful API Backend server using TypeScript, MVC Pattern, Docker, AWS EC2, and Prisma ORM.</li>
      </ul>

      <h3 className="font-semibold mt-4">Mobile Agent for Smart Home, Suzhou, China</h3>
      <p>AI Sound Classification Application</p>
      <ul className="list-disc list-inside ml-4">
        <li>Developed AI Arduino-based robot for smart home.</li>
        <li>Achieved 97% accuracy in TensorFlow-CNN-based &apos;dangerous&apos; sound training.</li>
        <li>Received the IET Best Poster Award in 2019.</li>
      </ul>

      <h3 className="font-semibold mt-4">Center of Smart Infrastructure Monitoring (CSIM), Suzhou, China</h3>
      <p>Fusion Engineering Research Lab</p>
      <ul className="list-disc list-inside ml-4">
        <li>Developed hardware for pavement damage detection project using Arduino and Raspberry Pi.</li>
        <li>Published two conference papers at the International Conference on Smart Infrastructure and Construction, UK.</li>
      </ul>
    </div>
  );
}

function OtherInformation() {
  return (
    <div>
      <p><strong>Languages:</strong> English (Professional), Korean (Native), Chinese (Intermediate)</p>
      <p><strong>Programming Languages:</strong> JavaScript, Python, C#, SQL</p>
      <p><strong>DevOps:</strong> AWS services (EC2, S3, Amplify, Lambda), Jenkins, Docker, GitHub</p>
      <p><strong>Awards:</strong> Creative Award (2022), IET Best Poster Award (2018-2019)</p>
      <p><strong>Publications:</strong></p>
      <ul className="list-disc list-inside ml-4">
        <li>Zhao Yang Chen, Cheng Chen, Bo Bang, Minsu (2019). &quot;Pavement damage detection system using big data analysis of multiple sensor.&quot; International Conference on Smart Infrastructure and Construction (ICSIC), UK.</li>
        <li>Zhao Yang Chen, Cheng Chen, Bo Bang, Minsu (2019). &quot;Automatic Pavement Crack Detection Based on Image Recognition.&quot; International Conference on Smart Infrastructure and Construction (ICSIC), UK.</li>
      </ul>
    </div>
  );
}
