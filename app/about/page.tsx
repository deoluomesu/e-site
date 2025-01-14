"use client";
import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
    return (
        <div className="flex flex-col mx-auto items-center p-4">
            <div className="flex space-x-4 mb-8">
                <div className="flex flex-col items-center">
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="text-6xl p-4}"
                    >
                        😃
                    </motion.div>
                    <p className="mt-2 text-xl text-center"><strong>Developer 1:</strong> A passionate coder with a love for creating innovative solutions.</p>
                </div>
                <div className="flex flex-col items-center">
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="text-6xl p-4}"
                    >
                        😎
                    </motion.div>
                    <p className="mt-2 text-xl text-center"><strong>Developer 2:</strong> A tech enthusiast who enjoys tackling challenging problems and learning new technologies.</p>
                </div>
            </div>
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">About This Site</h1>
                <p className="mb-8">This site is a platform to showcase our amazing projects and share our journey in the world of development.</p>
            </div>
        </div>
    );
};

export default AboutPage;