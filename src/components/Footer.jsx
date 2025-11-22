import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#F7F3EE] pt-12 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#A8C3A0] to-[#CDE6F5] flex items-center justify-center">
              <span className="text-[#2B2B2B] text-lg">✿</span>
            </div>
            <span className="font-semibold text-[#2B2B2B]">Serenity Psychology Centre</span>
          </div>
          <p className="mt-4 text-sm text-[#2B2B2B]/70">Creating a calm, supportive space for healing and growth.</p>
        </div>
        <div>
          <h5 className="font-semibold text-[#2B2B2B]">Quick Links</h5>
          <ul className="mt-3 space-y-2 text-sm text-[#2B2B2B]/80">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#therapists">Therapists</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-[#2B2B2B]">Connect</h5>
          <div className="mt-3 flex items-center gap-3 text-[#2B2B2B]">
            <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
            <a href="#" aria-label="YouTube"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>
        <div>
          <h5 className="font-semibold text-[#2B2B2B]">Disclaimer</h5>
          <p className="mt-3 text-sm text-[#2B2B2B]/70">Not for crisis situations. If you are in immediate danger, please call your local emergency hotline.</p>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-[#2B2B2B]/60">© {new Date().getFullYear()} Serenity Psychology Centre. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
