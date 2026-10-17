export interface TimelineMilestone {
  id: string;
  phase: string;
  period: string;
  title: string;
  institution: string;
  type: "academic" | "scholarship" | "specialization" | "foundation";
  typeLabel: string;
  description: string;
  keyLearnings: string[];
  skills: string[];
  status?: "current" | "completed";
}

export const educationTimeline: TimelineMilestone[] = [
  {
    id: "depi-scholarship",
    phase: "Phase 05 · Advanced BI & Enterprise Analytics",
    period: "Jul 2026 – Present",
    title: "Junior Data Analyst Scholarship",
    institution: "Digital Egypt Pioneers Initiative (DEPI)",
    type: "scholarship",
    typeLabel: "Intensive Scholarship",
    status: "current",
    description:
      "Selected for the government-backed DEPI initiative. Mastered enterprise business intelligence, advanced DAX modeling, Star Schema architecture, and real-world 50K record supply chain analytics.",
    keyLearnings: [
      "End-to-end Power BI report development and executive dashboard UX",
      "Advanced DAX logic (OTIF %, time intelligence, relationship filtering)",
      "Star Schema data modeling (Fact and Dimension separation)"
    ],
    skills: ["Power BI", "DAX", "Star Schema", "Power Query", "KPI Architecture"]
  },
  {
    id: "rowad-sql",
    phase: "Phase 04 · Database Querying & SQL Mastery",
    period: "Mid 2026",
    title: "Data Analysis & Database Track",
    institution: "Rowad Egypt Digital",
    type: "specialization",
    typeLabel: "Professional Program",
    status: "completed",
    description:
      "Structured training in relational database querying. Focused on writing robust SQL queries to extract, aggregate, and validate commercial transactional data.",
    keyLearnings: [
      "Complex SQL JOINs, CTEs, subqueries, and grouping aggregations",
      "Database schema comprehension and transactional anomaly detection",
      "Extracting clean subsets for downstream reporting in Excel and BI tools"
    ],
    skills: ["SQL", "Relational Databases", "Data Verification", "Aggregation Queries"]
  },
  {
    id: "data-pivot",
    phase: "Phase 03 · The Data Pivot & Business Foundations",
    period: "Late 2025 – Early 2026",
    title: "Data Analysis & BI Foundations",
    institution: "Mahara-Tech & Self-Directed Data Track",
    type: "foundation",
    typeLabel: "Foundation Training",
    status: "completed",
    description:
      "Dedicated pivot into data analytics. Mastered advanced Microsoft Excel, Power Query transformation pipelines, Pivot Tables, and exploratory data analysis (EDA).",
    keyLearnings: [
      "Advanced Excel modeling (Pivot Tables, dynamic lookups, gross margin models)",
      "Power Query data cleansing (handling nulls, type conversions, text extraction)",
      "Exploratory data analysis and translating numbers into business context"
    ],
    skills: ["Microsoft Excel", "Power Query", "Pivot Tables", "EDA", "Data Cleansing"]
  },
  {
    id: "programming-fundamentals",
    phase: "Phase 02 · Programming Logic & Problem Solving",
    period: "2024 – 2025",
    title: "Algorithmic Logic & Web Fundamentals",
    institution: "Self-Directed Learning (Elzero & C++ Foundations)",
    type: "foundation",
    typeLabel: "Foundational Code",
    status: "completed",
    description:
      "Built rigorous algorithmic discipline through C++ problem solving, alongside web fundamentals (HTML5, CSS3, JavaScript). Developed strong analytical problem decomposition habits.",
    keyLearnings: [
      "Problem decomposition and step-by-step algorithmic thinking in C++",
      "Web fundamentals (HTML5, modern CSS layout, basic JavaScript)",
      "Translating manual logic into repeatable, structured code"
    ],
    skills: ["C++", "Algorithmic Logic", "Problem Solving", "HTML/CSS", "JavaScript"]
  },
  {
    id: "university-degree",
    phase: "Phase 01 · Academic Degree",
    period: "2024 – 2028 (Expected)",
    title: "B.Sc. in Information Systems",
    institution: "Egyptian University for Science & Technology (EST)",
    type: "academic",
    typeLabel: "Undergraduate Degree",
    status: "current",
    description:
      "Academic undergraduate studies focusing on Information Systems, relational database architecture, systems analysis, and enterprise software concepts.",
    keyLearnings: [
      "Database management systems (DBMS) and relational theory",
      "Information systems design and enterprise computing workflows",
      "Bridging computational methods with real-world business requirements"
    ],
    skills: ["Information Systems", "DBMS Fundamentals", "Systems Analysis"]
  }
];
