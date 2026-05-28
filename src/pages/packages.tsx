import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, Star, Crown } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/seo";

const packages = [
  {
    id: "starter",
    name: "Starter Fun",
    price: "From R1499",
    desc: "Perfect for smaller parties and fun backyard celebrations.",
    color: "bg-[#4ecbff]",
    popular: false,
    badge: null,
    features: [
      "Jumping castle rental",
      "Setup & takedown included",
      "Optional balloon garland upgrade",
      "Great for birthday parties",
    ],
  },
  {
    id: "bubble",
    name: "Bubble Magic",
    price: "From R2499",
    desc: "A stylish and exciting party feature kids absolutely love.",
    color: "bg-[#8f5cff]",
    popular: false,
    badge: null,
    features: [
      "Bubble House rental",
      "Safe & professional setup",
      "Optional balloon garland upgrade",
      "Perfect for luxury celebrations",
    ],
  },
  {
    id: "wonder-combo",
    name: "Wonder Combo",
    price: "From R3299",
    desc: "The perfect mix of fun, style and unforgettable memories.",
    color: "bg-[#ff4fa3]",
    popular: true,
    badge: "MOST POPULAR",
    features: [
      "Bubble House + Jumping Castle",
      "Setup & takedown included",
      "Optional balloon garland upgrade",
      "Ideal for larger celebrations",
    ],
  },
  {
    id: "party-pack",
    name: "Party Pack Fun",
    price: "From R120 pp",
    desc: "Personalized party treats designed to match your theme.",
    color: "bg-[#ffd93d]",
    popular: false,
    badge: null,
    textDark: true,
    features: [
      "Customized themed party favors",
      "Chips, juice & chocolate included",
      "Personalized designs available",
      "Gable box upgrades available",
    ],
  },
  {
    id: "deluxe",
    name: "Deluxe Party Combo",
    price: "From R3999",
    desc: "A complete party setup with entertainment and themed favors.",
    color: "bg-[#4ecbff]",
    popular: false,
    badge: null,
    features: [
      "Bubble House + Jumping Castle",
      "10 Gable Box party packs included",
      "Personalized favors & activities",
      "Balloon garland upgrade available",
    ],
  },
  {
    id: "premium",
    name: "Premium Celebration",
    price: "From R4699",
    desc: "Our ultimate luxury party experience with premium styling included.",
    color: "bg-[#8f5cff]",
    popular: false,
    badge: "PREMIUM",
    features: [
      "Bubble House with balloon garland",
      "Jumping Castle with balloon garland",
      "10 Personalized themed favor packs",
      "Full setup & takedown included",
      "Designed for magical celebrations",
    ],
  },
];

const addOns = [
  { label: "Gable Box Party Packs with personalized favors & activity", price: "R140 each" },
  { label: "Empty Gable Boxes", price: "R50 each" },
  { label: "Personalized/Themed Favor Pack", price: "R110 each" },
];

const personalizedItems = [
  { label: "Personalized Chips", price: "R45" },
  { label: "Personalized Chocolate (Small)", price: "R25" },
  { label: "Personalized Chocolate (Large)", price: "R35" },
  { label: "Personalized Juice", price: "R30" },
  { label: "Personalized Water Bottle Stickers", price: "R15" },
];

export default function Packages() {
  return (
    <Layout>
      <SEO
        title="Party Packages & Pricing"
        description="Choose the perfect party package from ZIMIH Wonder Co. From starter bundles to premium all-inclusive celebrations — transparent pricing for every budget."
        canonical="/packages"
        keywords="kids party packages South Africa, party pricing, jumping castle packages, birthday party deals"
      />
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent via-slate-900 to-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Party Packages</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Bundled magic for better value. Choose the perfect package for your celebration.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <AnimatedSection key={pkg.id} delay={index * 0.1}>
                <Card className={`relative h-full flex flex-col border-0 shadow-xl overflow-hidden ${pkg.popular ? 'ring-4 ring-primary/30 shadow-2xl' : ''}`}>
                  {pkg.badge === "MOST POPULAR" && (
                    <div className="absolute top-0 right-0 bg-[#ffd93d] text-slate-900 font-bold text-xs py-1 px-4 rounded-bl-xl z-10 flex items-center gap-1 shadow-md">
                      <Star size={12} className="fill-current" /> MOST POPULAR
                    </div>
                  )}
                  {pkg.badge === "PREMIUM" && (
                    <div className="absolute top-0 right-0 bg-[#ffd93d] text-slate-900 font-bold text-xs py-1 px-4 rounded-bl-xl z-10 flex items-center gap-1 shadow-md">
                      <Crown size={12} className="fill-current" /> PREMIUM
                    </div>
                  )}
                  <CardHeader className={`${pkg.color} ${pkg.textDark ? 'text-slate-900' : 'text-white'} text-center py-10 relative overflow-hidden`}>
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
                    <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
                    <h2 className="font-display font-bold text-2xl mb-2 relative z-10">{pkg.name}</h2>
                    <div className="relative z-10">
                      <span className="text-4xl font-bold block">{pkg.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-8 flex-grow">
                    <p className="text-slate-600 text-center mb-6 font-medium text-sm">{pkg.desc}</p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700">
                          <Check size={18} className="mt-0.5 shrink-0 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pb-8 pt-4 justify-center">
                    <Button asChild size="lg" className={`w-full rounded-full h-12 text-base font-bold ${pkg.popular ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25' : 'bg-slate-900 hover:bg-slate-800 text-white'}`}>
                      <Link href="/contact">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Add-Ons Section */}
          <AnimatedSection delay={0.3} className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Add-Ons & Extras</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100">
                <h3 className="font-display font-bold text-xl mb-6 text-primary">Add-On Pricing</h3>
                <ul className="space-y-4">
                  {addOns.map((item, i) => (
                    <li key={i} className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                      <span className="text-slate-700 text-sm">{item.label}</span>
                      <span className="font-bold text-slate-900 shrink-0">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100">
                <h3 className="font-display font-bold text-xl mb-6 text-[#8f5cff]">Personalized Items</h3>
                <ul className="space-y-4">
                  {personalizedItems.map((item, i) => (
                    <li key={i} className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                      <span className="text-slate-700 text-sm">{item.label}</span>
                      <span className="font-bold text-slate-900 shrink-0">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5} className="mt-12 text-center">
            <div className="inline-block bg-white px-8 py-4 rounded-2xl shadow-sm border border-slate-100">
              <p className="text-slate-600 font-medium">Need something custom? We can build a bespoke package just for you.</p>
              <Link href="/contact" className="text-primary font-bold hover:underline mt-2 inline-block">Contact us for a custom quote</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
