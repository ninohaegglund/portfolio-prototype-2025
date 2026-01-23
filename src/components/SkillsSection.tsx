import { Code2, Cloud, Database, Settings, Container, Shield, Wrench, AppWindow } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Backend Development',
    skills: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'REST APIs', 'PHP', 'Node.js'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: ['Azure App Service', 'Azure Functions', 'CI/CD (Azure DevOps)', 'Azure SQL', 'Service Bus'],
  },
  {
    icon: AppWindow,
    title: 'Frontend',
    skills: ['Javascript', 'React', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'],
  },
  {
    icon: Wrench,
    title: 'Tools & CMS',
    skills: ['Git / GitHub', 'Umbraco', 'Optimizely', 'Visual Studio', 'Word Press',  'Postman'],
  },
  {
    icon: Settings,
    title: 'Architecture',
    skills: ['Microservices', 'SOLID', 'DRY', 'KISS', 'Clean Architecture', 'Repository pattern'],
  },
  {
    icon: Shield,
    title: 'Security & Auth',
    skills: ['JWT', 'ASP.NET Identity', 'RBAC', 'Token-based authentication'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive skills in modern .NET development, cloud architecture, and DevOps practices.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-bold mb-4">{category.title}</h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
