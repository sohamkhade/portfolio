"use client";
import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa"; // Using React Icons (Font Awesome)

const HeroSection = () => {
    return (
        <div className="relative px-4 pt-12 pb-12 sm:px-8 lg:px-12 sm:pt-40 sm:pb-40 ">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
                        Software engineer, team player, and startup enthusiast.
                    </h1>
                    <p className="mt-6 text-base text-zinc-400">
                        I’m Soham Khade, a full-stack developer passionate about building scalable products and exploring new technologies. I recently completed my Master’s at USC and am currently seeking opportunities where I can contribute and grow.
                    </p>

                    <div className="mt-6 flex gap-6">
                        {/* GitHub */}
                        <a
                            className="group -m-1 p-1 hover:text-teal-500"
                            aria-label="GitHub"
                            href="https://github.com/sohamkhade"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="h-6 w-6 fill-zinc-300 transition hover:fill-teal-500" />
                        </a>

                        {/* LinkedIn */}
                        <a
                            className="group -m-1 p-1 hover:text-teal-500"
                            aria-label="LinkedIn"
                            href="https://www.linkedin.com/in/soham-khade-230855193/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="h-6 w-6 fill-zinc-300 transition hover:fill-teal-500" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
