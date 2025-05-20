'use client';
import { usePathname, useRouter } from "next/navigation";
import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const handleClick = () => {
        router.push('/');
    };

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
        { href: "/uses", label: "Uses" },
    ];

    return (
        <nav className="bg-black text-white py-4 px-6 shadow-md relative z-50">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
                {/* Profile Icon */}
                <div className="flex items-center space-x-2 cursor-pointer" onClick={handleClick}>
                    <img
                        src="/profilePic.jpeg"
                        alt="Profile"
                        className={`w-14 h-14 rounded-full transform scale-x-[-1] transition-all duration-300 ${
                            pathname === "/" ? "ring-2 ring-offset-4 ring-offset-black ring-teal-500" : ""
                        }`}
                    />
                </div>


                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6 bg-neutral-900 px-6 py-3 rounded-full mx-auto shadow-sm">
                    {navLinks.map(({href, label}) => (
                        <a
                            key={href}
                            href={href}
                            className={`transition-colors duration-200 ${
                                pathname === href
                                    ? "text-teal-500"
                                    : "text-white hover:text-teal-500"
                            }`}
                        >
                            {label}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center space-x-4 md:hidden ml-auto">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="bg-neutral-900 px-4 py-2 rounded-full text-white flex items-center space-x-2"
                    >
                        <span>Menu</span>
                        <ChevronDown size={20}/>
                    </button>
                </div>
            </div>

            {/* Mobile Overlay & Dropdown */}
            {menuOpen && (
                <>
                    <div
                        onClick={() => setMenuOpen(false)}
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    ></div>

                    <div
                        className="md:hidden absolute top-0 left-0 w-full bg-neutral-900 text-white rounded-b-lg shadow-md p-6 space-y-4 z-50">
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-xl font-bold" onClick={handleClick} >Navigation</p>
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="text-white"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {navLinks.map(({ href, label }) => (
                            <a
                                key={href}
                                href={href}
                                className={`block transition-colors duration-200 ${
                                    pathname === href
                                        ? "text-teal-500"
                                        : "text-white hover:text-teal-500"
                                }`}
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
