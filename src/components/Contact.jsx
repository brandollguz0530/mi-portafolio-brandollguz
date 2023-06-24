import React, { useRef } from 'react'
import { motion } from "framer-motion"
import { fadeIn } from "../variants"
import emailjs from '@emailjs/browser'
import swal from 'sweetalert'
import { useTranslation } from "react-i18next"



const Contact = () => {

  const { t } = useTranslation("global")

  const formRef = useRef(null)

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
      title: t("Banner.alert1"),
      text: t("Banner.alertText1"),
      icon: "success",
      buttons: {
        requeridos: {
          text: t("Banner.alertButton1"),
          className: "bg-purple-700", // Clases de color de Tailwind CSS
        },
      },
    });
  };

  const mostrarAlertaCamposRequeridos = () => {
    swal({
      title: t("Banner.alert"),
      text: t("Banner.alertText"),
      icon: "error",
      buttons: {
        requeridos: {
          text: t("Banner.alertButton"),
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
        <div className='flex flex-col lg:flex-row mt-[500px] mb-10 lg:mb-[220px]'>
          {/* text */}
          <div className='flex-1'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>{t("Banner.contact")}</h4>
              <h2 className='text-[45px] uppercase lg:text-[85px] leading-none mb-12'>{t("Banner.contactW")} <br /> {t("Banner.contactW1")} </h2>
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
              placeholder={t("Banner.name")}
              name="from_name"
            />

            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type="text"
              placeholder={t("Banner.email")}
              name="email"
            />

            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder={t("Banner.message")}
              name="message"
            ></textarea>

            <button
              onClick={() => mostraralerta()}
              className='btn btn-lg transition duration-300 transform hover:scale-110 focus:scale-110'>{t("Banner.send")}</button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact