const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="group relative overflow-hidden rounded-2xl glass-card h-[420px] md:h-[460px]">
            <img
              src="/images/Profile3.jpg"
              alt="Portrait of Nino Hägglund"
              className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              A bit about who I am and how I work.
            </p>
            <div className="prose prose-invert max-w-none">
              <p>
                I recently completed my .NET web development studies in Stockholm, focusing on C#, ASP.NET Core, MVC, and modern frontend technologies. I enjoy building both full-stack applications and well-structured backend systems. My experience also includes working with React, Tailwind CSS, and Unity for 2D game development. In addition, I’ve worked with cloud deployment using Azure, implemented CI/CD pipelines, and gained hands-on experience with CMS platforms like Umbraco and Optimizely.
              </p>
              <p>
                I’m driven by clean code, problem-solving, and continuous learning — especially through real-world projects. I’m now looking for a junior .NET developer role where I can contribute to meaningful development work, grow as a developer, and collaborate with experienced professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
