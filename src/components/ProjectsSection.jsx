import { useState } from "react";

const projects = [
  {
    title: "HomeGuard — ESP32 Alarm System",
    description:
      "An end-to-end home security system built on an ESP32 using FreeRTOS tasks, I2C sensors, keypad input, LCD display, and WiFi alerts. Includes web dashboard and secure arming/disarming.",
  },
  {
    title: "TCP Chat Server",
    description:
      "A C++ TCP client–server chat system built with raw sockets, thread-safe multi-client handling, and a modular OOP architecture.",
  },
  {
    title: "Python Data Sorting, Filtering, and Visualization",
    description:
      "Tool A modular Python data analytics pipeline with CSV processing, custom sorting, NumPy curve-fitting, Matplotlib visualizations, and command-line workflow automation.",
  },
  {
    title: "Laptop Security & Focus Monitor (In progress...)",
    description:
      "AI-powered laptop monitor using OpenCV + MediaPipe to detect intruders, track attention, provide productivity analytics, and lock the system when unauthorized users appear.",
  },
];

export const ProjectsSection = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openModal = (project) => {
    setSelected(project);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <section id="projects" className="py-28 bg-[#0B0C0F] border-t border-white/5">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-heading text-center mb-3">Projects</h2>
        <p className="section-subtitle text-center mx-auto mb-12">
          A collection of embedded, AI, and full-stack builds that show how I
          combine hardware + software.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, index) => (
            <div
              key={index}
              className="card-elevated p-6 cursor-pointer hover:border-white/25 transition"
              onClick={() => openModal(p)}
            >
              <h3 className="text-xl font-semibold mb-3 text-white">
                {p.title}
              </h3>
              <p className="text-zinc-400 text-sm">
                {p.description.substring(0, 95)}...
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* -------- MODAL -------- */}
      {open && selected && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="card-elevated max-w-lg p-8 relative">
            <button
              className="absolute top-3 right-4 text-white/60 hover:text-white text-xl"
              onClick={closeModal}
            >
              ×
            </button>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              {selected.title}
            </h3>
            <p className="text-zinc-300 leading-relaxed">
              {selected.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
