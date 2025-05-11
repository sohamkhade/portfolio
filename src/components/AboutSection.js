import React from "react";
import {  Github, Linkedin, Mail} from "lucide-react";

const AboutSection = () => {
    return (
        <section className="px-4 sm:px-8 lg:px-12 py-12 bg-dark">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div className="lg:pl-20 mx-auto md:mx-0">
                        <div className="max-w-xs px-2.5 lg:max-w-none">
                            <img
                                alt=""
                                loading="lazy"
                                width="500"
                                height="500"
                                decoding="async"
                                data-nimg="1"
                                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 scale-100 object-center"
                                sizes="(min-width: 1024px) 32rem, 20rem"
                                src="/aboutMe.png"
                                style={{color: "transparent"}}
                            />
                        </div>
                    </div>
                    <div className="lg:order-first lg:row-span-2">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                            I’m Soham Khade.<br/> I live in California, where I build software that solves real-world
                            problems.
                        </h1>

                        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                            <p>
                                I’ve loved building and experimenting with technology for as long as I can remember. I
                                wrote my first program when I was a kid, driven by curiosity and the thrill of making
                                something work from scratch. That early spark eventually turned into a passion for
                                software development — one that still drives me today.
                            </p>

                            <p>
                                The only thing I loved more than coding as a teenager was football. I remember leading
                                my college team onto the field at a state-level tournament, heart racing, knowing that
                                strategy, coordination, and grit would decide the outcome — just like in software. That
                                same energy and leadership now fuel how I approach solving real-world problems through
                                code.
                            </p>

                            <p>
                                I spent the next few semesters deep-diving into building scalable full-stack
                                applications, often staying up late debugging stubborn edge cases or optimizing database
                                queries. By the time I completed my internship at Persistent Systems, I had iterated
                                through several production-ready features — one of which significantly improved response
                                times across the internal tool I worked on.
                            </p>

                            <p>
                                Today, I’m a software engineer passionate about crafting intelligent systems — from
                                developing anomaly detection models in the stock market to designing intuitive
                                full-stack experiences. I'm driven by the idea that well-built software can empower the
                                next generation to think critically, move faster, and build boldly — from classrooms,
                                startups, or even their dorm rooms.
                            </p>

                        </div>
                    </div>
                    <div className="lg:pl-20">
                        <ul role="list">
                            <li className="mt-4 flex">
                                <a
                                    className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                                    href="https://github.com/sohamkhade"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github className="h-6 w-6 flex-none text-zinc-500 transition group-hover:text-teal-500" />
                                    <span className="ml-4">Follow on GitHub</span>
                                </a>
                            </li>
                            <li className="mt-4 flex">
                                <a
                                    className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                                    href="https://www.linkedin.com/in/soham-khade-230855193/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin className="h-6 w-6 flex-none text-zinc-500 transition group-hover:text-teal-500" />
                                    <span className="ml-4">Connect on LinkedIn</span>
                                </a>
                            </li>
                        </ul>

                        {/* Divider */}
                        <div className="my-6 border-t border-zinc-200 dark:border-zinc-700" />

                        {/* Email Link */}
                        <a
                            className="group mt-4 flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                            href="mailto:sohambkhade@gmail.com"
                        >
                            <Mail className="h-6 w-6 flex-none text-zinc-500 transition group-hover:text-teal-500" />
                            <span className="ml-4">sohambkhade@gmail.com</span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
