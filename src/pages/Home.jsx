import React from "react";
import RoleSwitcher from "../components/RoleSwitcher";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { Link } from "react-router-dom";
import Projects from "./Projects";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="p-6"
    >
      <section className="pt-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* LEFT SIDE — TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold neon">
              Hi, I'm Sasidhar Kanakinti
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              I’m an AI Engineer skilled in building, deploying, and optimizing end-to-end AI applications — from developing RESTful APIs and integrating GenAI models to creating data pipelines and deploying production-ready projects on cloud platforms.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <div className="px-4 py-2 rounded-md glass">
                <p className="text-lg text-gray-300 flex items-center gap-2">
                  Role: <RoleSwitcher />
                </p>
              </div>
              <Link
                to="/projects"
                className="px-4 py-2 rounded-md glass hover:scale-105 transition-transform">
                  See Projects
              </Link>

            </div>
          </div>

          {/* RIGHT SIDE — IMAGE */}
          <div className="hidden md:flex items-center justify-center -mt-10">
            <div className="w-64 h-80 rounded-xl glass flex items-center justify-center shadow-neon-lg overflow-hidden">
              <img
                src={profile}
                alt="Sasidhar Kanakinti"
                className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>


        </div>

        <div className="mt-12 accent-line rounded"></div>
      </section>
    </motion.div>
  );
}
