import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/zimih-logo.jpg" alt="ZIMIH Wonder Co Logo" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
              <span className="font-display font-bold text-2xl text-white">ZIMIH Wonder Co</span>
            </div>
            <p className="text-slate-300 mb-6">Kids Events & Party Magic! Making every celebration colorful, joyful, and unforgettable.</p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/zimihwonderco" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#1877F2] hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/zimihwonderco" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#E1306C] hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@zimihwonderco" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#010101] hover:text-white transition-colors">
                <FaTiktok size={20} />
              </a>
              <a href="https://wa.me/27699801697" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#25D366] hover:text-white transition-colors">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-yellow-400">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-300 hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-slate-300 hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-slate-300 hover:text-yellow-400 transition-colors">Our Services</Link></li>
              <li><Link href="/gallery" className="text-slate-300 hover:text-yellow-400 transition-colors">Gallery</Link></li>
              <li><Link href="/packages" className="text-slate-300 hover:text-yellow-400 transition-colors">Party Packages</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-[#4ecbff]">Our Services</h3>
            <ul className="space-y-3 text-slate-300">
              <li>Jumping Castle Rentals</li>
              <li>Balloon Garlands</li>
              <li>Party Packs & Favors</li>
              <li>Personalized Items</li>
              <li>Jumping Castle Sales</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-[#ff4fa3]">Contact Us</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#ff4fa3] shrink-0 mt-1" />
                <span>South Africa</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#ff4fa3] shrink-0" />
                <a href="tel:+27699801697" className="hover:text-white transition-colors">+27 69 980 1697</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#ff4fa3] shrink-0" />
                <a href="mailto:hello@zimihwonderco.co.za" className="hover:text-white transition-colors">hello@zimihwonderco.co.za</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ZIMIH Wonder Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
