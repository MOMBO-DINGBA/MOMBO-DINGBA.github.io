export const translations = {
    fr: {
        nav: {
            about: "À Propos",
            experience: "Expérience",
            projects: "Projets",
            skills: "Compétences",
            cv: "Mon CV",
            contact: "Contact",
            downloadCv: "Télécharger CV",
            theme: "Thème",
            lang: "Langue"
        },
        hero: {
            badge: "AI Engineer @ HADRON S.A.",
            title: "Concevoir des architectures IA fiables et des systèmes intelligents.",
            subtitle: "Ingénieur en Génie Informatique (ENSPY) et AI Engineer chez HADRON S.A. Spécialisé en systèmes multi-agents, LLMs d'entreprise et architectures événementielles temps réel.",
            downloadCv: "Télécharger mon CV (PDF)",
            viewCv: "Consulter le CV & QR Code",
            exploreProjects: "Voir mes réalisations",
            stats: {
                role: "AI Engineer @ Hadron S.A.",
                degree: "Ingénieur Diplômé ENSPY",
                latency: "< 300ms latence de décision",
                validation: "99.2% validation déterministe"
            },
            chips: {
                currentRole: "HADRON S.A. · AI Engineer",
                multiAgent: "Systèmes Multi-Agents & LLMs 🤖",
                latency: "Latence < 300ms · Event-driven ⚡",
                impact: "IA pour la Santé & l'AgTech 🩺"
            }
        },
        about: {
            title: "À Propos de Moi",
            badge: "Ingénieur & Vision",
            quote: "Transformer la recherche en systèmes réels et robustes, du laboratoire jusqu'au terrain opérationnel.",
            p1: "Ingénieur en Génie Informatique diplômé de l'ENSPY (École Nationale Supérieure Polytechnique de Yaoundé), j'exerce actuellement comme AI Engineer au sein de HADRON S.A.",
            p2: "Mon travail se concentre sur l'architecture de systèmes distribués intelligents, l'orchestration de flux multi-agents événementiels et l'intégration de modèles de langage (LLMs) dans des systèmes d'entreprise critiques (ERP, logistique, aide à la décision en temps réel).",
            p3: "Fort d'une solide formation mathématique (algèbre linéaire, calcul différentiel, probabilités, statistiques et optimisation), j'applique une rigueur scientifique pour concevoir des solutions performantes, déterministes et scalables."
        },
        experience: {
            title: "Expérience Professionnelle",
            subtitle: "Ingénierie de l'IA en entreprise et conception logicielle avancée",
            currentBadge: "Poste Actuel",
            hadron: {
                role: "AI Engineer",
                company: "HADRON S.A.",
                period: "2026 – Présent",
                location: "Yaoundé, Cameroun",
                desc: "En tant qu'Ingénieur IA chez HADRON S.A., je conçois et déploie les composants d'intelligence artificielle et l'architecture multi-agents d'une plateforme logistique connectée à l'ERP d'entreprise.",
                points: [
                    "Conception de l'architecture d'intégration entre composants IA et ERP d'entreprise (Inventory & Logistics)",
                    "Architecture d'un Système Multi-Agents (MAS) coordonnant les services intelligents et optimisant les flux décisionnels",
                    "Intégration d'un assistant conversationnel basé sur les LLMs (NLP / RAG) pour l'assistance à la planification en langage naturel",
                    "Architecture de microservices asynchrones avec Python, FastAPI, PostgreSQL, Redis Streams et conteneurisation Docker",
                    "Mise en place de safety guardrails (validation Pydantic) garantissant un taux de conformité déterministe de 99.2% et une latence < 300ms"
                ],
                tags: ["Python", "LangChain", "LangGraph", "LLMs", "NLP", "Redis Streams", "PostgreSQL", "Docker", "Microservices", "Celery"]
            },
            enspy: {
                role: "Software Engineering Intern",
                company: "ENSPY (Laboratoire de Recherche)",
                period: "Juil 2025 – Sept 2025",
                location: "Yaoundé, Cameroun",
                desc: "Conception et développement d'une plateforme de communication temps réel collaborative avec messagerie et flux vidéo P2P.",
                points: [
                    "Développement des flux audio/vidéo peer-to-peer à très faible latence (<100ms) avec WebRTC",
                    "Architecture WebSocket pour la messagerie instantanée et la synchronisation d'état multi-utilisateurs via Socket.IO",
                    "Développement des APIs REST et architecture backend Node.js scalable",
                    "Méthodologie Agile : sprint planning, revues de code et tests d'intégration"
                ],
                tags: ["React.js", "Node.js", "Socket.IO", "WebRTC", "REST APIs", "Flutter"]
            }
        },
        cvSection: {
            badge: "Document Officiel",
            title: "Curriculum Vitae & QR Code",
            subtitle: "Téléchargez directement mon CV au format PDF ou utilisez le QR code pour charger ce portfolio interactif sur votre mobile.",
            downloadBtn: "Télécharger mon CV (PDF)",
            openBtn: "Ouvrir dans le navigateur",
            printBtn: "Imprimer le CV",
            scanTitle: "QR Code du Portfolio",
            scanDesc: "Scannez ce QR Code avec l'appareil photo de votre smartphone pour naviguer directement sur mombo-dingba.github.io",
            qrBadge: "Lien Direct Portfolio",
            verifiedText: "CV mis à jour — Février 2026 (AI Engineer @ HADRON S.A.)"
        },
        projects: {
            title: "Projets Clés Sélectionnés",
            subtitle: "Systèmes d'IA appliqués, architectures événementielles et pipelines prédictifs",
            p1: {
                badge: "Système Multi-Agents & ERP",
                title: "Autonomous Agentic ERP Bridge",
                desc: "Plateforme décisionnelle événementielle automatisant les flux logistiques ERP via des agents IA coordonnés.",
                points: [
                    "Architecture event-driven orchestrée avec FastAPI et Redis Streams",
                    "Agents autonomes avec raisonnement contextuel LangGraph & validation Pydantic",
                    "Latence de décision < 300ms pour 95% des événements",
                    "Safety guardrails déterministes évitant toute corruption d'état ERP"
                ],
                tech: ["Python", "LangGraph", "Redis Streams", "FastAPI", "PostgreSQL", "Docker"]
            },
            p2: {
                badge: "Temps Réel & P2P",
                title: "Plateforme de Communication Collaborative",
                desc: "Application complète de messagerie instantanée et streaming vidéo pair-à-pair avec synchronisation temps réel.",
                points: [
                    "Flux média WebRTC avec latence sous les 100ms",
                    "Gestion distribuée des sockets et reconnexion automatique",
                    "Interface réactive React et architecture backend Node.js modulaire"
                ],
                tech: ["React.js", "Node.js", "Socket.IO", "WebRTC", "Tailwind CSS"]
            },
            p3: {
                badge: "Machine Learning & Santé",
                title: "Pipeline Prédictif du Diabète",
                desc: "Étude comparative et pipeline ML complet pour le diagnostic prédictif du diabète avec analyse fine de la robustesse.",
                points: [
                    "Prétraitement complet : imputation, détection d'outliers, scaling",
                    "Benchmark de modèles : Random Forest, SVM, Régression Logistique",
                    "Évaluation approfondie : ROC-AUC, F1-score, matrices de confusion et calibration"
                ],
                tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
            },
            p4: {
                badge: "Recherche & Impact",
                title: "IA pour le Diagnostic Médical & l'AgTech",
                desc: "Recherche et prototypes d'IA appliqués aux défis africains : aide au diagnostic en santé et optimisation agricole.",
                points: [
                    "Traitement d'images médicales et analyse de cultures par vision par ordinateur",
                    "Modèles légers adaptés aux environnements aux ressources de calcul contraintes"
                ],
                tech: ["PyTorch", "OpenCV", "Deep Learning", "Transformers"]
            }
        },
        skills: {
            title: "Arsenal Technique",
            subtitle: "Un ensemble équilibré entre théorie mathématique, intelligence artificielle et génie logiciel",
            cat1: {
                title: "IA, LLMs & Multi-Agents",
                desc: "Conception d'agents autonomes, pipelines RAG et modèles d'apprentissage profond",
                items: ["Multi-Agent Systems", "LLMs & RAG", "LangChain / LangGraph", "NLP & Prompt Engineering", "PyTorch / TensorFlow", "Scikit-learn", "Computer Vision (CNNs)", "Transformers"]
            },
            cat2: {
                title: "Backend & Microservices",
                desc: "Architectures distribuées performantes, sécurisées et scalables",
                items: ["Python (FastAPI, Flask, Django)", "Node.js / Express", "Microservices Architecture", "Docker & Conteneurisation", "Linux & Bash", "REST APIs", "Celery Asynchronous Workers"]
            },
            cat3: {
                title: "Données & Streaming Temps Réel",
                desc: "Bases de données relationnelles, vectorielles et streaming événementiel",
                items: ["Redis Streams / In-Memory", "Apache Kafka", "PostgreSQL", "MySQL", "Pandas & NumPy", "Data Pipelines / ETL"]
            },
            cat4: {
                title: "Génie Logiciel & Outils",
                desc: "Bonnes pratiques, collaboration et qualité de code",
                items: ["Git, GitHub, GitLab", "CI/CD & Tests", "React.js & Tailwind CSS", "WebRTC & Socket.IO", "Jupyter & Colab", "LaTeX Documentation"]
            }
        },
        education: {
            title: "Formation Académique & Apprentissage",
            subtitle: "Une solide rigueur scientifique alliée à l'excellence technologique",
            items: [
                {
                    degree: "Diplôme d'Ingénieur en Génie Informatique",
                    school: "École Nationale Supérieure Polytechnique de Yaoundé (ENSPY)",
                    period: "2021 – 2026",
                    location: "Yaoundé, Cameroun",
                    details: "Spécialisation en Intelligence Artificielle, Machine Learning, Systèmes Distribués et Architectures Logicielles Avancées."
                },
                {
                    degree: "Études Universitaires en Mathématiques Pures",
                    school: "Université de Ngaoundéré",
                    period: "2019 – 2021",
                    location: "Ngaoundéré, Cameroun",
                    details: "Algèbre générale et linéaire, Calcul infinitésimal, Probabilités, Statistiques et Optimisation."
                },
                {
                    degree: "Formation Avancée Stanford Online",
                    school: "Stanford Online (Auto-formation continue)",
                    period: "2023 – Présent",
                    location: "En ligne",
                    details: "CS229 (Machine Learning), CS231n (Computer Vision with Deep Learning), CS224n (Natural Language Processing with Deep Learning)."
                }
            ],
            languages: {
                title: "Langues",
                fr: "Français : Langue maternelle",
                en: "Anglais : Capacité professionnelle complète"
            }
        },
        contact: {
            title: "Échangeons Ensemble",
            subtitle: "Vous avez un projet en IA, une opportunité ou souhaitez simplement échanger sur les architectures multi-agents ?",
            emailBtn: "Envoyer un Email",
            phoneBtn: "Appeler / WhatsApp",
            location: "Yaoundé, Cameroun",
            status: "En poste chez HADRON S.A. · Ouvert aux synergies techniques & projets d'impact",
            rights: "© 2026 Emmanuel MOMBO-DINGBA. Tous droits réservés."
        }
    },
    en: {
        nav: {
            about: "About",
            experience: "Experience",
            projects: "Projects",
            skills: "Skills",
            cv: "My CV",
            contact: "Contact",
            downloadCv: "Download CV",
            theme: "Theme",
            lang: "Language"
        },
        hero: {
            badge: "AI Engineer @ HADRON S.A.",
            title: "Designing reliable AI architectures and intelligent systems.",
            subtitle: "Computer Engineer (ENSPY) and AI Engineer at HADRON S.A. Specialized in multi-agent systems, enterprise LLMs, and scalable real-time event-driven pipelines.",
            downloadCv: "Download my CV (PDF)",
            viewCv: "View CV & QR Code",
            exploreProjects: "Explore Projects",
            stats: {
                role: "AI Engineer @ Hadron S.A.",
                degree: "Computer Engineer (ENSPY)",
                latency: "< 300ms multi-agent latency",
                validation: "99.2% deterministic validation"
            },
            chips: {
                currentRole: "HADRON S.A. · AI Engineer",
                multiAgent: "Multi-Agent Systems & LLMs 🤖",
                latency: "Latency < 300ms · Event-driven ⚡",
                impact: "AI for Healthcare & AgTech 🩺"
            }
        },
        about: {
            title: "About Me",
            badge: "Engineer & Vision",
            quote: "Turning research into resilient, real-world systems, from the laboratory to the operational field.",
            p1: "Computer Engineer graduated from ENSPY (National Advanced School of Engineering of Yaoundé), I currently serve as an AI Engineer at HADRON S.A.",
            p2: "My work focuses on architecting intelligent distributed systems, orchestrating event-driven multi-agent workflows, and integrating Large Language Models (LLMs) into critical enterprise environments (ERP, logistics, real-time decision-making).",
            p3: "Backed by a solid mathematical background (linear algebra, calculus, probability, statistics, and optimization), I apply scientific rigor to craft high-performance, deterministic, and scalable systems."
        },
        experience: {
            title: "Professional Experience",
            subtitle: "Enterprise AI Engineering & Advanced Software Systems",
            currentBadge: "Current Role",
            hadron: {
                role: "AI Engineer",
                company: "HADRON S.A.",
                period: "2026 – Present",
                location: "Yaoundé, Cameroon",
                desc: "As an AI Engineer at HADRON S.A., I design and deploy artificial intelligence components and the multi-agent architecture for an intelligent logistics platform integrated with enterprise ERP.",
                points: [
                    "Architected the integration bridge between AI components and enterprise ERP systems (Inventory & Logistics)",
                    "Designed a Multi-Agent System (MAS) coordinating intelligent microservices and optimizing business decisions",
                    "Integrated an enterprise LLM conversational assistant (NLP / RAG) for natural language planning and interaction",
                    "Engineered asynchronous microservices using Python, FastAPI, PostgreSQL, Redis Streams, and Docker containerization",
                    "Enforced deterministic safety guardrails (Pydantic validation) achieving a 99.2% validation rate with <300ms decision latency"
                ],
                tags: ["Python", "LangChain", "LangGraph", "LLMs", "NLP", "Redis Streams", "PostgreSQL", "Docker", "Microservices", "Celery"]
            },
            enspy: {
                role: "Software Engineering Intern",
                company: "ENSPY (Research Laboratory)",
                period: "Jul 2025 – Sep 2025",
                location: "Yaoundé, Cameroon",
                desc: "Designed and developed a real-time collaborative communication platform with messaging and P2P video streaming.",
                points: [
                    "Engineered ultra-low latency (<100ms) peer-to-peer video streaming using WebRTC",
                    "Architected WebSocket infrastructure for real-time messaging and multi-user synchronization with Socket.IO",
                    "Built scalable Node.js backend services and REST APIs",
                    "Practiced Agile teamwork: sprint planning, code reviews, and integration testing"
                ],
                tags: ["React.js", "Node.js", "Socket.IO", "WebRTC", "REST APIs", "Flutter"]
            }
        },
        cvSection: {
            badge: "Official Resume",
            title: "Curriculum Vitae & QR Code",
            subtitle: "Download my complete CV directly in PDF format or scan the QR code to open this interactive portfolio on your mobile device.",
            downloadBtn: "Download CV (PDF)",
            openBtn: "Open in Browser",
            printBtn: "Print CV",
            scanTitle: "Portfolio QR Code",
            scanDesc: "Scan this QR Code with your phone camera to instantly navigate to mombo-dingba.github.io",
            qrBadge: "Direct Portfolio Link",
            verifiedText: "Verified Resume — Updated February 2026 (AI Engineer @ HADRON S.A.)"
        },
        projects: {
            title: "Selected Key Projects",
            subtitle: "Operational AI systems, predictive pipelines, and distributed architectures",
            p1: {
                badge: "Multi-Agent System & ERP",
                title: "Autonomous Agentic ERP Bridge",
                desc: "Event-driven decision system automating logistics workflows via coordinated AI agents with ERP validation.",
                points: [
                    "Event-driven architecture powered by FastAPI and Redis Streams",
                    "Autonomous agents with contextual reasoning via LangGraph and Pydantic validation",
                    "Sub-300ms decision latency on 95% of operational events",
                    "Deterministic safety guardrails preventing state corruption in business databases"
                ],
                tech: ["Python", "LangGraph", "Redis Streams", "FastAPI", "PostgreSQL", "Docker"]
            },
            p2: {
                badge: "Real-Time & P2P",
                title: "Collaborative Communication Platform",
                desc: "Full-stack instant messaging and peer-to-peer video streaming platform with real-time state synchronization.",
                points: [
                    "WebRTC media streams with sub-100ms latency",
                    "Distributed socket management and automated reconnection",
                    "Responsive React frontend paired with modular Node.js backend"
                ],
                tech: ["React.js", "Node.js", "Socket.IO", "WebRTC", "Tailwind CSS"]
            },
            p3: {
                badge: "Machine Learning & Healthcare",
                title: "Diabetes Predictive ML Pipeline",
                desc: "Comparative study and end-to-end ML classification pipeline for diabetes prediction with thorough robustness analysis.",
                points: [
                    "Comprehensive data preprocessing: imputation, outlier treatment, feature scaling",
                    "Model benchmarking: Random Forest, Support Vector Machines, Logistic Regression",
                    "Extensive evaluation: ROC-AUC, F1-score, confusion matrices, and calibration curves"
                ],
                tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
            },
            p4: {
                badge: "Research & Impact",
                title: "AI for Healthcare Diagnostics & AgTech",
                desc: "Applied AI research addressing key challenges: computer vision for medical diagnostics and crop optimization in Africa.",
                points: [
                    "Medical image classification and crop health assessment via computer vision",
                    "Lightweight neural architectures tailored for resource-constrained edge environments"
                ],
                tech: ["PyTorch", "OpenCV", "Deep Learning", "Transformers"]
            }
        },
        skills: {
            title: "Technical Arsenal",
            subtitle: "A balanced synthesis of mathematical theory, artificial intelligence, and software engineering",
            cat1: {
                title: "AI, LLMs & Multi-Agents",
                desc: "Autonomous agents, RAG pipelines, and deep learning architectures",
                items: ["Multi-Agent Systems", "LLMs & RAG", "LangChain / LangGraph", "NLP & Prompt Engineering", "PyTorch / TensorFlow", "Scikit-learn", "Computer Vision (CNNs)", "Transformers"]
            },
            cat2: {
                title: "Backend & Microservices",
                desc: "Scalable, secure, and resilient distributed architectures",
                items: ["Python (FastAPI, Flask, Django)", "Node.js / Express", "Microservices Architecture", "Docker & Containerization", "Linux & Bash", "REST APIs", "Celery Asynchronous Workers"]
            },
            cat3: {
                title: "Data & Real-Time Streaming",
                desc: "Relational, in-memory, vector databases, and event streaming",
                items: ["Redis Streams / In-Memory", "Apache Kafka", "PostgreSQL", "MySQL", "Pandas & NumPy", "Data Pipelines / ETL"]
            },
            cat4: {
                title: "Software Engineering & Tools",
                desc: "Engineering practices, collaboration, and code quality",
                items: ["Git, GitHub, GitLab", "CI/CD & Testing", "React.js & Tailwind CSS", "WebRTC & Socket.IO", "Jupyter & Colab", "LaTeX Documentation"]
            }
        },
        education: {
            title: "Academic Background & Learning",
            subtitle: "Scientific rigor combined with state-of-the-art technological depth",
            items: [
                {
                    degree: "Engineering Degree in Computer Engineering",
                    school: "National Advanced School of Engineering (ENSPY)",
                    period: "2021 – 2026",
                    location: "Yaoundé, Cameroon",
                    details: "Specialization in Artificial Intelligence, Machine Learning, Distributed Systems, and Advanced Software Engineering."
                },
                {
                    degree: "Undergraduate Studies in Pure Mathematics",
                    school: "University of Ngaoundéré",
                    period: "2019 – 2021",
                    location: "Ngaoundéré, Cameroon",
                    details: "Abstract & Linear Algebra, Real Analysis, Topology, Probability, Statistics, and Optimization."
                },
                {
                    degree: "Advanced Stanford Online Curriculum",
                    school: "Stanford Online (Continuous Self-Directed Study)",
                    period: "2023 – Present",
                    location: "Online",
                    details: "CS229 (Machine Learning), CS231n (Computer Vision with Deep Learning), CS224n (Natural Language Processing with Deep Learning)."
                }
            ],
            languages: {
                title: "Languages",
                fr: "French: Native proficiency",
                en: "English: Full professional working proficiency"
            }
        },
        contact: {
            title: "Let's Connect",
            subtitle: "Interested in enterprise AI, multi-agent systems, or collaborating on high-impact solutions?",
            emailBtn: "Send an Email",
            phoneBtn: "Call / WhatsApp",
            location: "Yaoundé, Cameroon",
            status: "Currently at HADRON S.A. · Open to technical synergies & impactful projects",
            rights: "© 2026 Emmanuel MOMBO-DINGBA. All rights reserved."
        }
    }
};
