import { Link, NavLink } from "react-router-dom";
import RoleSwitcher from "../components/RoleSwitcher";


export default function Navbar() {
  const links = ["Home", "About", "Skills", "Projects", "Resume", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-30 glass py-4 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-white">
                Sasidhar Kanakinti
            </span>
            <div className="w-px h-5 bg-linear-to-b from-cyan-400 to-purple-500"></div>
            <span className="text-lg text-gray-300 flex items-center gap-2">
                <RoleSwitcher />
            </span>
        </div>


        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <NavLink
              key={link}
              to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              className={({ isActive }) =>
                `text-sm transition-all hover:text-cyan-400 ${
                  isActive ? "text-cyan-400" : "text-gray-300"
                }`
              }
            >
              {link}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
