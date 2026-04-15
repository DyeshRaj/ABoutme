import { useInView } from "@/hooks/useInView";

const AboutSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="section-padding">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="section-title mb-2">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary/60 rounded-full mb-8" />
        <p className="text-muted-foreground text-lg leading-relaxed">
          I am an Instrumentation and Control Engineering student with a strong
          blend of software development and embedded systems expertise. I enjoy
          building intelligent systems that combine hardware and software to
          solve real-world problems, especially in automation, computer vision,
          and human-computer interaction.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
          {[
            { label: "CGPA", value: "8.29" },
            { label: "Projects", value: "5+" },
            { label: "Experience", value: "Sophomore" },
            { label: "Institute", value: "NIT Trichy" },
          ].map((s) => (
            <div
              key={s.label}
              className="text-center p-4 rounded-xl card-gradient border border-border/30"
            >
              <div className="text-2xl font-heading font-bold text-gradient">
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
