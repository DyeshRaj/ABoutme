import { useInView } from "@/hooks/useInView";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="section-padding">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <h2
          className={`section-title mb-2 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-primary/60 rounded-full mb-8 mx-auto" />
        <p
          className={`text-muted-foreground mb-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          I&apos;m always open to discussing new projects, internship opportunities, or collaborations in embedded systems and software development.
        </p>

        <div
          className={`grid sm:grid-cols-3 gap-6 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {[
            { icon: Mail, label: "Email", value: "dyeshdyesh@gmail.com" },
            { icon: MapPin, label: "Location", value: "NIT Trichy, India" },
            { icon: Phone, label: "Phone", value: "+91 9080682175" },
          ].map((c) => (
            <div
              key={c.label}
              className="project-card flex flex-col items-center text-center gap-3"
            >
              <div className="p-3 rounded-xl bg-primary/10">
                <c.icon size={22} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{c.label}</p>
                <p className="font-medium text-sm">{c.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
