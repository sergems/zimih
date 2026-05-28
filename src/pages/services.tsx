import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/seo";

export default function Services() {
  const services = [
    {
      id: "jumping-castles",
      title: "Jumping Castle Rentals",
      color: "from-[#ff4fa3] to-[#ff7ebdf0]",
      features: ["Multiple sizes available", "Safe & clean (sanitized)", "Delivery & setup included", "Affordable day rates"],
      desc: "Turn your backyard into an amusement park. Our jumping castles are the centerpiece of any great party, offering hours of safe, bouncy entertainment for kids of all ages."
    },
    {
      id: "balloons",
      title: "Balloon Garlands",
      color: "from-[#4ecbff] to-[#7be0fff0]",
      features: ["Custom color matching", "Themed arrangements", "Archways & pillars", "Professional installation"],
      desc: "Transform any space with our stunning balloon garlands. From elegant pastels to vibrant primary colors, we create balloon art that perfectly matches your party theme."
    },
    {
      id: "party-packs",
      title: "Party Favors & Packs",
      color: "from-[#ffd93d] to-[#ffe570f0]",
      features: ["Customized boxes/bags", "Quality treats & toys", "Themed labels", "Ready to hand out"],
      desc: "Send your little guests home with a smile. Our party packs are beautifully presented and filled with fun goodies that kids actually want."
    },
    {
      id: "personalized",
      title: "Personalized Items",
      color: "from-[#8f5cff] to-[#a882fff0]",
      features: ["Welcome boards", "Custom t-shirts", "Birthday banners", "Stickers & labels"],
      desc: "It's all in the details. Add that special touch with customized items featuring the birthday child's name, age, and favorite theme."
    },
    {
      id: "sales",
      title: "Jumping Castle Sales",
      color: "from-[#10b981] to-[#34d399f0]",
      features: ["Commercial grade", "Residential models", "Start your own business", "Warranty included"],
      desc: "Want to own the fun? We sell high-quality jumping castles for home use or for those looking to start their own party rental business."
    }
  ];

  return (
    <Layout>
      <SEO
        title="Our Services — Jumping Castles, Balloon Décor & More"
        description="Explore ZIMIH Wonder Co's full range of kids party services — jumping castle rentals, bespoke balloon décor, personalised party packs and custom party favours across South Africa."
        canonical="/services"
        keywords="jumping castle rental South Africa, balloon decor, party packs, party favours, kids party services"
      />
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-slate-900 to-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Everything you need to build the perfect party from the ground up.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} direction={index % 2 === 0 ? "left" : "right"}>
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100`}>
                  <div className={`md:w-2/5 p-12 flex items-center justify-center bg-gradient-to-br ${service.color} text-white`}>
                    <h2 className="text-4xl font-display font-bold text-center leading-tight">{service.title}</h2>
                  </div>
                  <div className="md:w-3/5 p-10 flex flex-col justify-center">
                    <p className="text-lg text-slate-600 mb-6">{service.desc}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                          <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-primary shrink-0">
                            <span className="text-lg leading-none">&rsaquo;</span>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div>
                      <Button asChild className="rounded-full px-8 bg-slate-900 hover:bg-slate-800 text-white">
                        <Link href="/contact">Book this service</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Packages Teaser */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6">Looking for a complete solution?</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">We've bundled our most popular services together to give you the best value and the easiest planning experience.</p>
            <Button asChild size="lg" className="rounded-full px-10 text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
              <Link href="/packages">View Party Packages</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
