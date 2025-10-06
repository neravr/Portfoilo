import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Award } from "lucide-react";

export function About() {
  return (
    <Section id="about" className="bg-card">
      <div className="text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate data professional with expertise in turning complex datasets into strategic business solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education Cards */}
          <Card className="p-8 border-primary/20 hover:border-primary/40 transition-smooth bg-background/50">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Current Education</h3>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-primary">Master of Science in Information Technology</h4>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  Worcester Polytechnic Institute, MA
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm">Expected: May 2026</span>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-1 text-accent" />
                    <span className="font-semibold text-accent">4.0/4.0 GPA</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Coursework: Business Intelligence, Data Management for Analytics, 
                  Business Applications for Machine Learning
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-primary/20 hover:border-primary/40 transition-smooth bg-background/50">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Bachelor's Degree</h3>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-accent">Bachelor of Engineering</h4>
                <p className="text-sm font-medium">Electronics and Telecommunication</p>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  St. Vincent Pallotti College, Nagpur, India
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm">Graduated: May 2021</span>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-1 text-accent" />
                    <span className="font-semibold text-accent">3.8/4.0 GPA</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Coursework: Object Oriented Programming, Data Structures, 
                  Statistical Analysis, Digital Image Processing
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* About Text */}
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          <p className="text-lg leading-relaxed">
            I am a passionate data engineer and business intelligence specialist with over 4 years 
            of experience building scalable data infrastructure and AI-powered analytics solutions. 
            Currently pursuing my Master's in Information Technology at Worcester Polytechnic Institute 
            with a perfect 4.0 GPA, I specialize in transforming complex business requirements into 
            robust data engineering solutions.
          </p>
          
          <p className="text-lg leading-relaxed">
            My expertise spans the entire data engineering lifecycle - from designing ETL pipelines 
            and data warehouses to creating executive dashboards and implementing AI-driven automation. 
            I've successfully optimized data infrastructure for 50,000+ systems, built real-time 
            analytics platforms, and delivered business intelligence solutions that drive strategic 
            decision-making across organizations.
          </p>
          
          <p className="text-lg leading-relaxed">
            At organizations like Capgemini Technologies and through various research initiatives, 
            I've focused on leveraging cloud technologies, automating data workflows, and creating 
            intelligent business solutions. I'm particularly passionate about building AI-powered 
            dashboards, optimizing operational efficiency, and translating business needs into 
            scalable technical architectures.
          </p>
        </div>
      </div>
    </Section>
  );
}