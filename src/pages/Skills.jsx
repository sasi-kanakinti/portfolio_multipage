import React from 'react'
import { motion } from "framer-motion";


const skills = {
  "Programming Languages": [
    "Python",
    "JavaScript (Basics)",
    "SQL",
    "Java (Basics)"
  ],

  Frontend: [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "React"
  ],

  Backend: [
    "Flask",
    "FastAPI",
    "MySQL"
  ],

  "AI / ML": [
    "HuggingFace",
    "Transformers",
    "Prompt Engineering",
    "RAG"
  ],

  "Data & ETL": [
    "ETL Pipelines",
    "Databricks"
  ],

  "DevOps / MLOps": [
    "Docker",
    "Jenkins",
    "CI/CD"
  ],

  Tools: [
    "Git",
    "GitHub",
    "Postman",
    "VS Code",
    "DBeaver"
  ],

  Cloud: [
    "Azure OpenAI",
    "Azure AI Services"
  ],

  "Frameworks & Libraries": [
    "LangChain"
  ]
};



export default function Skills() {
return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="p-6"
    >
<section className="pt-24">
<h2 className="text-3xl neon font-bold">Skills</h2>
<div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
{Object.entries(skills).map(([cat, list]) => (
<div key={cat} className="glass p-4 rounded-md">
<h4 className="font-semibold">{cat}</h4>
<ul className="mt-2 text-gray-300 list-disc list-inside">
{list.map(s => <li key={s}>{s}</li>)}
</ul>
</div>
))}
</div>
</section>
</motion.div>
)
}