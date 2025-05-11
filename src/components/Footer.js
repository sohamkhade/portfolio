import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className=" bg-black border-t-1 border-zinc-400 pt-6 pb-6">
            <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                            <Link href="/" className="transition hover:text-teal-500 dark:hover:text-teal-400">
                                Home
                            </Link>
                            <Link href="/about" className="transition hover:text-teal-500 dark:hover:text-teal-400">
                                About
                            </Link>
                            <Link href="/projects" className="transition hover:text-teal-500 dark:hover:text-teal-400">
                                Projects
                            </Link>
                            <Link href="/contact" className="transition hover:text-teal-500 dark:hover:text-teal-400">
                                Contact
                            </Link>
                            <Link href="/uses" className="transition hover:text-teal-500 dark:hover:text-teal-400">
                                Uses
                            </Link>
                        </div>
                        <p className="text-sm text-zinc-400 dark:text-zinc-500">
                            © 2025 Soham Khade. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
