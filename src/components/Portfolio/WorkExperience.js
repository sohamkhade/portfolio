"use client";
import React, { useState } from 'react';
import { FaBuilding } from 'react-icons/fa'; // Example React Icons


const WorkExperience = () => {
    const [workExperiences, setWorkExperiences] = useState([
        {
            position: "Software Engineer Intern",
            date: "April 2025 - Current",
            company: "Relyion Energy Inc",
            technologies: "React | Typescript | Javascript",
            thingsDone: [
                "Designing real-time dashboards for a solar power plant to monitor energy generation, system performance, and equipment health.",
                "Built a BESS monitoring module to track charge cycles, state-of-health, and optimize energy storage using real-time data."
            ]
        },
        {
            position: "Software Engineer Intern",
            date: "January 2022 - June 2022",
            company: "Persistent Systems",
            technologies: "Spring | SpringBoot | TIBCO",
            thingsDone: [
                "Designed REST and SOAP-based APIs in TIBCO BusinessWorks for API integration projects, facilitating seamless communication between 3 applications and 10+ data endpoints.",
                "Leveraged BW6's extensive library of connectors and adapters and facilitated seamless data exchange, transforming disparate data formats and ensuring data consistency across the ecosystem."
            ]
        },
        {
            position: "Software Developer",
            date: "January 2021 - October 2021",
            company: "Debugged.exe",
            technologies: "ReactJs | NodeJs | Postgres",
            thingsDone: [
                "Developed a dashboard to streamline subscription management and user information tracking.",
                "Decreased loading latency of dashboard by 27.3% and used by 1K+ users on cross-platform devices.",
                "Used redux to manage three levels of user access to portal."
            ]
        }
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
                            <span className="text-sm text-zinc-400">
                {experience.date}
              </span>
                        </div>
                        <div className="mt-4 text-sm text-zinc-300">
                            <span className="font-medium">Company: </span>{experience.company}
                        </div>
                        <div className="mt-2 text-sm text-zinc-300">
                            <span className="font-medium">Technologies: </span>{experience.technologies}
                        </div>
                        <div className="mt-4">
                            <span className="font-medium text-zinc-300">Key Responsibilities:</span>
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
