export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "power-bi" | "sql" | "excel" | "ai-automation";
  categoryLabel: string;
  tools: string[];
  featured?: boolean;
  metrics: { label: string; value: string }[];
  overview: string;
  businessProblem: string;
  solutionAndPipeline: string[];
  technicalHighlights: string[];
  outcomes: string[];
  deliverables: string[];
  externalUrl?: string;
  behanceUrl?: string;
  datasetInfo?: {
    records: string;
    tables: string[];
  };
}

export const projectsData: Project[] = [
  {
    id: "logistics-delivery-dashboard",
    title: "Logistics & Last-Mile Delivery Performance Dashboard",
    tagline: "End-to-end Power BI business intelligence dashboard analyzing 50,000 delivery records for supply chain SLA optimization.",
    category: "power-bi",
    categoryLabel: "Power BI & DAX",
    tools: ["Power BI", "Power Query", "DAX", "Data Modeling", "Star Schema", "Excel"],
    featured: true,
    metrics: [
      { label: "Historical Records", value: "50,000" },
      { label: "OTIF Benchmark", value: "85% SLA" },
      { label: "Return Rate KPI", value: "Monitored" },
      { label: "Schema Structure", value: "Star Schema" }
    ],
    overview:
      "A comprehensive supply chain and logistics dashboard built to assist Operations Managers in monitoring delivery speed, carrier performance, return rates, and SLA adherence across multi-city distribution hubs.",
    businessProblem:
      "Operations lacked real-time visibility into driver turnaround times, high return clusters, and bottlenecked delivery routes, preventing timely intervention against SLA breaches and shipping cost inflation.",
    solutionAndPipeline: [
      "ETL & Data Cleansing: Imported 50,000 shipment transactions via Power Query. Cleansed anomalous nanosecond precision timestamps into clean DateTimes. Filtered conditional NULL delivery dates for in-transit and cancelled shipments without distorting delivery metrics.",
      "Data Modeling: Architected an optimized Star Schema comprising Fact_Shipments and three dimension tables (Dim_Cities, Dim_Drivers, and a dynamic Dim_Date calendar). Built single-direction relationships to eliminate circular dependencies.",
      "DAX Calculation Architecture: Formulated robust measures for Total Shipments, Return Rate %, In-Transit Volume, Average Delivery Days (strictly excluding weekends and unfulfilled orders), and On-Time In-Full (OTIF %) evaluated against city-specific SLAs.",
      "Executive Dashboard UX: Engineered an interactive executive view featuring an OTIF Gauge visual with an 85% target threshold, geographical shipment map, driver evaluation matrix, region drill-through, and a single-click filter reset bookmark."
    ],
    technicalHighlights: [
      "Resolved nanosecond string datetime conversion errors in Power Query without data loss.",
      "Implemented role-playing calendar logic linking Order Date, Dispatch Date, and Delivery Date via USERELATIONSHIP.",
      "Engineered work-day delivery calculation removing weekend noise from transit metrics.",
      "Configured multi-layered Slicers with cross-filtering and drill-through navigation to Regional Performance."
    ],
    outcomes: [
      "Delivered instant identification of underperforming distribution routes falling below 85% OTIF target.",
      "Isolated top reasons for return spikes across regional hubs.",
      "Empowered logistics leadership with proactive, data-backed driver dispatching decisions."
    ],
    deliverables: [
      "Interactive Power BI (.pbix) production report",
      "Normalized Star Schema Data Model",
      "Executive KPI Summary & DAX Documentation"
    ],
    datasetInfo: {
      records: "50,000 Rows",
      tables: ["Fact_Shipments", "Dim_Cities", "Dim_Drivers", "Dim_Date"]
    },
    behanceUrl: "https://www.behance.net/gallery/149906769/Dashboard-Indicadores-de-Desempenho-Logistico/modules/846537919"
  },
  {
    id: "customer-order-analytics",
    title: "Customer & Order Analytics (E-Commerce & Retail)",
    tagline: "Exploratory data analysis and dimensional modeling to uncover purchasing behaviors and product pricing benchmarks.",
    category: "power-bi",
    categoryLabel: "Power BI & DAX",
    tools: ["Power BI", "DAX", "Data Modeling", "Excel"],
    metrics: [
      { label: "Avg Product Benchmark", value: "$75" },
      { label: "Dimension Tables", value: "Products, Regions" },
      { label: "Analysis Focus", value: "Segment Revenue" }
    ],
    overview:
      "A structured customer intelligence project examining order behavior, product margins, regional distribution trends, and basket sizes to support targeted marketing and inventory management.",
    businessProblem:
      "Marketing and sales teams lacked visibility into average order benchmarks, regional pricing sensitivities, and product category profitability, causing inefficient ad spend and mismatched product promotion.",
    solutionAndPipeline: [
      "Data Normalization: Structured multi-table datasets into distinct Product (ProductID, Name, Category, BasePrice) and Regional dimensions.",
      "Analytical DAX Measures: Created dynamic measures calculating Average Product Price, Category Margin Ratios, and Regional Sales Contribution.",
      "Interactive Visuals: Designed drill-down visual hierarchies allowing business users to inspect revenue from global region down to individual product SKUs."
    ],
    technicalHighlights: [
      "Designed clean one-to-many relationship cardinality preventing duplicate customer counts.",
      "Implemented dynamic Average Product Price measure ($75 benchmark baseline) with cross-dimensional filtering.",
      "Utilized custom tooltips displaying category breakdowns on hover."
    ],
    outcomes: [
      "Clarified high-margin versus high-volume inventory categories.",
      "Provided actionable regional segmentation for upcoming sales campaigns."
    ],
    deliverables: ["Power BI Report File", "Measures Dictionary", "Executive Presentation Deck"]
  },
  {
    id: "financial-aml-analysis",
    title: "Financial Transaction & AML Compliance Analysis",
    tagline: "Investigating banking transactions using SQL and analytical querying to identify suspicious velocity and volume anomalies.",
    category: "sql",
    categoryLabel: "SQL & Database",
    tools: ["SQL", "Data Cleaning", "Excel", "Exploratory Data Analysis"],
    metrics: [
      { label: "Focus", value: "AML Compliance" },
      { label: "Key Method", value: "Outlier Detection" },
      { label: "Query Complexity", value: "Aggregations & Joins" }
    ],
    overview:
      "An analytical investigation into transactional patterns designed to identify anti-money laundering (AML) red flags, transaction velocity spikes, and structured threshold evasions.",
    businessProblem:
      "Compliance officers needed an efficient analytical approach to sift through high-frequency financial logs to isolate non-standard transactions and accounts demonstrating rapid fund layering.",
    solutionAndPipeline: [
      "Data Extraction & Prep: Structured raw transaction records and validated account metadata.",
      "SQL Query Construction: Built multi-layered SQL queries employing CTEs, window functions, and aggregation clauses (SUM, COUNT, GROUP BY, HAVING) to detect volume anomalies.",
      "Risk Categorization: Segmented accounts based on rapid succession transfers and proximity to regulatory reporting thresholds."
    ],
    technicalHighlights: [
      "Formulated SQL queries flagging accounts with high-frequency transactions within narrow time windows.",
      "Filtered false positives through tiered transaction threshold joins.",
      "Summarized findings into clean Excel pivot summaries ready for compliance auditor review."
    ],
    outcomes: [
      "Accelerated suspicious transaction identification by filtering out 90%+ of standard retail transactions.",
      "Created repeatable SQL query templates for ongoing transaction auditing."
    ],
    deliverables: ["SQL Analytical Scripts", "Audit Findings Report", "Risk Stratification Summary"]
  },
  {
    id: "sales-performance-insights",
    title: "Commercial Sales Performance & Margin Analysis",
    tagline: "Dynamic Excel and Power Query sales reporting tracking regional quotas, customer acquisition trends, and gross margins.",
    category: "excel",
    categoryLabel: "Excel & ETL",
    tools: ["Microsoft Excel", "Power Query", "Pivot Tables", "Data Visualization"],
    metrics: [
      { label: "Reporting", value: "Executive Pivot" },
      { label: "Workflow", value: "Automated ETL" },
      { label: "Insight", value: "Margin vs Volume" }
    ],
    overview:
      "An executive sales dashboard and analysis model providing visibility into quarterly revenue targets, product margins, regional distribution efficiency, and customer rep quotas.",
    businessProblem:
      "Disparate sales spreadsheets resulted in inconsistent month-end reporting and manual errors in calculating commissions and net profit margins.",
    solutionAndPipeline: [
      "ETL Automation: Consolidated raw monthly sales extracts using Power Query, eliminating manual copy-pasting.",
      "Pivot Modeling: Built dynamic Pivot Tables and Pivot Charts highlighting Top 10 revenue drivers and lagging territories.",
      "Storytelling Dashboards: Designed an executive-ready dashboard with dynamic slicers for Year, Quarter, and Product Lines."
    ],
    technicalHighlights: [
      "Engineered automated data refresh pipelines in Power Query.",
      "Employed advanced lookup and aggregation formulas (INDEX/MATCH, SUMIFS, XLOOKUP, dynamic arrays).",
      "Formulated gross margin calculation models accounting for variable discounts."
    ],
    outcomes: [
      "Reduced monthly sales report preparation time from hours to a single-click refresh.",
      "Identified underperforming product segments with negative contribution margins."
    ],
    deliverables: ["Automated Excel Reporting Workbook", "Power Query Refresh Pipeline", "Insight Summary Sheet"]
  },
  {
    id: "ai-data-workflow-automation",
    title: "AI-Assisted Operations & Data Workflow Automation",
    tagline: "Applying Python and modern AI automation to streamline repetitive data preparation and generate executive summaries.",
    category: "ai-automation",
    categoryLabel: "AI Automation",
    tools: ["Python", "AI Automation", "Prompt Engineering", "Data Cleaning"],
    metrics: [
      { label: "Automation", value: "Data Preprocessing" },
      { label: "Role", value: "Complementary AI" },
      { label: "Output", value: "Automated Insights" }
    ],
    overview:
      "A prototype automation pipeline that bridges data analytics and AI assistance, facilitating automated preliminary data cleaning, anomaly labeling, and structured business insight generation.",
    businessProblem:
      "Analysts spend up to 70% of their bandwidth on repetitive data formatting, header alignment, and drafting initial descriptive summaries for non-technical stakeholders.",
    solutionAndPipeline: [
      "Python Scripting: Automated preliminary dataset checks (missing value rates, data type inconsistencies, duplicate keys).",
      "AI Prompt Engineering: Developed structured prompts that ingest validated summary tables and output concise, business-oriented executive briefs.",
      "Human-in-the-Loop Validation: Ensured all AI-generated commentary strictly references underlying numerical facts without hallucination."
    ],
    technicalHighlights: [
      "Engineered standardized data validation scripts in Python.",
      "Integrated systematic prompt templates for translating numerical metrics into executive summaries.",
      "Designed workflow concepts for enterprise task coordination and intelligent resource allocation."
    ],
    outcomes: [
      "Significantly compressed the time needed between raw data extraction and initial stakeholder briefing.",
      "Demonstrated how AI complements the analyst's domain expertise rather than replacing critical thinking."
    ],
    deliverables: ["Python Pipeline Prototype", "Prompt Engineering Playbook", "Concept Architecture"]
  }
];
