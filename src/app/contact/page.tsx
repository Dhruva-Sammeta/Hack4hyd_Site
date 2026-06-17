import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Mail, MapPin, Hash, Globe, MessageCircle, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us | Hack4Hyd",
  description: "Get in touch with the Hack4Hyd team for any queries or sponsorships.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="min-h-screen pt-28 pb-20 relative">
        <div className="particle-bg" />
        <div className="section-container relative z-10">
          <SectionHeader 
            title="Get in Touch" 
            kicker="Contact Us" 
            description="Have questions about the hackathon? Want to sponsor? We're here to help."
            gradient 
          />

          <div className="grid md:grid-cols-5 gap-10 mt-16 max-w-6xl mx-auto">
            
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-h4h-primary/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-h4h-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Email Us</h4>
                      <a href="mailto:hello@hack4hyd.com" className="text-h4h-text-muted hover:text-h4h-primary transition-colors">
                        hello@hack4hyd.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-h4h-accent/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-h4h-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Location</h4>
                      <p className="text-h4h-text-muted">
                        Hyderabad, Telangana<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-h4h-glass-border my-8" />

                <h4 className="text-lg font-medium text-white mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-h4h-surface-light border border-h4h-glass-border flex items-center justify-center text-h4h-text-muted hover:text-white hover:border-h4h-primary transition-all">
                    <Hash className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-h4h-surface-light border border-h4h-glass-border flex items-center justify-center text-h4h-text-muted hover:text-white hover:border-h4h-accent transition-all">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-h4h-surface-light border border-h4h-glass-border flex items-center justify-center text-h4h-text-muted hover:text-white hover:border-h4h-gold transition-all">
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </GlassCard>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <GlassCard className="p-8 h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-h4h-text-muted">First Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-h4h-surface-light border border-h4h-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-h4h-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-h4h-text-muted">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-h4h-surface-light border border-h4h-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-h4h-primary transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-h4h-text-muted">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-h4h-surface-light border border-h4h-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-h4h-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-h4h-text-muted">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full bg-h4h-surface-light border border-h4h-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-h4h-primary transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button className="w-full md:w-auto py-3 px-8 rounded-full bg-h4h-surface-light border border-h4h-glass-border text-white font-medium flex items-center justify-center gap-2 hover:bg-h4h-primary/10 hover:border-h4h-primary transition-all">
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              </GlassCard>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}
