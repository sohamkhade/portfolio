import React from 'react';
import Timer from '@/components/apps/Timer';

const AppsPage = () => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md w-full">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Timer App</h1>

                {/* App Preview Section */}
                <div className="mb-6">
                    <img
                        src="/images/timer-preview.png"
                        alt="Timer App Preview"
                        className="w-full h-64 object-cover rounded-lg mb-4 shadow-md"
                    />
                    <p className="text-gray-600 text-sm">
                        A simple and elegant timer web app. Track time with ease using a minimal UI.
                    </p>
                </div>

                {/* Live App Link */}
                <Timer />
            </div>
        </div>
    );
};

export default AppsPage;
