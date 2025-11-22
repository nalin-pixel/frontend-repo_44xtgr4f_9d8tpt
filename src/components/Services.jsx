import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    title: "Individual Therapy",
    desc: "One-on-one support to help you navigate life’s challenges.",
  },
  {
    title: "Couples Counseling",
    desc: "Strengthen communication and rebuild connection.",
  },
  {
    title: "Family Therapy",
    desc: "Improve family dynamics and foster understanding.",
  },
  {
    title: "Child/Teen Therapy",
    desc: "Compassionate care tailored for younger clients.",
  },
  {
    title: "Stress & Anxiety Management",
    desc: "Evidence-based tools to manage stress and anxiety.",
  },
  {
    title: "Depression Support",
    desc: "Empathetic guidance to help you find light again.",
  },
];

function Services() {
  const scroller = useRef(null);

  const scrollBy = (offset) => {
    scroller.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-[#F7F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#2B2B2B]">Services</h2>
          <div className="hidden md:flex items-center gap-2">
            <button onClick={() => scrollBy(-320)} className="p-2 rounded-full bg-white hover:bg-white/80 shadow">
              <ChevronLeft />
            </button>
            <button onClick={() => scrollBy(320)} className="p-2 rounded-full bg-white hover:bg-white/80 shadow">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="relative">
          <div ref={scroller} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-1" style={{scrollbarWidth:'none'}}>
            {services.map((s) => (
              <div key={s.title} className="min-w-[280px] md:min-w-[320px] snap-start bg-white rounded-2xl p-5 shadow-sm ring-1 ring-black/5">
                <div className="w-12 h-12 rounded-xl bg-[#CDE6F5] mb-4" />
                <h3 className="text-lg font-semibold text-[#2B2B2B]">{s.title}</h3>
                <p className="mt-2 text-sm text-[#2B2B2B]/80">{s.desc}</p>
                <a href="#" className="mt-4 inline-block text-[#2B2B2B] underline">Learn More</a>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden flex justify-center gap-3 mt-6">
          <button onClick={() => scrollBy(-280)} className="px-4 py-2 rounded-full bg-white shadow">Prev</button>
          <button onClick={() => scrollBy(280)} className="px-4 py-2 rounded-full bg-white shadow">Next</button>
        </div>
      </div>
    </section>
  );
}

export default Services;
