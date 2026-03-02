import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, X, ChevronDown, Code2, Brain, Server, Cpu, Globe, Moon, Sun, Languages } from 'lucide-react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

// Images
import logoEnspy from './assets/images/logo_enspy.jpg';
import logoStanford from './assets/images/stanford_logo.png';
import logoNgaoundere from './assets/images/Univ_Ndere_logo.jpg';
import profilMombo from './assets/images/mombo_profil.png';
import Mombo from './assets/images/Mombo.jpg'
import NeuralNetwork from './components/NeuralNetwork';
import ProjectCard3D from './components/ProjectCard3D';
import ScrollTimeline from './components/ScrollTimeline';
import TechOrbit from './components/TechOrbit';

// Lazy load heavy background components
const MatrixRain = React.lazy(() => import('./components/MatrixRain'));
const CyberField = React.lazy(() => import('./components/CyberField'));


// Components
const TypewriterEffect = ({ words, className }) => {
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

// Navigation
const Navigation = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-pure-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10' : 'bg-transparent border-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Mombo-Dingba Emmanuel
                    </h1>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex gap-6">
                            {['about', 'projects', 'skills', 'timeline', 'contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors font-medium text-sm uppercase tracking-wide relative group"
                                >
                                    {t(`nav.${item}`)}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-3 border-l border-gray-300 dark:border-white/20 pl-6">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                            >
                                {theme === 'dark' ? (
                                    <Moon size={20} className="text-blue-400" />
                                ) : (
                                    <Sun size={20} className="text-yellow-500" />
                                )}
                            </button>

                            <button
                                onClick={toggleLanguage}
                                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-all border border-gray-200 dark:border-white/10"
                            >
                                <Languages size={16} className="text-gray-700 dark:text-white" />
                                <span className="text-sm font-semibold text-gray-900 dark:text-white uppercase">{language}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

// Hero Section
const Hero = () => {
    const { t } = useLanguage();
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    const roles = [
        t('hero.role1'),
        t('hero.role2'),
        t('hero.role3')
    ];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden bg-gray-50 dark:bg-pure-black transition-colors duration-300"
        >
            {/* Background Component */}
            <NeuralNetwork />

            <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/80 to-purple-50/80 dark:hidden"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-pure-black/60 via-pure-black/70 to-pure-black hidden dark:block"></div>
            </motion.div>

            <motion.div style={{ y: y2 }} className="max-w-4xl w-full text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mb-8 relative"
                >
                    <div className="absolute inset-0 w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 blur-xl opacity-40 dark:opacity-60 animate-pulse"></div>
                    <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white/50 dark:border-white/20 shadow-2xl">
                        <img
                            src={profilMombo}
                            alt="MOMBO DINGBA Emmanuel"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop";
                            }}
                        />
                    </div>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
                    MOMBO DINGBA Emmanuel
                </h1>

                <div className="h-12 mb-12">
                    <TypewriterEffect
                        words={roles}
                        className="text-2xl md:text-3xl font-light text-gray-700 dark:text-blue-200"
                    />
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToAbout}
                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-full overflow-hidden shadow-xl shadow-blue-600/20"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        {t('hero.cta')} <ChevronDown className="animate-bounce" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </motion.button>
            </motion.div>
        </motion.section>
    );
};

