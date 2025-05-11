'use client';
import React from "react";
import {useState} from "react";

const items = {
    workstation: [
        {
            title: "13” MacBook Pro, Intel i5, 16GB RAM (2020)",
            description:
                "My main machine for everything from React development to CUDA simulations. Handles anything I throw at it—smooth and silent.",
        },
        {
            title: "Dell Inspiron Laptop, Intel i7, 16GB RAM",
            description:
                "Secondary development machine, ideal for Android Studio, Docker containers, and parallel computation tasks.",
        },
        {
            title: "Dell UltraSharp 27” 4K Monitor",
            description:
                "Crisp visuals and accurate colors—perfect for both design work and long coding sessions.",
        },
        {
            title: "Apple iPad Air (with Pencil Support)",
            description:
                "For sketching ideas, testing mobile UIs, sidecar with MacBook, and occasional Swift Playgrounds experimentation.",
        },
        {
            title: "Keychron K6 Mechanical Keyboard",
            description:
                "Tactile, compact, and wireless. It’s a joy to type on and doesn’t hog my desk space.",
        },
        {
            title: "Mac Wireless Keyboard",
            description:
                "Clean and minimal; a reliable companion when I want a quieter typing experience.",
        },
        {
            title: "Logitech MX Master 3S",
            description:
                "Super comfortable with great gesture support. My go-to for long hours of coding and browsing.",
        },
        {
            title: "Logitech M720 Triathlon Mouse",
            description:
                "Multi-device pairing, long battery life, and ergonomic design. Great backup with versatile connectivity.",
        },
        {
            title: "USB-C Hub and USB Extensions",
            description:
                "Essential for connecting multiple devices—external drives, HDMI, keyboards, and SD cards during dev and testing sessions.",
        },
        {
            title: "Herman Miller Sayl Chair",
            description:
                "Ergonomic and stylish. Supports me through all-nighters without destroying my back.",
        },
    ],
    devTools: [
        {
            title: "Visual Studio Code",
            description:
                "Lightweight yet powerful. With all my extensions, it feels like a full IDE tailored for web and data work.",
        },
        {
            title: "iTerm2",
            description:
                "Better than the native Terminal. I pair it with Zsh and oh-my-zsh for a powerful CLI environment.",
        },
        {
            title: "Postman",
            description:
                "My go-to tool for testing APIs. Essential when working with backends and microservices.",
        },
        {
            title: "Docker",
            description:
                "Containerized dev environments make life easier. I use it for backend services and ML environments.",
        },
        {
            title: "Xcode",
            description:
                "The cornerstone of iOS development. I use it with Swift, Interface Builder, Instruments, and Simulator for testing.",
        },
        {
            title: "TestFlight",
            description:
                "For distributing iOS beta apps and getting feedback before App Store release.",
        },
        {
            title: "Android Studio",
            description:
                "My primary IDE for Android development, packed with powerful tools and an emulator for testing.",
        },
        {
            title: "ADB & Emulator",
            description:
                "Core tools for deploying and debugging Android apps on virtual and real devices.",
        },
        {
            title: "Firebase SDK",
            description:
                "Adds backend power like auth, analytics, and push notifications to mobile and web apps.",
        },
        {
            title: "Chrome DevTools",
            description:
                "Indispensable for inspecting, debugging, and optimizing web frontends.",
        },
        {
            title: "Node.js & React",
            description:
                "Full-stack web development made smooth and scalable. My go-to combo for dynamic apps.",
        },
        {
            title: "Tailwind CSS",
            description:
                "A utility-first CSS framework that makes UI styling fast, responsive, and maintainable.",
        },
        {
            title: "Jupyter Notebook",
            description:
                "An interactive environment for ML experiments, data analysis, and documentation.",
        },
        {
            title: "Python & Libraries",
            description:
                "I use Python extensively with libraries like scikit-learn, PyTorch, TensorFlow, OpenCV, and NumPy for ML/AI work.",
        },
        {
            title: "CUDA",
            description:
                "For accelerating deep learning and high-performance computing tasks on NVIDIA GPUs.",
        },
        {
            title: "IntelliJ IDEA",
            description:
                "A powerful IDE for Java and Kotlin development. Great for Spring Boot and enterprise-grade applications.",
        },
        {
            title: "PyCharm",
            description:
                "An excellent Python IDE tailored for professional development in AI, data science, and web frameworks like Django and Flask.",
        },
        {
            title: "Git & GitHub",
            description:
                "Version control and collaboration essentials. My workflow backbone for every project.",
        },
        {
            title: "Homebrew",
            description:
                "The best package manager for macOS. Keeps my dev environment flexible and up to date.",
        },
        {
            title: "Slack & Zoom",
            description:
                "Remote collaboration staples for standups, pair programming, and quick syncs.",
        },
        {
            title: "Notion",
            description:
                "A second brain for organizing project plans, notes, and task tracking.",
        }
    ],
    design: [
        {
            title: "Figma",
            description:
                "Clean, collaborative, and great for designing quick UI mockups or full product designs.",
        },
        {
            title: "draw.io (diagrams.net)",
            description:
                "Versatile and easy-to-use tool for flowcharts, architecture diagrams, and system design planning.",
        },
        {
            title: "Freeplane",
            description:
                "Mind-mapping tool that helps structure ideas, requirements, and planning visually and logically.",
        },
        {
            title: "Lucidchart",
            description:
                "Professional diagramming software for creating ER diagrams, process flows, network maps, and more—great for collaboration.",
        },
        {
            title: "Excalidraw",
            description:
                "Sketch-style diagramming tool that feels like drawing on a whiteboard. Fast and great for quick ideation.",
        },
        {
            title: "Canva",
            description:
                "For creating visually polished assets like presentations, thumbnails, and social media content. Easy and powerful.",
        },
        {
            title: "Penpot",
            description:
                "Open-source design and prototyping platform—ideal for teams that value design freedom and self-hosting.",
        },
    ],
    productivity: [
        {
            title: "Notion",
            description:
                "My second brain—used for organizing project notes, job search tracking, and academic research.",
        },
        {
            title: "Google Calendar + Calendly",
            description:
                "I schedule all meetings through Calendly to preserve deep work time and avoid back-and-forths.",
        },
        {
            title: "Forest App",
            description:
                "Helps me stay focused using Pomodoro with a fun visual twist. Great for staying off my phone.",
        },
        {
            title: "Todoist",
            description:
                "Simple yet powerful task manager. I use it to break down large goals into actionable daily tasks.",
        },
        {
            title: "Trello",
            description:
                "Kanban-style project management tool. Helps me visualize workflows, track progress, and prioritize effectively.",
        },
        {
            title: "Obsidian",
            description:
                "Markdown-based note-taking app with bidirectional linking. I use it for deep work notes and knowledge retention.",
        },
        {
            title: "Alfred",
            description:
                "Productivity launcher for macOS. Fast searching, clipboard history, and custom workflows make it a must-have.",
        },
        {
            title: "Clockify",
            description:
                "Time tracking tool I use to analyze how I'm spending time across tasks and projects.",
        },
        {
            title: "ClickUp",
            description:
                "All-in-one productivity platform that combines docs, tasks, goals, and dashboards. Ideal for managing personal and team workflows.",
        },
        {
            title: "Asana",
            description:
                "Work management tool that helps me plan sprints, set priorities, and collaborate across larger team efforts.",
        },
        {
            title: "Focus To-Do",
            description:
                "Combines task management with Pomodoro technique. Helps me batch work into sprints and take timely breaks.",
        },
    ]


};

