import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { motion} from "framer-motion"
import { fadeIn } from "../variants"


// services data 
const services = [
  {
    name: 'Encriptador-Alura',
    description: "Pon un texto y sera encriptado clases alura usando solo html, css y Javascript",
    link: "https://encriptador-alura-brandollguz.netlify.app/",
    ancla: "Encriptador",
  },
  {
    name: 'E-commerce',
    description: "E-commerce usando Api redux redux/toolki react-vites ",
    link: "https://sexto-entregable-ecommerce-brandollgu.netlify.app/",
    ancla: "E-commerce",
  },
  {
    name: 'pokedex',
    description: "consumiendo Api de pokemon y trayendo datos clases react",
    link: "https://entregable-5-poquedex-brandollguz.netlify.app/",
    ancla: "Pokedex",
  },
  {
    name: 'Fraces Aleatorias ',
    description: "preciona el boton y te traera frases aleatorias del espacio mientras el fondo cambia a su ves ",
    link: "https://primer-entregable-react-brandollguz.netlify.app/",
    ancla: "Fraces",
  },
  {
    name: 'Creador de tarjetas',
    description: "crea tarjetas personales puedes eliminarlas editarlas y crear cuantas quieras ",
    link: "https://cuarto-entregable-react-brandollguz.netlify.app/",
    ancla: "Tarjetas ",
  }
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className="container mx-auto mt-[500px] lg:mt-[300px]">
        <div className=' flex flex-col lg:flex-row '>
          {/* texto y imagen */}
          <motion.div
          variants={fadeIn('right', 0.3)} 
          initial='hidden' 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.3}}  
          className='flex-1 lg:bg-services lg:bg-bottom h-[50vw] lg:h-[690px] w-[60vw] bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'  style={{ backgroundSize: 'contain', backgroundPosition: 'center' }}>
            <h2 className='h2 text-accent mb-6 '>
              What I Do .
            </h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a Freelance front-end Developer whith over 2 years of experience.
            </h3>
            <button className='btn btn-sm transition duration-300 transform hover:scale-110 focus:scale-110 mr-4'>See my work </button>
          </motion.div>
          {/* services */}
          <motion.div
          variants={fadeIn('left', 0.5)} 
          initial='hidden' 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.3}} 
          className='flex-1 '>
            {/* servicer list */}
            <div >
              {services.map((service, index) => {
                //destructure servuce 
                const {name, description, link, ancla} = service
                return (
                  <div className='border-b border-white/20 h-[1o8px] mb-[38px] lg:flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className=' text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className=' lg:flex lg:flex-col lg:flex-1 lg:items-end'>
                      <a href={link} className='hidden btn w-9 h-9 mb-[42px] lg:flex justify-center items-center' target='_blank'>
                        <BsArrowUpRight />
                      </a>
                      <a href={link} className='text-gradient text-sm ' target='_blank'>
                        {ancla}
                      </a>
                    
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services