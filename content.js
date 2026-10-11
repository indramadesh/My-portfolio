/* ==================================================================
   ALL WEBSITE CONTENT LIVES IN THIS FILE.
   Edit, add or remove items below, save, and refresh the browser.
   Every page (Home, Resume, Projects, Skills, Contact) reads from here.

   Tips
   - Text goes inside "double quotes". Keep the commas between items.
   - To REMOVE something, delete its whole { ... } block (and its comma).
   - To ADD something, copy an existing { ... } block and change the text.
   - Leave a list empty ( [] ) to hide that section automatically.
   ================================================================== */

window.SITE = {
  /* ---------------- About you ---------------- */
  profile: {
    name: "Indra Madesh Miryala",
    role: "Developer",                         // small text next to your name in the header
    headline: "AI-Focused Software Developer",
    location: "Andhra Pradesh, India",
    email: "miryalaindramadesh@gmail.com",
    phone: "",                                 // optional, e.g. "+91 98765 43210" (leave "" to hide)
    photo: "assets/photo.jpg",                 // put your photo at this path
    resumePdf: "assets/resume.pdf",            // put your resume PDF at this path

    // Home page "A Bit About Me" text (one string per paragraph)
    about: [
      "I'm Indra Madesh Miryala, a Computer Science and Engineering student specialising in AI and Data Science at Siddhartha Institute of Science and Technology, Puttur (graduating 2027). I build practical AI applications, full-stack web systems and backend services."
    ],

    // Shown at the top of the Skills page
    lookingFor: "Open to Software Engineering, AI/ML Engineering, Python, Full-Stack and Backend Development internships."
  },

  /* ---------------- Social links (footer icons + Links section) ----------------
     icon can be: "linkedin", "github", "email", "link"                          */
  social: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/indra-madesh-miryala-190257259/", icon: "linkedin" },
    { label: "GitHub",   url: "https://github.com/indramadesh",                            icon: "github" }
  ],

  /* ---------------- Projects (Projects page + Resume page) ----------------
     github / demo: paste a URL to show a button, or leave "" to hide it.        */
  projects: [
    {
      title: "CyberShield 360",
      year: "2026",
      status: "",                              // e.g. "In progress" (leave "" for none)
      description: [
        "A defensive cybersecurity-awareness and threat-analysis platform. It analyses suspicious URLs, messages, emails, images, QR codes and websites, and explains what happened, why it matters and what to do next, with risk and confidence reported separately and always backed by evidence.",
        "Detection is rule- and heuristic-based. The platform runs fully offline with an SQLite database, and includes JWT authentication with role-based access, SSRF-guarded website fetching, PII redaction, rate limiting and an automated pytest suite."
      ],
      resumeSummary: "Built a defensive threat-analysis platform that checks URLs, messages, emails, images, QR codes and websites, reporting risk and confidence separately with supporting evidence. Includes JWT authentication with role-based access, SSRF-guarded fetching, PII redaction and a pytest suite.",
      tags: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "React", "TypeScript", "Tailwind CSS"],
      image: "assets/projects/cybershield-360.jpg",
      imageAlt: "CyberShield 360 landing page reading: Understand. Detect. Respond.",
      github: "",                              // e.g. "https://github.com/indramadesh/CyberShield360" (leave "" to hide)
      demo: "",                                // e.g. "https://cybershield.vercel.app" (leave "" to hide)
      links: []                                // any extra links, e.g. [{ label: "Docs", url: "https://..." }]
    },
    {
      title: "Smart Timetable Generator",
      year: "2026",
      status: "",
      description: [
        "A web admin panel for colleges that generates clash-free weekly timetables for every class. Admins enter classes, faculty, subjects and assignments; the scheduler places multi-period labs first, then theory subjects, preventing faculty clashes across classes and respecting each faculty member's daily limit.",
        "It also produces per-faculty timetables, a conflict and load report, an analytics chart and an Excel export, and is containerised with Docker and Gunicorn."
      ],
      resumeSummary: "Built a college admin panel that generates clash-free weekly timetables, placing multi-period labs first and preventing faculty clashes across classes. Includes faculty views, a conflict report and Excel export; containerised with Docker and Gunicorn.",
      tags: ["Python", "Flask", "PostgreSQL", "SQLite", "openpyxl", "Chart.js"],
      image: "assets/projects/timetable-generator.jpg",
      imageAlt: "A generated weekly timetable for class CSE-A, with a break after period 3 and a three-period lab block",
      github: "https://github.com/indramadesh/Timetable_Aplus",
      demo: "",
      links: []
    },
    {
      title: "Smart Classroom Attendance",
      year: "2026",
      status: "In progress",
      description: [
        "An attendance prototype. A teacher starts a timed class session and displays a short-lived QR code; a student scans it and is verified with a face check that runs in the browser, so only the face embedding is sent to the server."
      ],
      resumeSummary: "Prototyping a QR and face-verification attendance system with time-limited class sessions and in-browser face recognition.",
      tags: ["React", "Node.js", "Express", "PostgreSQL", "face-api.js", "html5-qrcode"],
      image: "",                               // no screenshot yet: shows "Screenshot coming soon"
      imageAlt: "",
      github: "",
      demo: "",
      links: []
    }
  ],

  /* ---------------- Technical skills (Skills page + Resume page) ----------------
     usedIn: project titles where you used these skills (shown as evidence)       */
  skills: [
    { group: "Languages",          items: ["Python", "JavaScript", "TypeScript", "SQL"],
      usedIn: ["CyberShield 360", "Smart Timetable Generator", "Smart Classroom Attendance"] },
    { group: "Backend",            items: ["FastAPI", "Flask", "Node.js", "Express", "REST APIs", "JWT authentication", "Role-based access control"],
      usedIn: ["CyberShield 360", "Smart Timetable Generator", "Smart Classroom Attendance"] },
    { group: "Frontend",           items: ["React", "Vite", "Tailwind CSS", "HTML", "CSS"],
      usedIn: ["CyberShield 360", "Smart Classroom Attendance"] },
    { group: "Databases",          items: ["PostgreSQL", "SQLite", "SQLAlchemy", "Alembic"],
      usedIn: ["CyberShield 360", "Smart Timetable Generator", "Smart Classroom Attendance"] },
    { group: "AI & Computer Vision", items: ["face-api.js (in-browser face recognition)", "QR code scanning"],
      usedIn: ["Smart Classroom Attendance"] },
    { group: "Testing & DevOps",   items: ["pytest", "Vitest", "Docker", "Gunicorn", "Git", "GitHub Actions"],
      usedIn: ["CyberShield 360", "Smart Timetable Generator"] }
  ],

  /* ---------------- Education (Skills page + Resume page) ---------------- */
  education: [
    {
      period: "Expected 2027",
      institution: "Siddhartha Institute of Science and Technology",
      degree: "B.Tech in Computer Science and Engineering (AI & Data Science)",
      location: "Puttur, Andhra Pradesh",
      details: ""                              // optional, e.g. "CGPA: 8.5 / 10" or relevant coursework
    }
  ],

  /* ---------------- Achievements & certifications (Skills page) ----------------
     The section is hidden while this list is empty. Example to copy:
     { title: "Python for Everybody", issuer: "Coursera", date: "2025",
       url: "https://www.coursera.org/verify/...", description: "" },             */
  achievements: [],

  /* ---------------- Extra links (Skills page "Links" section) ----------------
     Your social links, email and resume are listed automatically.             */
  links: [
    { label: "Smart Timetable Generator source", url: "https://github.com/indramadesh/Timetable_Aplus" }
  ],

  /* ---------------- Contact page ---------------- */
  contact: {
    intro: "Looking forward to hearing from you"
  }
};
