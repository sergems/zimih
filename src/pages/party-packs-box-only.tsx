import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/animated-section";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, Sparkles, Package, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  { id: 1, src: "/party-packs-box-only.jpg", title: "3D Box — Custom Design" },
];

const highlights = [
  { icon: <Palette size={22} />, title: "Fully Personalised", desc: "Your child's name, theme, age, and colours — all hand-crafted to perfection." },
  { icon: <Sparkles size={22} />, title: "Premium Finish", desc: "Professionally printed and assembled 3D box with bespoke topper detailing." },
  { icon: <Package size={22} />, title: "Box Only", desc: "This is a custom-designed box order. Goodies and treats are sourced separately by the customer." },
];

export default function PartyPacksBoxOnly() {
  const [selected, setSelected] = useState<typeof images[0] | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#8f5cff] via-slate-900 to-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedSection>
            <Link href="/gallery/party-packs" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-colors text-sm font-medium">
              <ArrowLeft size={16} /> Back to Party Packs
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Party Pack 3D Box Only</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Where artistry meets celebration — a statement piece crafted exclusively for your little star.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Purple accent bar */}
      <section className="bg-[#8f5cff] text-white py-5">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="font-semibold text-lg tracking-wide">✦ Bespoke · Personalised · Handcrafted ✦</p>
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
                <img src="/party-packs-box-only.jpg" alt="3D Box Only" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Click to enlarge</span>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Description */}
            <AnimatedSection delay={0.15}>
              <h2 className="text-3xl font-bold mb-4 text-slate-800">The Art of the Bespoke Box</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our <span className="font-semibold text-[#8f5cff]">Party Pack 3D Box</span> is a showstopping, fully personalised keepsake — meticulously designed to reflect your child's unique theme, favourite characters, and chosen colour palette.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Please note: this listing is for the <span className="font-semibold">custom-designed box only</span>. The box arrives beautifully crafted and ready to be filled with your chosen treats and goodies at your own discretion — giving you complete creative freedom over the contents.
              </p>

              <div className="bg-[#8f5cff]/10 border border-[#8f5cff]/20 rounded-2xl p-5 mb-6">
                <p className="text-[#8f5cff] font-semibold text-sm uppercase tracking-widest mb-1">Important to know</p>
                <p className="text-slate-700 text-sm">Goodies, treats, and fillers are <strong>not included</strong> and are to be purchased separately by the customer. If you'd like a fully-loaded option, explore our <Link href="/gallery/party-packs" className="underline text-[#8f5cff] hover:text-[#7a45f0] font-semibold">3D Box Combo</Link>.</p>
              </div>

              <Button asChild size="lg" className="rounded-full h-14 px-10 text-lg font-bold bg-[#8f5cff] hover:bg-[#7a45f0] text-white shadow-lg shadow-purple-400/30 w-full sm:w-auto">
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
            <h2 className="text-3xl font-bold mb-2">What Makes It Special?</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 shadow-sm h-full">
                  <div className="w-12 h-12 bg-[#8f5cff]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#8f5cff]">
                    {h.icon}
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">{h.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{h.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <p className="text-slate-600 mb-6 text-lg">Ready to order your custom box?</p>
            <Button asChild size="lg" className="rounded-full h-14 px-10 text-lg font-bold bg-[#8f5cff] hover:bg-[#7a45f0] text-white shadow-lg shadow-purple-400/30">
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
            <button className="absolute top-6 right-6 text-white hover:text-[#8f5cff] transition-colors z-10">
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
