import React, { useRef } from 'react'
import { motion } from "framer-motion"
import { fadeIn } from "../variants"
import emailjs from '@emailjs/browser'
import swal from 'sweetalert'



const Contact = () => {

  const formRef = useRef(null)

  const mostraralerta = () => {
    swal({
      title: "The mail was sent",
      text: "Your message was sent successfully I will contact you immediately",
      icon: "success",
      button: "ready",

    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.from_name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (name && email && message) {
      emailjs.sendForm(
        "service_ydto0ys",
        "template_3yfrc57",
        e.target,
        "kyheoB4iDe3FCtYSj"
      )
        .then((res) => {
          console.log(res.text);
          formRef.current.reset();
          mostrarAlertaExito();
        })
        .catch((err) => console.log(err));
    } else {
      mostrarAlertaCamposRequeridos();
    }
  };

  const mostrarAlertaExito = () => {
    swal({
      title: "The mail was sent",
      text: "Your message was sent successfully. I will contact you immediately.",
      icon: "success",
      buttons: {
        requeridos: {
          text: "ready",
          className: "bg-purple-700", // Clases de color de Tailwind CSS
        },
      },
    });
  };

  const mostrarAlertaCamposRequeridos = () => {
    swal({
      title: "Campos requeridos",
      text: "Por favor, completa todos los campos antes de enviar el mensaje.",
      icon: "error",
      buttons: {
        requeridos: {
          text: "Entiendo",
          className: "bg-purple-700", // Clases de color de Tailwind CSS
        },
      },
    });
  };


  return (
    <section className='py-16 lg:section lg:my-[200px]' id='contact'>
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className="container mx-auto">
        <div className='flex flex-col lg:flex-row mt-[500px] mb-[200px]'>
          {/* text */}
          <div className='flex-1'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] uppercase lg:text-[85px] leading-none mb-12'>Let's work <br /> together!</h2>
            </div>
          </div>
          {/* form */}
          <motion.form
            ref={formRef}
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
            onSubmit={handleSubmit}
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type="text"
              placeholder='  Your name'
              name="from_name"
            />

            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type="text"
              placeholder='  Your email'
              name="email"
            />

            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='Your message'
              name="message"
            ></textarea>

            <button
              onClick={() => mostraralerta()}
              className='btn btn-lg transition duration-300 transform hover:scale-110 focus:scale-110'>Send message</button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact