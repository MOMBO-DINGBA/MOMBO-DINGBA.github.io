import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const TypewriterEffect = ({ words, className }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const word = words[currentWordIndex];
        const typeSpeed = isDeleting ? 50 : 100;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setCurrentText(word.substring(0, currentText.length + 1));
                if (currentText.length === word.length) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                setCurrentText(word.substring(0, currentText.length - 1));
                if (currentText.length === 0) {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, words]);

    return (
        <span className={className}>
            {currentText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 h-[1em] bg-blue-500 ml-1 align-middle"
            />
        </span>
    );
};
