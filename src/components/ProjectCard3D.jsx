import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";

/**
 * ProjectCard3D Component
 * 
 * A visually engaging card with 3D tilt effects on hover.
 * Displays project image, title, description, and tags.
 */
const ProjectCard3D = ({ project, onClick, t }) => {
    const ref = useRef(null);

    // Mouse position state for tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation for tilt
    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    // Calculate rotation based on mouse position relative to card center
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        // Calculate normalized mouse position (-0.5 to 0.5)
        const width = rect.width;
        const height = rect.height;

        const mouseXVal = (e.clientX - rect.left) / width - 0.5;
        const mouseYVal = (e.clientY - rect.top) / height - 0.5;

        x.set(mouseXVal);
        y.set(mouseYVal);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            style={{
                perspective: 1000,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full h-full"
            onClick={onClick}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative h-full bg-white dark:bg-[#121212] border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
            >
                {/* Image Container */}
                <div className="h-48 md:h-56 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        style={{ translateZ: "50px" }} // Parallax effect
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                    />

                    {/* Floating Tech Badges */}
                    <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2" style={{ transform: "translateZ(60px)" }}>
                        {project.technologies.slice(0, 3).map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 text-xs font-medium bg-black/50 backdrop-blur-sm text-white rounded-md border border-white/20"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 3 && (
                            <span className="px-2 py-1 text-xs font-medium bg-black/50 backdrop-blur-sm text-white rounded-md border border-white/20">
                                +{project.technologies.length - 3}
                            </span>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-20 bg-white dark:bg-[#121212]">
                    <div style={{ transform: "translateZ(30px)" }}>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
                            {project.description}
                        </p>

                        <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-semibold group-hover:underline">
                            {t ? t('projects.viewDetails') : 'View Details'} <ChevronRight className="w-4 h-4 ml-1" />
                        </div>
                    </div>
                </div>

                {/* Shine Effect */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 80%)`,
                        transform: "translateZ(1px)"
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard3D;
