import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    date: "2024",
    credentialId: "AZ-104",
    description: "Expertise in Azure administration, cloud infrastructure management, and enterprise cloud solutions",
    skills: ["Azure", "Cloud Administration", "Infrastructure Management", "Identity Management"],
    link: "https://learn.microsoft.com/api/credentials/share/en-us/NeravRangari-3717/F4C53CDAD5331AB8?sharingId=F3FFB81EBF6FAE18"
  },
  {
    title: "Google Cloud Certified Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "2024",
    credentialId: "ACE",
    description: "Proficiency in Google Cloud Platform services, deployment, and cloud engineering best practices",
    skills: ["Google Cloud Platform", "Cloud Engineering", "DevOps", "Infrastructure Automation"],
    link: "https://www.credly.com/badges/77f47e78-d239-48b7-a6b7-b781cc7244c2"
  },
  {
    title: "Google Project Management by Google",
    issuer: "Google",
    date: "2023",
    credentialId: "GPM-2023",
    description: "Comprehensive project management methodologies, agile practices, and stakeholder management",
    skills: ["Project Management", "Agile", "Stakeholder Management", "Process Optimization"],
    link: "https://www.coursera.org/account/accomplishments/specialization/G6UT8RZT7GRN"
  }
];

export function Certifications() {
  return (
    <Section id="certifications" className="bg-card/30">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications in cloud administration, engineering, and project management
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="p-6 border-primary/20 hover:border-primary/40 transition-professional bg-card shadow-card hover:shadow-colored group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(cert.link, '_blank')}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-professional flex-shrink-0">
                    <Award className="h-6 w-6 text-primary group-hover:text-accent transition-professional" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-professional">{cert.title}</h3>
                    <p className="text-accent font-medium">{cert.issuer}</p>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Date and Credential */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-primary hover:text-accent transition-professional">
                    <ExternalLink className="h-4 w-4" />
                    <span className="font-mono">{cert.credentialId}</span>
                  </div>
                </div>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <Badge 
                      key={i}
                      variant="secondary"
                      className="hover:bg-primary/10 transition-professional text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}