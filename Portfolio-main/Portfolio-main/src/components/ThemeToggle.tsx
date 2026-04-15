import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-card border border-border/50 shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(25_95%_53%/0.2)]"
      aria-label="Toggle theme"
    >
      {dark ? <Sun size={20} className="text-primary" /> : <Moon size={20} className="text-primary" />}
    </button>
  );
};

export default ThemeToggle;
