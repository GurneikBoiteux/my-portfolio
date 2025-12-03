// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 backdrop-blur-md transition-all duration-300",
        "bg-black/70 border-b border-white/10",
        scrolled && "shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
      )}
    >
      <nav className="container flex h-16 items-center justify-between">
        <div className="text-sm font-semibold tracking-[0.25em] uppercase text-zinc-300">
          GURNEIK B
        </div>

        <ul className="hidden md:flex gap-8 text-sm">
          {[
            { id: "home", label: "Home" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" },
          ].map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={handleNavClick(link.id)}
                className="text-zinc-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={handleNavClick("contact")}
            className="hidden md:inline-flex px-4 py-2 rounded-full border border-white/20 text-sm text-zinc-300 hover:bg-white/10 transition"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};
