import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Benefícios", href: "#benefits" },
    { name: "Como Funciona", href: "#how-it-works" },
    { name: "Projetos", href: "#projects" },
    { name: "Depoimentos", href: "#testimonials" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy-900/95 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <span className={`font-serif text-3xl font-bold tracking-tight ${isScrolled ? "text-white" : "text-white"}`}>
              Velluxe <span className="text-gold">Decor</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-gray-200 hover:text-gold transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold rounded-none px-6"
              onClick={(e) => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Fale Conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-navy-900/95 backdrop-blur-xl border-t border-white/10 p-6 shadow-xl">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-lg font-medium text-gray-200 hover:text-gold transition-colors py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="bg-gold-500 hover:bg-gold-400 text-navy-900 w-full mt-4 h-12 text-lg"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Fale Conosco
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
