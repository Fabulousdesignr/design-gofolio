export default function Testimonials() {
  const testimonials = [
    {
      quote: "Godwin was professional in his approach and committed to delivering the best output for his clients. The design was creatively done and he collaborated well with the other members of the Team that worked on the MVP.",
      author: "MUHAMMED ABDULQUADRI",
      role: "COO, Karatek Solutions"
    },
    {
      quote: "I highly recommend Godwin for his outstanding UI/UX design work on our upcoming website. His redesign significantly improved both aesthetics and usability, creating a sleek, intuitive interface.",
      author: "Emmanuel Durotoye",
      role: "Founder at V22 Engineering"
    },
    {
      quote: "Godwin is a designer who pays attention to details. Even though we didn't work together directly, I noticed his sense of aesthetics, professionalism and ability to simplify complex details while relating in the workspace.",
      author: "Aaron Isreal",
      role: "Founder, Codeless Solutions"
    }
  ];

  return (
    <section className="py-24 section-dark">
      <div className="container-custom">
        <div className="flex flex-col items-start mb-16 scroll-reveal">
          <span className="text-sm font-bold uppercase tracking-widest text-accent mb-4 block">
            Feedback
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-text-primary uppercase">
            What Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="p-10 bg-card border border-card-border rounded-[40px] relative scroll-reveal fade-up" style={{ transitionDelay: `${index * 150}ms` }}>
              <span className="text-6xl text-accent/10 absolute top-6 left-8 font-black">"</span>
              <p className="text-lg font-medium text-text-primary mb-10 relative z-10 italic leading-relaxed">
                {t.quote}
              </p>
              <div className="flex flex-col">
                <strong className="text-text-primary text-lg font-bold">{t.author}</strong>
                <span className="text-text-secondary text-sm font-medium">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
