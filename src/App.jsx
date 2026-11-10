import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Download,
    ExternalLink,
    FileText,
    QrCode,
    Sparkles,
    CheckCircle2,
    ArrowRight,
    Github,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    Briefcase,
    GraduationCap,
    Cpu,
    Layers,
    Bot,
    Moon,
    Sun,
    Languages,
    Printer,
    Code2,
    Database,
    Server,
    Activity,
    Award,
    MessageCircle,
    Copy,
    Check,
    X,
    ChevronRight
} from 'lucide-react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

// Images
import Mombo from './assets/images/Mombo.jpg';
import profilMombo from './assets/images/mombo_profil.png';
import logoEnspy from './assets/images/logo_enspy.jpg';
import logoStanford from './assets/images/stanford_logo.png';
import logoNgaoundere from './assets/images/Univ_Ndere_logo.jpg';

// Navigation Bar
const Navbar = () => {
    const { theme, setMode } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const elem = document.getElementById(id);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-canvas-light/95 dark:bg-canvas-dark/95 backdrop-blur-md border-b border-[#E9EDEF] dark:border-[#222E35] shadow-sm py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Brand */}
                <div
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-3 cursor-pointer group"
                >
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-whatsapp-500 shadow-sm transition-transform group-hover:scale-105">
                        <img
                            src={profilMombo}
                            alt="Emmanuel Mombo-Dingba"
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.src = Mombo; }}
                        />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-base sm:text-lg text-slateText-main dark:text-white tracking-tight">
                                Emmanuel Mombo-Dingba
                            </span>
                            <span className="inline-block w-2.5 h-2.5 rounded-full bg-whatsapp-500 animate-pulse" title="AI Engineer @ HADRON S.A." />
                        </div>
                        <p className="text-xs text-slateText-muted dark:text-[#8696A0] font-medium hidden sm:block">
                            AI Engineer @ HADRON S.A.
                        </p>
                    </div>
                </div>

                {/* Nav Links */}
                <nav className="hidden md:flex items-center gap-1 lg:gap-2">
                    {[
                        { id: 'about', label: t('nav.about') },
                        { id: 'experience', label: t('nav.experience') },
                        { id: 'projects', label: t('nav.projects') },
                        { id: 'skills', label: t('nav.skills') },
                        { id: 'cv', label: t('nav.cv') },
                        { id: 'contact', label: t('nav.contact') },
                    ].map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            className="px-3 py-1.5 rounded-full text-sm font-medium text-slateText-muted hover:text-slateText-main dark:text-[#8696A0] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-2 sm:gap-3">
                    {/* Language Switch */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-xs font-semibold uppercase tracking-wider text-slateText-main dark:text-white transition-all"
                        title={t('nav.lang')}
                    >
                        <Languages size={14} />
                        <span>{language}</span>
                    </button>

                    {/* Theme Segmented Toggle (Unambiguous: Sun = Light, Moon = Dark) */}
                    <div className="flex items-center p-0.5 rounded-full bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/10">
                        <button
                            type="button"
                            onClick={() => setMode('light')}
                            className={`p-1.5 rounded-full transition-all flex items-center justify-center ${theme === 'light'
                                    ? 'bg-white text-amber-500 shadow-sm'
                                    : 'text-slateText-muted hover:text-slateText-main dark:text-white/40'
                                }`}
                            title="Mode Clair"
                            aria-label="Mode Clair"
                        >
                            <Sun size={15} />
                        </button>
                        <button
                            type="button"
                            onClick={() => setMode('dark')}
                            className={`p-1.5 rounded-full transition-all flex items-center justify-center ${theme === 'dark'
                                    ? 'bg-[#1F2C34] text-whatsapp-400 shadow-sm'
                                    : 'text-slateText-muted hover:text-slateText-main'
                                }`}
                            title="Mode Sombre"
                            aria-label="Mode Sombre"
                        >
                            <Moon size={15} />
                        </button>
                    </div>

                    {/* Direct CV Download CTA (WhatsApp-inspired pill button) */}
                    <a
                        href="/cv_mombo.pdf"
                        download="Emmanuel_Mombo_Dingba_AI_Engineer_CV.pdf"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-whatsapp-500 hover:bg-whatsapp-600 text-white font-medium text-xs sm:text-sm shadow-sm transition-all hover:shadow hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <Download size={15} />
                        <span className="hidden sm:inline">{t('nav.downloadCv')}</span>
                        <span className="sm:hidden">CV</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

// Hero Section (WhatsApp Landing Aesthetic)
const Hero = () => {
    const { t } = useLanguage();

    const scrollToCv = () => {
        document.getElementById('cv')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="pt-24 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Giant rounded hero container like WhatsApp's landing hero */}
            <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden bg-gradient-to-br from-[#0c3e37] via-[#0f4a42] to-[#123832] text-white p-6 sm:p-10 lg:p-14 shadow-soft-xl">
                {/* Decorative background radial glows */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-whatsapp-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-whatsapp-600/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left text column */}
                    <div className="lg:col-span-7 space-y-6">
                        {/* Status chip */}
                        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium">
                            <span className="w-2.5 h-2.5 rounded-full bg-whatsapp-400 animate-pulse" />
                            <span>{t('hero.badge')}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                            {t('hero.title')}
                        </h1>

                        {/* Subtitle */}
                        <p className="text-base sm:text-lg text-white/85 max-w-xl font-normal leading-relaxed">
                            {t('hero.subtitle')}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                            {/* Primary: Direct Download Button (like WhatsApp's "Télécharger ↓") */}
                            <a
                                href="/cv_mombo.pdf"
                                download="Emmanuel_Mombo_Dingba_AI_Engineer_CV.pdf"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-whatsapp-500 hover:bg-whatsapp-400 text-slateText-main font-bold text-sm sm:text-base shadow-lg shadow-black/20 transition-all hover:scale-[1.03] active:scale-[0.98]"
                            >
                                <Download size={18} className="text-slateText-main" />
                                <span>{t('hero.downloadCv')}</span>
                            </a>

                            {/* Secondary: WhatsApp Quick Chat */}
                            <a
                                href="https://wa.me/237653867570?text=Bonjour%20Emmanuel,%20j'ai%20consulte%20votre%20portfolio%20et%20souhaite%20echanger%20avec%20vous."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 text-white font-semibold text-sm sm:text-base backdrop-blur-md border border-[#25D366]/40 transition-all hover:scale-[1.02]"
                            >
                                <MessageCircle size={18} className="text-[#25D366]" />
                                <span>WhatsApp Direct</span>
                            </a>

                            {/* Link to CV Section */}
                            <button
                                onClick={scrollToCv}
                                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm text-white/80 hover:text-white transition-colors"
                            >
                                <QrCode size={16} />
                                <span>{t('hero.viewCv')}</span>
                            </button>
                        </div>

                        {/* Highlights row */}
                        <div className="pt-4 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                            <div>
                                <div className="font-bold text-whatsapp-400 text-base sm:text-lg">HADRON S.A.</div>
                                <div className="text-white/70">AI Engineer</div>
                            </div>
                            <div>
                                <div className="font-bold text-whatsapp-400 text-base sm:text-lg">ENSPY 2026</div>
                                <div className="text-white/70">Génie Informatique</div>
                            </div>
                            <div>
                                <div className="font-bold text-whatsapp-400 text-base sm:text-lg">&lt; 300ms</div>
                                <div className="text-white/70">Latence Multi-Agents</div>
                            </div>
                            <div>
                                <div className="font-bold text-whatsapp-400 text-base sm:text-lg">99.2%</div>
                                <div className="text-white/70">Validation Déterministe</div>
                            </div>
                        </div>
                    </div>

                    {/* Right column: Image with floating chat pills like WhatsApp */}
                    <div className="lg:col-span-5 relative flex justify-center">
                        <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-[30px] overflow-hidden border-4 border-white/20 shadow-2xl bg-black/40">
                            <img
                                src={profilMombo}
                                alt="Emmanuel Mombo-Dingba"
                                className="w-full h-full object-cover object-top filter brightness-[1.02]"
                                onError={(e) => { e.target.src = Mombo; }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                            <div className="absolute bottom-5 left-5 right-5 text-left">
                                <div className="text-white font-bold text-lg">Emmanuel Mombo-Dingba</div>
                                <div className="text-whatsapp-400 text-xs font-semibold">AI Engineer @ HADRON S.A.</div>
                            </div>
                        </div>

                        {/* Floating Pill 1: Top Right */}
                        <motion.div
                            initial={{ y: 15, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="absolute -top-3 -right-2 sm:-right-4 bg-white dark:bg-canvas-darkElevated text-slateText-main dark:text-white px-3.5 py-2 rounded-2xl shadow-xl border border-black/5 dark:border-white/10 flex items-center gap-2 text-xs font-semibold"
                        >
                            <span className="w-2 h-2 rounded-full bg-whatsapp-500 animate-ping" />
                            <span>{t('hero.chips.currentRole')}</span>
                        </motion.div>

                        {/* Floating Pill 2: Middle Left */}
                        <motion.div
                            initial={{ x: -15, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="absolute top-1/3 -left-3 sm:-left-6 bg-white dark:bg-canvas-darkElevated text-slateText-main dark:text-white px-3.5 py-2 rounded-2xl shadow-xl border border-black/5 dark:border-white/10 flex items-center gap-2 text-xs font-semibold"
                        >
                            <span>{t('hero.chips.multiAgent')}</span>
                        </motion.div>

                        {/* Floating Pill 3: Bottom Right */}
                        <motion.div
                            initial={{ y: 15, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="absolute -bottom-4 right-2 sm:right-6 bg-white dark:bg-canvas-darkElevated text-slateText-main dark:text-white px-3.5 py-2 rounded-2xl shadow-xl border border-black/5 dark:border-white/10 flex items-center gap-2 text-xs font-semibold"
                        >
                            <Sparkles size={14} className="text-whatsapp-600" />
                            <span>{t('hero.chips.latency')}</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// About Section
const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Left Card: Vision & Bio */}
                <div className="lg:col-span-5 bg-white dark:bg-canvas-darkCard rounded-[32px] p-8 border border-[#E9EDEF] dark:border-[#222E35] shadow-soft">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-whatsapp-500/10 text-whatsapp-700 dark:text-whatsapp-400 text-xs font-bold uppercase tracking-wider mb-4">
                        <Sparkles size={13} />
                        <span>{t('about.badge')}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slateText-main dark:text-white mb-4">
                        {t('about.title')}
                    </h2>

                    <div className="p-4 rounded-2xl bg-canvas-light dark:bg-canvas-darkElevated border-l-4 border-whatsapp-500 text-sm font-medium italic text-slateText-main dark:text-white mb-6">
                        "{t('about.quote')}"
                    </div>

                    <div className="space-y-3 text-xs sm:text-sm text-slateText-muted dark:text-[#8696A0] font-medium">
                        <div className="flex items-center gap-2.5">
                            <CheckCircle2 size={16} className="text-whatsapp-600 dark:text-whatsapp-400 shrink-0" />
                            <span>Diplômé Ingénieur en Génie Informatique (ENSPY)</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <CheckCircle2 size={16} className="text-whatsapp-600 dark:text-whatsapp-400 shrink-0" />
                            <span>AI Engineer chez HADRON S.A.</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <CheckCircle2 size={16} className="text-whatsapp-600 dark:text-whatsapp-400 shrink-0" />
                            <span>Double culture Mathématiques Pures & IA de Production</span>
                        </div>
                    </div>
                </div>

                {/* Right text narrative */}
                <div className="lg:col-span-7 bg-white dark:bg-canvas-darkCard rounded-[32px] p-8 sm:p-10 border border-[#E9EDEF] dark:border-[#222E35] shadow-soft space-y-5 text-sm sm:text-base text-slateText-muted dark:text-[#8696A0] leading-relaxed">
                    <p className="text-slateText-main dark:text-white font-medium">
                        {t('about.p1')}
                    </p>
                    <p>
                        {t('about.p2')}
                    </p>
                    <p>
                        {t('about.p3')}
                    </p>

                    <div className="pt-4 flex flex-wrap gap-2">
                        {['Python', 'Multi-Agent Systems', 'LangGraph', 'LLMs & RAG', 'FastAPI', 'Redis Streams', 'PostgreSQL', 'Docker'].map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full text-xs font-semibold bg-canvas-light dark:bg-canvas-darkElevated text-slateText-main dark:text-white border border-[#E9EDEF] dark:border-[#222E35]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Experience Section (Featuring HADRON S.A. prominently & Architecture Breakdown)
const Experience = () => {
    const { t } = useLanguage();

    return (
        <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mb-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-whatsapp-500/10 text-whatsapp-700 dark:text-whatsapp-400 text-xs font-bold uppercase tracking-wider mb-3">
                    <Briefcase size={14} />
                    <span>{t('experience.title')}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slateText-main dark:text-white">
                    {t('experience.subtitle')}
                </h2>
            </div>

            <div className="space-y-8">
                {/* 1. HADRON S.A. (AI Engineer - CURRENT ROLE) */}
                <div className="relative rounded-[32px] bg-white dark:bg-canvas-darkCard border-2 border-whatsapp-500/40 p-6 sm:p-10 shadow-soft-xl overflow-hidden">
                    {/* Active role badge ribbon */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                        <div className="flex flex-wrap items-baseline gap-3">
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-slateText-main dark:text-white">
                                {t('experience.hadron.role')}
                            </h3>
                            <span className="text-lg font-bold text-whatsapp-600 dark:text-whatsapp-400">
                                · {t('experience.hadron.company')}
                            </span>
                        </div>

                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-whatsapp-500 text-white font-bold text-xs uppercase tracking-wider shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                            {t('experience.currentBadge')}
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs font-semibold text-slateText-muted dark:text-[#8696A0] mb-6">
                        <span className="flex items-center gap-1">
                            <MapPin size={13} /> {t('experience.hadron.location')}
                        </span>
                        <span>|</span>
                        <span>{t('experience.hadron.period')}</span>
                    </div>

                    <p className="text-sm sm:text-base text-slateText-main dark:text-white/90 mb-6 font-medium leading-relaxed">
                        {t('experience.hadron.desc')}
                    </p>

                    {/* Architecture Workflow Strip (Makes it deeply "parlant") */}
                    <div className="my-6 p-5 rounded-2xl bg-canvas-light dark:bg-canvas-darkElevated border border-[#E9EDEF] dark:border-[#222E35]">
                        <div className="text-xs font-bold uppercase tracking-wider text-whatsapp-700 dark:text-whatsapp-400 mb-3 flex items-center gap-2">
                            <Cpu size={14} />
                            <span>Architecture Déployée : Autonomous Agentic ERP Bridge</span>
                        </div>
                        <div className="grid sm:grid-cols-4 gap-3 text-xs">
                            <div className="p-3 rounded-xl bg-white dark:bg-canvas-darkCard border border-[#E9EDEF] dark:border-[#222E35]">
                                <span className="text-whatsapp-500 font-bold block mb-1">01. Flux Événements</span>
                                <span className="text-slateText-muted dark:text-[#8696A0]">ERP Logs, Inventory, Anomalies</span>
                            </div>
                            <div className="p-3 rounded-xl bg-white dark:bg-canvas-darkCard border border-[#E9EDEF] dark:border-[#222E35]">
                                <span className="text-whatsapp-500 font-bold block mb-1">02. Streaming</span>
                                <span className="text-slateText-muted dark:text-[#8696A0]">Redis Streams haute fréquence</span>
                            </div>
                            <div className="p-3 rounded-xl bg-white dark:bg-canvas-darkCard border border-[#E9EDEF] dark:border-[#222E35]">
                                <span className="text-whatsapp-500 font-bold block mb-1">03. Agents IA</span>
                                <span className="text-slateText-muted dark:text-[#8696A0]">LangGraph + LLM Contextuel</span>
                            </div>
                            <div className="p-3 rounded-xl bg-white dark:bg-canvas-darkCard border border-[#E9EDEF] dark:border-[#222E35]">
                                <span className="text-whatsapp-500 font-bold block mb-1">04. Validation & Act</span>
                                <span className="text-slateText-muted dark:text-[#8696A0]">Guardrails Pydantic (99.2%)</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3 mb-6">
                        {t('experience.hadron.points').map((point, idx) => (
                            <div key={idx} className="flex items-start gap-3 text-sm text-slateText-muted dark:text-[#8696A0]">
                                <div className="mt-1 w-2 h-2 rounded-full bg-whatsapp-500 shrink-0" />
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E9EDEF] dark:border-[#222E35]">
                        {t('experience.hadron.tags').map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 rounded-full text-xs font-semibold bg-whatsapp-500/10 text-whatsapp-800 dark:text-whatsapp-300 border border-whatsapp-500/20"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* 2. ENSPY (Software Engineering Intern) */}
                <div className="rounded-[32px] bg-white dark:bg-canvas-darkCard border border-[#E9EDEF] dark:border-[#222E35] p-6 sm:p-10 shadow-soft">
                    <div className="flex flex-wrap items-baseline gap-3 mb-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-slateText-main dark:text-white">
                            {t('experience.enspy.role')}
                        </h3>
                        <span className="text-base font-semibold text-slateText-muted dark:text-[#8696A0]">
                            · {t('experience.enspy.company')}
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs font-semibold text-slateText-muted dark:text-[#8696A0] mb-5">
                        <span className="flex items-center gap-1">
                            <MapPin size={13} /> {t('experience.enspy.location')}
                        </span>
                        <span>|</span>
                        <span>{t('experience.enspy.period')}</span>
                    </div>

                    <p className="text-sm text-slateText-muted dark:text-[#8696A0] mb-5 leading-relaxed">
                        {t('experience.enspy.desc')}
                    </p>

                    <div className="space-y-2.5 mb-6">
                        {t('experience.enspy.points').map((point, idx) => (
                            <div key={idx} className="flex items-start gap-3 text-sm text-slateText-muted dark:text-[#8696A0]">
                                <div className="mt-1 w-2 h-2 rounded-full bg-slateText-muted dark:bg-[#8696A0] shrink-0" />
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E9EDEF] dark:border-[#222E35]">
                        {t('experience.enspy.tags').map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 rounded-full text-xs font-semibold bg-canvas-light dark:bg-canvas-darkElevated text-slateText-main dark:text-white border border-[#E9EDEF] dark:border-[#222E35]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// CV Download & QR Code Section (Core user requirement with Interactive Tabbed Dossier)
const CvSection = () => {
    const { t } = useLanguage();
    const [copied, setCopied] = useState(false);
    const [activeCvTab, setActiveCvTab] = useState('summary');

    const handleCopy = () => {
        navigator.clipboard.writeText('https://mombo-dingba.github.io/');
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <section id="cv" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="rounded-[36px] bg-gradient-to-br from-white via-white to-canvas-light dark:from-canvas-darkCard dark:via-canvas-darkCard dark:to-canvas-darkElevated border border-[#E9EDEF] dark:border-[#222E35] p-6 sm:p-10 lg:p-12 shadow-soft-xl">
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                    {/* Left: Info & Interactive CV Preview Tabs */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-whatsapp-500/10 text-whatsapp-700 dark:text-whatsapp-400 text-xs font-bold uppercase tracking-wider">
                            <FileText size={14} />
                            <span>{t('cvSection.badge')}</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slateText-main dark:text-white">
                            {t('cvSection.title')}
                        </h2>

                        <p className="text-sm sm:text-base text-slateText-muted dark:text-[#8696A0] leading-relaxed">
                            {t('cvSection.subtitle')}
                        </p>

                        {/* Interactive Tabbed Mini-Reader */}
                        <div className="rounded-2xl border border-[#E9EDEF] dark:border-[#222E35] bg-canvas-light dark:bg-canvas-darkElevated overflow-hidden">
                            <div className="flex border-b border-[#E9EDEF] dark:border-[#222E35] bg-white/50 dark:bg-black/20 text-xs font-semibold">
                                {[
                                    { id: 'summary', label: 'Profil' },
                                    { id: 'hadron', label: 'HADRON S.A.' },
                                    { id: 'edu', label: 'Formation' },
                                    { id: 'skills', label: 'Compétences' }
                                ].map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveCvTab(tab.id)}
                                        className={`flex-1 py-2.5 text-center transition-colors ${activeCvTab === tab.id
                                                ? 'bg-whatsapp-500 text-white font-bold'
                                                : 'text-slateText-muted dark:text-[#8696A0] hover:text-slateText-main dark:hover:text-white'
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                            <div className="p-4 text-xs sm:text-sm text-slateText-main dark:text-[#E9EDEF] leading-relaxed">
                                {activeCvTab === 'summary' && (
                                    <p>
                                        <strong>Emmanuel Mombo-Dingba</strong> — AI Engineer chez HADRON S.A. et diplômé Ingénieur en Génie Informatique (ENSPY). Expert en systèmes multi-agents, assistants LLM d'entreprise et architectures distribuées hautement fiables.
                                    </p>
                                )}
                                {activeCvTab === 'hadron' && (
                                    <p>
                                        <strong>Poste Actuel : AI Engineer @ HADRON S.A. (2026 – Présent)</strong><br />
                                        Conception de l'architecture d'intégration IA ↔ ERP, orchestration multi-agents (LangGraph, FastAPI), pipelines Redis Streams et guardrails déterministes (latence &lt; 300ms, validation 99.2%).
                                    </p>
                                )}
                                {activeCvTab === 'edu' && (
                                    <p>
                                        <strong>Formation Académique d'Excellence :</strong><br />
                                        • Diplôme d'Ingénieur Génie Informatique (ENSPY 2021 – 2026)<br />
                                        • Mathématiques Pures (Université de Ngaoundéré 2019 – 2021)<br />
                                        • Stanford Online (CS229, CS231n, CS224n)
                                    </p>
                                )}
                                {activeCvTab === 'skills' && (
                                    <p>
                                        <strong>Arsenal Technique :</strong><br />
                                        Python, FastAPI, Redis Streams, Kafka, PostgreSQL, Docker, Multi-Agent Systems, LangGraph, LLMs, NLP, RAG, PyTorch, React, WebRTC.
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            {/* Download PDF button (EN) */}
                            <a
                                href="/cv_mombo.pdf"
                                download="Emmanuel_Mombo_Dingba_AI_Engineer_CV.pdf"
                                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-whatsapp-500 hover:bg-whatsapp-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                                title="Télécharger le CV au format PDF (International / Anglais)"
                            >
                                <Download size={16} />
                                <span>{t('cvSection.downloadBtn')} (EN)</span>
                            </a>

                            {/* Download PDF button (FR) */}
                            <a
                                href="/Emmanuel_Mombo_Dingba_CV_FR.pdf"
                                download="Emmanuel_Mombo_Dingba_CV_FR.pdf"
                                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-whatsapp-700 hover:bg-whatsapp-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                                title="Télécharger le CV au format PDF (Version Française)"
                            >
                                <Download size={16} />
                                <span>Télécharger (FR)</span>
                            </a>

                            {/* Open in new tab */}
                            <a
                                href="/cv.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full bg-canvas-light hover:bg-[#E9EDEF] dark:bg-canvas-darkElevated dark:hover:bg-[#202C33] text-slateText-main dark:text-white font-semibold text-xs sm:text-sm border border-[#E9EDEF] dark:border-[#222E35] transition-all"
                            >
                                <ExternalLink size={15} />
                                <span>{t('cvSection.openBtn')}</span>
                            </a>

                            {/* Print preview */}
                            <button
                                onClick={() => {
                                    const win = window.open('/cv.html', '_blank');
                                    if (win) {
                                        win.focus();
                                        setTimeout(() => win.print(), 500);
                                    }
                                }}
                                className="inline-flex items-center gap-1.5 px-3 py-3.5 rounded-full text-slateText-muted hover:text-slateText-main dark:text-[#8696A0] dark:hover:text-white font-medium text-xs sm:text-sm transition-colors"
                            >
                                <Printer size={15} />
                                <span>{t('cvSection.printBtn')}</span>
                            </button>
                        </div>
                    </div>

                    {/* Right: Dedicated QR Code Box with live copy link */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="w-full max-w-sm rounded-[32px] bg-white dark:bg-canvas-darkElevated border border-[#E9EDEF] dark:border-[#222E35] p-6 sm:p-8 text-center shadow-soft">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-whatsapp-500/10 text-whatsapp-700 dark:text-whatsapp-400 text-xs font-bold uppercase tracking-wider mb-4">
                                <QrCode size={14} />
                                <span>{t('cvSection.qrBadge')}</span>
                            </div>

                            {/* QR Code Graphic */}
                            <div className="mx-auto w-48 h-48 sm:w-52 sm:h-52 p-3 bg-white rounded-2xl shadow-inner border border-gray-200 flex items-center justify-center">
                                <img
                                    src="/qr-portfolio.png"
                                    alt="QR Code Portfolio"
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        e.target.src = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://mombo-dingba.github.io/";
                                    }}
                                />
                            </div>

                            <h3 className="font-bold text-base text-slateText-main dark:text-white mt-4 mb-1">
                                {t('cvSection.scanTitle')}
                            </h3>
                            <p className="text-xs text-slateText-muted dark:text-[#8696A0] leading-relaxed mb-4">
                                {t('cvSection.scanDesc')}
                            </p>

                            {/* Copy Link Button with Toast */}
                            <button
                                onClick={handleCopy}
                                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-canvas-light dark:bg-canvas-darkCard border border-[#E9EDEF] dark:border-[#222E35] text-xs font-semibold text-slateText-main dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                            >
                                {copied ? (
                                    <>
                                        <Check size={14} className="text-whatsapp-500" />
                                        <span className="text-whatsapp-600 dark:text-whatsapp-400 font-bold">Lien copié dans le presse-papier !</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy size={14} />
                                        <span>Copier l'URL du portfolio</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Selected Projects Section
const Projects = () => {
    const { t } = useLanguage();
    const [selectedProject, setSelectedProject] = useState(null);

    const projectsList = [
        {
            key: 'p1',
            badge: t('projects.p1.badge'),
            title: t('projects.p1.title'),
            desc: t('projects.p1.desc'),
            points: t('projects.p1.points'),
            tech: t('projects.p1.tech'),
            icon: Bot,
            org: "HADRON S.A."
        },
        {
            key: 'p2',
            badge: t('projects.p2.badge'),
            title: t('projects.p2.title'),
            desc: t('projects.p2.desc'),
            points: t('projects.p2.points'),
            tech: t('projects.p2.tech'),
            icon: Activity,
            org: "Laboratoire ENSPY"
        },
        {
            key: 'p3',
            badge: t('projects.p3.badge'),
            title: t('projects.p3.title'),
            desc: t('projects.p3.desc'),
            points: t('projects.p3.points'),
            tech: t('projects.p3.tech'),
            icon: Cpu,
            org: "Projet Recherche ML"
        },
        {
            key: 'p4',
            badge: t('projects.p4.badge'),
            title: t('projects.p4.title'),
            desc: t('projects.p4.desc'),
            points: t('projects.p4.points'),
            tech: t('projects.p4.tech'),
            icon: Layers,
            org: "Impact Afrique"
        }
    ];

    return (
        <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mb-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-whatsapp-500/10 text-whatsapp-700 dark:text-whatsapp-400 text-xs font-bold uppercase tracking-wider mb-3">
                    <Code2 size={14} />
                    <span>{t('projects.title')}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slateText-main dark:text-white">
                    {t('projects.subtitle')}
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projectsList.map((p) => {
                    const IconComponent = p.icon;
                    return (
                        <div
                            key={p.key}
                            onClick={() => setSelectedProject(p)}
                            className="group cursor-pointer rounded-[32px] bg-white dark:bg-canvas-darkCard border border-[#E9EDEF] dark:border-[#222E35] p-6 sm:p-8 shadow-soft flex flex-col justify-between hover:shadow-soft-xl hover:border-whatsapp-500/40 transition-all"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-canvas-light dark:bg-canvas-darkElevated text-whatsapp-700 dark:text-whatsapp-400 border border-[#E9EDEF] dark:border-[#222E35]">
                                        {p.badge}
                                    </span>
                                    <div className="w-10 h-10 rounded-full bg-whatsapp-500/10 flex items-center justify-center text-whatsapp-600 dark:text-whatsapp-400 group-hover:scale-110 transition-transform">
                                        <IconComponent size={20} />
                                    </div>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-bold text-slateText-main dark:text-white mb-2 group-hover:text-whatsapp-600 dark:group-hover:text-whatsapp-400 transition-colors">
                                    {p.title}
                                </h3>

                                <p className="text-xs font-semibold text-whatsapp-700 dark:text-whatsapp-300 mb-3">
                                    {p.org}
                                </p>

                                <p className="text-sm text-slateText-muted dark:text-[#8696A0] mb-4 leading-relaxed font-normal">
                                    {p.desc}
                                </p>

                                <div className="space-y-2 mb-6">
                                    {p.points.map((pt, i) => (
                                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slateText-muted dark:text-[#8696A0]">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-whatsapp-500 shrink-0" />
                                            <span>{pt}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-[#E9EDEF] dark:border-[#222E35]">
                                <div className="flex flex-wrap gap-1.5">
                                    {p.tech.slice(0, 4).map((tItem) => (
                                        <span
                                            key={tItem}
                                            className="px-2.5 py-1 rounded-full text-xs font-medium bg-canvas-light dark:bg-canvas-darkElevated text-slateText-main dark:text-white"
                                        >
                                            {tItem}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-xs font-bold text-whatsapp-600 dark:text-whatsapp-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                    Détails <ChevronRight size={14} />
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Case Study Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-2xl bg-white dark:bg-canvas-darkCard rounded-[32px] p-6 sm:p-8 shadow-2xl border border-[#E9EDEF] dark:border-[#222E35] space-y-6"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-whatsapp-500/10 text-whatsapp-700 dark:text-whatsapp-400">
                                        {selectedProject.badge} · {selectedProject.org}
                                    </span>
                                    <h3 className="text-2xl font-extrabold text-slateText-main dark:text-white mt-2">
                                        {selectedProject.title}
                                    </h3>
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slateText-muted dark:text-white"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <p className="text-sm sm:text-base text-slateText-main dark:text-white/90 leading-relaxed">
                                {selectedProject.desc}
                            </p>

                            <div className="space-y-3 p-4 rounded-2xl bg-canvas-light dark:bg-canvas-darkElevated">
                                <span className="font-bold text-xs uppercase tracking-wider text-whatsapp-700 dark:text-whatsapp-400">
                                    Points clés de réalisation :
                                </span>
                                {selectedProject.points.map((pt, i) => (
                                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slateText-muted dark:text-[#8696A0]">
                                        <CheckCircle2 size={16} className="text-whatsapp-500 shrink-0 mt-0.5" />
                                        <span>{pt}</span>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <span className="text-xs font-bold text-slateText-muted dark:text-[#8696A0] block mb-2">Technologies utilisées :</span>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tech.map((tItem) => (
                                        <span
                                            key={tItem}
                                            className="px-3 py-1 rounded-full text-xs font-semibold bg-whatsapp-500/10 text-whatsapp-800 dark:text-whatsapp-300 border border-whatsapp-500/20"
                                        >
                                            {tItem}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

// Technical Arsenal / Skills Section
const Skills = () => {
    const { t } = useLanguage();

    const categories = [
        {
            title: t('skills.cat1.title'),
            desc: t('skills.cat1.desc'),
            items: t('skills.cat1.items'),
            icon: Bot
        },
        {
            title: t('skills.cat2.title'),
            desc: t('skills.cat2.desc'),
            items: t('skills.cat2.items'),
            icon: Server
        },
        {
            title: t('skills.cat3.title'),
            desc: t('skills.cat3.desc'),
            items: t('skills.cat3.items'),
            icon: Database
        },
        {
            title: t('skills.cat4.title'),
            desc: t('skills.cat4.desc'),
            items: t('skills.cat4.items'),
            icon: Code2
        }
    ];

    return (
        <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mb-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-whatsapp-500/10 text-whatsapp-700 dark:text-whatsapp-400 text-xs font-bold uppercase tracking-wider mb-3">
                    <Cpu size={14} />
                    <span>{t('skills.title')}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slateText-main dark:text-white">
                    {t('skills.subtitle')}
                </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((cat, idx) => {
                    const CatIcon = cat.icon;
                    return (
                        <div
                            key={idx}
                            className="rounded-[28px] bg-white dark:bg-canvas-darkCard border border-[#E9EDEF] dark:border-[#222E35] p-6 shadow-soft flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-10 h-10 rounded-2xl bg-whatsapp-500/10 text-whatsapp-600 dark:text-whatsapp-400 flex items-center justify-center mb-4">
                                    <CatIcon size={20} />
                                </div>
                                <h3 className="font-bold text-lg text-slateText-main dark:text-white mb-2">
                                    {cat.title}
                                </h3>
                                <p className="text-xs text-slateText-muted dark:text-[#8696A0] mb-4">
                                    {cat.desc}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E9EDEF] dark:border-[#222E35]">
                                {cat.items.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-canvas-light dark:bg-canvas-darkElevated text-slateText-main dark:text-white border border-[#E9EDEF] dark:border-[#222E35]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

// Education Section
const Education = () => {
    const { t } = useLanguage();
    const logos = [logoEnspy, logoNgaoundere, logoStanford];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mb-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-whatsapp-500/10 text-whatsapp-700 dark:text-whatsapp-400 text-xs font-bold uppercase tracking-wider mb-3">
                    <GraduationCap size={14} />
                    <span>{t('education.title')}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slateText-main dark:text-white">
                    {t('education.subtitle')}
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {t('education.items').map((edu, idx) => (
                    <div
                        key={idx}
                        className="rounded-[28px] bg-white dark:bg-canvas-darkCard border border-[#E9EDEF] dark:border-[#222E35] p-6 shadow-soft flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-12 h-12 rounded-xl overflow-hidden mb-4 border border-gray-100 dark:border-white/10 bg-white p-1">
                                <img
                                    src={logos[idx]}
                                    alt={edu.school}
                                    className="w-full h-full object-contain"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                            </div>

                            <span className="text-xs font-bold text-whatsapp-600 dark:text-whatsapp-400">
                                {edu.period}
                            </span>

                            <h3 className="font-bold text-base sm:text-lg text-slateText-main dark:text-white mt-1 mb-1">
                                {edu.degree}
                            </h3>

                            <div className="text-xs font-semibold text-slateText-muted dark:text-[#8696A0] mb-3">
                                {edu.school} · {edu.location}
                            </div>

                            <p className="text-xs sm:text-sm text-slateText-muted dark:text-[#8696A0] leading-relaxed">
                                {edu.details}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// Contact & Footer Section
const Contact = () => {
    const { t } = useLanguage();

    return (
        <footer id="contact" className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Contact Card */}
            <div className="rounded-[36px] bg-gradient-to-br from-[#0c3e37] to-[#0f4a42] text-white p-8 sm:p-12 text-center shadow-soft-xl relative overflow-hidden">
                <div className="max-w-2xl mx-auto space-y-6 relative z-10">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        {t('contact.title')}
                    </h2>

                    <p className="text-base text-white/80">
                        {t('contact.subtitle')}
                    </p>

                    <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm text-whatsapp-300 font-semibold">
                        {t('contact.status')}
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 pt-2">
                        <a
                            href="https://wa.me/237653867570?text=Bonjour%20Emmanuel,%20j'ai%20consulte%20votre%20portfolio..."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-slateText-main font-bold text-sm shadow-md transition-all hover:scale-105"
                        >
                            <MessageCircle size={18} />
                            <span>WhatsApp : +237 653 867 570</span>
                        </a>

                        <a
                            href="mailto:mombodingba.emmanuel@gmail.com"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-sm backdrop-blur-md border border-white/20 transition-all"
                        >
                            <Mail size={18} />
                            <span>{t('contact.emailBtn')}</span>
                        </a>
                    </div>

                    <div className="flex justify-center gap-4 pt-4">
                        <a
                            href="https://github.com/MOMBO-DINGBA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                            title="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/in/emmanuel-mombo-dingba-56285b234"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                            title="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="/cv_mombo.pdf"
                            download="Emmanuel_Mombo_Dingba_AI_Engineer_CV.pdf"
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                            title="Download CV"
                        >
                            <Download size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center pt-8 text-xs text-slateText-muted dark:text-[#8696A0]">
                {t('contact.rights')}
            </div>
        </footer>
    );
};

// Floating WhatsApp Widget
const WhatsAppFloatingWidget = () => {
    return (
        <a
            href="https://wa.me/237653867570?text=Bonjour%20Emmanuel,%20j'ai%20vu%20votre%20portfolio%20en%20ligne%20et%20aimerais%20echanger%20avec%20vous."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 group"
            title="Discuter directement sur WhatsApp"
        >
            <MessageCircle size={20} className="fill-white group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">Discuter sur WhatsApp</span>
        </a>
    );
};

// Main App Component
export default function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <div className="min-h-screen bg-canvas-light dark:bg-canvas-dark text-slateText-main dark:text-white transition-colors duration-300">
                    <Navbar />
                    <main>
                        <Hero />
                        <About />
                        <Experience />
                        <CvSection />
                        <Projects />
                        <Skills />
                        <Education />
                        <Contact />
                    </main>
                    <WhatsAppFloatingWidget />
                </div>
            </LanguageProvider>
        </ThemeProvider>
    );
}
