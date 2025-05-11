'use client';

import React, { useState } from 'react';
import { FaDownload, FaFilePdf, FaFileWord, FaFileAlt } from 'react-icons/fa'; // Import the necessary icons

const FloatingButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDownload = (fileUrl, fileName) => {
        const a = document.createElement('a');
        a.href = fileUrl;
        a.download = fileName;
        a.click();
    };

    const resumeUrl = './fullstack.pdf';

    return (
        <div className="fixed right-8 bottom-8 transform -translate-y-1/2">
            {/* Main Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-teal-500 text-white p-4 rounded-full shadow-lg hover:bg-teal-600 transition duration-300 ease-in-out"
            >
                <FaDownload className="text-xl" />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="mt-4 bg-white rounded-md shadow-lg z-50 absolute bottom-full right-0 mb-2">
                    <button
                        onClick={() =>
                            handleDownload(resumeUrl, 'Resume.pdf')
                        }
                        className="w-full text-left py-2 px-4 text-teal-500 hover:bg-teal-100 transition duration-200 flex items-center gap-2"
                    >
                        <FaFilePdf className="text-red-500" /> PDF
                    </button>
                </div>
            )}
        </div>
    );
};

export default FloatingButton;
