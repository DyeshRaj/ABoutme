import { useInView } from "@/hooks/useInView";
import { Code, Cpu, Wrench, Monitor } from "lucide-react";

const categories = [
  {
    title: "Languages",
    icon: Code,
    items: ["C", "C++", "Python"],
  },
  {
    title: "Tools & Frameworks",
    icon: Cpu,
    items: ["OpenCV", "Streamlit", "Arduino", "ESP32"],
  },
  {
    title: "Engineering Software",
    icon: Wrench,
    items: ["LT Spice", "Tina TI"],
  },
  {
    title: "Other Tools",
    icon: Monitor,
    items: ["VS Code", "WordPress", "MS Office", "HTML/CSS", "JavaScript", "Node.js", "MongoDB", "Express.js", "React"],
  },
];

const SkillsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div ref={ref} className="max-w-5xl mx-auto">
        <h2
          className={`section-title mb-2 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary/60 rounded-full mb-12" />

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`project-card transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <cat.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="skill-badge">
                    {item}
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
