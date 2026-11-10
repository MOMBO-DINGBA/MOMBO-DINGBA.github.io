const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb, StandardFonts, PDFString } = require('pdf-lib');
const QRCode = require('qrcode');

async function buildCv({ lang = 'en' } = {}) {
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);
  const fontBoldOblique = await pdfDoc.embedFont(StandardFonts.HelveticaBoldOblique);

  // Generate QR code pointing to online portfolio
  const qrBuffer = await QRCode.toBuffer('https://mombo-dingba.github.io/', {
    type: 'png',
    margin: 1,
    width: 300,
    color: {
      dark: '#0C3E37', // WhatsApp dark forest
      light: '#FFFFFF'
    }
  });
  const qrImage = await pdfDoc.embedPng(qrBuffer);

  // Color Palette (Clean Executive Tech / WhatsApp Forest & Slate)
  const primaryColor = rgb(12/255, 62/255, 55/255);    // #0C3E37 Forest Green
  const accentColor = rgb(0/255, 168/255, 132/255);     // #00A884 Emerald
  const darkTextColor = rgb(17/255, 27/255, 33/255);    // #111B21 Deep Charcoal
  const bodyTextColor = rgb(51/255, 65/255, 85/255);    // #334155 Slate
  const lightTextColor = rgb(100/255, 116/255, 139/255);// #64748B Light Slate
  const ruleColor = rgb(203/255, 213/255, 225/255);     // #CBD5E1 Light Divider
  const cardBgColor = rgb(248/255, 250/255, 249/255);   // Soft warm surface

  const pageWidth = 595.28; // A4 width
  const pageHeight = 841.89; // A4 height
  const marginX = 40;
  const contentWidth = pageWidth - marginX * 2; // 515.28

  function addLink(page, x, y, width, height, url) {
    const linkAnnot = pdfDoc.context.obj({
      Type: 'Annot',
      Subtype: 'Link',
      Rect: [x, y, x + width, y + height],
      Border: [0, 0, 0],
      A: {
        Type: 'Action',
        S: 'URI',
        URI: PDFString.of(url),
      },
    });
    const ref = pdfDoc.context.register(linkAnnot);
    page.node.addAnnot(ref);
  }

  function wrapText(text, maxWidth, font, size) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  function drawSectionTitle(page, title, yPos) {
    yPos -= 14;
    page.drawText(title.toUpperCase(), {
      x: marginX,
      y: yPos,
      size: 9.5,
      font: fontBold,
      color: primaryColor,
    });
    yPos -= 4;
    page.drawLine({
      start: { x: marginX, y: yPos },
      end: { x: pageWidth - marginX, y: yPos },
      thickness: 1,
      color: primaryColor,
    });
    return yPos - 10;
  }

  // ==============================================================
  // PAGE 1
  // ==============================================================
  const page1 = pdfDoc.addPage([pageWidth, pageHeight]);
  let y = pageHeight - 36;

  // Header Left: Name & Title
  page1.drawText('Emmanuel Mombo-Dingba', {
    x: marginX,
    y: y,
    size: 21,
    font: fontBold,
    color: darkTextColor,
  });

  y -= 17;
  const titleText = lang === 'en'
    ? 'Computer Engineer  |  AI & Machine Learning Engineer'
    : 'Ingénieur en Génie Informatique  |  Ingénieur IA & Machine Learning';
  page1.drawText(titleText, {
    x: marginX,
    y: y,
    size: 10.5,
    font: fontBold,
    color: primaryColor,
  });

  y -= 15;
  // Current role badge
  const badgeText = lang === 'en'
    ? 'Currently AI Engineer @ HADRON S.A.'
    : 'Actuellement AI Engineer chez HADRON S.A.';
  const badgeWidth = fontBold.widthOfTextAtSize(badgeText, 9) + 12;
  page1.drawRectangle({
    x: marginX,
    y: y - 2,
    width: badgeWidth,
    height: 14,
    color: rgb(240/255, 253/255, 244/255),
    borderColor: rgb(74/255, 222/255, 128/255),
    borderWidth: 0.75,
  });
  page1.drawText(badgeText, {
    x: marginX + 6,
    y: y + 2,
    size: 8.5,
    font: fontBold,
    color: rgb(15/255, 118/255, 110/255),
  });

  // Contacts
  y -= 14;
  const c1Text = 'Yaounde, Cameroon   •   +237 653 867 570   •   mombodingba.emmanuel@gmail.com';
  page1.drawText(c1Text, {
    x: marginX,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: bodyTextColor,
  });
  addLink(page1, marginX + 115, y - 2, 75, 11, 'tel:+237653867570');
  addLink(page1, marginX + 205, y - 2, 145, 11, 'mailto:mombodingba.emmanuel@gmail.com');

  y -= 12;
  const c2Text = 'github.com/MOMBO-DINGBA   •   linkedin.com/in/emmanuel-mombo-dingba   •   mombo-dingba.github.io';
  page1.drawText(c2Text, {
    x: marginX,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: primaryColor,
  });
  addLink(page1, marginX, y - 2, 110, 11, 'https://github.com/MOMBO-DINGBA');
  addLink(page1, marginX + 125, y - 2, 150, 11, 'https://linkedin.com/in/emmanuel-mombo-dingba-56285b234');
  addLink(page1, marginX + 290, y - 2, 110, 11, 'https://mombo-dingba.github.io/');

  // Header Right: Elegant QR Code Box
  const qrBoxSize = 64;
  const qrBoxX = pageWidth - marginX - qrBoxSize;
  const qrBoxY = pageHeight - 36 - qrBoxSize + 8;

  page1.drawRectangle({
    x: qrBoxX - 6,
    y: qrBoxY - 14,
    width: qrBoxSize + 12,
    height: qrBoxSize + 22,
    color: cardBgColor,
    borderColor: ruleColor,
    borderWidth: 0.75,
  });
  page1.drawImage(qrImage, {
    x: qrBoxX,
    y: qrBoxY,
    width: qrBoxSize,
    height: qrBoxSize,
  });
  const qrLabel = lang === 'en' ? 'SCAN PORTFOLIO' : 'SCANNER PORTFOLIO';
  const qrLabelWidth = fontBold.widthOfTextAtSize(qrLabel, 6);
  page1.drawText(qrLabel, {
    x: qrBoxX + (qrBoxSize - qrLabelWidth) / 2,
    y: qrBoxY - 7,
    size: 6,
    font: fontBold,
    color: primaryColor,
  });
  const qrUrlText = 'mombo-dingba.github.io';
  const qrUrlWidth = fontRegular.widthOfTextAtSize(qrUrlText, 5.5);
  page1.drawText(qrUrlText, {
    x: qrBoxX + (qrBoxSize - qrUrlWidth) / 2,
    y: qrBoxY - 13,
    size: 5.5,
    font: fontRegular,
    color: lightTextColor,
  });
  addLink(page1, qrBoxX - 6, qrBoxY - 14, qrBoxSize + 12, qrBoxSize + 22, 'https://mombo-dingba.github.io/');

  // Main Divider
  y -= 14;
  page1.drawLine({
    start: { x: marginX, y: y },
    end: { x: pageWidth - marginX, y: y },
    thickness: 1.5,
    color: primaryColor,
  });

  // Section: PROFILE
  const profileHeading = lang === 'en' ? 'Profile' : 'Profil Professionnel';
  y = drawSectionTitle(page1, profileHeading, y);

  const profileBody = lang === 'en'
    ? "Computer Engineer (ENSPY) and AI Engineer at HADRON S.A. with proven expertise in Artificial Intelligence, Machine Learning, Multi-Agent Systems, and enterprise Large Language Models (LLMs). Experienced in designing and integrating AI-driven solutions into production systems (ERP, microservices, real-time event-driven pipelines). Solid mathematical foundation (Linear Algebra, Calculus, Probability, Statistics, Optimization) combined with advanced proficiency in Python, FastAPI, Docker, and modern ML/DL frameworks."
    : "Ingénieur en Génie Informatique (ENSPY) et AI Engineer chez HADRON S.A., spécialisé en Intelligence Artificielle, Machine Learning, Systèmes Multi-Agents et intégration de modèles de langage (LLMs) d'entreprise. Expérimenté dans la conception et le déploiement de solutions d'IA en production (ERP, microservices, pipelines événementiels temps réel). Solide socle mathématique (Algèbre linéaire, Calcul, Probabilités, Statistiques, Optimisation) combiné à une maîtrise éprouvée de Python, FastAPI, Docker et des frameworks ML/DL.";

  const profileLines = wrapText(profileBody, contentWidth, fontRegular, 8.8);
  for (const line of profileLines) {
    page1.drawText(line, {
      x: marginX,
      y: y,
      size: 8.8,
      font: fontRegular,
      color: bodyTextColor,
    });
    y -= 12;
  }
  y -= 3;

  // Section: EDUCATION
  const eduHeading = lang === 'en' ? 'Education' : 'Formation Académique';
  y = drawSectionTitle(page1, eduHeading, y);

  // ENSPY
  page1.drawText('National Advanced School of Engineering (ENSPY)', {
    x: marginX,
    y: y,
    size: 9.3,
    font: fontBold,
    color: darkTextColor,
  });
  const loc1 = 'Yaounde, Cameroon';
  page1.drawText(loc1, {
    x: pageWidth - marginX - fontRegular.widthOfTextAtSize(loc1, 8.5),
    y: y,
    size: 8.5,
    font: fontRegular,
    color: lightTextColor,
  });
  y -= 11.5;

  const deg1 = lang === 'en' ? 'Engineering Degree in Computer Engineering' : 'Diplôme d\'Ingénieur en Génie Informatique';
  page1.drawText(deg1, {
    x: marginX,
    y: y,
    size: 8.8,
    font: fontOblique,
    color: primaryColor,
  });
  const date1 = '2021 – 2026';
  page1.drawText(date1, {
    x: pageWidth - marginX - fontBold.widthOfTextAtSize(date1, 8.5),
    y: y,
    size: 8.5,
    font: fontBold,
    color: darkTextColor,
  });
  y -= 14;

  // University of Ngaoundere
  page1.drawText('University of Ngaoundere', {
    x: marginX,
    y: y,
    size: 9.3,
    font: fontBold,
    color: darkTextColor,
  });
  const loc2 = 'Ngaoundere, Cameroon';
  page1.drawText(loc2, {
    x: pageWidth - marginX - fontRegular.widthOfTextAtSize(loc2, 8.5),
    y: y,
    size: 8.5,
    font: fontRegular,
    color: lightTextColor,
  });
  y -= 11.5;

  const deg2 = lang === 'en' ? 'Undergraduate Studies in Pure Mathematics' : 'Études Universitaires en Mathématiques Pures';
  page1.drawText(deg2, {
    x: marginX,
    y: y,
    size: 8.8,
    font: fontOblique,
    color: primaryColor,
  });
  const date2 = '2019 – 2021';
  page1.drawText(date2, {
    x: pageWidth - marginX - fontBold.widthOfTextAtSize(date2, 8.5),
    y: y,
    size: 8.5,
    font: fontBold,
    color: darkTextColor,
  });
  y -= 15;

  // Section: TECHNICAL SKILLS
  const skillsHeading = lang === 'en' ? 'Technical Skills' : 'Compétences Techniques';
  y = drawSectionTitle(page1, skillsHeading, y);

  const skillsData = lang === 'en' ? [
    { label: 'Programming:', val: 'Python, SQL, JavaScript, TypeScript, Java, Bash' },
    { label: 'AI & Machine Learning:', val: 'Machine Learning, Deep Learning, NLP, Large Language Models (LLMs), RAG, Multi-Agent Systems' },
    { label: 'Deep Learning:', val: 'Neural Networks, CNNs, RNNs, LSTMs, Transformers, Attention Mechanisms' },
    { label: 'Frameworks & Libraries:', val: 'PyTorch, TensorFlow, Keras, Scikit-learn, LangChain, LangGraph, Pandas, NumPy, OpenCV' },
    { label: 'Data & Visualization:', val: 'PostgreSQL, MySQL, Redis, Redis Streams, Kafka, Matplotlib, Seaborn' },
    { label: 'Software & Deployment:', val: 'Git, GitHub, GitLab, Docker, Linux, REST APIs, Microservices, Celery, Jupyter, Google Colab' },
  ] : [
    { label: 'Programmation :', val: 'Python, SQL, JavaScript, TypeScript, Java, Bash' },
    { label: 'IA & Machine Learning :', val: 'Machine Learning, Deep Learning, NLP, Grands Modèles de Langage (LLMs), RAG, Systèmes Multi-Agents' },
    { label: 'Deep Learning :', val: 'Réseaux de Neurones, CNNs, RNNs, LSTMs, Transformers, Mécanismes d\'Attention' },
    { label: 'Frameworks & Outils :', val: 'PyTorch, TensorFlow, Keras, Scikit-learn, LangChain, LangGraph, Pandas, NumPy, OpenCV' },
    { label: 'Données & Streaming :', val: 'PostgreSQL, MySQL, Redis, Redis Streams, Kafka, Matplotlib, Seaborn' },
    { label: 'Systèmes & Déploiement :', val: 'Git, GitHub, GitLab, Docker, Linux, APIs REST, Microservices, Celery, Jupyter, Google Colab' },
  ];

  for (const item of skillsData) {
    page1.drawText(item.label, {
      x: marginX,
      y: y,
      size: 8.5,
      font: fontBold,
      color: darkTextColor,
    });
    const labelWidth = fontBold.widthOfTextAtSize(item.label, 8.5) + 6;
    page1.drawText(item.val, {
      x: marginX + labelWidth,
      y: y,
      size: 8.3,
      font: fontRegular,
      color: bodyTextColor,
    });
    y -= 12;
  }
  y -= 4;

  // Section: PROFESSIONAL EXPERIENCE
  const expHeading = lang === 'en' ? 'Professional Experience' : 'Expérience Professionnelle';
  y = drawSectionTitle(page1, expHeading, y);

  // HADRON S.A.
  page1.drawText('AI Engineer', {
    x: marginX,
    y: y,
    size: 10,
    font: fontBold,
    color: darkTextColor,
  });
  const hadronBadge = lang === 'en' ? '[CURRENT POSITION]' : '[POSTE ACTUEL]';
  page1.drawText(hadronBadge, {
    x: marginX + 68,
    y: y + 0.5,
    size: 7.5,
    font: fontBold,
    color: rgb(16/255, 128/255, 64/255),
  });
  const hadronDate = lang === 'en' ? 'Feb 2026 – Present' : 'Fév 2026 – Présent';
  page1.drawText(hadronDate, {
    x: pageWidth - marginX - fontBold.widthOfTextAtSize(hadronDate, 8.8),
    y: y,
    size: 8.8,
    font: fontBold,
    color: darkTextColor,
  });
  y -= 11.5;

  page1.drawText('HADRON S.A.', {
    x: marginX,
    y: y,
    size: 9,
    font: fontBoldOblique,
    color: primaryColor,
  });
  const hadronLoc = 'Yaounde, Cameroon';
  page1.drawText(hadronLoc, {
    x: pageWidth - marginX - fontRegular.widthOfTextAtSize(hadronLoc, 8.5),
    y: y,
    size: 8.5,
    font: fontRegular,
    color: lightTextColor,
  });
  y -= 12;

  const hadronBullets = lang === 'en' ? [
    'Contributed to the design and implementation of an intelligent logistics platform integrated with an enterprise ERP system.',
    'Designed and integrated AI-driven components to support the automation and optimization of logistics workflows.',
    'Worked on a Multi-Agent System (MAS) architecture coordinating intelligent services and automating business processes.',
    'Integrated a conversational AI assistant based on Large Language Models (LLMs) and NLP for natural-language interaction and planning assistance.',
    'Contributed to the software architecture of AI services using Python, PostgreSQL, Redis Streams and microservices.',
  ] : [
    'Conception et implémentation de l\'architecture d\'une plateforme logistique intelligente interconnectée à un ERP d\'entreprise.',
    'Conception et intégration de composants IA pour soutenir l\'automatisation et l\'optimisation des flux décisionnels logistiques.',
    'Architecture d\'un Système Multi-Agents (MAS) coordonnant les microservices intelligents et automatisant les processus métiers critiques.',
    'Intégration d\'un assistant IA conversationnel basé sur les LLMs et le NLP pour l\'interaction en langage naturel et l\'aide à la planification.',
    'Contribution à l\'architecture logicielle des services IA avec Python, PostgreSQL, Redis Streams et microservices.',
  ];

  for (const bullet of hadronBullets) {
    page1.drawText('•', { x: marginX + 4, y: y, size: 8, font: fontBold, color: primaryColor });
    const bLines = wrapText(bullet, contentWidth - 16, fontRegular, 8.3);
    for (let bi = 0; bi < bLines.length; bi++) {
      page1.drawText(bLines[bi], {
        x: marginX + 15,
        y: y,
        size: 8.3,
        font: fontRegular,
        color: bodyTextColor,
      });
      y -= 11;
    }
  }

  const hadronTech = lang === 'en'
    ? 'Technologies: Python, LangChain, LangGraph, LLMs, NLP, PostgreSQL, Redis Streams, Docker, Microservices, Celery'
    : 'Technologies : Python, LangChain, LangGraph, LLMs, NLP, PostgreSQL, Redis Streams, Docker, Microservices, Celery';
  page1.drawText(hadronTech, {
    x: marginX + 15,
    y: y,
    size: 7.8,
    font: fontBoldOblique,
    color: primaryColor,
  });

  // Footer Page 1
  page1.drawText('1', {
    x: pageWidth / 2 - 2,
    y: 22,
    size: 9,
    font: fontRegular,
    color: lightTextColor,
  });

  // ==============================================================
  // PAGE 2
  // ==============================================================
  const page2 = pdfDoc.addPage([pageWidth, pageHeight]);
  y = pageHeight - 36;

  // Running Header Page 2
  const runHead = lang === 'en'
    ? 'Emmanuel Mombo-Dingba  |  Curriculum Vitae  |  https://mombo-dingba.github.io/'
    : 'Emmanuel Mombo-Dingba  |  Curriculum Vitae  |  https://mombo-dingba.github.io/';
  page2.drawText(runHead, {
    x: marginX,
    y: y,
    size: 8,
    font: fontRegular,
    color: lightTextColor,
  });
  page2.drawText('2 / 2', {
    x: pageWidth - marginX - fontRegular.widthOfTextAtSize('2 / 2', 8),
    y: y,
    size: 8,
    font: fontRegular,
    color: lightTextColor,
  });
  y -= 6;
  page2.drawLine({
    start: { x: marginX, y: y },
    end: { x: pageWidth - marginX, y: y },
    thickness: 0.5,
    color: ruleColor,
  });
  y -= 8;

  // ENSPY Internship
  page2.drawText('Software Engineering Intern', {
    x: marginX,
    y: y,
    size: 9.8,
    font: fontBold,
    color: darkTextColor,
  });
  const enspyDate = 'Jul 2025 – Sep 2025';
  page2.drawText(enspyDate, {
    x: pageWidth - marginX - fontBold.widthOfTextAtSize(enspyDate, 8.8),
    y: y,
    size: 8.8,
    font: fontBold,
    color: darkTextColor,
  });
  y -= 11.5;

  page2.drawText('National Advanced School of Engineering (ENSPY)', {
    x: marginX,
    y: y,
    size: 9,
    font: fontBoldOblique,
    color: primaryColor,
  });
  const enspyLoc = 'Yaounde, Cameroon';
  page2.drawText(enspyLoc, {
    x: pageWidth - marginX - fontRegular.widthOfTextAtSize(enspyLoc, 8.5),
    y: y,
    size: 8.5,
    font: fontRegular,
    color: lightTextColor,
  });
  y -= 12;

  const enspyBullets = lang === 'en' ? [
    'Developed a real-time communication platform supporting messaging and peer-to-peer video communication.',
    'Implemented real-time communication using Socket.IO and WebRTC protocols with sub-100ms latency.',
    'Contributed to backend architecture, REST APIs and real-time data synchronization.',
    'Collaborated in an Agile development environment through sprint planning, code reviews and technical discussions.',
  ] : [
    'Développement d\'une plateforme de communication temps réel supportant messagerie instantanée et vidéo peer-to-peer (P2P).',
    'Implémentation des flux temps réel via les protocoles Socket.IO et WebRTC avec une latence inférieure à 100ms.',
    'Contribution à l\'architecture backend, conception des APIs REST et synchronisation des données temps réel.',
    'Collaboration au sein d\'un environnement Agile : sprint planning, revues de code et discussions techniques approfondies.',
  ];

  for (const bullet of enspyBullets) {
    page2.drawText('•', { x: marginX + 4, y: y, size: 8, font: fontBold, color: primaryColor });
    const bLines = wrapText(bullet, contentWidth - 16, fontRegular, 8.3);
    for (let bi = 0; bi < bLines.length; bi++) {
      page2.drawText(bLines[bi], {
        x: marginX + 15,
        y: y,
        size: 8.3,
        font: fontRegular,
        color: bodyTextColor,
      });
      y -= 11;
    }
  }

  const enspyTech = 'Technologies: React.js, Node.js, Socket.IO, WebRTC, REST APIs, Flutter';
  page2.drawText(enspyTech, {
    x: marginX + 15,
    y: y,
    size: 7.8,
    font: fontBoldOblique,
    color: primaryColor,
  });
  y -= 14;

  // Section: SELECTED AI PROJECTS
  const projHeading = lang === 'en' ? 'Selected AI Projects' : 'Projets IA Sélectionnés';
  y = drawSectionTitle(page2, projHeading, y);

  // Project 1: Autonomous Agentic ERP Bridge
  page2.drawText('Autonomous Agentic ERP Bridge & Logistics Assistant', {
    x: marginX,
    y: y,
    size: 9.3,
    font: fontBold,
    color: darkTextColor,
  });
  page2.drawText('HADRON S.A.', {
    x: pageWidth - marginX - fontBold.widthOfTextAtSize('HADRON S.A.', 8.5),
    y: y,
    size: 8.5,
    font: fontBold,
    color: accentColor,
  });
  y -= 11.5;

  const p1Bullets = lang === 'en' ? [
    'Event-driven autonomous system automating ERP decision-making (Inventory & Logistics) via intelligent reasoning agents.',
    'Engineered Redis Streams streaming pipeline, LangGraph contextual reasoning, and Pydantic deterministic safety guardrails.',
    'Maintains sub-300ms decision latency on 95% of operational events with a 99.2% automated validation rate.',
    'Technologies: Python, FastAPI, LangGraph, Redis Streams, PostgreSQL, Docker, Celery'
  ] : [
    'Système événementiel autonome pour l\'automatisation des décisions ERP (Stocks & Logistique) via des agents intelligents.',
    'Streaming haute fréquence Redis Streams, raisonnement contextuel LangGraph et guardrails déterministes Pydantic.',
    'Maintien d\'une latence de décision < 300ms sur 95% des événements avec un taux de validation de 99.2%.',
    'Technologies : Python, FastAPI, LangGraph, Redis Streams, PostgreSQL, Docker, Celery'
  ];

  for (let i = 0; i < p1Bullets.length; i++) {
    const isTech = i === p1Bullets.length - 1;
    if (isTech) {
      page2.drawText(p1Bullets[i], {
        x: marginX + 15,
        y: y,
        size: 7.8,
        font: fontBoldOblique,
        color: primaryColor,
      });
      y -= 12;
    } else {
      page2.drawText('•', { x: marginX + 4, y: y, size: 8, font: fontBold, color: primaryColor });
      const bLines = wrapText(p1Bullets[i], contentWidth - 16, fontRegular, 8.3);
      for (const bl of bLines) {
        page2.drawText(bl, { x: marginX + 15, y: y, size: 8.3, font: fontRegular, color: bodyTextColor });
        y -= 11;
      }
    }
  }

  // Project 2: Diabetes Prediction
  page2.drawText('Diabetes Prediction Using Machine Learning', {
    x: marginX,
    y: y,
    size: 9.3,
    font: fontBold,
    color: darkTextColor,
  });
  page2.drawText('Open Source / ML Lab', {
    x: pageWidth - marginX - fontRegular.widthOfTextAtSize('Open Source / ML Lab', 8.5),
    y: y,
    size: 8.5,
    font: fontRegular,
    color: lightTextColor,
  });
  y -= 11.5;

  const p2Bullets = lang === 'en' ? [
    'Developed and compared multiple classification models including Logistic Regression, Support Vector Machines and Random Forest.',
    'Performed exploratory data analysis, feature analysis and preprocessing including missing-value handling, outlier analysis and feature scaling.',
    'Evaluated model performance using Accuracy, Precision, Recall, F1-score and ROC-AUC metrics.',
    'Technologies: Python, Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn'
  ] : [
    'Développement et comparaison de plusieurs modèles de classification : Régression Logistique, SVM et Random Forest.',
    'Analyse exploratoire des données, traitement des valeurs aberrantes et manquantes, normalisation et ingénierie des caractéristiques.',
    'Évaluation rigoureuse des modèles : Précision, Rappel, F1-score, courbes ROC-AUC et calibration.',
    'Technologies : Python, Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn'
  ];

  for (let i = 0; i < p2Bullets.length; i++) {
    const isTech = i === p2Bullets.length - 1;
    if (isTech) {
      page2.drawText(p2Bullets[i], {
        x: marginX + 15,
        y: y,
        size: 7.8,
        font: fontBoldOblique,
        color: primaryColor,
      });
      y -= 13;
    } else {
      page2.drawText('•', { x: marginX + 4, y: y, size: 8, font: fontBold, color: primaryColor });
      const bLines = wrapText(p2Bullets[i], contentWidth - 16, fontRegular, 8.3);
      for (const bl of bLines) {
        page2.drawText(bl, { x: marginX + 15, y: y, size: 8.3, font: fontRegular, color: bodyTextColor });
        y -= 11;
      }
    }
  }

  // Section: AI & MACHINE LEARNING KNOWLEDGE
  const knowHeading = lang === 'en' ? 'AI & Machine Learning Knowledge' : 'Connaissances Approfondies en IA & ML';
  y = drawSectionTitle(page2, knowHeading, y);

  const knowledgeData = lang === 'en' ? [
    { label: 'Machine Learning:', val: 'Supervised and Unsupervised Learning, Classification, Regression, Model Evaluation, Feature Engineering' },
    { label: 'Deep Learning:', val: 'Neural Networks, CNNs, RNNs, LSTMs, Transformers, Spatial Attention' },
    { label: 'Natural Language Processing:', val: 'Text Processing, Language Models, Large Language Models, Prompt Engineering, Retrieval-Augmented Generation' },
    { label: 'Mathematical Foundation:', val: 'Linear Algebra, Calculus, Probability, Statistics and Optimization' },
  ] : [
    { label: 'Machine Learning :', val: 'Apprentissage Supervisé et Non Supervisé, Classification, Régression, Évaluation de Modèles, Feature Engineering' },
    { label: 'Deep Learning :', val: 'Réseaux de Neurones, CNNs, RNNs, LSTMs, Transformers, Attention Spatiale' },
    { label: 'Traitement du Langage (NLP) :', val: 'Modèles de Langage, Grands Modèles de Langage (LLMs), Prompt Engineering, RAG (Retrieval-Augmented Generation)' },
    { label: 'Socle Mathématique :', val: 'Algèbre Linéaire, Calcul Infinitésimal, Probabilités, Statistiques et Optimisation' },
  ];

  for (const item of knowledgeData) {
    page2.drawText(item.label, {
      x: marginX,
      y: y,
      size: 8.4,
      font: fontBold,
      color: darkTextColor,
    });
    const labelWidth = fontBold.widthOfTextAtSize(item.label, 8.4) + 6;
    page2.drawText(item.val, {
      x: marginX + labelWidth,
      y: y,
      size: 8.2,
      font: fontRegular,
      color: bodyTextColor,
    });
    y -= 12;
  }
  y -= 4;

  // Section: ADDITIONAL AI/ML TRAINING (Stanford Online)
  const trainHeading = lang === 'en' ? 'Additional AI/ML Training' : 'Formation Continue & Ressources Stanford Online';
  y = drawSectionTitle(page2, trainHeading, y);

  page2.drawText('Self-Directed Study Using Stanford Online Resources', {
    x: marginX,
    y: y,
    size: 9,
    font: fontBold,
    color: darkTextColor,
  });
  page2.drawText('2023 – Present', {
    x: pageWidth - marginX - fontBold.widthOfTextAtSize('2023 – Present', 8.5),
    y: y,
    size: 8.5,
    font: fontBold,
    color: darkTextColor,
  });
  y -= 11.5;

  const stanfordBullets = lang === 'en' ? [
    'Machine Learning concepts inspired by CS229 (Supervised/Unsupervised Learning, Kernel Methods, Learning Theory).',
    'Deep Learning & Computer Vision concepts inspired by CS231n (Convolutional Networks, Spatial Features, Object Detection).',
    'Natural Language Processing concepts inspired by CS224n (Word Embeddings, Transformers, Attention Mechanisms, LLMs).',
  ] : [
    'Concepts de Machine Learning inspirés de Stanford CS229 (Apprentissage supervisé/non supervisé, méthodes à noyaux, théorie de l\'apprentissage).',
    'Deep Learning & Vision par Ordinateur inspirés de Stanford CS231n (Réseaux convolutifs, attention spatiale, classification d\'images).',
    'Traitement Automatique du Langage Naturel inspiré de Stanford CS224n (Plongements lexicaux, architectures Transformers, LLMs).',
  ];

  for (const b of stanfordBullets) {
    page2.drawText('•', { x: marginX + 4, y: y, size: 8, font: fontBold, color: primaryColor });
    page2.drawText(b, {
      x: marginX + 15,
      y: y,
      size: 8.2,
      font: fontRegular,
      color: bodyTextColor,
    });
    y -= 11;
  }
  y -= 4;

  // Section: LANGUAGES & INTERESTS
  const langHeading = lang === 'en' ? 'Languages & Core Interests' : 'Langues & Domaines d\'Intérêt';
  y = drawSectionTitle(page2, langHeading, y);

  const langText = lang === 'en' ? 'French: Native      English: Professional working proficiency' : 'Français : Langue maternelle      Anglais : Capacité professionnelle complète';
  page2.drawText(langText, {
    x: marginX,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: darkTextColor,
  });
  y -= 13;

  const interestLabel = lang === 'en' ? 'Research Interests:' : 'Centres d\'intérêt :';
  page2.drawText(interestLabel, {
    x: marginX,
    y: y,
    size: 8.5,
    font: fontBold,
    color: primaryColor,
  });
  const interestVal = lang === 'en'
    ? 'AI for Healthcare Diagnostics, Agricultural Optimization in Africa, Scalable ML Systems'
    : 'IA pour le Diagnostic Médical, Optimisation Agricole en Afrique, Systèmes ML Scalables';
  page2.drawText(interestVal, {
    x: marginX + fontBold.widthOfTextAtSize(interestLabel, 8.5) + 6,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: bodyTextColor,
  });

  // Footer Page 2
  page2.drawText('2', {
    x: pageWidth / 2 - 2,
    y: 22,
    size: 9,
    font: fontRegular,
    color: lightTextColor,
  });

  return await pdfDoc.save();
}

async function run() {
  console.log('Generating English executive CV PDF...');
  const enBytes = await buildCv({ lang: 'en' });
  fs.writeFileSync(path.join(__dirname, 'public/cv_mombo.pdf'), enBytes);
  fs.writeFileSync(path.join(__dirname, 'public/Emmanuel_Mombo_Dingba_CV.pdf'), enBytes);
  fs.writeFileSync(path.join(__dirname, 'public/Emmanuel_Mombo_Dingba_CV_EN.pdf'), enBytes);

  console.log('Generating French executive CV PDF...');
  const frBytes = await buildCv({ lang: 'fr' });
  fs.writeFileSync(path.join(__dirname, 'public/Emmanuel_Mombo_Dingba_CV_FR.pdf'), frBytes);

  console.log('All PDF files generated successfully with clickable links & QR codes!');
}

run().catch(err => {
  console.error('Failed to generate CVs:', err);
  process.exit(1);
});
