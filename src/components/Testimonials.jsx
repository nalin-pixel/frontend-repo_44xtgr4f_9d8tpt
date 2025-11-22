function Testimonials() {
  const items = [
    { initials: "A.M.", text: "I felt truly heard and supported. The sessions have changed my life." },
    { initials: "J.R.", text: "Compassionate, professional, and effective. Highly recommend." },
    { initials: "S.K.", text: "I found clarity and tools to manage my anxiety. Thank you!" },
    { initials: "T.L.", text: "Warm and welcoming environment—exactly what I needed." },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F7F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#2B2B2B] mb-8">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.initials} className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-black/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#CDE6F5] text-[#2B2B2B] flex items-center justify-center font-semibold">
                  {i.initials}
                </div>
                <div className="text-[#2B2B2B]/70">Client</div>
              </div>
              <p className="mt-4 text-[#2B2B2B]">“{i.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
