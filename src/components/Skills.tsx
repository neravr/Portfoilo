import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, BarChart3, Brain, Cloud, TrendingUp } from "lucide-react";

const skillCategories = [
  {
    title: "Data Engineering & ETL",
    icon: Database,
    skills: ["ETL Pipelines", "Data Warehousing", "Workflow Automation", "Data Modeling", "Apache Spark", "Git"],
    color: "text-primary"
  },
  {
    title: "Business Intelligence",
    icon: BarChart3,
    skills: ["Power BI", "Tableau", "Executive Dashboards", "KPI Tracking", "Advanced Excel", "Grafana"],
    color: "text-accent"
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: ["Azure", "GCP", "VMware", "Cloud Architecture", "Infrastructure Optimization", "PowerShell"],
    color: "text-primary"
  },
  {
    title: "AI & Automation",
    icon: Brain,
    skills: ["AI-Powered Dashboards", "LLMs", "Machine Learning", "Predictive Analytics", "Process Automation", "NLP"],
    color: "text-accent"
  },
  {
    title: "Programming & Databases",
    icon: Code,
    skills: ["Python", "SQL", "R", "MongoDB", "MySQL", "Redis", "Pandas", "NumPy"],
    color: "text-primary"
  },
  {
    title: "Business Analysis",
    icon: TrendingUp,
    skills: ["A/B Testing", "Statistical Analysis", "Business Requirements", "Stakeholder Management", "ROI Analysis"],
    color: "text-accent"
  }
];

export function Skills() {
  return (
    <Section id="skills" className="bg-card">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Full-stack data engineering and business intelligence capabilities across enterprise environments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 border-primary/20 hover:border-primary/40 transition-professional bg-card shadow-card hover:shadow-colored group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-professional">
                      <IconComponent className={`h-6 w-6 ${category.color} group-hover:text-accent transition-professional`} />
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-professional">{category.title}</h3>
                  </div>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
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
            );
          })}
        </div>

        {/* Highlight Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-12">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">1,000+</div>
            <div className="text-sm text-muted-foreground">Systems Optimized</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-accent">50,000+</div>
            <div className="text-sm text-muted-foreground">VMs Managed</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">85%</div>
            <div className="text-sm text-muted-foreground">Efficiency Gain</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-accent">48%</div>
            <div className="text-sm text-muted-foreground">Reporting Reduction</div>
          </div>
        </div>
      </div>
    </Section>
  );
}