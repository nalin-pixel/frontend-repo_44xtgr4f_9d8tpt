import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="home" className="relative pt-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#CDE6F5] via-[#F7F3EE] to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#2B2B2B]">
            Find Peace, Healing & Clarity
          </h1>
          <p className="mt-6 text-lg text-[#2B2B2B]/80 max-w-xl">
            Professional therapy and counseling designed for your emotional well-being.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#appointment" className="px-6 py-3 rounded-full bg-[#A8C3A0] text-white hover:opacity-90 transition">Book a Session</a>
            <a href="#therapists" className="px-6 py-3 rounded-full bg-white text-[#2B2B2B] border border-[#2B2B2B]/10 hover:bg-[#F7F3EE] transition">Meet Our Therapists</a>
          </div>
        </div>

        {/* Right animation/image */}
        <div className="h-[380px] md:h-[460px] rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white/60">
          <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      {/* Quick highlights bar */}
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-white/80 backdrop-blur rounded-2xl shadow-sm ring-1 ring-black/5 p-4 -mt-8">
            {[
              'Licensed Therapists',
              'Confidential Sessions',
              'Online & In-Person',
              'Personalized Treatment Plans',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-[#2B2B2B]">
                <span className="text-[#A8C3A0]">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
