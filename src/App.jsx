import Header from './component/navigasi.jsx'
import HeroSection from './component/Beranda.jsx'
import AboutSection from './component/About.jsx'
import PortofolioSection from './component/Portofolio.jsx'
import ClientsSection from './component/clients.jsx'
import Blog from './component/Blog.jsx'
import ContactSection from './component/contact.jsx'
import Footer from './component/footer.jsx'
import './index.css'
import PopupInfo from './component/popup/information.jsx'


function App() {
  return (
    <>
      <PopupInfo />
      <Header />
      <HeroSection />
      <AboutSection />
      <PortofolioSection />
      <ClientsSection />
      <Blog />
      <ContactSection />
      <Footer />
    </>
    
  )
}

export default App
