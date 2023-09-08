// components
import Banner from './components/Banner';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import LangSelector from './components/LangSelector';
import Footer from './components/Footer';
import Prueva from "./components/Prueva"

function App() {


  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <LangSelector />
      
      <Banner />
      <Nav />
      <About />
      <Services />
      <Prueva />
      <Work />
      <Contact />
      <Footer />
      {/* <div className='h-[100px]'></div> */}
    </div>
  )
}

export default App
