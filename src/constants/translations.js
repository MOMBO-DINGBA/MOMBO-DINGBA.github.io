export const translations = {
    fr: {
        nav: {
            about: "À Propos",
            projects: "Projets",
            skills: "Compétences",
            timeline: "Parcours",
            contact: "Contact"
        },
        hero: {
            role1: "Ingénieur Junior ML",
            role2: "Architecte Systèmes IA",
            role3: "Développeur Full Stack",
            cta: "Découvrir mon Portfolio",
            scroll: "Découvrir"
        },
        about: {
            title: "À Propos",
            p1: "Diplômé de l'ENSPY (École Nationale Supérieure Polytechnique de Yaoundé), je suis un ingénieur ML spécialisé dans la conception de systèmes distribués intelligents et l'orchestration d'agents autonomes.",
            p2: "Mon expertise se concentre sur l'architecture event-driven, les compromis entre latence, déterminisme et scalabilité, ainsi que l'intégration de modèles de langage (LLM) dans des systèmes de production critiques.",
            p3: "Passionné par l'IA agentique et les systèmes temps réel, je travaille sur des projets innovants combinant FastAPI, Kafka, Redis, LangGraph et Kubernetes pour créer des solutions scalables et robustes."
        },
        projects: {
            title: "Projets",
            subtitle: "Découvrez mes réalisations techniques et innovations dans l'IA et le développement système.",
            viewDetails: "Voir les détails",
            techDetails: "Détails Techniques",
            p1: {
                title: "Autonomous Agentic ERP Bridge",
                desc: "Automatisation de la prise de décision ERP via agents intelligents",
                fullDesc: "Système event-driven pour l'automatisation de la prise de décision ERP (Inventory & Logistics) via des agents intelligents capables d'analyser des flux d'événements en temps réel et d'exécuter des actions critiques avec validation déterministe.",
                details: [
                    "Architecture event-driven avec FastAPI pour l'orchestration",
                    "Kafka pour le streaming d'événements haute-fréquence",
                    "Redis pour la gestion d'état distribuée",
                    "LLM (LangGraph/Pydantic) pour le raisonnement contextuel",
                    "Safety Guardrails : validation Pydantic avant écriture DB",
                    "Workers asynchrones Celery pour traitement parallèle",
                    "Latence de décision < 300ms pour 95% des événements",
                    "Taux de validation : 99.2%"
                ]
            },
            p2: {
                title: "Application de Communication Temps Réel",
                desc: "Plateforme complète avec chat, appels audio et vidéo",
                fullDesc: "Plateforme de communication complète avec chat textuel, appels audio et vidéo. Implémentation WebRTC pour les flux média peer-to-peer, WebSocket pour la synchronisation temps réel, et architecture backend scalable.",
                details: [
                    "Implémentation WebRTC pour streaming audio/vidéo avec latence <100ms",
                    "Architecture WebSocket pour synchronisation multi-utilisateurs",
                    "Gestion de sessions concurrentes et optimisation de la bande passante",
                    "Interface React responsive et intuitive",
                    "Backend Node.js scalable avec Socket.io"
                ]
            }
        },
        skills: {
            title: "Compétences",
            subtitle: "Un arsenal technologique complet pour concevoir des systèmes intelligents et robustes.",
            categories: {
                core: "Systèmes Fondamentaux",
                ai: "Orchestration IA",
                infra: "Infrastructure",
                ml: "ML & Données"
            }
        },
        timeline: {
            title: "Mon Parcours",
            subtitle: "Mon parcours académique et professionnel",
            exp1: {
                title: "Master of Engineering",
                org: "ENSPY",
                desc: "École Nationale Supérieure Polytechnique de Yaoundé - Spécialisation en Intelligence Artificielle et Systèmes Distribués"
            },
            exp2: {
                title: "Stage - Développement Full Stack",
                org: "Projet de Communication Temps Réel",
                desc: "Implémentation WebRTC pour streaming audio/vidéo avec latence <100ms. Architecture WebSocket pour synchronisation multi-utilisateurs."
            },
            exp3: {
                title: "Certification Machine Learning",
                org: "Coursera x Stanford",
                desc: "Supervised Machine Learning: Regression and Classification par Andrew Ng"
            },
            exp4: {
                title: "Bac+2 Mathématiques Pures",
                org: "Université de Ngaoundéré",
                desc: "Formation en mathématiques fondamentales et appliquées"
            }
        },
        activities: {
            title: "Activités Complémentaires",
            items: {
                formations: {
                    title: "Formations",
                    desc: "Certifications en Machine Learning, Deep Learning et Cloud Computing"
                },
                opensource: {
                    title: "Open Source",
                    desc: "Contributions actives à des projets ML et tools communautaires"
                },
                mentorat: {
                    title: "Mentorat",
                    desc: "Accompagnement d'étudiants en programmation et IA"
                },
                veille: {
                    title: "Veille",
                    desc: "Recherche continue sur l'IA et les systèmes distribués"
                }
            }
        },
        contact: {
            title: "Contact",
            subtitle: "Prêt à collaborer sur des projets ambitieux ? Transformons vos idées en réalité.",
            btn: "Me contacter",
            footer: "© 2026 MOMBO DINGBA Emmanuel."
        }
    },
    en: {
        nav: {
            about: "About",
            projects: "Projects",
            skills: "Skills",
            timeline: "Timeline",
            contact: "Contact"
        },
        hero: {
            role1: "Junior ML Engineer",
            role2: "AI Systems Architect",
            role3: "Full Stack Developer",
            cta: "Discover my Portfolio",
            scroll: "Discover"
        },
        about: {
            title: "About Me",
            p1: "Graduate of ENSPY (National Advanced School of Engineering of Yaoundé), I am an ML Engineer specialized in designing intelligent distributed systems and orchestrating autonomous agents.",
            p2: "My expertise focuses on event-driven architecture, trade-offs between latency, determinism, and scalability, as well as integrating Large Language Models (LLMs) into critical production systems.",
            p3: "Passionate about Agentic AI and real-time systems, I work on innovative projects combining FastAPI, Kafka, Redis, LangGraph, and Kubernetes to create scalable and robust solutions."
        },
        projects: {
            title: "Projects",
            subtitle: "Discover my technical achievements and innovations in AI and system development.",
            viewDetails: "View Details",
            techDetails: "Technical Details",
            p1: {
                title: "Autonomous Agentic ERP Bridge",
                desc: "ERP decision-making automation via intelligent agents",
                fullDesc: "Event-driven system for automating ERP decision-making (Inventory & Logistics) via intelligent agents capable of analyzing real-time event streams and executing critical actions with deterministic validation.",
                details: [
                    "Event-driven architecture with FastAPI for orchestration",
                    "Kafka for high-frequency event streaming",
                    "Redis for distributed state management",
                    "LLM (LangGraph/Pydantic) for contextual reasoning",
                    "Safety Guardrails: Pydantic validation before DB write",
                    "Celery asynchronous workers for parallel processing",
                    "Decision latency < 300ms for 95% of events",
                    "Validation rate: 99.2%"
                ]
            },
            p2: {
                title: "Real-Time Communication App",
                desc: "Complete platform with chat, audio, and video calls",
                fullDesc: "Complete communication platform with text chat, audio, and video calls. WebRTC implementation for peer-to-peer media streams, WebSocket for real-time synchronization, and scalable backend architecture.",
                details: [
                    "WebRTC implementation for audio/video streaming with <100ms latency",
                    "WebSocket architecture for multi-user synchronization",
                    "Concurrent session management and bandwidth optimization",
                    "Responsive and intuitive React interface",
                    "Scalable Node.js backend with Socket.io"
                ]
            }
        },
        skills: {
            title: "Skills",
            subtitle: "A complete technological arsenal to design intelligent and robust systems.",
            categories: {
                core: "Core Systems",
                ai: "AI Orchestration",
                infra: "Infrastructure",
                ml: "ML & Data"
            }
        },
        timeline: {
            title: "My Journey",
            subtitle: "My academic and professional background",
            exp1: {
                title: "Master of Engineering",
                org: "ENSPY",
                desc: "National Advanced School of Engineering of Yaoundé - Specialization in Artificial Intelligence and Distributed Systems"
            },
            exp2: {
                title: "Internship - Full Stack Development",
                org: "Real-Time Communication Project",
                desc: "WebRTC implementation for audio/video streaming with <100ms latency. WebSocket architecture for multi-user synchronization."
            },
            exp3: {
                title: "Machine Learning Certification",
                org: "Coursera x Stanford",
                desc: "Supervised Machine Learning: Regression and Classification by Andrew Ng"
            },
            exp4: {
                title: "Associate Degree in Pure Mathematics",
                org: "University of Ngaoundéré",
                desc: "Training in fundamental and applied mathematics"
            }
        },
        activities: {
            title: "Additional Activities",
            items: {
                formations: {
                    title: "Training",
                    desc: "Certifications in Machine Learning, Deep Learning, and Cloud Computing"
                },
                opensource: {
                    title: "Open Source",
                    desc: "Active contributions to ML projects and community tools"
                },
                mentorat: {
                    title: "Mentoring",
                    desc: "Mentoring students in programming and AI"
                },
                veille: {
                    title: "Tech Watch",
                    desc: "Continuous research on AI and distributed systems"
                }
            }
        },
        contact: {
            title: "Contact",
            subtitle: "Ready to collaborate on ambitious projects? Let's turn your ideas into reality.",
            btn: "Contact Me",
            footer: "© 2026 MOMBO DINGBA Emmanuel."
        }
    }
};
