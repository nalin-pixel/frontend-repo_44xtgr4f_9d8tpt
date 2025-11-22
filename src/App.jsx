import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Therapists from './components/Therapists';
import Testimonials from './components/Testimonials';
import AppointmentCTA from './components/AppointmentCTA';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#2B2B2B]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Therapists />
        <Testimonials />
        <AppointmentCTA />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
