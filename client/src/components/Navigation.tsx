import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import uobLogo from "/images/uob_logo.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Abstract", to: "abstract" },
    { name: "Objectives", to: "objectives" },
    { name: "Methodology", to: "methodology" },
    { name: "Technologies", to: "technologies" },
    { name: "Results", to: "results" },
    { name: "Demo", to: "demo" },
    { name: "Conclusion", to: "conclusion" },
    { name: "About & Team", to: "about" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "glass-nav py-3 shadow-md" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link
            to="home"
            smooth={true}
            className="cursor-pointer flex items-center gap-3"
          >
            <img 
              src={uobLogo}
              alt="UOB Logo" 
              className="h-10 w-auto" // Adjusted for better nav fit
            />
            <div className="hidden md:block">
              <span className={cn("block text-sm font-bold leading-tight", scrolled ? "text-black" : "text-white")}>
                Mail Guard
              </span>
              <span className={cn("block text-xs uppercase tracking-wider", scrolled ? "text-muted-foreground" : "text-secondary/70")}>
                UOB / IT / Network
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={cn(
                  "cursor-pointer px-3 py-2 text-sm font-medium rounded-md transition-colors text-[#f5b400]",
                  scrolled 
                    ? "hover:text-primary hover:bg-secondary/5" 
                    : "hover:text-primary hover:bg-white/50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="contact" smooth={true} offset={-100} duration={500}>
              <Button className="ml-4 bg-primary text-white hover:bg-primary/90">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-[#f5b400] hover:text-primary hover:bg-gray-50 border-b border-gray-100 last:border-0"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="contact" 
              smooth={true} 
              offset={-80} 
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block mt-4"
            >
              <Button className="w-full bg-primary text-white">Contact Us</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
