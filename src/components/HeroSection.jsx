// src/components/HeroSection.jsx
export const HeroSection = () => {
  const scrollTo = (id) => () => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="home" className="hero-circuit relative min-h-[95vh] flex items-start">
      {/* Circuit lines */}
      <div className="lines">
        <div className="circuit-line top1"></div>
        <div className="circuit-line top2"></div>
        <div className="circuit-line top3"></div>
        <div className="circuit-line top4"></div>

        <div className="circuit-line bottom1"></div>
        <div className="circuit-line bottom2"></div>
        <div className="circuit-line bottom3"></div>
        <div className="circuit-line bottom4"></div>
      </div>

      {/* Content */}
      <div className="container pt-32 pb-20 text-center relative z-10">
        <p className="mb-4 text-xs font-mono uppercase tracking-[0.35em] text-zinc-500">
          Embedded Systems • Full-Stack Engineering
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 text-white">
          Hey, I&apos;m <span className="text-teal-300">Gurneik B.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-zinc-300 text-sm md:text-base mb-6">
          I design and build embedded systems projects and full-stack applications that connect hardware, software, and people. 
          From ESP32 alarm systems to AI laptop productivity managers, I like turning complex problems into reliable products.
        </p>

        <div className="flex justify-center gap-4">
          <button onClick={scrollTo("projects")} className="btn-primary">
            View my projects
          </button>
          <button onClick={scrollTo("contact")} className="btn-outline">
            Contact me
          </button>
        </div>
      </div>
    </section>
  );
};
