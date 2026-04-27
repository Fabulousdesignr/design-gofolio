export default function Stats() {
  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "30+", label: "Projects Completed" },
    { value: "12", label: "Happy Clients" },
    { value: "100%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="py-20 bg-bg-alt border-y border-card-border scroll-reveal fade-up">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-5xl md:text-7xl font-black text-text-primary mb-3 tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-xs md:text-sm text-text-secondary font-bold uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
