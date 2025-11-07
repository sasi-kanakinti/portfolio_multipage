import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import App from "./App";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  </BrowserRouter>
);