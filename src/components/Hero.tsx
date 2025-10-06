import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";
import { Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const jobTitles = [
  "Data Engineer", 
  "Data Analyst", 
  "Business Intelligence Specialist",
  "Business Analyst"
];

export function Hero() {
  const handleDownloadResume = () => {
    // In a real implementation, you'd link to the actual resume PDF
    window.open("/resume.pdf", "_blank");
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Profile Photo */}
          <div className="relative inline-block">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/10 shadow-card">
              <img 
                src={profilePhoto} 
                alt="Nerav Rangari" 
                className="w-full h-full object-cover transition-professional hover:scale-105"
              />
            </div>
          </div>
          
          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-primary">
                Nerav Rangari
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-accent min-h-[3rem] flex items-center justify-center">
              <AnimatedText texts={jobTitles} interval={2500} />
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building scalable data pipelines and AI-powered business intelligence solutions 
              with 4+ years of experience in data engineering, ETL optimization, and enterprise 
              analytics. Currently pursuing MS in Information Technology at WPI with a perfect 4.0 GPA.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-professional px-8 py-3"
                onClick={handleContactClick}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-professional px-8 py-3 text-primary"
                onClick={handleDownloadResume}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8">
              <a
                href="https://www.linkedin.com/in/nerav-rangari-343334171/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-professional p-2 rounded-lg hover:bg-primary/5"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:nrangari@wpi.edu"
                className="text-muted-foreground hover:text-primary transition-professional p-2 rounded-lg hover:bg-primary/5"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/neravr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-professional p-2 rounded-lg hover:bg-primary/5"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}