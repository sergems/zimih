import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/animated-section";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  { id: 1, src: "/gallery-boys.jpg", title: "Boys Party Pack" },
  { id: 2, src: "/boys-chips.jpg", title: "50g Chips Packet" },
  { id: 3, src: "/boys-chocolate.jpg", title: "52g Chocolate Bar" },
  { id: 4, src: "/boys-juice.jpg", title: "200ml Juice Box" },
  { id: 5, src: "/boys-kitkat.jpg", title: "41.5g KitKat Slab" },
];

const packContents = [
  { label: "50g Chips Packet", img: "/boys-chips.jpg" },
  { label: "52g Chocolate Bar", img: "/boys-chocolate.jpg" },
  { label: "200ml Juice Box", img: "/boys-juice.jpg" },
  { label: "41.5g KitKat Slab", img: "/boys-kitkat.jpg" },
];

export default function PartyFavorsBoys() {
  const [selected, setSelected] = useState<typeof images[0] | null>(null);

  return (
    <Layout>
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-slate-900 to-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedSection>
            <Link href="/gallery/party-favors" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-colors text-sm font-medium">
              <ArrowLeft size={16} /> Back to Party Favors
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Boys Party Favors</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Personalized themed favor packs designed especially for boys — custom-made to match any theme and age!</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pack Contents Banner */}
      <section className="bg-[#1a6fc4] text-white py-6">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex flex-wrap items-center justify-center gap-3 text-center">
              <Package size={22} className="shrink-0" />
              <span className="font-bold text-lg">Each Pack Includes:</span>
              {packContents.map((item, i) => (
                <span key={i} className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full font-medium text-sm">
                  {item.label}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Gallery</h2>
            <p className="text-slate-500">Click any image to enlarge</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {images.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-square rounded-3xl overflow-hidden cursor-pointer group shadow-md"
                onClick={() => setSelected(img)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <h3 className="text-white font-bold text-lg drop-shadow translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Detail */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">What's Inside Each Pack?</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Every item is personally designed and printed to match your chosen theme, name and age.</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {packContents.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-100 text-center">
                  <div className="aspect-square overflow-hidden">
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                  <p className="font-bold text-slate-800 text-sm p-3">{item.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <p className="text-slate-600 mb-6 text-lg">Ready to create the perfect pack for your little one?</p>
            <Button asChild size="lg" className="rounded-full h-14 px-10 text-lg font-bold bg-[#1a6fc4] hover:bg-[#155fa8] text-white shadow-lg shadow-blue-500/25">
              <Link href="/contact">Book & Personalise Now</Link>
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
            <button className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-10">
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
