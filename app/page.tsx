import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeaturedCollection } from "./components/FeaturedCollection";
import { CraftsmanshipStory } from "./components/CraftsmanshipStory";
import { MaterialSelector } from "./components/MaterialSelector";
import { Testimonials } from "./components/Testimonials";
import { ShowroomLocator } from "./components/ShowroomLocator";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Preloader } from "./components/Preloader";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <Preloader />
      <Toaster position="bottom-right" toastOptions={{
        className: 'bg-black/80 backdrop-blur-md text-forma-text border border-forma-text/20 rounded-none uppercase tracking-widest text-xs font-bold',
        descriptionClassName: 'text-forma-text/70 tracking-normal font-normal mt-1'
      }} />
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <CraftsmanshipStory />
      <MaterialSelector />
      <Testimonials />
      <ShowroomLocator />
      <ContactForm />
      <Footer />
      
      {/* Floating Book Consultation Button for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <a 
          href="#contact"
          className="flex items-center justify-center w-14 h-14 bg-forma-brass text-white rounded-full shadow-lg hover:scale-105 transition-transform"
          aria-label="Book Consultation"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        </a>
      </div>
    </main>
  );
}
