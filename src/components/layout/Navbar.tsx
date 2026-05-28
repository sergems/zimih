import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/packages", label: "Packages" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Mobile: justify-between, Desktop: centered together */}
        <div className="flex items-center justify-between md:justify-center md:gap-4">
          <Link href="/" className="flex items-center z-50 shrink-0">
            <img src="/zimih-logo.jpg" alt="ZIMIH Wonder Co Logo" className="w-20 h-20 rounded-full object-cover" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-slate-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="ml-2 bg-primary hover:bg-primary/90 text-white rounded-full font-bold px-6">
              <Link href="/contact">Book a Party</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 text-slate-600 hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center gap-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`font-display text-2xl font-bold transition-colors ${
              location === link.href ? "text-primary" : "text-slate-800"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold px-8 py-6 text-lg" onClick={() => setIsOpen(false)}>
          <Link href="/contact">Book a Party</Link>
        </Button>
      </div>
    </header>
  );
}
