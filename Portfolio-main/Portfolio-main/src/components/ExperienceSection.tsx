import { useInView } from "@/hooks/useInView";
import { Briefcase, Award } from "lucide-react";

const ExperienceSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2
          className={`section-title mb-2 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Experience & <span className="text-gradient">Leadership</span>
        </h2>
        <div className="w-16 h-1 bg-primary/60 rounded-full mb-12" />

        {/* Experience */}
        <div
          className={`project-card mb-8 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="flex items-start gap-4">
            <div className="timeline-dot mt-2 shrink-0" />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Briefcase size={16} className="text-primary" />
                <span className="text-xs text-primary font-medium">Nov 2025 – Dec 2025</span>
              </div>
              <h3 className="font-heading font-semibold text-lg">
                Front-End Development Intern
              </h3>
              <p className="text-sm text-muted-foreground mb-3">JB Soft System</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Built responsive web interfaces using HTML, CSS, and WordPress</li>
                <li>• Collaborated with engineers to implement UI components</li>
                <li>• Gained experience in professional web development workflows</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Positions */}
        <h3
          className={`font-heading font-semibold text-lg mb-6 flex items-center gap-2 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <Award size={18} className="text-primary" />
          Positions of Responsibility
        </h3>

        <div className="space-y-4">
          {/* Quality Management Team - combined */}
          <div
            className={`flex items-start gap-4 project-card transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="timeline-dot mt-2 shrink-0" />
            <div>
              <h4 className="font-medium">Manager, Quality Management Team</h4>
              <p className="text-sm text-muted-foreground">Festember &middot; Jan 2026 – Present</p>
              <h4 className="font-medium text-sm mt-2 text-muted-foreground">Coordinator, Quality Management Team</h4>
              <p className="text-xs text-muted-foreground">Festember &middot; Mar 2025 – Dec 2025</p>
            </div>
          </div>

          {/* WebOps Coordinator */}
          <div
            className={`flex items-start gap-4 project-card transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="timeline-dot mt-2 shrink-0" />
            <div>
              <h4 className="font-medium">WebOps Coordinator</h4>
              <p className="text-sm text-muted-foreground">Department Symposium &middot; Jan 2026 – Present</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
