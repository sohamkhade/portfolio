"use client";
import React, { useState } from "react";
import { FaBuilding } from "react-icons/fa"; // Example React Icons

const WorkExperience = () => {
  const [workExperiences, setWorkExperiences] = useState([
    {
      position: "Full Stack Software Engineer",
      date: "September 2025 - Current",
      company: "Rhombus Power",
      technologies: "React | PHP | Javascript | Typescript | Python",
      thingsDone: [
        "Developed a Modal feature for the dashboard using Carbon Design components, enhancing both user experience and interface consistency.",
        "Improved dashboard performance by optimizing component rendering and reducing unnecessary re-renders.",
        "Implemented a Page Object Model (POM) structure to enhance React Testing Library integration and make test cases more maintainable.",
        "Improved unit test handling by restructuring test cases for better coverage and reliability.",
        "Collaborated with the design team to ensure the UI adhered to accessibility standards and maintained visual alignment across pages.",
      ],
    },
    {
      position: "Software Engineer Intern",
      date: "April 2025 - September 2025",
      company: "Relyion Energy Inc",
      technologies: "React | Typescript | Javascript",
      thingsDone: [
        "Developed a real-time solar power plant dashboard using Next.js and TypeScript to monitor energy generation and system health, improving maintenance and operational efficiency by 10%",
        "Built a BESS monitoring module with Node.js and real-time data streams to track charge cycles and state-of-health, optimizing energy storage performance by 10-20% through more efficient data processing",
        "Created a web app to visualize CAISO energy demand trends using Django, Python, and JavaScript, enhancing energy forecasting with real-time and historical data",
        "Developed a platform to track Henry Hub natural gas prices, providing real-time data and trends to support market analysis and forecasting for informed trading decisions",
      ],
    },
    {
      position: "Software Engineer Intern",
      date: "January 2022 - June 2022",
      company: "Persistent Systems",
      technologies: "Spring | SpringBoot | TIBCO",
      thingsDone: [
        "Transitioned from web development to Java Full-Stack and MERN Stack, designing dynamic applications that enhanced performance by up to 20% and optimized user experience across multiple projects",
        "Designed and implemented REST and SOAP APIs in TIBCO BusinessWorks, enabling seamless communication between applications and improving system integration by 15%",
        "Utilized BW6’s connectors to transform data formats and ensure data consistency, optimizing business processes through smooth data exchange across systems",
      ],
    },
    {
      position: "Software Developer",
      date: "January 2021 - October 2021",
      company: "Debugged.exe",
      technologies: "ReactJs | NodeJs | Postgres",
      thingsDone: [
        "Developed a dashboard to streamline subscription management and user information tracking.",
        "Decreased loading latency of dashboard by 27.3% and used by 1K+ users on cross-platform devices.",
        "Used redux to manage three levels of user access to portal.",
      ],
    },
  ]);

  return (
    <div className="rounded-2xl bg-black p-6 sm:px-8 pt-8 pb-12 sm:pt-40 lg:px-20 shadow-lg">
      <h2 className="text-2xl font-semibold text-teal-500 mb-6">
        Work Experience
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {workExperiences.map((experience, index) => (
          <div
            key={index}
            className={`group bg-zinc-900 p-6 rounded-xl shadow-lg flex flex-col relative overflow-hidden example-2`} // Apply animation class here
          >
            <div className="flex flex-col items-start justify-between">
              <div className="flex items-center gap-4">
                <FaBuilding className="text-xl text-teal-500" />
                <span className="text-lg font-semibold text-zinc-100">
                  {experience.position}
                </span>
              </div>
              <span className="text-sm text-zinc-400">{experience.date}</span>
            </div>
            <div className="mt-4 text-sm text-zinc-300">
              <span className="font-medium">Company: </span>
              {experience.company}
            </div>
            <div className="mt-2 text-sm text-zinc-300">
              <span className="font-medium">Technologies: </span>
              {experience.technologies}
            </div>
            <div className="mt-4">
              <span className="font-medium text-zinc-300">
                Key Responsibilities:
              </span>
              <ul className="mt-2 space-y-2 text-sm text-zinc-200 list-disc pl-5">
                {experience.thingsDone.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Border animation */}
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-teal-500 border-solid transition-all duration-300 ease-out"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
