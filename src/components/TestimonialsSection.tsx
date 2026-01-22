import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Nino is an exceptional developer who consistently delivers high-quality solutions. His expertise in Azure and microservices transformed our infrastructure.",
    author: "Erik Lindqvist",
    role: "CTO, Tech Innovations AB",
    avatar: "/placeholder.svg",
  },
  {
    quote: "Working with Nino was a game-changer for our project. His deep understanding of .NET Core and clean architecture principles helped us scale efficiently.",
    author: "Anna Bergström",
    role: "Engineering Manager, Digital Solutions",
    avatar: "/placeholder.svg",
  },
  {
    quote: "Nino's ability to mentor junior developers while driving complex technical projects is remarkable. A true asset to any development team.",
    author: "Johan Andersson",
    role: "Tech Lead, StartupHub",
    avatar: "/placeholder.svg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            What People <span className="text-gradient">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feedback from colleagues and clients I've had the pleasure of working with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Quote */}
              <p className="text-foreground/90 mb-6 leading-relaxed">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary" />
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
