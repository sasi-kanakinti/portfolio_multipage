import React from 'react'
import { motion } from "framer-motion";



const demoProjects = [
{ id: 1, title: 'AI Chatbot', desc: 'Conversational AI chatbot leveraging OpenAI models for interactive responses and intelligent communication.', repo: 'https://github.com/sasi-kanakinti/Chat-bot.git', demo: 'https://chat-bot-inky-omega-98.vercel.app/' },
{ id: 2, title: 'Files-Parsing', desc: 'Automated file parsing system using Python and Databricks to clean, process, and extract structured data efficiently.', repo: 'https://github.com/sasi-kanakinti/Files-Parsing.git', demo: 'https://portfolio-demo-basic.vercel.app' },
{ id: 3, title: 'Mobile Prepaid Recharge', desc: 'Full-stack Java application enabling secure mobile prepaid recharges using Spring Boot and Spring Security.', repo: 'https://github.com/sasi-kanakinti/Mobile_Prepaid_Recharge.git', demo: '#' }
]


export default function Projects() {
return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="p-6"
    >
<section className="pt-24">
<h2 className="text-3xl neon font-bold">Projects</h2>
<p className="text-gray-300 mt-3">A few of my featured projects.</p>


<div className="mt-6 grid md:grid-cols-2 gap-6">
{demoProjects.map(p => (
<div key={p.id} className="glass p-6 rounded-md">
<h3 className="font-semibold text-xl text-neon">{p.title}</h3>
<p className="text-gray-300 mt-2">{p.desc}</p>
<div className="mt-4 flex gap-3">
<a href={p.repo} target="_blank" className="px-3 py-2 glass rounded hover:scale-105">GitHub</a>
<a href={p.demo} target="_blank" className="px-3 py-2 glass rounded hover:scale-105">Live Demo</a>
</div>
</div>
))}
</div>
</section>
</motion.div>
)
}