import React from 'react'
// CountUp 
import CountUp from 'react-countup'
// intercection observer
import { useInView } from "react-intersection-observer"
// motion 
import { motion } from "framer-motion"
// variants
import { fadeIn } from "../variants"
import { Link } from 'react-scroll'
// Link
import { useTranslation } from "react-i18next"



const About = () => {

  const { t } = useTranslation("global")


  const [ref, inView] = useInView({
    threshold: 0.5,
  })


  return (
    <section className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className='grid-1 lg:grid lg:grid-cols-2 gap-y-10 lg:grid-rows lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* imagen */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className=' flex-1 bg-about bg-contain bg-no-repeat h-[640px]  mix-blend-lighten bg-top'></motion.div>
          {/* texto */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className=' flex-1 '>
            <h2 className='h2 text-accent'>{t("Banner.About")}</h2>
            <p className=' mb-4'>{t("Banner.About_me")}</p>
            {/* stats */}
            <div className=' gap-x-6 lg:gap-x-10 mb-12 hidden lg:flex'>
              <div>
                <div className='text-[24px] lg:text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ? <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  {t("Banner.experience")}
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ? <CountUp start={0} end={7} duration={3} /> : null}

                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  {t("Banner.projects")}
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>

                  {
                    inView ? <CountUp start={0} end={10} duration={3} /> : null}

                </div>

                <div className='font-primary text-sm tracking-[2px]'>
                  {t("Banner.creating")}
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <Link to='contact'>
                <button className='btn btn-lg transition duration-300 transform hover:scale-110 focus:scale-110 mr-4'>
                  {t("Banner.contac")}
                </button>
              </Link>
              <a href="https://docs.google.com/document/d/1nSD55wwDLEsA8wT9XLXJ7MlD_NdgZAEs2f-XS5PGLZQ/edit?usp=sharing" className="text-gradient btn-link" target="_blank">
                {t("Banner.CV")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About