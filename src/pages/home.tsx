import { motion } from "framer-motion";
import { Link } from "wouter";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Sparkles, Smile, ShieldCheck, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "@/components/seo";

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Kids Party Entertainment South Africa"
        description="ZIMIH Wonder Co — South Africa's go-to kids party entertainment. Jumping castle hire, stunning balloon décor, personalised party packs & favours. Book your magical celebration today!"
        canonical="/"
        keywords="kids party entertainment South Africa, jumping castle hire, balloon decor, party packs, party favours, children birthday party"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-20 pb-32 lg:pt-32 lg:pb-48">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Decorative shapes */}
          <div className="absolute top-10 left-[10%] w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float-1"></div>
          <div className="absolute top-40 right-[15%] w-32 h-32 bg-[#4ecbff]/20 rounded-full blur-xl animate-float-2"></div>
          <div className="absolute bottom-20 left-[20%] w-40 h-40 bg-[#ffd93d]/20 rounded-full blur-xl animate-float-3"></div>
          
          <div className="absolute top-20 right-10 w-8 h-8 rounded-full bg-primary animate-float-2 opacity-60"></div>
          <div className="absolute bottom-40 left-10 w-6 h-6 rounded-full bg-[#4ecbff] animate-float-1 opacity-60"></div>
          <div className="absolute top-40 left-1/4 w-10 h-10 rounded-full bg-[#8f5cff] animate-float-3 opacity-60"></div>
          <div className="absolute bottom-20 right-1/4 w-12 h-12 rounded-full bg-[#ffd93d] animate-float-2 opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-primary font-bold text-sm mb-6"
            >
              <Sparkles size={16} className="text-[#ffd93d]" />
              <span>Premium Kids Party Entertainment</span>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 leading-tight"
            >
              Make Every Kids Party <span className="zimih-gradient-text">Magical!</span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto"
            >
              From exciting jumping castle rentals to personalized party favors, party packs and custom balloon garlands — ZIMIH Wonder Co brings fun, color and magic to every celebration!
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                <Link href="/contact">Book a Party</Link>
              </Button>
              <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg font-bold bg-[#4ecbff] hover:bg-[#2bb8f0] text-white shadow-lg shadow-[#4ecbff]/25">
                <Link href="/packages">View Packages</Link>
              </Button>
              <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/25 gap-2">
                <a href="https://wa.me/27699801697" target="_blank" rel="noreferrer">
                  <FaWhatsapp size={24} />
                  WhatsApp Us
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-white relative z-20 -mt-10 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Magical Services</h2>
            <p className="text-slate-600 text-lg">Everything you need to create the perfect party atmosphere.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Jumping Castles", desc: "Safe, clean & bouncy fun for all ages", color: "bg-[#ff4fa3]" },
              { title: "Balloon Garlands", desc: "Custom colors to match your theme", color: "bg-[#4ecbff]" },
              { title: "Party Packs", desc: "Filled with joy, sweets and treats", color: "bg-[#ffd93d]" },
              { title: "Personalized Items", desc: "Welcome boards, banners & more", color: "bg-[#8f5cff]" }
            ].map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                  <div className={`h-32 ${service.color} p-6 flex items-end relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
                    <h3 className="font-display font-bold text-2xl text-white relative z-10">{service.title}</h3>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-slate-600 mb-4">{service.desc}</p>
                    <Link href="/services" className="text-primary font-bold hover:underline inline-flex items-center gap-1">
                      Learn more <span className="text-xl leading-none">&rsaquo;</span>
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffd93d]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff4fa3]/20 rounded-full blur-3xl"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Ready to plan the perfect party?</h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto relative z-10">
              Let us take the stress out of party planning. Contact us today to check availability and book your date!
            </p>
            <Button asChild size="lg" className="rounded-full h-16 px-10 text-xl font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30 relative z-10">
              <Link href="/contact">Book Your Party Now</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
