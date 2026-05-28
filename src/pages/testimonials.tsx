import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Link } from "wouter";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Amanda M.",
      text: "ZIMIH Wonder Co made my daughter's birthday unforgettable! The balloon setup was beautiful and the kids loved the jumping castle.",
      color: "bg-[#ff4fa3]"
    },
    {
      id: 2,
      name: "Sarah K.",
      text: "The party packs were amazing and beautifully personalized. Excellent service! Highly recommend them for any kids event.",
      color: "bg-[#4ecbff]"
    },
    {
      id: 3,
      name: "Thandi N.",
      text: "Best decision I made for my son's 5th birthday! Everything was perfect from setup to cleanup. The team was so professional.",
      color: "bg-[#ffd93d]"
    },
    {
      id: 4,
      name: "Jessica P.",
      text: "Absolutely loved the personalized items. The welcome board was stunning! It really tied the whole theme together perfectly.",
      color: "bg-[#8f5cff]"
    },
    {
      id: 5,
      name: "Michael D.",
      text: "The jumping castle kept the kids busy for hours. Will definitely book again! Worth every penny for the peace of mind.",
      color: "bg-[#10b981]"
    },
    {
      id: 6,
      name: "Lerato S.",
      text: "Fast, efficient and so friendly. They handled everything so I could actually enjoy my child's party for once. Thank you ZIMIH!",
      color: "bg-[#f97316]"
    }
  ];

  return (
    <Layout>
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500 via-slate-900 to-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Happy Parents</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Don't just take our word for it. Here's what other parents have to say about ZIMIH Wonder Co.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {reviews.map((review, index) => (
              <AnimatedSection key={review.id} delay={index * 0.1}>
                <div className="bg-slate-50 rounded-3xl p-8 h-full border border-slate-100 hover:shadow-lg transition-shadow duration-300 relative mt-6">
                  <div className={`absolute -top-6 left-8 w-12 h-12 rounded-full ${review.color} text-white flex items-center justify-center font-bold text-xl shadow-md border-4 border-white`}>
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex gap-1 mb-4 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="text-[#ffd93d] fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic text-lg leading-relaxed mb-6">"{review.text}"</p>
                  <div className="font-bold text-slate-900">— {review.name}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-[3rem] p-12 border border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Had a party with us?</h2>
            <p className="text-lg text-slate-600 mb-8">We'd love to hear about your experience. Your feedback helps us make every party even more magical.</p>
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold bg-slate-900 hover:bg-slate-800 text-white">
              <Link href="/contact">Share Your Story</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
