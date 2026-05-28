import { ReactNode, useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[72px]">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 bg-primary/90 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-primary transition-colors hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}
