import React from 'react'
import { motion } from "framer-motion";


export default function About() {
return (
<motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="p-6"
    >
<section className="pt-24">
<h2 className="text-3xl font-bold neon">About Me</h2>
<p className="mt-4 text-gray-300">
  I am an aspiring AI Engineer passionate about building intelligent, data-driven solutions that bridge software engineering and artificial intelligence.
With hands-on experience in Python, Flask, FastAPI, React, and REST APIs, I specialize in developing and deploying end-to-end AI applications.<br/>
I’ve worked with Hugging Face, OpenAI, and LangChain to integrate advanced language models into real-world systems.
My technical expertise also extends to ETL pipelines, Databricks, and cloud deployments, ensuring scalable and production-ready AI solutions.<br/>
I enjoy transforming data into actionable insights through automation and intelligent systems.
Beyond coding, I focus on clean architecture, MLOps practices, and continuous learning to stay aligned with the evolving AI ecosystem.
My goal is to contribute to impactful AI-driven products that simplify human experiences and accelerate innovation.
</p>


<div className="mt-6 grid md:grid-cols-2 gap-6">
<div className="glass p-6 rounded-md">
<h3 className="font-semibold">Interests</h3>
<i><ul className="mt-3 text-gray-300 list-disc list-inside">
<li>Artificial Intelligence & Machine Learning</li>
<li>Web Development (React, DJango)</li>
<li>GenAI</li>
</ul></i>
</div>


<div className="glass p-6 rounded-md">
<h3 className="font-semibold">Education</h3>
<i><p className="mt-3 text-gray-300">
      B. Tech in CSE - Annamacharya Institute of Technology & Sciences,<br/>
      year_of_passing: 2025,<br/>
      location: Tirupati, India,</p></i>
</div>
</div>
</section>
</motion.div>
)
}