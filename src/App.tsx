import About from "./components/About/About"
import ContactUs from "./components/ContactUs/ContactUs"
import Footer from "./components/Footer/Footer"
import Gallery from "./components/Gallery/Gallery"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Pricing from "./components/Pricing/Pricing"
import Schedule from "./components/Schedule/Schedule"
import Singers from "./components/Singers/Singers"
import Sponsors from "./components/Sponsors/Sponsors"
import Testimonials from "./components/Testimonials/Testimonials"


function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Singers/>
      <Schedule/>
      <Pricing/>
      <Sponsors/>
      <Testimonials/>
      <Gallery/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default App
