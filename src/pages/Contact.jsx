import React from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
        alert('✅ Message sent successfully!');
    })
    .catch((error) => {
        alert('❌ Error sending message: ' + error.text);
    });

    e.target.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="p-6"
    >
      <section className="pt-24">
        <h2 className="text-3xl neon font-bold">Contact</h2>
        <p className="text-gray-300 mt-3">
          Feel free to connect or drop me a message below.
        </p>

        {/* ✅ Make sure input names match EmailJS variables */}
        <form onSubmit={sendEmail} className="mt-6 grid gap-4 w-full md:w-2/3">
          <input 
            type="text" 
            name="from_name" 
            placeholder="Your name" 
            className="glass p-3 rounded" 
            required 
          />
          <input 
            type="email" 
            name="reply_to" 
            placeholder="Your email" 
            className="glass p-3 rounded" 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your message" 
            rows={6} 
            className="glass p-3 rounded" 
            required 
          />
          <button 
            type="submit" 
            className="px-4 py-2 glass rounded hover:scale-105"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-gray-400">
          <p>Find me on:</p>
          <p className="mt-2">
            <a href="https://github.com/sasi-kanakinti" target="_blank" className="text-neon">GitHub</a> •
            <a href="https://www.linkedin.com/in/sasidhar-kanakinti-a88824383" target="_blank" className="text-neon ml-2">LinkedIn</a> •
            <a href="mailto:9908135565ks@gmail.com" target="_blank" className="text-neon ml-2">Email</a>
          </p>
        </div>
      </section>
    </motion.div>
  );
}
