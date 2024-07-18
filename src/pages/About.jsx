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
            <h2 className='text-lg text-white mt-4 mx-8 md:text-xl md:mx-16 lg:text-3xl lg:mx-24'>Skill blandas</h2>
            <h2 className='text-sm text-white mx-8 md:text-lg md:mx-16 lg:text-lg lg:mx-24'>
              Soy un profesional colaborador, comunicativo, empático, proactivo y organizado. Siempre busco formas de mejorar y ayudar al equipo. Me considero confiable y decidido, y tengo un buen sentido del humor, lo que facilita un ambiente de trabajo positivo y productivo, permitiéndome integrarme eficazmente en cualquier equipo.
            </h2>
        </section>
        <section className='flex flex-col items-center justify-center h-[275px] md:mt-6'>
            <div className='w-full h-full'>
                <h2 className='text-lg text-white mt-4 text-center lg:text-3xl'>Tecnologías</h2>
                <MyCarousel />
            </div>
        </section>
      </main>
    </div>
  );
}

export default About;
