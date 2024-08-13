import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2xtZ3JqYmJ6aHB5aDdldHh0bnM1dTIyaWh1YjA4d3VhZzhmdjhndCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q2RgN7WUjeUUXm0/giphy.gif)`,
      }}
    >
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 bg-black bg-opacity-50">
        <section className="flex flex-col gap-4 items-center text-white">
          <h1 className="font-merriweather text-4xl md:text-5xl lg:text-6xl">Soy Joaquin Neulist.</h1>
          <h2 className="font-merriweather text-3xl md:text-4xl lg:text-5xl">Desarrollador Fullstack y amante de la tecnología.</h2>
        </section>

        <section className="flex mt-8 flex-col gap-8 justify-center md:flex-row md:gap-12 lg:gap-16">
          <Link 
            to="/about" 
            className="w-48 md:w-56 lg:w-64 bg-gradient-to-l from-fuchsia-800 via-violet-800 to-violet-800 text-white px-6 py-3 border rounded-full shadow-lg hover:bg-gray-600 link-hover link-click"
          >
            Sobre mí
          </Link>
          <Link 
            to="/projects" 
            className="w-48 md:w-56 lg:w-64 bg-gradient-to-b from-fuchsia-800 to-violet-800 text-white px-6 py-3 border rounded-full shadow-lg hover:bg-gray-600 link-hover link-click"
          >
            Proyectos
          </Link>
          <Link 
            to="/contact" 
            className="w-48 md:w-56 lg:w-64 bg-gradient-to-r from-fuchsia-800 via-violet-800 to-violet-800 text-white px-6 py-3 border rounded-full shadow-lg hover:bg-gray-600 link-hover link-click"
          >
            Contáctame
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Home;
