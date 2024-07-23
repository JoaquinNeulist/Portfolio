// pages/About.jsx
import React from 'react';
import MyCarousel from '../components/MyCarousel';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="absolute inset-0 -z-10 w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url(/fondo.jpg)` }}
      ></div>
      <main className="flex-grow md:mb-12">
        <h1 className="text-white text-5xl m-8">Sobre mí</h1>
        <section className="flex flex-col h-[200px]">
          <h2 className="text-lg text-white mt-4 mx-8 md:text-2xl md:mb-4 md:mx-16 lg:text-3xl lg:mx-24">
            Habilidades Blandas
          </h2>
          <p className="text-sm text-white mx-8 md:text-lg md:mx-16 lg:text-xl lg:mx-24 lg:mt-4">
            Soy un profesional colaborador, comunicativo, empático, proactivo y organizado. Siempre busco formas de mejorar y ayudar al equipo. Me considero confiable y decidido, y tengo un buen sentido del humor, lo que facilita un ambiente de trabajo positivo y productivo, permitiéndome integrarme eficazmente en cualquier equipo.
          </p>
        </section>
        <section className="flex flex-col items-center justify-center h-[275px] md:mt-6">
          <div className="w-full h-full">
            <h2 className="text-lg text-white mt-4 text-center lg:text-3xl">Tecnologías</h2>
            <MyCarousel />
          </div>
        </section>
      </main>
    </motion.div>
  );
}

export default About;
