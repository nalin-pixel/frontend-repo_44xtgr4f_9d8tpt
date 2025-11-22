const therapists = [
  {
    name: "Dr. Maya Bennett, PhD",
    summary: "Holistic, client-centered therapy with CBT and mindfulness.",
    photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Alex Rivera, LMFT",
    summary: "Relationship-focused work integrating EFT and systems theory.",
    photo: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Priya Desai, LCSW",
    summary: "Trauma-informed care with EMDR and strengths-based approach.",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
  },
];

function Therapists() {
  return (
    <section id="therapists" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#2B2B2B] mb-8">Our Therapists</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {therapists.map((t) => (
            <div key={t.name} className="rounded-2xl overflow-hidden bg-white shadow-sm ring-1 ring-black/5">
              <img src={t.photo} alt={t.name} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-[#2B2B2B]">{t.name}</h3>
                <p className="text-sm text-[#2B2B2B]/80 mt-2">{t.summary}</p>
                <button className="mt-4 px-4 py-2 rounded-full bg-[#A8C3A0] text-white hover:opacity-90">View Profile</button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a href="#quiz" className="text-[#2B2B2B] underline">Find the right therapist for you</a>
        </div>
      </div>
    </section>
  );
}

export default Therapists;
