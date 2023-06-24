import React from 'react';
import { useTranslation } from "react-i18next"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  const [t, i18n] = useTranslation("global")


  return (
    <div className='mb-[200px]'>
      <div className="container mx-auto flex justify-between items-center border-t border-gray-500 pt-2">
        <p className="text-sm">© 2023 {t("Banner.footer")}</p>
      </div>

      <div className="flex justify-center gap-6 lg:gap-14 mt-10">
        <div>
          <a href="https://github.com/brandollguz0530" target="_blank">
            <FaGithub className="text-3xl md:text-[45px] transition duration-300 transform hover:scale-110 focus:scale-110 hover:text-black" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/brandoll-guzman-872137266/" target="_blank">
            <FaLinkedin className="text-3xl md:text-[45px] transition duration-300 transform hover:scale-110 focus:scale-110 hover:text-blue-600" />
          </a>
        </div>
        <div>
          <a href="https://api.whatsapp.com/send?phone=+50588696072&text=Hola%20estoy%20usando%20WhatsApp" target="_blank">
            <FaWhatsapp className="text-3xl md:text-[45px] transition duration-300 transform hover:scale-110 focus:scale-110 hover:text-green-600" />
          </a>
        </div>
      </div>

      <div className=' grid'>
        <div class="container mx-auto">

          {/* LOGO */}
          <a
            href="https://api.whatsapp.com/send?phone=+50588696072&text=Hola%20estoy%20usando%20WhatsApp"
            target="_blank"
          >
            <img
              class="w-[80px] h-[80px] bg-gradient-to-r from-purple-700 via-blue-700 to-pink-500 rounded-md p-2 border-[3px] border-purple-950 transition duration-300 transform hover:scale-110 focus:scale-110"
              src="/images/favicon.png"
              alt="Logo"
            />
          </a>

          <div class="flex justify-end ">
            <a href="https://certificates.academlo.com/en/verify/91635487658682" target="_blank" class="pdf-link">{t("Banner.footer1")}</a>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Footer;