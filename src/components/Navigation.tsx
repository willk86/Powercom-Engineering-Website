import { Activity, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

export function Navigation({ children }: LayoutProps) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Accueil", path: "/" },
    { name: "Études", path: "/etudes" },
    { name: "Contrôle", path: "/controle" },
    { name: "Références", path: "/references" },
    { name: "Galerie", path: "/galerie" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm px-6 py-4 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-2">
          {/* Clickable logo */}
          <a href="/">
            <img
              src="logos/LogoPowercom.png"
              alt="Powercom Logo"
              className="h-12 w-auto"
            />
          </a>
        </Link>
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition ${
                location.pathname === link.path
                  ? "text-blue-900"
                  : "text-blue-900 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-900 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4"
          >
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-blue-900 ${location.pathname === link.path ? "font-bold" : "hover:text-white"}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
