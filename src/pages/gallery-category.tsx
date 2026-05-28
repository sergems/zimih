import { useState } from "react";
import { useParams, Link, useLocation } from "wouter";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/animated-section";
import { motion, AnimatePresence } from "framer-motion";
import { galleryCategories, GalleryItem } from "@/data/gallery-data";
import { ArrowLeft, X } from "lucide-react";

export default function GalleryCategory() {
  const { slug } = useParams<{ slug: string }>();
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [, navigate] = useLocation();

  const category = galleryCategories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Category not found</h2>
          <Link href="/gallery" className="text-primary font-bold hover:underline">
            Back to Gallery
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-slate-900 to-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedSection>
            <Link href="/gallery" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-colors text-sm font-medium">
              <ArrowLeft size={16} /> Back to Gallery
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{category.label}</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">{category.items.length} items in this collection</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-slate-50 min-h-[60vh]">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <AnimatePresence>
              {category.items.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="relative aspect-square rounded-3xl overflow-hidden cursor-pointer group shadow-md"
                  onClick={() => item.detailPage ? navigate(item.detailPage) : setSelected(item)}
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} group-hover:scale-110 transition-transform duration-500`} />
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300 px-4">
                      <h3 className="text-white font-display text-2xl font-bold drop-shadow-md">{item.title}</h3>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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
              className="w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {selected.image ? (
                <img src={selected.image} alt={selected.title} className="w-full max-h-[80vh] object-contain" />
              ) : (
                <div className={`aspect-video bg-gradient-to-br ${selected.color} flex items-center justify-center`}>
                  <div className="text-center bg-black/20 p-8 rounded-2xl backdrop-blur-md">
                    <h3 className="text-5xl font-display font-bold text-white drop-shadow-md">{selected.title}</h3>
                    <p className="text-white/70 mt-2">Photo coming soon</p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
