import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { galleryCategories } from "@/data/gallery-data";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/seo";

export default function Gallery() {
  return (
    <Layout>
      <SEO
        title="Gallery — Magical Party Moments"
        description="Browse our gallery of stunning party setups — jumping castles, balloon décor, personalised party packs and beautiful party favours created by ZIMIH Wonder Co."
        canonical="/gallery"
        keywords="party gallery South Africa, kids party photos, jumping castle photos, balloon decor gallery, party favours"
      />
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-slate-900 to-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Gallery</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Browse by category to explore the magical moments we've helped create.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-slate-50 min-h-[60vh]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {galleryCategories.map((cat, index) => (
              <AnimatedSection key={cat.slug} delay={index * 0.1}>
                <Link href={`/gallery/${cat.slug}`}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.25 }}
                    className="relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer shadow-lg group"
                  >
                    {cat.coverImage ? (
                      <img
                        src={cat.coverImage}
                        alt={cat.label}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${cat.coverColor} group-hover:scale-110 transition-transform duration-500`} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-display font-bold text-2xl mb-1">{cat.label}</h3>
                      <p className="text-white/70 text-sm mb-3">{cat.items.length} items</p>
                      <span className="inline-flex items-center gap-1 text-white text-sm font-bold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full group-hover:bg-primary group-hover:bg-opacity-100 transition-colors">
                        View Gallery <ArrowRight size={14} />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
