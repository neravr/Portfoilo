import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

const experiences = [
  {
    title: "Graduate Data Analyst",
    company: "Worcester Polytechnic Institute",
    location: "Worcester, MA, USA",
    period: "Sep 2025 – Present",
    highlights: [
      "Built Power BI dashboards for classroom & lab utilization tracking, reducing manual reporting by 30%",
      "Engineered automated SQL queries and Python scripts for structured reporting, improving space allocation efficiency by 15%",
      "Collaborated with facilities management to optimize resource allocation through data-driven insights"
    ],
    tags: ["Power BI", "SQL", "Python", "Business Intelligence", "Automation"]
  },
  {
    title: "Data/AI Intern",
    company: "Save Energy Systems",
    location: "Westborough, MA, USA", 
    period: "Jun 2025 – Present",
    highlights: [
      "Built real-time ETL pipelines integrating MongoDB and Redis, enabling live Power BI/Grafana dashboards with 48% reduction in manual reporting",
      "Developed AI-powered dashboard integration models for dynamic sustainability data access and visualization",
      "Collaborated with engineering teams to deliver data-driven energy optimization solutions for enterprise clients",
      "Automated hourly data processing workflows improving operational efficiency and real-time decision making"
    ],
    tags: ["ETL", "Python", "MongoDB", "Redis", "Power BI", "Grafana", "AI Integration"]
  },
  {
    title: "Graduate Research Assistant",
    company: "Worcester Polytechnic Institute",
    location: "Worcester, MA, USA",
    period: "Aug 2024 – May 2025", 
    highlights: [
      "Built automated data pipelines and Power BI dashboards analyzing 10,000+ student records to identify retention patterns for academic stakeholders",
      "Developed predictive models integrated with real-time monitoring systems, reducing unplanned downtime by 15%",
      "Implemented Excel Solver optimization analyses to enhance operational processes and support strategic decision-making",
      "Delivered actionable business intelligence insights to university administration for improved student success initiatives"
    ],
    tags: ["Power BI", "Predictive Modeling", "Excel", "Business Intelligence", "Automation"]
  },
  {
    title: "Senior Data Analyst",
    company: "Capgemini Technologies",
    location: "Mumbai, India",
    period: "Sep 2021 - Jun 2024",
    highlights: [
      "Architected and optimized ETL workflows for 1,000+ enterprise systems using PowerShell, achieving 85% improvement in operational efficiency",
      "Designed executive KPI dashboards in Power BI with integrated multi-source data analytics, optimizing business performance by 25%",
      "Led cloud infrastructure analysis across GCP, Azure, and VMware environments, delivering 30% cost reduction for 50,000+ virtual machines",
      "Implemented enterprise-scale data engineering solutions supporting mission-critical business operations"
    ],
    tags: ["ETL", "PowerShell", "Power BI", "GCP", "Azure", "VMware", "Enterprise Architecture"]
  }
];

export function Experience() {
  return (
    <Section id="experience">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A track record of delivering impactful data solutions across various industries and organizations
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 border-primary/20 hover:border-primary/40 transition-professional bg-card shadow-card hover:shadow-colored group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-professional">{exp.title}</h3>
                    <p className="text-xl font-semibold">{exp.company}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <TrendingUp className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <Badge 
                      key={i}
                      variant="secondary"
                      className="bg-primary/5 text-primary hover:bg-primary/10 transition-professional"
                    >
                      {tag}
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