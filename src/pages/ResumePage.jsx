import React from 'react'
import { motion } from "framer-motion";



export default function ResumePage() {
return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="p-6"
    >
<section className="pt-24">
<h2 className="text-3xl neon font-bold">Resume</h2>
<p className="text-gray-300 mt-3">You can preview or download my resume below.</p>


<div className="mt-6 grid md:grid-cols-2 gap-6">
<div className="glass p-4 rounded-md">
<iframe src="/Resume.pdf" title="resume" className="w-full h-[600px] rounded" />
</div>


<div className="flex flex-col items-start gap-4">
<a href="/Resume.pdf" download className="px-4 py-2 glass rounded hover:scale-105">Download Resume (PDF)</a>
</div>
</div>
</section>
</motion.div>
)
}