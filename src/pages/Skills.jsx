import React from 'react'
import { motion } from "framer-motion";


const skills = {
  programmingLanguages: ["Python", "JavaScript", "SQL"],

  frontend: [
    "React",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "JavaScript"
  ],

  backend: [
    "Flask",
    "FastAPI",
    "LangChain",
    "SQL",
    "MySQL"
  ],

  aiMl: [
    "PyTorch",
    "HuggingFace",
    "Transformers",
    "NLP"
  ],

  mlopsDevops: [
    "Docker",
    "Airflow",
    "CI/CD",
    "MLflow",
    "Jenkins"
  ],

  tools: [
    "Git",
    "GitHub",
    "DockerHub",
    "Postman",
    "VSCode",
    "DBeaver",
    "Cursor"
  ],

  cloud: [
    "Databricks",
    "Azure OpenAI",
    "Azure AI Services"
  ],

  genAI: [
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