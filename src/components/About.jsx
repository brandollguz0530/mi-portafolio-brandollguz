import React from 'react'
// CountUp 
import CountUp from 'react-countup'
// intercection observer
import { useInView } from "react-intersection-observer"
// motion 
import { motion } from "framer-motion"
// variants
import { fadeIn } from "../variants"

const About = () => {
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
          viewport={{once: false, amount: 0.3}} 
          className=' flex-1 bg-about bg-contain bg-no-repeat h-[640px]  mix-blend-lighten bg-top'></motion.div>
          {/* texto */}
          <motion.div
          variants={fadeIn('left', 0.5)} 
          initial='hidden' 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.3}} 
          className=' flext-1 '>
            <h2 className='h2 text-accent'> About me.</h2>
            <p className=' mb-4'>
            ¡Hello,I am Brandoll Josue Guzman Carrillo! A passionate software developer, currently I dedicate myself to study and improve. I am always looking for ways to improve and learn new technologies in my spare time. It fascinates me to keep abreast of the latest development trends and never stop learning new things. Aside from my love of programming, I also enjoy soccer and travel I love to travel. Thank you for visiting my portfolio, I hope you enjoy it as much as I enjoyed creating it!
            </p>
            {/* stats */}
            <div className=' gap-x-6 lg:gap-x-10 mb-12 hidden lg:flex'>
              <div>
                <div className='text-[24px] lg:text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ? <CountUp start={0} end={2} duration={3} /> : null }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ? <CountUp start={0} end={7} duration={3} /> : null }
                    k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  
                  {
                    inView ? <CountUp start={0} end={10} duration={3} /> : null }
                    k+
                </div>
                
                <div className='font-primary text-sm tracking-[2px]'>
                  how much I enjoy creating <br />
                  them from 1 to 10
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg transition duration-300 transform hover:scale-110 focus:scale-110 mr-4'>
              Contact me 
            </button>
            <a href="#" className='text-gradient btn-link'>
              My Portfolio
            </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About