import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/animated-section";
import { CheckCircle2, Heart, ShieldCheck, Smile, Sparkles, Star } from "lucide-react";
import SEO from "@/components/seo";

export default function About() {
  const reasons = [
    { icon: <ShieldCheck size={32} />, title: "Reliable Service", desc: "We show up on time, every time. Your party is our priority." },
    { icon: <Sparkles size={32} />, title: "Clean & Safe", desc: "All our jumping castles are thoroughly sanitized before every rental." },
    { icon: <Star size={32} />, title: "Creative Decorations", desc: "Beautiful balloon garlands that bring your theme to life." },
    { icon: <Smile size={32} />, title: "Friendly Customer Service", desc: "We're parents too, and we know how stressful planning can be." },
    { icon: <CheckCircle2 size={32} />, title: "Affordable Packages", desc: "Premium party experiences that won't break the bank." },
    { icon: <Heart size={32} />, title: "Personalized Touches", desc: "Custom items that make your child feel extra special." },
  ];

  return (
    <Layout>
      <SEO
        title="About Us — The Story Behind the Magic"
        description="Meet ZIMIH Wonder Co — a passionate South African team dedicated to creating unforgettable kids party experiences with jumping castles, balloon décor and personalised party treats."
        canonical="/about"
        keywords="about ZIMIH Wonder Co, South African party company, kids party planners, about us"
      />
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-slate-900 to-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About ZIMIH Wonder Co</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Bringing joy, color, and unforgettable memories to families across South Africa.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-8 text-slate-900 text-center">Our Story</h2>
              <div className="prose prose-lg prose-slate mx-auto">
                <p>
                  ZIMIH Wonder Co started with a simple belief: every child deserves a birthday party that feels truly magical. As parents ourselves, we experienced the stress of organizing parties, coordinating multiple vendors, and trying to make everything look perfect.
                </p>
                <p>
                  We created ZIMIH Wonder Co to be the ultimate one-stop solution for kids party entertainment. We wanted to offer not just jumping castles, but an entire experience — complete with stunning balloon garlands, customized party packs, and personalized items that tie the whole theme together.
                </p>
                <p>
                  Today, we're proud to have been part of hundreds of celebrations. There is nothing quite like the look on a child's face when they see their decorated party space and their very own jumping castle for the first time. That moment of pure, unadulterated joy is why we do what we do.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-slate-100 text-center relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
              <Star size={24} className="fill-current" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-2xl text-slate-700 font-medium leading-relaxed italic">
              "To deliver premium, hassle-free party entertainment that creates unforgettable memories for kids and total peace of mind for parents."
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Parents Love Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Parents Love Us</h2>
            <p className="text-slate-600 text-lg">We sweat the small stuff so you can enjoy the party.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reasons.map((reason, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-slate-50 rounded-2xl p-8 h-full border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                  <p className="text-slate-600">{reason.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
