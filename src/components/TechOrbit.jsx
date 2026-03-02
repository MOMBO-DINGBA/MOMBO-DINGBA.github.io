import React, { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * TechOrbit Component
 * 
 * A rotating 3D-like sphere of technology names.
 * Uses CSS 3D transforms for high performance without Three.js.
 */
const TechOrbit = ({ skills }) => {
    const containerRef = useRef(null);

    // Calculate 3D positions for a sphere
    const sphereSkills = useMemo(() => {
        const radius = 250;
        return skills.map((skill, i) => {
            const phi = Math.acos(-1 + (2 * i) / skills.length);
            const theta = Math.sqrt(skills.length * Math.PI) * phi;

            return {
                name: skill,
                x: radius * Math.cos(theta) * Math.sin(phi),
                y: radius * Math.sin(theta) * Math.sin(phi),
                z: radius * Math.cos(phi),
            };
        });
    }, [skills]);

    return (
        <div className="relative h-[600px] w-full flex items-center justify-center overflow-hidden perspective-1000">
            <motion.div
                animate={{
                    rotateY: 360,
                    rotateX: [0, 10, -10, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="relative w-1 h-1 preserve-3d"
            >
                {sphereSkills.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        className="absolute whitespace-nowrap px-4 py-2 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 rounded-full text-sm font-bold text-blue-600 dark:text-blue-400 shadow-xl cursor-default pointer-events-auto hover:bg-blue-600 hover:text-white transition-colors duration-300"
                        style={{
                            x: skill.x,
                            y: skill.y,
                            z: skill.z,
                        }}
                        whileHover={{ scale: 1.2, z: skill.z + 50 }}
                    >
                        {skill.name}
                    </motion.div>
                ))}

                {/* Center Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
            </motion.div>

            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .preserve-3d {
                    transform-style: preserve-3d;
                }
            `}</style>
        </div>
    );
};

export default TechOrbit;
