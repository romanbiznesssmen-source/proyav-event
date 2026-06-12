import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import OrganizersSection from './components/OrganizersSection'
import GallerySection from './components/GallerySection'
import ScheduleSection from './components/ScheduleSection'
import SpeakersSection from './components/SpeakersSection'
import PartnersSection from './components/PartnersSection'
import TicketsSection from './components/TicketsSection'
import VenueSection from './components/VenueSection'
import FAQSection from './components/FAQSection'
import SocialSection from './components/SocialSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar transparent />
      <main>
        <Hero />
        <AboutSection />
        <OrganizersSection />
        <GallerySection />
        <ScheduleSection />
        <SpeakersSection />
        <PartnersSection />
        <TicketsSection />
        <VenueSection />
        <FAQSection />
        <SocialSection />
      </main>
      <Footer />
    </>
  )
}
