import React from 'react'
import { motion } from "framer-motion";


const skills = {
Frontend: ['React', 'Tailwind', 'HTML', 'CSS', 'JavaScript'],
Backend: ['SQL'],
'AI / ML': ['Python', 'PyTorch', 'Transformers', 'RAG'],
Tools: ['Git','DBeaver', 'Jenkins', 'VSCode','Postman'],
GenAI: ['ChatGPT', 'GitHub Copilot', 'Prompt Engineering'],
Cloud: ['Azure', 'Databricks'],
Frameworks: ['DJango', 'Flask','FASTAPI', 'HuggingFace', 'LangChain' ],
}


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