import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";

const projects = [
  {
    title: "Cloud-Based ETL and Data Warehouse Optimization",
    period: "Nov 2024 – Jan 2025",
    description: "Designed and implemented enterprise-grade ETL workflows processing 100,000+ customer records into a scalable cloud data warehouse. Applied dimensional modeling and performance optimization techniques to achieve 30% improvement in query response times for business intelligence reporting.",
    highlights: [
      "Enterprise-scale data processing: 100,000+ records",
      "30% improvement in BI query performance",
      "Production-ready cloud data warehouse architecture",
      "Automated data validation and quality assurance pipelines"
    ],
    technologies: ["Python", "SQL", "Cloud Architecture", "ETL", "Data Warehousing", "Business Intelligence"],
    links: {
      github: "https://github.com/neravr",
      demo: "https://github.com/neravr"
    }
  },
  {
    title: "Real-Time Student Data Pipeline for Retention Monitoring",
    period: "Oct 2024 - Dec 2024", 
    description: "Built comprehensive data engineering pipeline with integrated AI-powered predictive analytics for student retention monitoring. Automated data extraction, transformation, and loading processes while implementing machine learning models with 85% accuracy for early intervention strategies.",
    highlights: [
      "AI-integrated data pipeline with 85% prediction accuracy",
      "Real-time student success monitoring system", 
      "Automated ETL with predictive analytics integration",
      "Actionable insights for academic intervention programs"
    ],
    technologies: ["Python", "SQL", "Machine Learning", "Predictive Analytics", "ETL", "AI Integration"],
    links: {
      github: "https://github.com/neravr",
      demo: "https://github.com/neravr"
    }
  },
  {
    title: "Operational Dashboards with Scalable Data Integration",
    period: "Jul 2024 - Oct 2024",
    description: "Engineered scalable IoT data integration platform processing sensor data from 5,000+ devices with automated ingestion into enterprise SQL databases. Created executive-level Tableau dashboards with real-time data pipelines, reducing manual reporting overhead by 23% while enabling data-driven operational decisions.",
    highlights: [
      "Enterprise IoT platform: 5,000+ connected devices",
      "23% reduction in manual reporting processes",
      "Real-time business intelligence dashboards",
      "Scalable data engineering architecture"
    ],
    technologies: ["IoT Data Engineering", "SQL", "Tableau", "ETL", "Enterprise Integration", "Business Intelligence"],
    links: {
      github: "https://github.com/neravr",
      demo: "https://github.com/neravr"
    }
  }
];

export function Projects() {
  return (
    <Section id="projects">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise data engineering projects demonstrating expertise in building scalable pipelines, 
            AI-integrated solutions, and business intelligence platforms
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 border-primary/20 hover:border-primary/40 transition-smooth bg-card/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{project.period}</span>
                    </div>
                  </div>
                  
                   {/* Action Buttons */}
                   <div className="flex space-x-3">
                    <Button
                      variant="outline" 
                      size="sm"
                      className="border-primary/30 hover:border-primary hover:bg-primary/10"
                      onClick={() => window.open(project.links.github, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                {/* Highlights */}
                <div className="grid md:grid-cols-2 gap-3">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge 
                      key={i}
                      variant="secondary"
                      className="bg-accent/10 text-accent hover:bg-accent/20 transition-smooth"
                    >
                      {tech}
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