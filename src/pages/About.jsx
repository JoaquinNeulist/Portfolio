import React from 'react';
import { motion } from 'framer-motion';
import MyCarousel from '../components/MyCarousel';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen py-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-4xl p-8 bg-gray-900 bg-opacity-75 md:rounded-lg lg:rounded-xl shadow-xl">
        <h1 className="text-4xl font-extrabold text-center mb-8">Sobre Mí</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Habilidades Blandas</h2>
          <p className="leading-relaxed text-lg">
            Soy un profesional colaborador, comunicativo, empático, proactivo y organizado. Siempre busco formas de mejorar y ayudar al equipo. Me considero confiable y decidido, y tengo un buen sentido del humor, lo que facilita un ambiente de trabajo positivo y productivo, permitiéndome integrarme eficazmente en cualquier equipo.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-6">Tecnologías</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <MyCarousel />
          </div>
        </section>

        <section className="text-center">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
            <p className="leading-relaxed text-lg">
              Estoy siempre abierto a nuevas oportunidades y desafíos. Si estás interesado en colaborar o simplemente quieres saber más sobre mí, no dudes en contactarme.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-fuchsia-800 via-violet-800 to-violet-800 text-white px-6 py-3 border rounded-full shadow-lg hover:bg-gray-600 link-hover link-click"
          >
            ¡Hablemos!
          </Link>
        </section>
      </div>
    </motion.div>
  );
}

export default About;
