import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Briefcase, MapPin, Linkedin, Twitter, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";

const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().max(100).optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().trim().min(1, "Message is required").max(2000),
  privacy: z.boolean().refine((val) => val, "You must accept the privacy policy"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const infoCards = [
  { icon: Mail, title: "Email Us", content: "hello@precigenetics.com", href: "mailto:hello@precigenetics.com" },
  { icon: Briefcase, title: "Careers", content: "careers@precigenetics.com", sub: "For career opportunities, email your resume to:", href: "mailto:careers@precigenetics.com" },
  { icon: MapPin, title: "Location", content: "MBC BioLabs, San Carlos, California" },
];

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { fullName: "", email: "", company: "", subject: "", message: "", privacy: false },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    form.reset();
  };

  return (
    <PageLayout title="Contact Us" description="Get in touch with the Precigenetics team to learn more about our platform.">
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-accent">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-[56px] leading-[1.1] tracking-tight mb-5">Contact Us</h1>
          <p className="text-slate-body text-lg max-w-2xl mx-auto leading-relaxed">
            Get in touch with our team to learn more about our platform.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <p className="text-slate-body mb-8 leading-relaxed">
                Whether you're interested in collaboration, partnerships, or learning how Precigenetics supports your discovery efforts — we'd love to hear from you.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField control={form.control} name="fullName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl><Input placeholder="Your full name" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl><Input type="email" placeholder="you@company.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="company" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company / Organization</FormLabel>
                      <FormControl><Input placeholder="Your company (optional)" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="subject" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl><SelectTrigger><SelectValue placeholder="Select a subject" /></SelectTrigger></FormControl>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="careers">Careers</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message *</FormLabel>
                      <FormControl><Textarea placeholder="Tell us how we can help..." rows={5} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="privacy" render={({ field }) => (
                    <FormItem className="flex items-start gap-3">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} className="mt-1" />
                      </FormControl>
                      <FormLabel className="text-sm font-normal leading-relaxed">
                        I accept Precigenetics'{" "}
                        <Link to="/privacy-policy" className="text-primary underline">Privacy Policy</Link>
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <Button type="submit" size="lg" className="w-full rounded-lg font-semibold" disabled={submitting}>
                    {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : "Send Message"}
                  </Button>
                </form>
              </Form>
            </AnimatedSection>

            {/* Info Cards */}
            <AnimatedSection delay={0.2} className="lg:col-span-2 space-y-5">
              {infoCards.map((card) => (
                <div key={card.title} className="bg-card rounded-lg p-6 border border-border">
                  <card.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-heading font-semibold text-lg mb-2">{card.title}</h3>
                  {card.sub && <p className="text-slate-body text-sm mb-1">{card.sub}</p>}
                  {card.href ? (
                    <a href={card.href} className="text-primary text-sm font-medium hover:underline">{card.content}</a>
                  ) : (
                    <p className="text-slate-body text-sm">{card.content}</p>
                  )}
                </div>
              ))}

              {/* Social */}
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-heading font-semibold text-lg mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
