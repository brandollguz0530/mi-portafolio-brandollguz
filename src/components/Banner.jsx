import React from 'react'
// image 
import Imagen from "../assets/avatar.jpg"
// icons
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
//type animation
import { TypeAnimation } from 'react-type-animation'
// motion 
import { motion } from 'framer-motion'
// variants 
import { fadeIn } from "../variants"
import { Link } from 'react-scroll'
import { useTranslation } from "react-i18next"


const Banner = () => {
  const [t, i18n] = useTranslation("global")



  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[90px] mb-3'>
              Brandoll <span>Guzman</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-4 text-[30px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className=' text-white mr-4'> {t("Banner.skills")}   </span>
              <TypeAnimation sequence={[
                "Developer,",
                2000,
                "Designer,",
                2000,
                "full Stack,",
                2000,
              ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />

            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
              {t("Banner.I_m")}
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <Link to='contact'>
                <button className='btn btn-lg transition duration-300 transform hover:scale-110 focus:scale-110 mr-2'>{t("Banner.contac")}</button>
              </Link>
              <a href="my_resume.pdf" class="text-gradient btn-link" target="_blank">
                {t("Banner.CV")}
              </a>
            </motion.div>
            {/* social */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className=' flex text-[30px] gap-x-6 max-w-max mx-auto lg:mx-0 mb-6'>
              <a href="https://github.com/brandollguz0530" target="_blank">
                <FaGithub className=' transition duration-300 transform hover:scale-110 focus:scale-110 hover:text-black' />
              </a>
              <a href="https://www.linkedin.com/in/brandoll-guzman-872137266/" target="_blank">
                <FaLinkedin className=' transition duration-300 transform hover:scale-110 focus:scale-110 hover:text-blue-600' />
              </a>
              <a href="https://api.whatsapp.com/send?phone=+50588696072&text=Hola%20estoy%20usando%20WhatsApp" target="_blank">
                <FaWhatsapp className=' transition duration-300 transform hover:scale-110 focus:scale-110 hover:text-green-600' />
              </a>
            </motion.div>
          </div>

          {/* image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className="h-[350px] aspect-square lg:flex flex-col max-w-[320px] lg:max-w-[482px] items-center justify-center hidden">
            <div className="w-[400px] h-[400px] rounded-full overflow-hidden ">
              <img className="w-full h-full object-cover" src={Imagen} alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner