"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 space-y-1">
        <li><b>Backend Development:</b> Java, SpringBoot, Scala, Nest.js, TypeScript</li>
        <li><b>Frontend Development:</b> Flutter, React, Next.js</li>
        <li><b>Data & Machine Learning:</b> Python (TensorFlow, PyTorch), SQL, Pandas, Numpy</li>
        <li><b>Blockchain Development:</b> Solidity, Hardhat, Truffle, Ganache</li>
        <li><b>Data Visualization:</b> Tableau, Matplotlib, Plotly</li>
        <li><b>Tools:</b> Docker, Jira</li>
        <li><b>Languages:</b> French (C2), English (C1), Spanish (B2), German (A2)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 space-y-1">
        <li><b>MSc in Cybersecurity</b> – Double Degree EPFL & ETHZ (2020–2022)
          <br />
          <span className="text-sm">Key Topics: ML, Network & Information Security, Security Engineering</span>
        </li>
        <li><b>BSc in Communication Systems</b> – EPFL (2016–2020)
          <br />
          <span className="text-sm">Notable Subjects: Algorithms, Computer Networks, Stochastic Models</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4 space-y-1">
        <li><b>Professional Scrum Product Owner I (PSPO I)</b> – Scrum.org (Mar. 2024)</li>
        <li><b>Fundamentals of Visualization with Tableau</b> – Coursera (Oct. 2024)</li>
        <li><b>Introduction to Trading, Machine Learning & GCP</b> – Google Cloud & NYIF</li>
        <li><b>NestJS: The Complete Developer's Guide</b> – Udemy</li>
        <li><b>Blockchain Specialization</b> – University at Buffalo & SUNY</li>
      </ul>
    ),
  },
];


const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image alt="aboutimage"src="/images/about-image.png" width={600} height={600} style={{ borderRadius: "20px"}} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I’m a software engineer passionate about building secure, data-driven, and visually engaging applications. I specialize in backend development with Java, SpringBoot, SQL, and blockchain technologies, delivering solutions that merge technical depth with real-world impact. I also work with data visualization tools like Tableau to turn complex data into clear insights, and have experience in Python and machine learning for tackling innovative, data-centric challenges.          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
