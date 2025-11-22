import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#therapists", label: "Therapists" },
    { href: "#appointment", label: "Appointment" },
    { href: "#resources", label: "Resources" },
    { href: "#contact", label: "Contact" },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#A8C3A0] rounded-lg">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#A8C3A0] to-[#CDE6F5] flex items-center justify-center shadow-inner">
            <span className="text-[#2B2B2B] text-lg" aria-hidden>✿</span>
          </div>
          <span className="font-semibold text-[#2B2B2B]">Serenity Psychology Centre</span>
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-[#2B2B2B]/80">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-[#2B2B2B] focus:outline-none focus:ring-2 focus:ring-[#A8C3A0] rounded-md px-1 py-0.5">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 text-sm text-[#2B2B2B] focus:outline-none focus:ring-2 focus:ring-[#A8C3A0] rounded-full px-2 py-1">
            <Phone className="w-4 h-4" />
            <span>(555) 123-4567</span>
          </a>
          <a href="#appointment" className="px-4 py-2 rounded-full text-white bg-[#A8C3A0] hover:bg-[#97b792] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A8C3A0]">Book a Session</a>
        </div>

        <button
          className="md:hidden p-2 text-[#2B2B2B] focus:outline-none focus:ring-2 focus:ring-[#A8C3A0] rounded-lg"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <div className="fixed inset-0 bg-black/30" onClick={closeMenu} aria-hidden></div>
          <div className="fixed top-0 right-0 h-full w-[80%] max-w-xs bg-white shadow-xl p-6 flex flex-col gap-4 animate-in">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#2B2B2B]">Menu</span>
              <button className="p-2" aria-label="Close menu" onClick={closeMenu}>
                <X />
              </button>
            </div>
            <nav>
              <ul className="space-y-2 text-[#2B2B2B]">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="block px-3 py-2 rounded-lg hover:bg-[#F7F3EE]"
                      onClick={closeMenu}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <a href="#appointment" className="mt-2 px-4 py-3 rounded-full text-white bg-[#A8C3A0] text-center" onClick={closeMenu}>
              Book a Session
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm text-[#2B2B2B] mt-auto" onClick={closeMenu}>
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
