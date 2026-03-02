import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

/**
 * CustomCursor Component
 * 
 * A dual-layer cursor following the mouse with smooth spring physics.
 * Reacts to interactive elements (hover state).
 */
const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [cursorType, setCursorType] = useState('default'); // 'default', 'pointer', 'text'

    // Main cursor position
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring for the outer ring
    const springConfig = { damping: 25, stiffness: 200 };
    const ringX = useSpring(cursorX, springConfig);
    const ringY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable = target.closest('button, a, .cursor-pointer, input, textarea');
            setIsHovering(!!isClickable);

            if (target.closest('input, textarea')) {
                setCursorType('text');
            } else if (isClickable) {
                setCursorType('pointer');
            } else {
                setCursorType('default');
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-blue-600 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 border-2 border-blue-500 rounded-full pointer-events-none z-[9998]"
                animate={{
                    width: isHovering ? 60 : 32,
                    height: isHovering ? 60 : 32,
                    backgroundColor: isHovering ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0)',
                    borderColor: cursorType === 'text' ? 'rgba(59, 130, 246, 0.5)' : 'rgba(59, 130, 246, 1)',
                }}
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            <style jsx global>{`
                @media (pointer: fine) {
                    body, a, button, .cursor-pointer {
                        cursor: none !important;
                    }
                }
            `}</style>
        </>
    );
};

export default CustomCursor;
