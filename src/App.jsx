// components
import Banner from './components/Banner';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import LangSelector from './components/LangSelector';

function App() {


  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <LangSelector />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  )
}

export default App
