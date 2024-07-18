import React from 'react';
import { Link } from 'react-router-dom';
import Navegationbar from '../components/navegationbar'; 
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col"> 
      <div
        className="absolute inset-0 -z-10 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2xtZ3JqYmJ6aHB5aDdldHh0bnM1dTIyaWh1YjA4d3VhZzhmdjhndCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q2RgN7WUjeUUXm0/giphy.gif)`,
        }}
      ></div>
      <main className="flex-grow mt-12 text-center md:mt-36 lg:mt-24">
        <section className="flex flex-col gap-4 mx-4 items-center">
          <h1 className="font-merriweather text-white text-4xl">Soy Joaquin Neulist.</h1>
          <h2 className="font-merriweather text-white text-3xl">Desarrollador Fullstack y amante de la tecnología.</h2>
        </section>
        <section className="flex mt-4 flex-col gap-8 justify-between md:flex-row md:justify-center md:gap-12 md:mt-24 lg:flex-row lg:justify-center lg:gap-18 lg:mt-24 ">
          <Link 
            to="/about" 
            className="w-[250px] md:w-[200px] self-center bg-gradient-to-l from-fuchsia-800 via-violet-800 to-violet-800 text-white px-6 py-3 border rounded-full shadow-lg hover:bg-gray-600 link-hover link-click  lg:w-[250px]"
          >
            Sobre mi
          </Link>
          <Link 
            to="/projects" 
            className="w-[250px] md:w-[200px] self-center bg-gradient-to-b from-fuchsia-800 to-violet-800 text-white px-6 py-3 rounded-full border shadow-lg hover:bg-gray-600 link-hover link-click  lg:w-[250px]"
          >
            Proyectos
          </Link>
          <Link 
            to="/contact" 
            className="w-[250px] md:w-[200px] self-center bg-gradient-to-r from-fuchsia-800 via-violet-800 to-violet-800 text-white px-6 border py-3 rounded-full shadow-lg hover:bg-gray-600 link-hover link-click  lg:w-[250px]"
        >   
        Contactame
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Home;
