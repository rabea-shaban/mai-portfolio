export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Working Knowledge" | "Developing";
    context: string;
    tags: string[];
  }[];
}

export const skillsCategories: SkillCategory[] = [
  {
    title: "Data Analytics & Business Intelligence",
    description: "Core discipline focused on translating raw operational numbers into clear, interactive decision-making systems.",
    iconName: "BarChart3",
    skills: [
      {
        name: "Power BI",
        level: "Proficient",
        context: "Designing interactive multi-page dashboards, custom visuals, Gauge SLA indicators, and drill-through architecture.",
        tags: ["Visualizations", "Reporting", "Slicers", "Bookmarks"]
      },
      {
        name: "DAX (Data Analysis Expressions)",
        level: "Proficient",
        context: "Authoring calculated measures, time intelligence, conditional ratios (OTIF %, Return Rate), and relationship filters.",
        tags: ["Calculated Measures", "Filter Context", "KPIs"]
      },
      {
        name: "Data Modeling & Star Schema",
        level: "Proficient",
        context: "Structuring Fact and Dimension tables, one-to-many cardinality, role-playing date relationships, and Dim_Date calendars.",
        tags: ["Star Schema", "Fact & Dim", "Data Architecture"]
      },
      {
        name: "Power Query & ETL",
        level: "Proficient",
        context: "End-to-end data cleansing, timestamp parsing, handling conditional nulls, type conversions, and data transformation.",
        tags: ["Data Cleansing", "Transformation", "Data Prep"]
      },
      {
        name: "Microsoft Excel",
        level: "Advanced",
        context: "Pivot Tables, advanced lookup formulas (XLOOKUP, INDEX/MATCH), data validation, and executive summaries.",
        tags: ["Pivot Tables", "Advanced Formulas", "Financial/Sales Models"]
      },
      {
        name: "Business Insights & KPIs",
        level: "Proficient",
        context: "Translating stakeholder objectives into measurable metrics (OTIF, SLAs, Return Rates, Gross Margins).",
        tags: ["KPI Tracking", "Executive Reporting", "Storytelling"]
      }
    ]
  },
  {
    title: "Database Management & Querying",
    description: "Extracting, aggregating, and joining structured datasets for downstream reporting and investigative analytics.",
    iconName: "Database",
    skills: [
      {
        name: "SQL (Structured Query Language)",
        level: "Working Knowledge",
        context: "Executing complex JOINs, GROUP BY, aggregations, data filtering, and extracting transactional subsets for analysis.",
        tags: ["Joins", "Aggregations", "Data Extraction", "Filtering"]
      },
      {
        name: "Relational Database Concepts",
        level: "Proficient",
        context: "Understanding primary/foreign key relationships, normalization, relational integrity, and analytical schemas.",
        tags: ["Keys", "Normalization", "Integrity"]
      },
      {
        name: "Data Verification & Auditing",
        level: "Working Knowledge",
        context: "Spotting outliers, anomaly detection, transaction validation, and reconciliation between source files and reports.",
        tags: ["Anomaly Detection", "Audit Trails", "Reconciliation"]
      }
    ]
  },
  {
    title: "Programming & Technical Foundations",
    description: "Algorithmic thinking, scripting for data manipulation, and web technology fundamentals.",
    iconName: "Code2",
    skills: [
      {
        name: "Python",
        level: "Working Knowledge",
        context: "Scripting for data cleaning, basic exploratory data analysis (EDA), and automation logic.",
        tags: ["Data Cleansing", "EDA", "Automation Scripts"]
      },
      {
        name: "C++ & Problem Solving",
        level: "Proficient",
        context: "Strong foundation in data structures, algorithmic logic, problem decomposition, and teaching beginners.",
        tags: ["Algorithms", "Logic", "Problem Solving"]
      },
      {
        name: "Frontend Fundamentals (HTML/CSS/JS)",
        level: "Working Knowledge",
        context: "Solid grasp of web structures, responsive layout principles, and styling derived from foundational development learning.",
        tags: ["HTML5", "CSS3", "JavaScript"]
      }
    ]
  },
  {
    title: "AI Automation & Workflow Enhancement",
    description: "Complementary skills to accelerate data preparation, automate repetitive workflows, and craft intelligent summaries.",
    iconName: "Cpu",
    skills: [
      {
        name: "AI-Assisted Analysis",
        level: "Proficient",
        context: "Leveraging state-of-the-art LLMs to draft analytical summaries, brainstorm hypothesis testing, and inspect syntax.",
        tags: ["Insight Drafting", "Workflow Speed", "Validation"]
      },
      {
        name: "Prompt Engineering",
        level: "Proficient",
        context: "Designing precise, structured prompt chains that extract clean summaries and structured tabular insights without hallucination.",
        tags: ["Structured Prompts", "Context Management", "AI Workflows"]
      },
      {
        name: "Repetitive Task Automation",
        level: "Working Knowledge",
        context: "Automating recurring reporting schedules, file sorting, and data pre-checks to reduce manual analyst friction.",
        tags: ["Workflow Optimization", "Task Scheduling", "Pipelines"]
      }
    ]
  }
];

export const personalStrengths = [
  {
    title: "Data Storytelling",
    description: "Connecting numbers directly to business decisions rather than delivering static, unexplained charts."
  },
  {
    title: "Technical Mentorship",
    description: "Demonstrated ability to break down complex algorithmic and programming concepts into simple, actionable steps."
  },
  {
    title: "Diligent Problem Solving",
    description: "Tenacious approach to data troubleshooting, resolving stubborn timestamp, modeling, and formula errors at the root."
  },
  {
    title: "Content & Communication",
    description: "Background in media, technical writing, and public communication that bridges the gap between technical and non-technical stakeholders."
  }
];
