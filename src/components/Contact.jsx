import React from 'react'
import { motion} from "framer-motion"
import { fadeIn } from "../variants"

const Contact = () => {
  return (
    <section  className='py-16 lg:section lg:my-[200px]' id='contact'>
      <motion.div 
      variants={fadeIn('right', 0.2)} 
      initial='hidden' 
      whileInView={'show'} 
      viewport={{once: false, amount: 0.3}} 
      className="container mx-auto">
        <div className='flex flex-col lg:flex-row mt-[500px]'>
            {/* text */}
            <div className='flex-1'>
              <div>
                <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
                <h2 className='text-[45px] uppercase lg:text-[85px] leading-none mb-12'>Let's work <br /> together!</h2>
              </div>
            </div>
            {/* form */}
            <motion.form 
            variants={fadeIn('left', 0.2)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.3}} 
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
                <input 
                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
                type="text"
                placeholder='  Your name'  />

                <input 
                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
                type="text"
                placeholder='  Your email'  />

                <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
                placeholder='Your message'></textarea>

                <button className='btn btn-lg transition duration-300 transform hover:scale-90 focus:scale-90'>Send message</button>
            </motion.form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact