import { useState } from "react";
import emailjs from "@emailjs/browser";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, CheckCircle2, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "@/components/seo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  date: z.date({ required_error: "Event date is required" }),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional()
});

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: ""
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSending(true);
    setSendError("");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          phone: values.phone,
          event_date: format(values.date, "PPP"),
          service: values.service,
          message: values.message || "No message provided",
          to_email: "hello@zimihwonderco.co.za",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch {
      setSendError("Something went wrong. Please try WhatsApp or email us directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <Layout>
      <SEO
        title="Contact Us — Book Your Party"
        description="Ready to create something magical? Contact ZIMIH Wonder Co to book your kids party. Call +27 69 980 1697, WhatsApp us or send an enquiry online."
        canonical="/contact"
        keywords="book kids party South Africa, contact ZIMIH Wonder Co, party booking, WhatsApp party enquiry"
      />
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ff4fa3] via-slate-900 to-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Let's Talk Party!</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Get in touch to check availability, request a quote, or book your magical celebration.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Form Side */}
              <div className="p-10 md:p-16">
                <AnimatedSection>
                  {submitted ? (
                    <div className="h-full flex flex-col items-center justify-center text-center py-20">
                      <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 size={40} />
                      </div>
                      <h2 className="text-3xl font-bold mb-4">Request Sent!</h2>
                      <p className="text-slate-600 text-lg mb-8">Thank you for reaching out. We've received your details and will get back to you within 24 hours.</p>
                      <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-full">Send another message</Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-3xl font-bold mb-2">Book Your Party</h2>
                      <p className="text-slate-600 mb-8">Fill out the details below and we'll get back to you within 24 hours!</p>
                      
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Parent Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Jane Doe" className="h-12 bg-slate-50 border-slate-200" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone Number</FormLabel>
                                  <FormControl>
                                    <Input placeholder="082 000 0000" className="h-12 bg-slate-50 border-slate-200" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email Address</FormLabel>
                                  <FormControl>
                                    <Input placeholder="jane@example.com" className="h-12 bg-slate-50 border-slate-200" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="date"
                              render={({ field }) => (
                                <FormItem className="flex flex-col">
                                  <FormLabel className="mt-1">Event Date</FormLabel>
                                  <Popover>
                                    <PopoverTrigger asChild>
                                      <FormControl>
                                        <Button
                                          variant={"outline"}
                                          className={cn(
                                            "w-full h-12 pl-3 text-left font-normal bg-slate-50 border-slate-200",
                                            !field.value && "text-muted-foreground"
                                          )}
                                        >
                                          {field.value ? (
                                            format(field.value, "PPP")
                                          ) : (
                                            <span>Pick a date</span>
                                          )}
                                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                      </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                      <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) => date < new Date()}
                                        initialFocus
                                      />
                                    </PopoverContent>
                                  </Popover>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="service"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Service Needed</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="h-12 bg-slate-50 border-slate-200">
                                        <SelectValue placeholder="Select a service" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="starter">Starter Fun Package</SelectItem>
                                      <SelectItem value="wonder">Wonder Party Package</SelectItem>
                                      <SelectItem value="ultimate">Ultimate Magic Package</SelectItem>
                                      <SelectItem value="jumping">Jumping Castle Only</SelectItem>
                                      <SelectItem value="balloons">Balloon Garlands</SelectItem>
                                      <SelectItem value="other">Other / Custom</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Additional Details (Theme, Location, etc.)</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Tell us a bit more about the party..." 
                                    className="min-h-[120px] bg-slate-50 border-slate-200 resize-none" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {sendError && (
                            <p className="text-red-500 text-sm text-center">{sendError}</p>
                          )}
                          <Button type="submit" disabled={sending} size="lg" className="w-full h-14 text-lg font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                            {sending ? (
                              <span className="flex items-center gap-2"><Loader2 size={20} className="animate-spin" /> Sending...</span>
                            ) : "Send Request"}
                          </Button>
                        </form>
                      </Form>
                    </>
                  )}
                </AnimatedSection>
              </div>

              {/* Contact Info Side */}
              <div className="bg-slate-900 text-white p-10 md:p-16 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
                
                <AnimatedSection className="relative z-10 h-full flex flex-col">
                  <h3 className="text-3xl font-display font-bold mb-8">Contact Information</h3>
                  
                  <div className="space-y-8 flex-grow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Phone className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Call Us</h4>
                        <p className="text-slate-300 mb-2">Mon-Fri from 8am to 5pm</p>
                        <a href="tel:+27699801697" className="text-xl font-medium hover:text-primary transition-colors">+27 69 980 1697</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Mail className="text-[#4ecbff]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Email Us</h4>
                        <p className="text-slate-300 mb-2">We reply within 24 hours</p>
                        <a href="mailto:hello@zimihwonderco.co.za" className="text-xl font-medium hover:text-[#4ecbff] transition-colors">hello@zimihwonderco.co.za</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <MapPin className="text-[#ffd93d]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Location</h4>
                        <p className="text-slate-300 mb-2">Serving South Africa</p>
                        <span className="text-xl font-medium text-white">Nationwide magic</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/10">
                    <h4 className="font-bold text-lg mb-4">Fastest response?</h4>
                    <Button asChild size="lg" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full h-14 font-bold shadow-lg shadow-[#25D366]/20">
                      <a href="https://wa.me/27699801697" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2">
                        <FaWhatsapp size={24} />
                        WhatsApp Us Directly
                      </a>
                    </Button>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
