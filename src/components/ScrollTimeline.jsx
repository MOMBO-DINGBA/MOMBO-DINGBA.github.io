import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * ScrollTimeline Component
 * 
 * A vertical timeline that animates as the user scrolls.
 * Features a glowing central beam and items that slide in.
 */
const ScrollTimeline = ({ experiences, t }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div ref={ref} className="relative container mx-auto px-6 py-20">
            {/* Central Beam */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-white/10 -translate-x-1/2">
                <motion.div
                    style={{ scaleY, transformOrigin: "top" }}
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"
                />
            </div>

            <div className="space-y-24">
                {experiences.map((exp, idx) => (
                    <TimelineItem key={idx} data={exp} index={idx} />
                ))}
            </div>
        </div>
    );
};

const TimelineItem = ({ data, index }) => {
    const ref = useRef(null);
    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Spacer */}
            <div className="hidden md:block w-5/12" />

            {/* Central Node */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 z-10 flex items-center justify-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
                <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-ping" />
            </div>

            {/* Content Card */}
            <div className="w-full md:w-5/12 pl-20 md:pl-0">
                <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-[#121212] border border-gray-100 dark:border-white/10 p-6 rounded-2xl shadow-lg relative group overflow-hidden"
                >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                        <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
                            {data.period}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {data.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-4 text-gray-500 dark:text-gray-400 text-sm">
                            {data.logo ? (
                                <img src={data.logo} alt={data.organization} className="w-5 h-5 rounded-full object-cover" />
                            ) : (
                                <span>🏢</span>
                            )}
                            {data.organization}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                            {data.description}
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ScrollTimeline;
