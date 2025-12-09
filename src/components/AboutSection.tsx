import React, { useTransition, useState } from "react";
import Image from "next/image";
import { Tab } from "./Tab";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>React</li>
        <li>Next.js</li>
        <li>MongoDB</li>
        <li>Firebase</li>
        <li>Git/Github</li>
        <li>Typescript</li>
        <li>Machine Learning</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend Developer: May 2025 - Oct 20205</li>
        <li>Backend Engineer: Oct 2023 - Nov 2024</li>
        <li>Technical Recruiter: Oct 2025 - present</li>
        <li>Cloud Engineer Intern: Jul 2024 - Sep 2024</li>
        <li>Switch Engineer Intern:  Jul 2023 - Sep 2023</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Afe Babalola Univerisity</li>
        <li>BSc. Computer Science</li>
        <li>CGPA: 4.85/5.0</li>
        <li>October 2025</li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gapp-8 items-center px-4 py-8 xl:gap-16 sm:py-16 xl:py-16">
        <Image src={"/about.png"} alt="about me" width={500} height={500} />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            I am a results-driven software developer with backend experience in
            building scalable APIs and frontend experience creating intuitive,
            responsive interfaces. Skilled in Node.js, React, FastAPI, and
            Next.js, with hands-on project experience integrating authentication
            systems, automating email workflows and delivering predictive
            systems. Passionate about designing efficient solutions that improve
            user experience and operational efficiency
          </p>

          <div className="flex flex-row mt-8">
            <Tab
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              children="Skills"
            />
            <Tab selectTab={() => handleTabChange("experience")} active={tab === "experience"} children='Experience' />
            <Tab
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              children="Education"
            />
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};
