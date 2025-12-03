// src/components/ContactSection.jsx
export const ContactSection = () => {
  return (
    <section id="contact" className="py-28 bg-[#0B0C0F] border-t border-white/5">
      <div className="container max-w-xl mx-auto">
        {/* Contact Card */}
        <div className="card-elevated p-10 text-center">
          <h2 className="section-heading mb-4">Contact</h2>

          <p className="section-subtitle mb-8 mx-auto text-center">
            Interested in collaborating or want to discuss a project?
            <br />
            Reach out anytime — I&apos;m always open to talking embedded systems,
            full-stack builds, or new ideas.
          </p>

          <a
            href="mailto:youremail@example.com"
            className="btn-primary inline-block"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
};
