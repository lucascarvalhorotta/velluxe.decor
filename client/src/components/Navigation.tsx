import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Componente Logo com ViewBox OTIMIZADO
function VelluxeLogo({ className = "h-16 w-auto" }: { className?: string }) {
  return (
    <svg 
      viewBox="400 1100 2400 1000"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* 3 Linhas Onduladas Douradas */}
      <path 
        fill="#D4AF37"
        d="M490.73,1613.42c69.93-22.03,141.23-39.62,213.39-52.63,72.31-13.03,145.42-21.39,218.8-25.1,73.69-3.73,147.54-2.62,221.11,2.88,74.09,5.54,147.79,15.19,221.18,26.63,74.1,11.55,147.91,24.87,221.82,37.59,73.83,12.71,147.8,24.79,222.15,34.04,66.04,8.21,132.38,13.91,198.92,15.53,65.01,1.58,130.18-.59,194.82-7.87,63.76-7.18,127.05-19.13,188.52-37.67,60.63-18.29,119.55-42.96,174.36-74.77,13.47-7.82,26.67-16.07,39.61-24.73,10.64-7.12.64-24.45-10.09-17.27-52.24,34.95-108.88,62.9-168.06,83.98-59.91,21.34-122.1,35.96-184.96,45.33-63.57,9.48-127.97,13.39-192.22,13.49-64.72.1-129.42-3.77-193.77-10.57-73.73-7.8-147.05-19.06-220.16-31.31-73.66-12.35-147.15-25.74-220.85-37.85-73.8-12.13-147.86-23.01-222.32-30.29-73.67-7.21-147.66-10.56-221.68-8.89-73.67,1.67-147.2,8.1-220.08,18.95-72.23,10.76-143.78,26.05-214.08,45.82-17.33,4.87-34.57,10.03-51.74,15.44-12.23,3.85-7.01,23.17,5.32,19.29h0Z"
      />
      <path 
        fill="#D4AF37"
        d="M490.73,1668.64c69.93-22.03,141.23-39.62,213.39-52.63,72.31-13.03,145.42-21.39,218.8-25.1,73.69-3.73,147.54-2.62,221.11,2.88,74.09,5.54,147.79,15.19,221.18,26.63,74.1,11.55,147.91,24.87,221.82,37.59,73.83,12.71,147.8,24.79,222.15,34.04,66.04,8.21,132.38,13.91,198.92,15.53,65.01,1.58,130.18-.59,194.82-7.87,63.76-7.18,127.05-19.13,188.52-37.67,60.63-18.29,119.55-42.96,174.36-74.77,13.47-7.82,26.67-16.07,39.61-24.73,10.64-7.12.64-24.45-10.09-17.27-52.24,34.95-108.88,62.9-168.06,83.98-59.91,21.34-122.1,35.96-184.96,45.33-63.57,9.48-127.97,13.39-192.22,13.49-64.72.1-129.42-3.77-193.77-10.57-73.73-7.8-147.05-19.06-220.16-31.31-73.66-12.35-147.15-25.74-220.85-37.85-73.8-12.13-147.86-23.01-222.32-30.29-73.67-7.21-147.66-10.56-221.68-8.89-73.67,1.67-147.2,8.1-220.08,18.95-72.23,10.76-143.78,26.05-214.08,45.82-17.33,4.87-34.57,10.03-51.74,15.44-12.23,3.85-7.01,23.17,5.32,19.29h0Z"
      />
      <path 
        fill="#D4AF37"
        d="M490.73,1723.92c69.93-22.03,141.23-39.62,213.39-52.63,72.31-13.03,145.42-21.39,218.8-25.1,73.69-3.73,147.54-2.62,221.11,2.88,74.09,5.54,147.79,15.19,221.18,26.63,74.1,11.55,147.91,24.87,221.82,37.59,73.83,12.71,147.8,24.79,222.15,34.04,66.04,8.21,132.38,13.91,198.92,15.53,65.01,1.58,130.18-.59,194.82-7.87,63.76-7.18,127.05-19.13,188.52-37.67,60.63-18.29,119.55-42.96,174.36-74.77,13.47-7.82,26.67-16.07,39.61-24.73,10.64-7.12.64-24.45-10.09-17.27-52.24,34.95-108.88,62.9-168.06,83.98-59.91,21.34-122.1,35.96-184.96,45.33-63.57,9.48-127.97,13.39-192.22,13.49-64.72.1-129.42-3.77-193.77-10.57-73.73-7.8-147.05-19.06-220.16-31.31-73.66-12.35-147.15-25.74-220.85-37.85-73.8-12.13-147.86-23.01-222.32-30.29-73.67-7.21-147.66-10.56-221.68-8.89-73.67,1.67-147.2,8.1-220.08,18.95-72.23,10.76-143.78,26.05-214.08,45.82-17.33,4.87-34.57,10.03-51.74,15.44-12.23,3.85-7.01,23.17,5.32,19.29h0Z"
      />
      
      {/* Texto Velluxe - BRANCO */}
      <text 
        fontFamily="'Cormorant Garamond', serif" 
        fontSize="700" 
        fontWeight="600" 
        fill="#FFFFFF"
        x="488" 
        y="1440"
      >
        Velluxe
      </text>
      
      {/* Texto Decor - DOURADO */}
      <text 
        fontFamily="'Cormorant Garamond', serif" 
        fontSize="300" 
        fontWeight="500" 
        fontStyle="italic" 
        fill="#FFFFFF"
        x="1217" 
        y="1965"
      >
        Decor
      </text>
    </svg>
  );
}

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
          {/* LOGO OTIMIZADA - Agora com tamanho ajustável! */}
          <Link href="/" className="group">
            <VelluxeLogo className="h-6 md:h-16 lg:h-20 w-auto transition-transform duration-300 group-hover:scale-105" />
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
              className="bg-[#D4AF37] hover:bg-[#C5A572] text-[#1a2231] font-semibold rounded-none px-6 shadow-lg hover:shadow-xl transition-all"
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
              className="bg-[#D4AF37] hover:bg-[#C5A572] text-[#1a2231] w-full mt-4 h-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
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
