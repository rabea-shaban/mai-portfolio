export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  badge?: string;
  type: "training" | "leadership" | "education";
  description: string;
  bullets: string[];
  skillsGained: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "depi-data-analysis",
    role: "Junior Data Analyst Scholar",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Jul 2026 – Late 2026",
    badge: "Government Scholarship",
    type: "training",
    description:
      "Selected for the competitive DEPI technology initiative focused on equipping Egypt's top technical talent with applied data analysis and business intelligence skills.",
    bullets: [
      "Rigorous hands-on training spanning data cleaning, exploratory data analysis, and relational data modeling.",
      "Mastering Power BI dashboarding, Star Schema architecture, and complex DAX business formulas.",
      "Developing production-ready data projects evaluated against real-world enterprise standards."
    ],
    skillsGained: ["Power BI", "DAX", "Data Modeling", "Business Intelligence", "Power Query"]
  },
  {
    id: "programming-mentor-fyt",
    role: "Programming Mentor",
    organization: "FYT (Future Youth Tech)",
    period: "3-Month Cohort Program",
    badge: "Mentorship & Leadership",
    type: "leadership",
    description:
      "Served as a dedicated programming mentor guiding beginners through foundational programming, algorithmic problem solving, and structured debugging.",
    bullets: [
      "Mentored cohorts of aspiring coders through core algorithmic concepts, problem decomposition, and syntax fundamentals.",
      "Assisted students in breaking down difficult programming assignments step-by-step without providing blind copy-paste solutions.",
      "Fostered analytical thinking, active debugging habits, and confidence in approaching new programming challenges."
    ],
    skillsGained: ["Mentorship", "Algorithmic Thinking", "Code Review", "Problem Solving", "Technical Teaching"]
  },
  {
    id: "icpc-est-minya",
    role: "Content Creator & Problem Solving Advocate",
    organization: "ICPC EST Minya",
    period: "2026",
    badge: "Community Initiative",
    type: "leadership",
    description:
      "Spearheaded creative awareness campaigns for the Wave 1 competitive programming training season.",
    bullets: [
      "Authored viral technical copy addressing the critical importance of logical reasoning over blind AI dependence.",
      "Crafted relatable narrative hooks illustrating how developer value stems from problem analysis rather than rote code generation.",
      "Drove candidate engagement and sign-ups for the competitive programming community's first wave."
    ],
    skillsGained: ["Technical Copywriting", "Community Engagement", "Storytelling", "Campaign Strategy"]
  },
  {
    id: "gdg-minia",
    role: "Media & Content Creation Team",
    organization: "Google Developer Groups (GDG) Minia",
    period: "Community Member",
    badge: "Developer Community",
    type: "leadership",
    description:
      "Contributed to media and technical content creation to foster tech literacy and developer engagement across Upper Egypt.",
    bullets: [
      "Collaborated with cross-functional organizers to produce technical posts, workshop recaps, and speaker highlights.",
      "Communicated complex technical themes in an accessible, engaging voice tailored to emerging developers."
    ],
    skillsGained: ["Developer Relations", "Media Strategy", "Cross-Functional Collaboration"]
  },
  {
    id: "education-is",
    role: "B.Sc. in Information Systems (In Progress)",
    organization: "Egyptian University for Science & Technology (EST)",
    period: "Expected 2028 (Year 2)",
    badge: "Academic Degree",
    type: "education",
    description:
      "Undergraduate studies focusing on Information Systems, database structures, software fundamentals, and business computing.",
    bullets: [
      "Solid coursework in database management, systems analysis, data structures, and computer organization.",
      "Combining theoretical information systems principles with intensive self-directed project execution."
    ],
    skillsGained: ["Information Systems", "Database Fundamentals", "Systems Architecture"]
  }
];

export const freelanceProfiles = [
  {
    platform: "Khamsat",
    title: "Data Analysis & Dashboard Services",
    username: "mai59",
    url: "https://khamsat.com/user/mai59",
    highlight: "Top Rated Arabic Microservices Platform",
    offerings: [
      "Power BI Interactive Dashboards & KPIs",
      "Excel Data Cleaning & Pivot Automation",
      "Business Reporting & Visual Insights"
    ]
  },
  {
    platform: "Kafiil",
    title: "Freelance Data Analyst",
    username: "mai_ahmed15",
    url: "https://kafiil.com/u/mai_ahmed15",
    highlight: "Freelance & Enterprise Services",
    offerings: [
      "End-to-End Data Modeling & ETL Pipelines",
      "Sales & Operations KPI Tracking",
      "DAX Troubleshooting & Optimization"
    ]
  },
  {
    platform: "LinkedIn",
    title: "Professional Network & Case Studies",
    username: "Mai Ahmed Khairy",
    url: "https://www.linkedin.com/in/mai-ahmed-b650a3337",
    highlight: "Direct Professional Inquiries & Networking",
    offerings: [
      "Full-time & Junior Analyst Roles",
      "Project Case Studies & Discussions",
      "Collaboration on AI Automation"
    ]
  }
];