// Company Logos (Auto-scroll Marquee)
const CompanyLogos = () => {
    const companies = [
        { name: 'ENSPY', logo: '🎓' },
        { name: 'Python', logo: '🐍' },
        { name: 'React', logo: '⚛️' },
        { name: 'Docker', logo: '🐳' },
        { name: 'Kubernetes', logo: '☸️' },
        { name: 'TensorFlow', logo: '🧠' },
        { name: 'FastAPI', logo: '⚡' },
        { name: 'Kafka', logo: '📊' }
    ];

    return (
        <div className="py-12 bg-gray-100 dark:bg-pure-black border-y border-gray-200 dark:border-white/10 overflow-hidden relative transition-colors duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-transparent to-gray-100 dark:from-pure-black dark:to-pure-black z-10 pointer-events-none"></div>
            <div className="flex animate-marquee whitespace-nowrap gap-16 items-center hover:[animation-play-state:paused]">
                {[...companies, ...companies, ...companies].map((company, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-3 group cursor-pointer transition-transform hover:scale-110">
                        <span className="text-5xl filter grayscale group-hover:grayscale-0 transition-all duration-300 drop-shadow-lg">
                            {company.logo}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-white/40 font-mono group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors uppercase tracking-widest font-bold">
                            {company.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// About Section
const About = () => {
    const { t } = useLanguage();

    return (
        <motion.section
            id="about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="min-h-screen flex items-center px-6 py-32 bg-white dark:bg-pure-black transition-colors duration-300 relative"
        >
            <div className="absolute right-0 top-20 w-1/3 h-1/3 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10 ">
                <motion.h2
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="text-5xl font-bold mb-16 text-gray-900 dark:text-white border-l-8 border-blue-600 pl-6"
                >
                    {t('about.title')}
                </motion.h2>

                <div className="grid md:grid-cols-[350px,1fr] gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, rotate: -5 }}
                        whileInView={{ opacity: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full relative group"
                    >
                        <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-20"></div>
                        <div className="relative rounded-2xl overflow-hidden border-4 border-gray-200 dark:border-white/10 shadow-2xl">
                            <img
                                src= {Mombo}
                                alt="MOMBO DINGBA Emmanuel"
                                className="w-full h-auto object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop";
                                }}
                            />
                        </div>
                    </motion.div>

                    <div className="space-y-8 text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>{t('about.p1')}</motion.p>
                        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>{t('about.p2')}</motion.p>
                        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="p-6 bg-blue-50 dark:bg-white/5 border-l-4 border-blue-500 rounded-r-xl italic">
                            "{t('about.p3')}"
                        </motion.p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

// Spotlight Card Component (inline for simplicity or import)
const SpotlightCard = ({ children, className = "" }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className={`relative overflow-hidden ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
                }}
            />
            {children}
        </div>
    );
};

// Project Modal (Case Study style)
const ProjectModal = ({ project, onClose }) => {
    const { t } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 50 }}
                className="bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col transition-colors duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header Image */}
                <div className="relative h-64 md:h-96 shrink-0">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map(tech => (
                                <span key={tech} className="px-3 py-1 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 text-blue-400 text-xs font-bold rounded-full uppercase tracking-tighter">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-4xl md:text-6xl font-black text-white leading-none whitespace-pre-line">
                            {project.title}
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-3 bg-black/40 hover:bg-white/10 rounded-full text-white transition-all hover:rotate-90"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-8 md:p-12">
                    <div className="grid md:grid-cols-[2fr,1fr] gap-12">
                        <div className="space-y-10">
                            <section>
                                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-blue-600 mb-4">{t('projects.caseStudy.overview') || 'Aperçu du Projet'}</h4>
                                <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 font-light italic">
                                    {project.fullDesc}
                                </p>
                            </section>

                            <section className="grid md:grid-cols-2 gap-8">
                                <div className="p-6 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10">
                                    <h5 className="font-bold text-gray-900 dark:text-white mb-2">Challenge</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        Conception d'une architecture capable de gérer des flux de données complexes avec une latence minimale tout en assurant une haute disponibilité.
                                    </p>
                                </div>
                                <div className="p-6 bg-blue-600/5 rounded-2xl border border-blue-600/20">
                                    <h5 className="font-bold text-blue-600 dark:text-blue-400 mb-2">Solution</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        Mise en œuvre de patterns asynchrones et de caching distribué pour optimiser les performances de bout en bout.
                                    </p>
                                </div>
                            </section>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-purple-600 mb-4">{t('projects.techDetails') || 'Détails Techniques'}</h4>
                                <ul className="space-y-4">
                                    {project.details && project.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-gray-600 dark:text-gray-400 text-sm">
                                            <div className="mt-1 w-2 h-2 rounded-full bg-purple-500 shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-8 border-t border-gray-100 dark:border-white/10">
                                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black rounded-xl shadow-lg shadow-blue-600/20 hover:scale-[1.02] transition-transform">
                                    {t('projects.viewDemo') || 'VOIR LA DÉMO LIVE'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// Projects Grid
const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const { t } = useLanguage();

    // Reconstruct projects array from translation keys
    const projects = [
        {
            title: t('projects.p1.title') === 'projects.p1.title' ? "Distributed AI System" : t('projects.p1.title'),
            description: t('projects.p1.desc') === 'projects.p1.desc' ? "High scale event processing" : t('projects.p1.desc'),
            fullDesc: t('projects.p1.fullDesc'),
            technologies: ['FastAPI', 'Kafka', 'Redis', 'LangGraph', 'Pydantic'],
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
            details: ["Event driven architecture", "Sub-millisecond latency", "Horizontal scaling"]
        },
        {
            title: t('projects.p2.title') === 'projects.p2.title' ? "Real-time Chat" : t('projects.p2.title'),
            description: t('projects.p2.desc'),
            fullDesc: t('projects.p2.fullDesc'),
            technologies: ['WebRTC', 'WebSocket', 'React', 'Node.js'],
            image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=400&fit=crop',
            details: ["P2P Video Streaming", "Socket.io clustering", "Encryption at rest"]
        }
    ];

    return (
        <>
            <section
                id="projects"
                className="px-6 py-32 relative bg-gray-50 dark:bg-pure-black transition-colors duration-300"
            >
                <div className="absolute left-0 top-1/4 w-1/2 h-1/2 bg-purple-500/5 blur-[150px] pointer-events-none"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent inline-block">
                            {t('projects.title')}
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-white/60 max-w-2xl mx-auto">{t('projects.subtitle')}</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {projects.map((project, idx) => (
                            <div key={idx} className="h-[400px]">
                                <ProjectCard3D
                                    project={project}
                                    t={t}
                                    onClick={() => setSelectedProject(project)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>
        </>
    );
};

// Skills Section
const Skills = () => {
    const { t } = useLanguage();

    const allSkills = [
        'Python', 'FastAPI', 'Node.js', 'React', 'TypeScript', 'JavaScript',
        'LangGraph', 'LangChain', 'Pydantic', 'OpenAI API', 'Hugging Face',
        'Docker', 'Kubernetes', 'Kafka', 'Redis', 'PostgreSQL', 'MongoDB',
        'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'
    ];

    return (
        <section
            id="skills"
            className="px-6 py-32 relative overflow-hidden bg-white dark:bg-pure-black transition-colors duration-300"
        >
            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                    {t('skills.title')}
                </h2>

                <div className="flex flex-col items-center">
                    <TechOrbit skills={allSkills} />

                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
                        {['core', 'ai', 'infra', 'ml'].map((cat) => (
                            <div key={cat} className="text-center p-6 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-widest text-blue-600">
                                    {t(`skills.categories.${cat}`)}
                                </h3>
                                <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Timeline
const Timeline = () => {
    const { t } = useLanguage();
    // Simplified for updating loop
    const experiences = [
        {
            period: '2021-2026',
            title: t('timeline.exp1.title'),
            organization: t('timeline.exp1.org'),
            location: 'Yaoundé, Cameroun',
            description: t('timeline.exp1.desc'),
            logo: logoEnspy,
            logoFallback: '🎓'
        },
        {
            period: '2025',
            title: t('timeline.exp2.title'),
            organization: t('timeline.exp2.org'),
            description: t('timeline.exp2.desc'),
            logo: logoEnspy, // Assuming the internship was also associated or used generic logic
            logoFallback: '💼'
        },
        // ... (truncated for brevity, would include all)
        {
            period: '2024',
            title: t('timeline.exp3.title'),
            organization: t('timeline.exp3.org'),
            description: t('timeline.exp3.desc'),
            logo: logoStanford,
            logoFallback: '📜'
        },
        {
            period: '2019-2021',
            title: t('timeline.exp4.title'),
            organization: t('timeline.exp4.org'),
            location: 'Ngaoundéré, Cameroun',
            description: t('timeline.exp4.desc'),
            logo: logoNgaoundere,
            logoFallback: '🎓'
        }
    ];

    return (
        <section
            id="timeline"
            className="relative bg-gray-50 dark:bg-[#050505] transition-colors duration-300"
        >
            <div className="py-20 text-center">
                <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-gray-900 dark:text-white">{t('timeline.title')}</h2>
            </div>

            <ScrollTimeline experiences={experiences} t={t} />
        </section>
    );
};

// Additional Activities
const AdditionalActivities = () => {
    const { t } = useLanguage();

    return (
        <motion.section
            className="py-32 relative overflow-hidden bg-gray-50 dark:bg-pure-black transition-colors duration-300"
        >
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900 dark:text-white">
                    {t('activities.title')}
                </h2>

                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { title: t('activities.items.formations.title'), desc: t('activities.items.formations.desc'), icon: '📚', color: 'bg-blue-500' },
                        { title: t('activities.items.opensource.title'), desc: t('activities.items.opensource.desc'), icon: '🌐', color: 'bg-purple-500' },
                        { title: t('activities.items.mentorat.title'), desc: t('activities.items.mentorat.desc'), icon: '👨‍🏫', color: 'bg-indigo-500' },
                        { title: t('activities.items.veille.title'), desc: t('activities.items.veille.desc'), icon: '🔍', color: 'bg-pink-500' }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 p-6 rounded-2xl shadow-lg relative overflow-hidden group"
                        >
                            <div className={`absolute top-0 right-0 w-24 h-24 ${item.color} opacity-10 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-110`}></div>
                            <div className="text-4xl mb-4 relative z-10">{item.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

// Contact
const Contact = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-white dark:bg-black py-20 border-t border-gray-200 dark:border-white/10 transition-colors duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">{t('contact.title')}</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">{t('contact.subtitle')}</p>

                <div className="flex justify-center gap-6 mb-16">
                    <a href="https://github.com/MOMBO-DINGBA" className="p-4 bg-gray-100 dark:bg-white/10 rounded-full hover:bg-gray-200 dark:hover:bg-white/20 transition-colors text-gray-900 dark:text-white">
                        <Github size={24} />
                    </a>
                    <a href="https://linkedin.com" className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-blue-600 dark:text-blue-400">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:contact@example.com" className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors text-purple-600 dark:text-purple-400">
                        <Mail size={24} />
                    </a>
                </div>

                <p className="text-gray-500 dark:text-gray-500 font-mono text-sm">{t('contact.footer')}</p>
            </div>
        </footer>
    );
};


function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <div className="overflow-x-hidden relative">
                    <Navigation />

                    <main>
                        <Hero />

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <CompanyLogos />
                        </motion.div>

                        <RevealSection id="about">
                            <About />
                        </RevealSection>

                        <RevealSection id="projects">
                            <Projects />
                        </RevealSection>

                        <RevealSection id="skills">
                            <Skills />
                        </RevealSection>

                        <RevealSection id="timeline">
                            <Timeline />
                        </RevealSection>

                        <RevealSection id="activities">
                            <AdditionalActivities />
                        </RevealSection>

                        <Contact />
                    </main>
                </div>
            </LanguageProvider>
        </ThemeProvider>
    );
}

// Helper component for professional scroll reveal
const RevealSection = ({ children, id }) => (
    <motion.section
        id={id}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-150px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
        {children}
    </motion.section>
);

export default App;
