"use client";
import React, { useState, useEffect } from 'react';

const Timer = () => {
    return <p className="text-lg text-gray-700">
        Try it live:{' '}
        <a
            href="https://timer-ten-coral.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 transition-colors"
        >
            Timer App
        </a>
    </p>
};

export default Timer;
