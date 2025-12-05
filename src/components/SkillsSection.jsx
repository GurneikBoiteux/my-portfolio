// src/components/SkillsSection.jsx
export const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 bg-[#0B0C0F] border-t border-white/5">
      <div className="container">
        <h2 className="section-heading mb-10 text-center">Skills</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Embedded Systems",
              desc: "ESP32, UART/I2C/SPI, FreeRTOS, sensors, WiFi protocols.",
            },
            {
              title: "Full-Stack Development",
              desc: "React, Node.js, REST APIs, TailwindCSS.",
            },
            {
              title: "Systems Programming",
              desc: "C, memory management, OS-level coding, hardware interfacing.",
            },
            {
              title: "DevOps",
              desc: "Docker, Linux systems, Git, deployment pipelines.",
            },
            {
              title: "Python & Automation",
              desc: "Data processing, automation tools, AI utilities.",
            },
            {
              title: "Cloud & Networking",
              desc: "HTTP, TCP/IP, real-time telemetry, server optimization.",
            },
          ].map((item, i) => (
            <div key={i} className="card-elevated p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-zinc-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
