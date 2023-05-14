import React from 'react'
import { motion} from "framer-motion"
import { fadeIn } from "../variants"

const Contact = () => {
  return (
    <section  className='py-16 lg:section lg:my-[200px]' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
            {/* text */}
            <div className='flex-1'>
              <div>
                <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
                <h2 >Let's work <br /> together!</h2>
              </div>
            </div>
            {/* form */}
            <form className='flex-1'>
                form
            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact