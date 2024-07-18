// pages/About.jsx
import React from 'react';
import MyCarousel from '../components/MyCarousel';

const About = () => {
  return (
    <div className='flex flex-col'>
      <div 
        className='absolute inset-0 -z-10 w-full h-full bg-center bg-cover'
        style={{ backgroundImage: `url(/fondo.jpg)` }}
      ></div>
      <main className='flex-grow md:mb-12'>
        <h1 className='text-white text-5xl m-8'>Sobre mí</h1>
        <section className='flex flex-col h-[200px]'>
            <h2 className='text-3xl text-white m-8'>Skill blandas</h2>
            <h2 className='text-lg text-white mx-8 sm:text-sm'>
              Soy un profesional colaborador, comunicativo, empático, proactivo y organizado. Siempre busco formas de mejorar y ayudar al equipo. Me considero confiable y decidido, y tengo un buen sentido del humor, lo que facilita un ambiente de trabajo positivo y productivo, permitiéndome integrarme eficazmente en cualquier equipo.
            </h2>
        </section>
        <section className='flex flex-col items-center justify-center h-[275px] md:mt-6'>
            <div className='w-full h-full'>
                <h2 className='text-3xl text-white text-center mt-4'>Tecnologías</h2>
                <MyCarousel />
            </div>
        </section>
      </main>
    </div>
  );
}

export default About;
