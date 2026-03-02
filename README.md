# Portfolio MOMBO - Junior ML Engineer

Portfolio minimaliste inspiré du design "Stanley Wong" - Fond noir pur, typographie épurée, focus sur l'expertise technique.

## 🚀 Démarrage Rapide

### Prérequis
- Node.js (v18 ou supérieur)
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

## 📦 Technologies Utilisées

- **React 18** - Framework UI
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Styling utilitaire
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes minimalistes

## 🎨 Design System

### Palette de Couleurs
- **Fond**: `#000000` (Noir pur)
- **Texte principal**: `#FFFFFF` (Blanc pur)
- **Texte secondaire**: `#A1A1AA` (Zinc-400)
- **Bordures**: `#1F1F23` (Gris très foncé)

### Typographie
- **Sans-serif**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono (Google Fonts)

## 📁 Structure du Projet

```
portfolio-mombo/
├── src/
│   ├── App.jsx          # Composant principal avec toutes les sections
│   ├── main.jsx         # Point d'entrée React
│   └── index.css        # Styles globaux + Tailwind
├── index.html           # Template HTML
├── package.json         # Dépendances
├── vite.config.js       # Configuration Vite
├── tailwind.config.js   # Configuration Tailwind
└── postcss.config.js    # Configuration PostCSS
```

## 🌐 Déploiement sur GitHub Pages

### Configuration

1. **Créer un repository GitHub** nommé `portfolio-mombo`

2. **Initialiser Git et pousser le code**:
```bash
git init
git add .
git commit -m "Initial commit: Portfolio minimaliste"
git branch -M main
git remote add origin https://github.com/MOMBO-DINGBA/portfolio-mombo.git
git push -u origin main
```

3. **Installer gh-pages** (déjà inclus dans package.json):
```bash
npm install
```

4. **Déployer**:
```bash
npm run deploy
```

5. **Activer GitHub Pages**:
   - Aller dans Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Sauvegarder

Votre portfolio sera accessible à: `https://mombo-dingba.github.io/portfolio-mombo/`

### Mises à jour

Pour mettre à jour le portfolio:
```bash
npm run deploy
```

## ✨ Fonctionnalités

- ✅ Design ultra-minimaliste noir/blanc
- ✅ Animations au scroll avec Framer Motion
- ✅ Section "Deep Dive" sur le projet Agentic ERP
- ✅ Diagramme ASCII du flux système
- ✅ Stack technique organisée par catégories
- ✅ Responsive design (mobile-first)
- ✅ Performance optimisée
- ✅ SEO-friendly

## 🔧 Personnalisation

### Modifier les informations personnelles

Éditer `src/App.jsx` et modifier:
- Nom, titre dans la section `Hero`
- Projets dans `ProjectDeepDive` et `OtherProjects`
- Stack technique dans `TechnicalStack`
- Formation/Expérience dans `ExperienceEducation`
- Liens sociaux dans `Footer`

### Modifier les couleurs

Éditer `tailwind.config.js` dans la section `theme.extend.colors`

### Ajouter des sections

Créer de nouveaux composants dans `App.jsx` et les ajouter dans le composant principal

## 📝 Notes Techniques

- **Latence de décision**: Optimisée pour < 300ms
- **Validation rate**: 99.2% avec Safety Guardrails
- **Architecture**: Event-driven avec Kafka + Redis
- **Scalabilité**: Horizontal scaling via Kubernetes

## 📧 Contact

- **Email**: emmamombo79@gmail.com
- **LinkedIn**: [Emmanuel MOMBO DINGBA](https://www.linkedin.com/in/emmanuel-mombo-dingba-56285b234)
- **GitHub**: [@MOMBO-DINGBA](https://github.com/MOMBO-DINGBA)

---

**© 2026 MOMBO. Conçu avec précision et minimalisme.**
