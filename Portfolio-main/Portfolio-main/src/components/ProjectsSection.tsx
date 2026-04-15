import { useInView } from "@/hooks/useInView";
import { Star, Eye, Thermometer, Droplets, Hand, Layers } from "lucide-react";

const featured = {
  title: "Gesture Controlled Mouse using ESP32 (Apr 2026)",
  description:
    "A wireless air mouse using ESP32, smartphone gyroscope (pitch & roll) via WebSocket over Wi-Fi. Integrates flex sensors for click detection and BLE-based mouse emulation. Low-cost, low-latency system for intuitive human-computer interaction.",
  tags: ["ESP32", "BLE", "WebSocket", "Flex Sensors"],
  icon: Hand,
  applications: "Assistive tech, presentations, smart environments",
};

const projects = [
  {
    title: "Multimodal Product Matching & Deduplication",
    date: "Oct 2025",
    description:
      "Python + Streamlit app using CLIP model. Combines image embeddings, text similarity, and metadata for automated duplicate detection in e-commerce catalogs.",
    tags: ["Python", "Streamlit", "CLIP", "NLP"],
    icon: Layers,
  },
  {
    title: "Real-Time Color-Based Object Tracker",
    date: "Jan 2026",
    description:
      "Built with Python and OpenCV using HSV color space for accurate object detection with real-time tracking and low latency.",
    tags: ["Python", "OpenCV", "Computer Vision"],
    icon: Eye,
  },
  {
    title: "Automated Thermal Management System",
    date: "Nov 2025",
    description:
      "NTC thermistor + MOSFET system that automatically activates a DC fan on temperature rise to protect electronic components from overheating.",
    tags: ["NTC Thermistor", "MOSFET", "Embedded"],
    icon: Thermometer,
  },
  {
    title: "AquaTouch – Hands-Free Water Dispenser",
    date: "Sep – Dec 2024",
    description:
      "Arduino + ultrasonic sensor system for touchless water dispensing. Real-time TDS & temperature monitoring with ~15% energy savings through optimized automation.",
    tags: ["Arduino", "Ultrasonic", "TDS Sensor"],
    icon: Droplets,
  },
];

const ProjectsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="section-padding">
      <div ref={ref} className="max-w-5xl mx-auto">
        <h2
          className={`section-title mb-2 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          My <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary/60 rounded-full mb-12" />

        {/* Featured */}
        <div
          className={`glow-border rounded-xl p-6 md:p-8 mb-12 card-gradient transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Star size={16} className="text-primary" />
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Featured Project
            </span>
          </div>
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex p-3 rounded-xl bg-primary/10 mt-1">
              <featured.icon size={28} className="text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">{featured.title}</h3>
              <p className="text-muted-foreground mb-3">{featured.description}</p>
              <p className="text-sm text-muted-foreground mb-4">
                <span className="text-primary font-medium">Applications:</span>{" "}
                {featured.applications}
              </p>
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((t) => (
                  <span key={t} className="skill-badge text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`project-card transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 2) * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <p.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold">{p.title}</h3>
                  {p.date && (
                    <span className="text-xs text-muted-foreground">{p.date}</span>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="skill-badge text-xs">
                    {t}
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

export default ProjectsSection;
