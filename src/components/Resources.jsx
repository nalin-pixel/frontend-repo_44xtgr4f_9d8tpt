function Resources() {
  const items = [
    {
      title: "Understanding Anxiety",
      tag: "Article",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Daily Wellness Tips",
      tag: "Guide",
      img: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Healthy Relationships 101",
      tag: "Blog",
      img: "https://images.unsplash.com/photo-1511634829096-045a111727eb?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section id="resources" className="py-20 bg-[#F7F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#2B2B2B] mb-8">Resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <article key={i.title} className="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5">
              <img src={i.img} alt={i.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <span className="text-xs uppercase tracking-wide text-[#2B2B2B]/60">{i.tag}</span>
                <h3 className="mt-2 text-lg font-semibold text-[#2B2B2B]">{i.title}</h3>
                <a href="#" className="mt-3 inline-block text-[#2B2B2B] underline">Read More</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resources;
