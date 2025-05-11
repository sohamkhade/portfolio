"use client";
import React, { useState } from 'react';
import { ExternalLink, FileText, Brain, Smartphone, Search, Code, Image, Video } from 'lucide-react';

const projects = [
    {
        name: 'Real-Time Fluid Dynamics',
        description: 'Implementation of a real-time fluid dynamics algorithm based on the Navier-Stokes equations using WebGL, also known as the "stable fluids" method.',
        url: 'https://github.com/sohamkhade/CSCI-596-Final-Project',
        icon: <FileText className="h-8 w-8 text-teal-500" />,
    },
    {
        name: 'Stock Trading iOS App',
        description: 'An iOS application for stock trading, built using Swift with features like real-time data, search, and portfolio tracking.',
        url: 'https://drive.google.com/file/d/1n1ecgTWPrvCayvwoFtlbleqDRf7MLgEL/view?usp=sharing',
        icon: <Smartphone className="h-8 w-8 text-teal-500" />,
    },
    {
        name: 'Stock App Frontend',
        description: 'A full-featured frontend for stock trading including buy, sell, and watchlist functionalities.',
        url: 'https://stock-web-app-frontend.vercel.app/search/home',
        icon: <Code className="h-8 w-8 text-teal-500" />,
    },
    {
        name: 'Stock Search (Flask)',
        description: 'Stock search app using Flask providing company details, news, charts, and stock summary.',
        url: 'https://github.com/sohamkhade/stock-search-flask',
        icon: <Search className="h-8 w-8 text-teal-500" />,
    },
    {
        name: 'ParaBERT Paraphrase Identification',
        description: 'Paraphrase identification using Siamese BERT and handcrafted features. A novel approach to understanding semantics more deeply.',
        url: 'https://github.com/sohamkhade/ParaBERT-Paraphrase-Identification-using-Siamese-BERT-and-Hand-Crafted-Features',
        icon: <Code className="h-8 w-8 text-teal-500" />,
    },
    {
        name: 'Transfer Learning Evaluation',
        description: 'Compared the effectiveness of CNN + MLP against transfer learning models like ResNet50, VGG16, and ImageNet-based architectures. Transfer learning models demonstrated superior precision, recall, and F1-scores.',
        url: 'https://github.com/sohamkhade/Machine-Learning-Project',
        icon: <Brain className="h-8 w-8 text-teal-500" />,
    },
    {
        name: 'Image Captioning System',
        description: 'An image captioning model that combines CNNs for feature extraction with LSTM-based sequence modeling to generate descriptive captions for images. Built to enhance image understanding using deep learning.',
        url: 'https://github.com/sohamkhade/Image-Captioning-System',
        icon: <Image className="h-8 w-8 text-teal-500" />,
    },
    {
        name: 'JusTalk',
        description: 'A Firebase-based Android open-source app for integrating chatting capabilities into your application. Users can search for others and get notifications when they chat.',
        url: 'https://github.com/sohamkhade/JusTalk',
        icon: <Video className="h-8 w-8 text-teal-500" />,
    },
];

export default function Projects() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleDescription = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <main className="flex-auto min-h-svh bg-black pt-8 sm:pt-18 pb-12">
            <div className="sm:px-8">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <header className="max-w-2xl">
                                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                                    Things I’ve made trying to put my dent in the universe.
                                </h1>
                                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                                    I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of.
                                    If you see something that piques your interest, check out the code and contribute if you have ideas for
                                    how it can be improved.

                                </p>
                            </header>
                            <div className="mt-16 sm:mt-20">
                                <ul
                                    role="list"
                                    className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                                >
                                    {projects.map((project, index) => {
                                        const isExpanded = expandedIndex === index;
                                        const shortDesc = project.description.slice(0, 60);
                                        const showToggle = project.description.length > 60;

                                        return (
                                            <li
                                                key={project.name}
                                                className="group relative flex flex-col items-start rounded-2xl transition bg-zinc-900 hover:bg-zinc-800 p-4 sm:p-6"
                                            >
                                                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                                    {project.icon}
                                                </div>
                                                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100 relative z-10">
                                                    {project.name}
                                                </h2>
                                                <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                                    {isExpanded ? project.description : shortDesc}
                                                    {showToggle && (
                                                        <button
                                                            onClick={() => toggleDescription(index)}
                                                            className="ml-1 text-teal-500 hover:underline"
                                                        >
                                                            {isExpanded ? 'Show less' : '... Show more'}
                                                        </button>
                                                    )}
                                                </p>
                                                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                                                    <ExternalLink className="h-6 w-6 flex-none" />
                                                    <a
                                                        href={project.url}
                                                        className="ml-2 text-teal-500 hover:text-teal-700 dark:text-teal-300 dark:hover:text-teal-500"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Link to project
                                                    </a>
                                                </p>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
