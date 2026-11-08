export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      languages: 'Languages',
      interests: 'Interests',
      contact: 'Contact',
    },
    hero: {
      role1: 'Data Scientist',
      role2: 'Software Engineer (Fullstack)',
      description: 'Building intelligent tools to solve real-world problems in healthcare and beyond',
      downloadCv: 'Download CV',
      contactMe: 'Contact me',
    },
    about: {
      title: 'About Me',
      journeyTitle: 'Professional Journey',
      journeyText1: 'Leveraging <span class="text-primary font-semibold">10+ years</span> of experience across healthcare, hospitality, and education, I bring a proven track record of adaptability and problem-solving to the tech industry. This diverse background allows me to approach software challenges with a unique, user-focused perspective.',
      journeyText2: 'My transition into <span class="text-secondary font-semibold">Full Stack Software Engineering</span> is built on a rigorous technical foundation. My stack includes React, TypeScript, Node.js, and Python, enabling me to build responsive front-end interfaces and robust back-end systems.',
      journeyText3: 'Currently based in <span class="text-accent font-semibold">Berlin</span> (German Work Permit), I am seeking Software Development roles where I can contribute my technical expertise and drive to build impactful, scalable software solutions.',
      viewProjects: 'View Projects',
      stats: {
        experience: 'of Diverse Professional Experience',
        languages: 'Programming Languages',
        projects: 'Major Projects',
        repositories: 'Repositories',
        publicRepositories: 'Public Repositories',
        privateRepositories: 'Private Repositories',
        bootcamp: 'AI Bootcamp Graduate',
      },
      location: 'Berlin, Germany • German Work Permit',
      availability: 'Available for immediate opportunities',
      multilingualTitle: 'Multilingual & Creative',
      multilingualText1: 'Languages: 6 languages across 3 continents',
      multilingualText2: 'Focus: Creative writing, philosophy, and intellectual pursuits',
    },
    skills: {
      title: 'Skills & Tools',
      subtitle: 'A comprehensive toolkit combining medical expertise with modern technology',
      categories: {
        programming: 'Programming Languages',
        frameworks: 'Frameworks & Libraries',
        ml: 'Machine Learning',
        cloud: 'Cloud & DevOps',
        databases: 'Databases',
        tools: 'Tools & Platforms',
      },
      expertiseTitle: 'Specialized Expertise',
      expertiseText: 'My unique combination of medical background and technical skills enables me to understand complex healthcare challenges and translate them into innovative technological solutions. I specialize in AI-powered medical applications, data-driven healthcare analytics, and user-centric health technology platforms.',
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Innovative solutions at the intersection of healthcare and technology',
      viewAllGithub: 'View All Projects on GitHub',
      techUsed: 'Technologies Used:',
      viewCode: 'View Code',
      liveDemo: 'Live Demo',
      viewGallery: 'View Gallery',
      viewCaseStudy: 'Project documentation',
      preview: 'Project Preview',
      clickToView: 'Click to view',
      demoArrow: 'demo →',
      galleryArrow: 'gallery →',
      detailsArrow: 'details →',
      items: {
        'appfly': {
          description: 'Local-first job-search copilot. Scouts and matches listings on your own machine, drafts Gemini cover letters from your CV and voice samples, and puts every draft in front of you for review — you submit applications yourself. Secrets live in the OS keychain and a crawl deny-list (LinkedIn, Indeed, Stepstone…) is enforced in code.',
          metric: '87 test files · 3-job CI · local-first, no cloud account'
        },
        'unitik-college-ticketing': {
          description: 'Self-hosted, privacy-compliant university support ticketing platform with a chatbot front door, role-based access (Student / Staff / Admin), AI-assisted ticket classification and an FAQ knowledge base with semantic search. Team project — I was the largest individual contributor.',
          metric: '43 test files (~230 cases) · bilingual EN/DE FAQ retrieval'
        },
        'skin-check-ai': {
          description: 'React Native prototype: photograph a skin lesion, score it with a FastAPI/PyTorch inference API (binary Low/High Risk with confidence), and track results per body spot over time in Supabase with owner-only Row Level Security. Research prototype — not a medical device, and not clinically validated.',
          metric: 'Binary Low/High-risk scoring · Supabase RLS (owner-only policies)'
        },
        'emotion-classification-ml': {
          description: 'Jupyter notebooks training image classifiers (EfficientNet B2, RegNetY 800MF) for facial-emotion categories where a geometric, rule-based approach performed inconsistently. Built to complement a mobile emotion-recognition application.',
          metric: '81.2–81.7% test accuracy across the two models (see repo README)'
        },
        'college-library-db': {
          description: 'Relational database for a university library: circulation (loans, reservations, fines), textbook–course linking, and research publication management with citations and access control. Database Systems coursework in a team of three.',
          metric: '16 tables · 3NF schema · triggers and seed data'
        },
        'claude-skills': {
          description: 'Reusable, structured playbooks ("skills") that turn generic LLM prompting into repeatable workflows — including a clinical-recommendation extractor that converts healthcare evidence (guidelines, research, implementation reports) into implementation-ready outputs.',
          metric: '2 production-ready domain skills for AI agents'
        }
      }
    },
    experience: {
      title: 'Professional Experience',
      subtitle: 'A diverse journey through healthcare, technology, and international business',
      jobs: [
        {
          title: 'Front Office Employee and Night Auditor',
          company: 'INNSiDE by Meliá Berlin Mitte',
          location: 'Berlin, Germany',
          period: 'Sep 2023 — Jan 2025',
          type: 'Full-time',
          description: 'Delivered exceptional guest services through professional check-in, check-out, and concierge support. Handled reservations and managed booking systems to maximize efficiency. Resolved guest concerns with empathy and speed, ensuring high satisfaction. Collaborated with housekeeping, events, and sales departments to maintain smooth daily operations. Supported administrative tasks including billing, reporting, and database entry.',
          skills: ['Guest Services', 'Reservation Management', 'Problem Resolution', 'Interdepartmental Coordination', 'Administrative Support']
        },
        {
          title: 'Medical Billing and Customer Support',
          company: 'Billing Nerds',
          location: 'Brooklyn, New York, USA',
          period: 'Mar 2021 — Feb 2022',
          type: 'Remote, Part-time',
          description: 'Processed medical billing claims and managed account receivables for healthcare clients. Verified insurance information and ensured compliance with medical coding standards. Communicated with patients and insurers to resolve outstanding balances. Improved billing accuracy and reduced rejected claims through detailed review.',
          skills: ['Medical Billing', 'Insurance Verification', 'Compliance Management', 'Patient Communication', 'Claims Processing']
        },
        {
          title: 'Data Analyst',
          company: 'Glutality Inc',
          location: 'Boca Raton, Florida, USA',
          period: 'Apr 2019 — Mar 2021',
          type: 'Remote, Part-time',
          description: 'Analyzed telemetric patient health data to support medical decision-making. Collaborated with clinical teams to identify irregularities and escalate cases. Produced detailed analytical reports for doctors and stakeholders. Maintained data accuracy and integrity across health monitoring platforms.',
          skills: ['Data Analysis', 'Clinical Collaboration', 'Report Generation', 'Data Integrity', 'Health Monitoring']
        },
        {
          title: 'ESL Teacher and Methodologist',
          company: 'SKYENG',
          location: 'Moscow, Russia',
          period: 'Dec 2017 — Nov 2019',
          type: 'Remote, Freelance',
          description: 'Taught English as a Second Language to diverse international students. Designed personalized lesson plans tailored to learners\' needs. Mentored and trained junior teachers in effective teaching methods. Leveraged digital platforms to deliver engaging online classes.',
          skills: ['ESL Teaching', 'Curriculum Design', 'Teacher Training', 'Online Education', 'Student Mentoring']
        },
        {
          title: 'Administrative Secretary',
          company: 'Kharkiv Youth City Council (NGO)',
          location: 'Kharkiv, Ukraine',
          period: 'Nov 2017 — Nov 2019',
          type: 'Weekend Volunteer, Part-time',
          description: 'Assisted in coordinating youth programs and civic engagement projects. Supported documentation, scheduling, and meeting preparation. Provided administrative support to NGO leadership and partners.',
          skills: ['Program Coordination', 'Documentation', 'Meeting Preparation', 'NGO Support', 'Civic Engagement']
        },
        {
          title: 'Administrative Secretary',
          company: 'Berean Hope Mission (NGO)',
          location: 'Accra, Ghana',
          period: 'Sep 2014 — Sep 2016',
          type: 'Weekend Volunteer, Part-time',
          description: 'Provided clerical and secretarial support for NGO operations. Assisted in organizing community programs and outreach initiatives. Maintained correspondence and records for ongoing projects.',
          skills: ['Clerical Support', 'Community Programs', 'Record Management', 'Correspondence', 'Outreach Coordination']
        },
        {
          title: 'Clinical Secretariat',
          company: 'Korle-Bu Teaching Hospital, Department of Child Health',
          location: 'Accra, Ghana',
          period: 'Oct 2013 — Aug 2016',
          type: 'Full-time',
          description: 'Supported the Child Health department with clerical and patient record management. Coordinated appointment scheduling and departmental communications. Assisted medical staff with documentation and reporting. Ensured compliance with hospital administrative standards.',
          skills: ['Patient Records', 'Appointment Scheduling', 'Medical Documentation', 'Hospital Compliance', 'Departmental Coordination']
        }
      ],
      stats: {
        years: 'Years Experience',
        roles: 'Different Roles',
        countries: 'Countries',
        languages: 'Languages'
      },
      labels: {
        keySkills: 'Key Skills:'
      }
    },
    education: {
      title: 'Education & Learning',
      subtitle: 'Continuous learning journey bridging medicine, technology, and innovation',
      degrees: [
        {
          degree: 'BSc IT - Web Applications and Software Development',
          institution: 'Media Design University of Applied Sciences',
          location: 'Berlin, Germany',
          period: 'Present',
          status: 'Currently Enrolled',
          description: 'Focused on modern web technologies, software architecture, and full-stack development principles.',
          type: 'Bachelor Degree'
        },
        {
          degree: 'Data Science & AI Bootcamp',
          institution: 'Le Wagon',
          location: 'Berlin, Germany',
          period: 'Apr 2025 - Jun 2025',
          status: 'Completed',
          description: 'Intensive program covering machine learning, deep learning, data engineering, and AI applications in real-world scenarios.',
          type: 'Bootcamp'
        },
        {
          degree: 'MBBS (Bachelor of Medicine, Bachelor of Surgery)',
          institution: 'V.N. Karazina Kharkiv National University',
          location: 'Kharkiv, Ukraine',
          period: 'Oct 2017 - Feb 2022',
          status: 'Interrupted due to war',
          description: 'Comprehensive medical education covering human anatomy, physiology, pathology, pharmacology, and clinical medicine.',
          type: 'Medical Degree'
        }
      ],
      highlights: {
        web: ['Web Applications', 'Software Development', 'Media Design', 'Full-Stack Development'],
        ai: ['Python & Machine Learning', 'Deep Learning with TensorFlow/PyTorch', 'Data Engineering & MLOps', 'AI Product Development'],
        med: ['General Clinical Medicine', 'Medical Research', 'Patient Care', 'Medical Ethics', 'Diagnostic Procedures']
      },
      keyAreas: 'Key Areas',
      certificationsTitle: 'Certifications & Continued Learning',
      certifications: [
        'AWS Cloud Practitioner (In Progress)',
        'Google Cloud Platform Fundamentals',
        'TensorFlow Developer Certificate (Planned)',
        'React Professional Certification',
        'Medical Ethics & Patient Safety'
      ],
      philosophyTitle: 'Lifelong Learning Philosophy',
      philosophyText: 'My educational journey reflects a commitment to interdisciplinary learning, combining medical science with cutting-edge technology. I believe in the power of continuous learning to bridge traditional healthcare with innovative technological solutions, always staying current with emerging trends in AI, machine learning, and digital health.',
    },
    languages: {
      title: 'Languages',
      subtitle: 'Multilingual communication enabling global collaboration',
      proficiency: 'Proficiency',
      summaryTitle: 'Multilingual Professional',
      summaryText: 'Fluent in 6 languages across 3 continents, enabling effective communication in diverse international environments and multicultural teams.',
      learning: '🚀 Currently learning',
      levels: {
        native: 'Native',
        intermediate: 'Intermediate',
        upperIntermediate: 'Upper Intermediate',
        advanced: 'Advanced'
      },
      notes: {
        native: 'Native speaker',
        german: 'Actively improving my German. I\'m committed to continuing my learning, especially after I\'m hired.',
        russian: 'Professional working proficiency',
        ghanaian: 'Native Ghanaian language'
      }
    },
    interests: {
      title: 'Interests & Passions',
      subtitle: 'Beyond technology and medicine, exploring creativity and intellectual pursuits',
      items: {
        writing: { name: 'Creative Writing', description: 'Currently working on horror novel "A Devil for Jane" and philosophical work "Of God and Man"' },
        gaming: { name: 'Gaming', description: 'Strategic and narrative-driven games, exploring virtual worlds and complex gameplay mechanics' },
        movies: { name: 'Movies & Documentaries', description: 'Film analysis, documentaries, and exploring diverse cinematic storytelling techniques' },
        debates: { name: 'Social Debates', description: 'Engaging in intellectual discussions about philosophy, ethics, and contemporary issues' },
        fitness: { name: 'Fitness & Working Out', description: 'Maintaining physical health through regular exercise and strength training' },
        literature: { name: 'Classical Literature', description: 'Deep appreciation for classical works and theatrical performances' },
        philosophy: { name: 'Philosophy', description: 'Exploring philosophical concepts, ethics, and the intersection of science and humanities' },
        theatre: { name: 'Theatre', description: 'Appreciation for dramatic arts and live performance storytelling' }
      },
      currentProjectsTitle: 'Current Creative Projects',
      project1: { title: '📚 "A Devil for Jane"', desc: 'A psychological horror novel exploring themes of morality and human nature' },
      project2: { title: '🧠 "Of God and Man"', desc: 'A philosophical work examining the intersection of faith, science, and human existence' }
    },
    contact: {
      title: 'Let\'s Connect',
      subtitle: 'Ready to collaborate on innovative healthcare and technology solutions',
      getInTouch: 'Get In Touch',
      introText: 'I\'m always interested in discussing new opportunities, innovative projects, and collaborations at the intersection of healthcare and technology. Let\'s explore how we can work together to make a meaningful impact.',
      labels: {
        email: 'Email',
        location: 'Location',
        github: 'GitHub',
        linkedin: 'LinkedIn'
      },
      quickActions: 'Quick Actions',
      sendMessage: 'Send a Message',
      form: {
        name: 'Your Name',
        namePlaceholder: 'Enter your name',
        email: 'Email Address',
        emailPlaceholder: 'Enter your email',
        subject: 'Subject',
        subjectPlaceholder: 'What\'s this about?',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project or opportunity...',
        submit: 'Send Message',
        sending: 'Sending...',
        successTitle: 'Message prepared',
        successDesc: 'Your email client will open with the message.',
        responseTime: 'Response Time:',
        responseDesc: 'I typically respond to messages within 24 hours during business days.'
      }
    },
    footer: {
      role: 'Data Scientist & Software Engineer (Fullstack)',
      rights: 'All rights reserved.',
      backToTop: 'Back to Top'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über mich',
      skills: 'Fähigkeiten',
      projects: 'Projekte',
      experience: 'Erfahrung',
      education: 'Ausbildung',
      languages: 'Sprachen',
      interests: 'Interessen',
      contact: 'Kontakt',
    },
    hero: {
      role1: 'Data Scientist',
      role2: 'Softwareentwickler (Fullstack)',
      description: 'Entwicklung intelligenter Tools zur Lösung realer Probleme im Gesundheitswesen und darüber hinaus',
      downloadCv: 'CV herunterladen',
      contactMe: 'Kontaktieren Sie mich',
    },
    about: {
      title: 'Über mich',
      journeyTitle: 'Beruflicher Werdegang',
      journeyText1: 'Mit über <span class="text-primary font-semibold">10 Jahren</span> Erfahrung im Gesundheitswesen, Gastgewerbe und Bildungswesen bringe ich eine nachgewiesene Erfolgsbilanz in Anpassungsfähigkeit und Problemlösung in die Technologiebranche ein. Dieser vielfältige Hintergrund ermöglicht es mir, Software-Herausforderungen aus einer einzigartigen, benutzerorientierten Perspektive anzugehen.',
      journeyText2: 'Mein Übergang zum <span class="text-secondary font-semibold">Full-Stack-Software-Engineering</span> baut auf einem soliden technischen Fundament auf. Mein Tech-Stack umfasst React, TypeScript, Node.js und Python, was mir ermöglicht, reaktionsschnelle Front-End-Schnittstellen und robuste Back-End-Systeme zu entwickeln.',
      journeyText3: 'Derzeit in <span class="text-accent font-semibold">Berlin</span> ansässig (deutsche Arbeitserlaubnis), suche ich nach Positionen in der Softwareentwicklung, in denen ich meine technische Expertise einbringen und wirkungsvolle, skalierbare Softwarelösungen entwickeln kann.',
      viewProjects: 'Projekte ansehen',
      stats: {
        experience: 'vielfältige Berufserfahrung',
        languages: 'Programmiersprachen',
        projects: 'Hauptprojekte',
        repositories: 'Repositories',
        publicRepositories: 'Öffentliche Repositories',
        privateRepositories: 'Private Repositories',
        bootcamp: 'Absolvent des AI-Bootcamps 2025',
      },
      location: 'Berlin, Deutschland • Deutsche Arbeitserlaubnis',
      availability: 'Verfügbar für sofortige Möglichkeiten',
      multilingualTitle: 'Mehrsprachig & Kreativ',
      multilingualText1: 'Sprachen: 6 Sprachen auf 3 Kontinenten',
      multilingualText2: 'Fokus: Kreatives Schreiben, Philosophie und intellektuelle Beschäftigungen',
    },
    skills: {
      title: 'Fähigkeiten & Werkzeuge',
      subtitle: 'Ein umfassendes Toolkit, das medizinisches Fachwissen mit moderner Technologie verbindet',
      categories: {
        programming: 'Programmiersprachen',
        frameworks: 'Frameworks & Bibliotheken',
        ml: 'Maschinelles Lernen',
        cloud: 'Cloud & DevOps',
        databases: 'Datenbanken',
        tools: 'Werkzeuge & Plattformen',
      },
      expertiseTitle: 'Spezialisierte Fachkenntnisse',
      expertiseText: 'Meine einzigartige Kombination aus medizinischem Hintergrund und technischen Fähigkeiten ermöglicht es mir, komplexe Herausforderungen im Gesundheitswesen zu verstehen und in innovative technologische Lösungen umzusetzen. Ich spezialisiere mich auf KI-gestützte medizinische Anwendungen, datengesteuerte Gesundheitsanalysen und nutzerzentrierte Gesundheitstechnologieplattformen.',
    },
    projects: {
      title: 'Ausgewählte Projekte',
      subtitle: 'Innovative Lösungen an der Schnittstelle von Gesundheitswesen und Technologie',
      viewAllGithub: 'Alle Projekte auf GitHub ansehen',
      techUsed: 'Verwendete Technologien:',
      viewCode: 'Code ansehen',
      liveDemo: 'Live-Demo',
      viewGallery: 'Galerie ansehen',
      viewCaseStudy: 'Projektdokumentation',
      preview: 'Projektvorschau',
      clickToView: 'Klicken zum Ansehen',
      demoArrow: 'Demo →',
      galleryArrow: 'Galerie →',
      detailsArrow: 'Details →',
      items: {
        'appfly': {
          description: 'Local-first Job-Search-Copilot. Durchsucht und matcht Stellenanzeigen auf dem eigenen Rechner, entwirft Gemini-Bewerbungsschreiben aus Lebenslauf und Stimmproben und legt jeden Entwurf zur Prüfung vor — die Bewerbung sendet man selbst. Secrets liegen in der OS-Keychain, und eine Crawl-Deny-List (LinkedIn, Indeed, Stepstone …) ist im Code durchgesetzt.',
          metric: '87 Testdateien · 3-Job-CI · local-first, kein Cloud-Konto'
        },
        'unitik-college-ticketing': {
          description: 'Selbst gehostete, datenschutzgerechte Support-Ticketing-Plattform für Universitäten mit Chatbot-Eingang, rollenbasiertem Zugriff (Student / Staff / Admin), KI-gestützter Ticket-Klassifikation und FAQ-Wissensbasis mit semantischer Suche. Teamprojekt — ich war der größte Einzelbeiträger.',
          metric: '43 Testdateien (~230 Fälle) · zweisprachige EN/DE FAQ-Suche'
        },
        'skin-check-ai': {
          description: 'React-Native-Prototyp: Hautläsion fotografieren, mit einer FastAPI/PyTorch-Inferenz-API bewerten lassen (binär Niedriges/Hohes Risiko mit Konfidenzwert) und Ergebnisse pro Körperstelle in Supabase mit eigentümerbeschränkter Row Level Security verfolgen. Forschungsprototyp — kein Medizinprodukt und nicht klinisch validiert.',
          metric: 'Binäre Niedrig-/Hochrisiko-Bewertung · Supabase RLS (nur Eigentümer)'
        },
        'emotion-classification-ml': {
          description: 'Jupyter Notebooks, die Bildklassifikatoren (EfficientNet B2, RegNetY 800MF) für Gesichtsemotions-Kategorien trainieren, bei denen ein geometrischer, regelbasierter Ansatz inkonsistent war. Entwickelt als Ergänzung zu einer mobilen Emotionserkennungs-App.',
          metric: '81,2–81,7 % Testgenauigkeit über beide Modelle (siehe Repo-README)'
        },
        'college-library-db': {
          description: 'Relationale Datenbank für eine Universitätsbibliothek: Ausleihe (Ausleihen, Reservierungen, Gebühren), Verknüpfung von Lehrbüchern und Kursen sowie Verwaltung von Forschungspublikationen mit Zitaten und Zugriffskontrolle. Datenbanksysteme-Kursarbeit in einem Dreierteam.',
          metric: '16 Tabellen · 3NF-Schema · Trigger und Seed-Daten'
        },
        'claude-skills': {
          description: 'Wiederverwendbare, strukturierte Playbooks („Skills"), die generisches LLM-Prompting in wiederholbare Workflows verwandeln — darunter ein Clinical-Recommendation-Extractor, der Healthcare-Evidenz (Leitlinien, Forschung, Implementierungsberichte) in umsetzungsreife Ergebnisse überführt.',
          metric: '2 produktionsreife Domain-Skills für KI-Agenten'
        }
      }
    },
    experience: {
      title: 'Berufserfahrung',
      subtitle: 'Eine vielseitige Reise durch Gesundheitswesen, Technologie und internationale Wirtschaft',
      jobs: [
        {
          title: 'Front Office Mitarbeiter und Nacht Auditor',
          company: 'iNNSiDE by Meliá Berlin Mitte',
          location: 'Berlin, Deutschland',
          period: 'Sept 2023 — Jan 2025',
          type: 'Vollzeit',
          description: 'Exzellenter Gästeservice durch professionelles Ein- und Auschecken sowie Concierge-Support. Verwaltung von Reservierungen und Buchungssystemen zur Effizienzsteigerung. Lösung von Gästeanliegen mit Empathie und Schnelligkeit. Zusammenarbeit mit Housekeeping, Events und Vertriebsabteilungen für reibungslose tägliche Abläufe. Unterstützung bei administrativen Aufgaben wie Abrechnung, Berichterstattung und Datenbankpflege.',
          skills: ['Gästeservice', 'Reservierungsmanagement', 'Problemlösung', 'Abteilungsübergreifende Koordination', 'Administrative Unterstützung']
        },
        {
          title: 'Medizinische Abrechnung und Kundensupport',
          company: 'Billing Nerds',
          location: 'Brooklyn, New York, USA',
          period: 'Mär 2021 — Feb 2022',
          type: 'Remote, Teilzeit',
          description: 'Bearbeitung von medizinischen Abrechnungen und Forderungsmanagement für Kunden im Gesundheitswesen. Überprüfung von Versicherungsinformationen und Sicherstellung der Einhaltung medizinischer Kodierungsstandards. Kommunikation mit Patienten und Versicherern zur Klärung offener Salden. Verbesserung der Abrechnungsgenauigkeit und Reduzierung abgelehner Ansprüche durch detaillierte Überprüfung.',
          skills: ['Medizinische Abrechnung', 'Versicherungsprüfung', 'Compliance-Management', 'Patientenkommunikation', 'Antragsbearbeitung']
        },
        {
          title: 'Datenanalyst',
          company: 'Glutality Inc',
          location: 'Boca Raton, Florida, USA',
          period: 'Apr 2019 — Mär 2021',
          type: 'Remote, Teilzeit',
          description: 'Analyse telemetrischer Gesundheitsdaten zur Unterstützung medizinischer Entscheidungen. Zusammenarbeit mit klinischen Teams zur Identifizierung von Unregelmäßigkeiten und Eskalation von Fällen. Erstellung detaillierter analytischer Berichte für Ärzte und Stakeholder. Aufrechterhaltung der Datengenauigkeit und -integrität auf Gesundheitsüberwachungsplattformen.',
          skills: ['Datenanalyse', 'Klinische Zusammenarbeit', 'Berichterstellung', 'Datenintegrität', 'Gesundheitsüberwachung']
        },
        {
          title: 'ESL-Lehrer und Methodiker',
          company: 'SKYENG',
          location: 'Moskau, Russland',
          period: 'Dez 2017 — Nov 2019',
          type: 'Remote, Freiberuflich',
          description: 'Unterricht von Englisch als Zweitsprache für diverse internationale Studenten. Gestaltung personalisierter Unterrichtspläne, zugeschnitten auf die Bedürfnisse der Lernenden. Mentoring und Schulung von Nachwuchslehrern in effektiven Lehrmethoden. Nutzung digitaler Plattformen für ansprechenden Online-Unterricht.',
          skills: ['ESL-Unterricht', 'Lehrplangestaltung', 'Lehrerausbildung', 'Online-Bildung', 'Studenten-Mentoring']
        },
        {
          title: 'Verwaltungssekretariat',
          company: 'Charkiwer Jugendstadtrat (NGO)',
          location: 'Charkiw, Ukraine',
          period: 'Nov 2017 — Nov 2019',
          type: 'Wochenendfreiwillige, Teilzeit',
          description: 'Unterstützung bei der Koordination von Jugendprogrammen und Projekten für bürgerschaftliches Engagement. Unterstützung bei Dokumentation, Terminplanung und Sitzungsvorbereitung. Administrative Unterstützung für NGO-Leitung und Partner.',
          skills: ['Programmkoordination', 'Dokumentation', 'Sitzungsvorbereitung', 'NGO-Unterstützung', 'Bürgerschaftliches Engagement']
        },
        {
          title: 'Verwaltungssekretariat',
          company: 'Berean Hope Mission (NGO)',
          location: 'Accra, Ghana',
          period: 'Sept 2014 — Sept 2016',
          type: 'Wochenendfreiwillige, Teilzeit',
          description: 'Büro- und Sekretariatsunterstützung für NGO-Operationen. Unterstützung bei der Organisation von Gemeinschaftsprogrammen und Outreach-Initiativen. Pflege von Korrespondenz und Aufzeichnungen für laufende Projekte.',
          skills: ['Bürounterstützung', 'Gemeinschaftsprogramme', 'Aktenführung', 'Korrespondenz', 'Outreach-Koordination']
        },
        {
          title: 'Klinisches Sekretariat',
          company: 'Korle-Bu Lehrkrankenhaus, Abteilung für Kindergesundheit',
          location: 'Accra, Ghana',
          period: 'Okt 2013 — Aug 2016',
          type: 'Vollzeit',
          description: 'Unterstützung der Abteilung für Kindergesundheit bei Büroarbeiten und Patientenaktenverwaltung. Koordination von Terminplanung und Abteilungskommunikation. Unterstützung des medizinischen Personals bei Dokumentation und Berichterstattung. Sicherstellung der Einhaltung von Verwaltungsstandards im Krankenhaus.',
          skills: ['Patientenakten', 'Terminplanung', 'Medizinische Dokumentation', 'Krankenhaus-Compliance', 'Abteilungskoordination']
        }
      ],
      stats: {
        years: 'Jahre Erfahrung',
        roles: 'Verschiedene Rollen',
        countries: 'Länder',
        languages: 'Sprachen'
      },
      labels: {
        keySkills: 'Schlüsselqualifikationen:'
      }
    },
    education: {
      title: 'Ausbildung & Lernen',
      subtitle: 'Kontinuierliche Lernreise, die Medizin, Technologie und Innovation verbindet',
      degrees: [
        {
          degree: 'BSc IT - Webanwendungen und Softwareentwicklung',
          institution: 'Mediendesign Hochschule für Angewandte Wissenschaften',
          location: 'Berlin, Deutschland',
          period: 'Gegenwart',
          status: 'Aktuell eingeschrieben',
          description: 'Fokus auf moderne Webtechnologien, Softwarearchitektur und Full-Stack-Entwicklungsprinzipien.',
          type: 'Bachelor-Abschluss'
        },
        {
          degree: 'Data Science & KI Bootcamp',
          institution: 'Le Wagon',
          location: 'Berlin, Deutschland',
          period: 'Apr 2025 - Jun 2025',
          status: 'Abgeschlossen',
          description: 'Intensivprogramm zu maschinellem Lernen, Deep Learning, Data Engineering und KI-Anwendungen in realen Szenarien.',
          type: 'Bootcamp'
        },
        {
          degree: 'MBBS (Bachelor der Medizin, Bachelor der Chirurgie)',
          institution: 'V.N. Karasina Nationale Universität Charkiw',
          location: 'Charkiw, Ukraine',
          period: 'Okt 2017 - Feb 2022',
          status: 'Wegen Krieg unterbrochen',
          description: 'Umfassende medizinische Ausbildung in Anatomie, Physiologie, Pathologie, Pharmakologie und klinischer Medizin.',
          type: 'Medizinischer Abschluss'
        }
      ],
      highlights: {
        web: ['Web-Anwendungen', 'Software-Entwicklung', 'Mediendesign', 'Full-Stack-Entwicklung'],
        ai: ['Python & Machine Learning', 'Deep Learning mit TensorFlow/PyTorch', 'Data Engineering & MLOps', 'KI-Produktentwicklung'],
        med: ['Allgemeine Klinische Medizin', 'Medizinische Forschung', 'Patientenversorgung', 'Medizinische Ethik', 'Diagnostische Verfahren']
      },
      keyAreas: 'Schwerpunkte',
      certificationsTitle: 'Zertifizierungen & Weiterbildung',
      certifications: [
        'AWS Cloud Practitioner (In Arbeit)',
        'Google Cloud Platform Grundlagen',
        'TensorFlow Developer Zertifikat (Geplant)',
        'React Professional Zertifizierung',
        'Medizinische Ethik & Patientensicherheit'
      ],
      philosophyTitle: 'Philosophie des lebenslangen Lernens',
      philosophyText: 'Meine Bildungsreise spiegelt ein Engagement für interdisziplinäres Lernen wider, das medizinische Wissenschaft mit modernster Technologie verbindet. Ich glaube an die Kraft des kontinuierlichen Lernens, um traditionelles Gesundheitswesen mit innovativen technologischen Lösungen zu verbinden, und bleibe stets auf dem neuesten Stand bei KI, maschinellem Lernen und digitaler Gesundheit.',
    },
    languages: {
      title: 'Sprachen',
      subtitle: 'Mehrsprachige Kommunikation ermöglicht globale Zusammenarbeit',
      proficiency: 'Kenntnisse',
      summaryTitle: 'Mehrsprachiger Profi',
      summaryText: 'Fließend in 6 Sprachen auf 3 Kontinenten, was eine effektive Kommunikation in diversen internationalen Umgebungen und multikulturellen Teams ermöglicht.',
      learning: '🚀 Lerne gerade',
      levels: {
        native: 'Muttersprache',
        intermediate: 'Mittelstufe',
        upperIntermediate: 'Obere Mittelstufe',
        advanced: 'Fortgeschritten'
      },
      notes: {
        native: 'Muttersprachler',
        german: 'Aktive Verbesserung meines Deutsch. Ich bin entschlossen, mein Lernen fortzusetzen, besonders nach meiner Einstellung.',
        russian: 'Professionelle Arbeitskenntnisse',
        ghanaian: 'Ghanaische Muttersprache'
      }
    },
    interests: {
      title: 'Interessen & Leidenschaften',
      subtitle: 'Jenseits von Technologie und Medizin, Erkundung von Kreativität und intellektuellen Beschäftigungen',
      items: {
        writing: { name: 'Kreatives Schreiben', description: 'Arbeite derzeit am Horrorroman "A Devil for Jane" und am philosophischen Werk "Of God and Man"' },
        gaming: { name: 'Gaming', description: 'Strategische und narrative Spiele, Erkundung virtueller Welten und komplexer Spielmechaniken' },
        movies: { name: 'Filme & Dokumentationen', description: 'Filmanalyse, Dokumentationen und Erkundung diverser filmischer Erzähltechniken' },
        debates: { name: 'Soziale Debatten', description: 'Teilnahme an intellektuellen Diskussionen über Philosophie, Ethik und aktuelle Themen' },
        fitness: { name: 'Fitness & Training', description: 'Erhaltung der körperlichen Gesundheit durch regelmäßigen Sport und Krafttraining' },
        literature: { name: 'Klassische Literatur', description: 'Tiefe Wertschätzung für klassische Werke und Theateraufführungen' },
        philosophy: { name: 'Philosophie', description: 'Erkundung philosophischer Konzepte, Ethik und der Schnittstelle von Wissenschaft und Geisteswissenschaften' },
        theatre: { name: 'Theater', description: 'Wertschätzung für darstellende Kunst und das Erzählen von Geschichten auf der Bühne' }
      },
      currentProjectsTitle: 'Aktuelle kreative Projekte',
      project1: { title: '📚 "A Devil for Jane"', desc: 'Ein psychologischer Horrorroman, der Themen wie Moral und menschliche Natur erforscht' },
      project2: { title: '🧠 "Of God and Man"', desc: 'Ein philosophisches Werk, das die Schnittstelle von Glauben, Wissenschaft und menschlicher Existenz untersucht' }
    },
    contact: {
      title: 'Lass uns verbinden',
      subtitle: 'Bereit für die Zusammenarbeit an innovativen Gesundheits- und Technologielösungen',
      getInTouch: 'Kontakt aufnehmen',
      introText: 'Ich bin immer interessiert an neuen Möglichkeiten, innovativen Projekten und Kooperationen an der Schnittstelle von Gesundheitswesen und Technologie. Lassen Sie uns erkunden, wie wir zusammenarbeiten können, um einen bedeutenden Einfluss zu haben.',
      labels: {
        email: 'E-Mail',
        location: 'Standort',
        github: 'GitHub',
        linkedin: 'LinkedIn'
      },
      quickActions: 'Schnellaktionen',
      sendMessage: 'Nachricht senden',
      form: {
        name: 'Ihr Name',
        namePlaceholder: 'Geben Sie Ihren Namen ein',
        email: 'E-Mail-Adresse',
        emailPlaceholder: 'Geben Sie Ihre E-Mail ein',
        subject: 'Betreff',
        subjectPlaceholder: 'Worum geht es?',
        message: 'Nachricht',
        messagePlaceholder: 'Erzählen Sie mir von Ihrem Projekt oder Ihrer Gelegenheit...',
        submit: 'Nachricht senden',
        sending: 'Senden...',
        successTitle: 'Nachricht vorbereitet',
        successDesc: 'Ihr E-Mail-Client wird mit der Nachricht geöffnet.',
        responseTime: 'Antwortzeit:',
        responseDesc: 'Ich antworte normalerweise innerhalb von 24 Stunden an Werktagen.'
      }
    },
    footer: {
      role: 'Data Scientist & Softwareentwickler (Fullstack)',
      rights: 'Alle Rechte vorbehalten.',
      backToTop: 'Zurück nach oben'
    }
  }
};
