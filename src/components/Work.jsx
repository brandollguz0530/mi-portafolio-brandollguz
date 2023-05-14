import React from 'react'
import { motion} from "framer-motion"
import { fadeIn } from "../variants"
import img1 from '/images/proyect1.png'
import img2 from '/images/proyect2.png'
import img3 from '/images/proyect3.png'
import img4 from '/images/proyect4.png'


const Work = () => {
  return (
    <section className='section' id='work'>
      <div className="container mx-auto lg:mt-[700px] lg:px-[100px]">
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <div className=' flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <motion.div
            variants={fadeIn('up', 0.2)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.3}} 
            >
              <h2 className='h2 leading-tight text-accent'>My Latest <hr />
                proyect .
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet cumque incidunt sunt omnis aliquam iusto doloremque, adipisci quasi vero voluptatem aliquid culpa saepe fugiat doloribus quisquam officia iure. Quasi, modi.
              </p>
              <button className='btn btn-sm transition duration-300 transform hover:scale-110 focus:scale-110 mt-6'>View all projects</button>
            </motion.div>
            </div>
            {/* todas las imagenes  */}
            <motion.div 
            variants={fadeIn('left', 0.2)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.3}} 
            className=' lg:grid grid-cols-2 gap-10 '>
            {/* imagen */}
            <a href="https://sexto-entregable-ecommerce-brandollgu.netlify.app/" target='_blank' >
            <div className='flex flex-col gap-y-10'> 
            <div className=' group relative overflow-hidden border-2 border-white/50 rounded-lg w-full h-[300px]' style={{ maxWidth: '500px', margin: '0 auto'}}>
              {/* overloy */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%' }}/>
              {/* pretittle */}
              <div className='text-2xl text-center text-gradient  mb-[30px] absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>E-commerce</div>
              {/* ittle */}
              <div className=' text-center text-gradient text-sm mb-4 lg:absolute lg:-bottom-full lg:left-12 lg:group-hover:bottom-14 lg:transition-all lg:duration-700 lg:z-50'>E-commerce usando Api redux redux/toolki react-vites</div>
              </div>
            </div>
            </a>
          
          {/* imagen */}
          <a href="https://entregable-5-poquedex-brandollguz.netlify.app/" target='_blank'>
          <div className='flex flex-col gap-y-10 mt-10 lg:mt-0'>
            
            <div className=' group relative overflow-hidden border-2 border-white/50 rounded-lg w-full h-[300px]' style={{ maxWidth: '300px', margin: '0 auto'}}>
              {/* overloy */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%' }}/>
              {/* pretittle */}
              <div className='text-2xl text-center text-gradient  mt-4 absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>Pokedex</div>
              {/* ittle */}
              <div className=' text-center text-gradient text-sm mt-4 lg:absolute lg:-bottom-full lg:left-12 lg:group-hover:bottom-14 lg:transition-all lg:duration-700 lg:z-50'>Consumiendo Api de pokedex con react </div>
              
            </div>
          </div>
          </a>

          {/* imagen */}
          <a href="https://primer-entregable-react-brandollguz.netlify.app/" target='_blank'>
          <div className='flex flex-col gap-y-10 mt-10 lg:mt-0'>
            
            <div className=' group relative overflow-hidden border-2 border-white/50 rounded-lg w-full h-[300px]' style={{ maxWidth: '300px', margin: '0 auto'}}>
              {/* overloy */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%' }}/>
              {/* pretittle */}
              <div className='text-2xl text-center text-gradient   absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 mb-[50px]'>Frases Aleatorias</div>
              {/* ittle */}
              <div className=' text-center text-gradient text-sm  lg:absolute lg:-bottom-full lg:left-12 lg:group-hover:bottom-14 lg:transition-all lg:duration-700 lg:z-50 mb-8'>presiona el boton y te traera una frase aleatoria mientras cambia el fondo  </div>
              
            </div>
          </div>
          </a>

          {/* imagen */}
          <a href="https://segundo-entregable-brandollguz.netlify.app/" target='_blank'>
          <div className=' flex-col gap-y-10 mt-10 lg:mt-0'>
            
            <div className=' group relative overflow-hidden border-2 border-white/50 rounded-lg w-full h-[300px]' style={{ maxWidth: '300px', margin: '0 auto'}}>
              {/* overloy */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={img4} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%' }}/>
              {/* pretittle */}
              <div className='text-2xl text-center text-gradient   absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 mb-[50px]'>Web del clima </div>
              {/* ittle */}
              <div className=' text-center text-gradient text-sm  lg:absolute lg:-bottom-full lg:left-12 lg:group-hover:bottom-14 lg:transition-all lg:duration-700 lg:z-50 mb-8'>Te da la ubicacion en que te encuentras y el clima </div>
              
            </div>
            </div>
          </a>

          
            </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work