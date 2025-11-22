import { Menu, Phone } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#A8C3A0] to-[#CDE6F5] flex items-center justify-center shadow-inner">
            <span className="text-[#2B2B2B] text-lg">✿</span>
          </div>
          <span className="font-semibold text-[#2B2B2B]">Serenity Psychology Centre</span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-[#2B2B2B]/80">
          <li><a href="#home" className="hover:text-[#2B2B2B]">Home</a></li>
          <li><a href="#about" className="hover:text-[#2B2B2B]">About</a></li>
          <li><a href="#services" className="hover:text-[#2B2B2B]">Services</a></li>
          <li><a href="#therapists" className="hover:text-[#2B2B2B]">Therapists</a></li>
          <li><a href="#appointment" className="hover:text-[#2B2B2B]">Appointment</a></li>
          <li><a href="#resources" className="hover:text-[#2B2B2B]">Resources</a></li>
          <li><a href="#contact" className="hover:text-[#2B2B2B]">Contact</a></li>
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 text-sm text-[#2B2B2B]">
            <Phone className="w-4 h-4" />
            <span>(555) 123-4567</span>
          </a>
          <a href="#appointment" className="px-4 py-2 rounded-full text-white bg-[#A8C3A0] hover:bg-[#97b792] transition">Book a Session</a>
        </div>

        <button className="md:hidden p-2 text-[#2B2B2B]" aria-label="Open menu">
          <Menu />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
