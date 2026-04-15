import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover opacity-40"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />

    <div className="relative z-10 text-center max-w-3xl mx-auto px-4 space-y-6">
      <p
        className="text-primary font-medium tracking-widest uppercase text-sm opacity-0 animate-fade-up"
        style={{ animationDelay: "0.2s" }}
      >
        NIT Trichy &middot; Instrumentation and Control Engineering '28
      </p>
      <h1
        className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-tight opacity-0 animate-fade-up"
        style={{ animationDelay: "0.4s" }}
      >
        Dyesh <span className="text-gradient">Raj</span>
      </h1>
      <p
        className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-up"
        style={{ animationDelay: "0.6s" }}
      >
        Building Intelligent Systems at the Intersection of Hardware &amp; Software
      </p>
      <div
        className="flex items-center justify-center gap-4 pt-4 opacity-0 animate-fade-up"
        style={{ animationDelay: "0.8s" }}
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_24px_hsl(185_72%_48%/0.3)] hover:-translate-y-0.5"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
        >
          Contact Me
        </a>
      </div>
    </div>

    <a
      href="#about"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
    >
      <ChevronDown size={28} />
    </a>
  </section>
);

export default HeroSection;
