import React from 'react'
import { motion } from "framer-motion";


const skills = {
  "Programming Languages": [
    "Python", 
    "JavaScript", 
    "SQL", 
    "Java"
  ],

  Frontend: [
    "React",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "JavaScript"
  ],

  Backend: [
    "Flask",
    "FastAPI",
    "LangChain",
    "SQL",
    "MySQL"
  ],

  'AL/Ml': [
    "PyTorch",
    "HuggingFace",
    "Transformers",
    "NLP"
  ],

  'MLOps/Devops': [
    "Docker",
    "Airflow",
    "CI/CD",
    "MLflow",
    "Jenkins"
  ],

  Tools: [
    "Git",
    "GitHub",
    "DockerHub",
    "Postman",
    "VSCode",
    "DBeaver",
    "Cursor"
  ],

  Cloud: [
    "Databricks",
    "Azure OpenAI",
    "Azure AI Services"
  ],

  GenAI: [
    "ChatGPT",
    "GitHub Copilot",
    "Prompt Engineering",
    "AI-assisted Development"
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