const Section = ({ title, items }) => {
    const [showAll, setShowAll] = useState(false);

    const handleShowMore = () => {
        setShowAll(!showAll);
    };

    const displayedItems = showAll ? items : items.slice(0, 3);

    return (
        <section className="md:border-l md:border-stone-50 md:pl-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-6">
                    {title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedItems.map(({ title, description }) => (
                        <div
                            key={title}
                            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                            <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                                {title}
                            </h3>
                            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
                {items.length > 3 && (
                    <button
                        onClick={handleShowMore}
                        className="mt-4 text-sm font-semibold text-teal-500 hover:text-teal-400 hover:scale-105"
                    >
                        {showAll ? "Show Less" : "Show More"}
                    </button>
                )}
            </div>
        </section>
    );
};


const UsesPage = () => {
    return (
        <div className="bg-black flex flex-col mx-auto px-4 sm:px-0 md:px-8 pb-8">
            <header className=" flex flex-col mx-auto max-w-2xl">
                <h1 className="mt-8 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                    Software I use, gadgets I love, and other things I recommend.
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    People often ask me what I use for development, productivity, or even
                    just day-to-day work. Here’s my full gear and software setup.
                </p>
            </header>
            <div className="mx-auto mt-16 sm:mt-20 space-y-20">
                <Section title="Workstation" items={items.workstation} />
                <Section title="Development Tools" items={items.devTools} />
                <Section title="Design" items={items.design} />
                <Section title="Productivity" items={items.productivity} />
            </div>
        </div>
    );
};

export default UsesPage;
