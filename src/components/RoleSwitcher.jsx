import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

const roles = ["AI/ML Engineer", "Full Stack Developer"];

export default function RoleSwitcher() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500); // switch every 2.5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <span
      className="ml-2 text-transparent bg-clip-text bg-linear-to-r from-[#7C5CFF] to-[#00FFF5] font-semibold transition-all duration-700 ease-in-out opacity-100"
      key={roles[index]}
    >
      {roles[index]}
    </span>
  );
}
