import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isProjectPage = location.startsWith('/projects/');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-md border-b border-border/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-2xl font-bold">
              <span className="text-white">Juggernot</span>
              <span className="text-accent">AI</span>
            </a>
          </Link>
        </div>

        {!isProjectPage ? (
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a
              href="#services"
              className="text-white hover:text-accent transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-white hover:text-accent transition-colors"
            >
              Projects
            </a>
            <a
              href="#benefits"
              className="text-white hover:text-accent transition-colors"
            >
              Benefits
            </a>
            <a
              href="#about"
              className="text-white hover:text-accent transition-colors"
            >
              About
            </a>
          </div>
        ) : (
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link href="/">
              <a className="text-white hover:text-accent transition-colors flex items-center gap-1">
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </a>
            </Link>
          </div>
        )}

        <div className="flex items-center gap-4">
          {!isProjectPage ? (
            <Button
              asChild
              variant="default"
              size="sm"
              className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-white rounded-full"
            >
              <a href="#contact">Get in touch</a>
            </Button>
          ) : (
            <Link href="/#projects">
              <Button
                variant="outline"
                size="sm"
                className="hidden md:inline-flex border-accent text-accent hover:bg-accent/10 rounded-full"
              >
                View all projects
              </Button>
            </Link>
          )}

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/20"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {!isProjectPage ? (
                <>
                  <a
                    href="#services"
                    className="text-white py-2 hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </a>
                  <a
                    href="#projects"
                    className="text-white py-2 hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Projects
                  </a>
                  <a
                    href="#benefits"
                    className="text-white py-2 hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Benefits
                  </a>
                  <a
                    href="#about"
                    className="text-white py-2 hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </a>
                  <Button
                    asChild
                    variant="default"
                    className="bg-accent hover:bg-accent/90 text-white w-full rounded-lg mt-4"
                  >
                    <a
                      href="#contact"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get in touch
                    </a>
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/">
                    <a 
                      className="text-white py-2 hover:text-accent transition-colors flex items-center gap-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <ArrowLeft size={16} />
                      <span>Back to Home</span>
                    </a>
                  </Link>
                  <Link href="/#projects">
                    <a
                      className="text-white py-2 hover:text-accent transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      View all projects
                    </a>
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
