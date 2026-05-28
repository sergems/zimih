import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/animated-section";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, Sparkles, Gift, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  { id: 1, src: "/party-packs-3d-combo.jpg", title: "3D Box Combo" },
];

const packContents = [
  "50g Chips Packet",
  "52g Chocolate Bar",
  "200ml Juice Box",
  "41.5g KitKat Slab",
];

const highlights = [
  { icon: <Gift size={22} />, title: "All-Inclusive Pack", desc: "Every treat, every detail — thoughtfully curated and elegantly presented inside your bespoke 3D box." },
  { icon: <Star size={22} />, title: "Personalised to Perfection", desc: "Each box is custom-designed with your child's name, theme, and chosen colour palette." },
  { icon: <Sparkles size={22} />, title: "Ready to Wow", desc: "Delivered complete and ready to hand out — no extra prep required on your end." },
];

export default function PartyPacks3DCombo() {
  const [selected, setSelected] = useState<typeof images[0] | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ec4899] via-slate-900 to-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedSection>
            <Link href="/gallery/party-packs" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-colors text-sm font-medium">
              <ArrowLeft size={16} /> Back to Party Packs
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">3D Box Combo</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">The ultimate party favour experience — a stunning custom box, fully loaded with handpicked treats for your little guest of honour.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pink accent bar */}
      <section className="bg-[#ec4899] text-white py-5">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="font-semibold text-lg tracking-wide">✦ Custom Box · Curated Goodies · Delivered Complete ✦</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Image + Description */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <AnimatedSection>
              <motion.div
                className="relative aspect-square rounded-3xl overflow-hidden shadow-xl cursor-pointer group"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelected(images[0])}
              >
                <img src="/party-packs-3d-combo.jpg" alt="3D Box Combo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Click to enlarge</span>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Description */}
            <AnimatedSection delay={0.15}>
              <h2 className="text-3xl font-bold mb-4 text-slate-800">The Complete Celebration Package</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Elevate your party experience with our <span className="font-semibold text-[#ec4899]">3D Box Combo</span> — a breathtaking union of artistry and indulgence. Each box is individually personalised and arrives fully filled with a curated selection of premium treats, making it the most effortless yet impactful favour you can offer your guests.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                From the bespoke 3D-printed topper to every lovingly chosen goodie nestled inside, this combo is designed to delight from the moment it's received.
              </p>

              {/* Pack contents */}
              <div className="bg-[#ec4899]/10 border border-[#ec4899]/20 rounded-2xl p-5 mb-6">
                <p className="text-[#ec4899] font-semibold text-sm uppercase tracking-widest mb-3">What's Inside Every Box</p>
                <ul className="space-y-2">
                  {packContents.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <span className="w-6 h-6 rounded-full bg-[#ec4899] flex items-center justify-center shrink-0">
                        <Check size={14} className="text-white" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Button asChild size="lg" className="rounded-full h-14 px-10 text-lg font-bold bg-[#ec4899] hover:bg-[#db2777] text-white shadow-lg shadow-pink-400/30 w-full sm:w-auto">
                <Link href="/contact">✦ Inquire Now</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Why Choose the Combo?</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 shadow-sm h-full">
                  <div className="w-12 h-12 bg-[#ec4899]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#ec4899]">
                    {h.icon}
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">{h.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{h.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <p className="text-slate-600 mb-6 text-lg">Ready to order the complete combo for your party?</p>
            <Button asChild size="lg" className="rounded-full h-14 px-10 text-lg font-bold bg-[#ec4899] hover:bg-[#db2777] text-white shadow-lg shadow-pink-400/30">
              <Link href="/contact">✦ Inquire Now</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-[#ec4899] transition-colors z-10">
              <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selected.src} alt={selected.title} className="w-full max-h-[80vh] object-contain" />
              <div className="bg-white p-4 text-center">
                <p className="font-bold text-slate-800">{selected.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
