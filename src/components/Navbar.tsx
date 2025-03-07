
import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tracks", href: "#tracks" },
    { name: "Important Dates", href: "#dates" },
    { name: "Committee", href: "#committee" },
    { name: "Registration", href: "#registration" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 py-4 px-4 md:px-8 bg-conference-blue shadow-md",
        scrolled
          ? "bg-opacity-95 backdrop-blur-md"
          : "bg-opacity-85"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white font-bold text-xl">RCESAD-2025</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-conference-gold font-medium text-sm transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfyJMXqdJhMlhUGdFhjhFVqtN22hbIPOpvMutifb2bGkCuNtA/viewform"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-conference-blue font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Register Now
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-conference-blue bg-opacity-95 shadow-lg p-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-conference-gold font-medium text-sm transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfyJMXqdJhMlhUGdFhjhFVqtN22hbIPOpvMutifb2bGkCuNtA/viewform"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-conference-blue font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
