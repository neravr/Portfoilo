import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nrangari@wpi.edu",
      href: "mailto:nrangari@wpi.edu"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(774) 418-6944",
      href: "tel:+17744186944"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nerav-rangari-343334171",
      href: "https://www.linkedin.com/in/nerav-rangari-343334171/"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Worcester, MA, USA",
      href: "#"
    }
  ];

  return (
    <Section id="contact" className="bg-card">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss data analytics opportunities, collaborations, or just connect? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-smooth bg-background/50 hover:bg-background/80"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* CTA Card */}
            <Card className="p-8 border-primary/20 bg-background/50 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Ready to Collaborate?</h3>
                <p className="text-muted-foreground">
                  I'm actively seeking opportunities in data engineering, business intelligence, 
                  and AI integration. Whether you're looking for a data engineer to build scalable 
                  pipelines or want to discuss enterprise BI solutions, let's start a conversation.
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 rounded-lg bg-primary/5">
                    <div className="text-lg font-bold text-primary">4+</div>
                    <div className="text-xs text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-accent/5">
                    <div className="text-lg font-bold text-accent">4.0</div>
                    <div className="text-xs text-muted-foreground">Current GPA</div>
                  </div>
                </div>

                <Button 
                  className="w-full gradient-professional text-primary-foreground hover:opacity-90 transition-smooth"
                  onClick={() => window.location.href = 'mailto:nrangari@wpi.edu?subject=Portfolio Inquiry'}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}