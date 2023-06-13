import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from "framer-motion"
import { fadeIn } from "../variants"
import { Link } from 'react-scroll'
import { useTranslation } from "react-i18next"




const Services = () => {

  const { t } = useTranslation("global")

  // services data 
  const services = [
    {
      name: t("Banner.project#1"),
      description: t("Banner.description#1"),
      link: "https://encriptador-alura-brandollguz.netlify.app/",
      ancla: t("Banner.anchor#1"),
    },
    {
      name: t("Banner.project#2"),
      description: t("Banner.description#3"),
      link: "https://sexto-entregable-ecommerce-brandollgu.netlify.app/",
      ancla: t("Banner.anchor#2"),
    },
    {
      name: t("Banner.project#3"),
      description: t("Banner.description#3"),
      link: "https://entregable-5-poquedex-brandollguz.netlify.app/",
      ancla: t("Banner.anchor#3"),
    },
    {
      name: t("Banner.project#4"),
      description: t("Banner.description#4"),
      link: "https://primer-entregable-react-brandollguz.netlify.app/",
      ancla: t("Banner.anchor#4"),
    },
    {
      name: t("Banner.project#5"),
      description: t("Banner.description#5"),
      link: "https://cuarto-entregable-react-brandollguz.netlify.app/",
      ancla: t("Banner.anchor#5"),
    }
  ]

  return (
    <section className='section' id='services'>
      <div className="container mx-auto mt-[500px] lg:mt-[300px]">
        <div className=' flex flex-col lg:flex-row '>
          {/* texto y imagen */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom h-[50vw] lg:h-[690px] w-[60vw] bg-no-repeat mix-blend-lighten mb-12 lg:mb-0' style={{ backgroundSize: 'contain', backgroundPosition: 'center' }}>
            <h2 className='h2 text-accent mb-6 '>
              {t("Banner.Project")}
            </h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              {t("Banner.h3")}
            </h3>
            <Link to='work'>
              <button className='btn btn-sm transition duration-300 transform hover:scale-110 focus:scale-110 mr-4'>{t("Banner.Work")} </button>
            </Link>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 '>
            {/* servicer list */}
            <div >
              {services.map((service, index) => {
                //destructure servuce 
                const { name, description, link, ancla } = service
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