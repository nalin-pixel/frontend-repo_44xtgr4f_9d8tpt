function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
          <img src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop" alt="Serenity Centre" className="w-full h-80 object-cover" />
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#2B2B2B]">About Serenity Psychology Centre</h2>
          <p className="mt-4 text-[#2B2B2B]/80">
            We provide compassionate, evidence-based therapy tailored to your unique needs. Our mission is to support your journey toward mental wellness with respect, empathy, and professionalism.
          </p>
          <p className="mt-3 text-[#2B2B2B]/80">
            From individual therapy to specialized programs, we offer a safe and welcoming environment where healing and growth can flourish.
          </p>
          <a href="#about" className="inline-block mt-6 px-5 py-3 rounded-full bg-[#CDE6F5] text-[#2B2B2B] hover:bg-[#b8d9ef] transition">Learn More About Us</a>
        </div>
      </div>
    </section>
  );
}

export default About;
