import React from "react";
import { FaCss3Alt, FaHtml5, FaJava, FaJs } from "react-icons/fa";


const Proyect = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-400 via-violet-300 to-violet-400 z-index-0 flex flex-col items-center justify-center">
      <div className="flex flex-col min-h-full rounded-3xl">
        <h1 className="text-3xl lg:text-[48px] my-4 text-white">Proyectos: </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 gap-4 my-4">
          <div className="border border-gray-500 flex flex-col bg-white rounded-3xl w-[275px] lg:w-[300px]">
            <img
              src="/battleship.jpg"
              alt=""
              className="w-full h-[175px] object-cover rounded-2xl"
            />
            <h2 className="text-2xl font-merriweather text-center">
              Aqua Battles
            </h2>
            <p className="font-merriweather text-center">
              Jun - 2024 / Jul - 2024
            </p>
            <div className="flex justify-evenly">
              <FaHtml5 size={25} />
              <p className="font-playfair">HTML</p>
              <FaCss3Alt size={25} />
              <p className="font-playfair">CSS</p>
              <FaJs size={25} />
              <p className="font-playfair">JavaScript</p>
              <FaJava size={25} />
              <p className="font-playfair">Java</p>
            </div>
            <a
              href="https://github.com/JoaquinNeulist/AquaBattles.git"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white w-11/12 text-center self-center rounded-lg my-2"
            >
              Repository
            </a>
          </div>
          <div className="border border-gray-500 flex flex-col bg-white rounded-3xl w-[275px] lg:w-[300px]">
            <img
              src="/homebanking.png"
              alt=""
              className="w-full h-[175px] object-contain rounded-2xl"
            />
            <h2 className="text-2xl font-merriweather text-center">
              Homebanking
            </h2>
            <p className="font-merriweather text-center">
              May - 2024 / Jun - 2024
            </p>
            <div className="flex justify-evenly">
            <FaHtml5 size={25} />
              <p className="font-playfair">HTML</p>
              <FaCss3Alt size={25} />
              <p className="font-playfair">CSS</p>
              <FaJs size={25} />
              <p className="font-playfair">JavaScript</p>
              <FaJava size={25} />
              <p className="font-playfair">Java</p>
            </div>
            <a
              href="https://github.com/JoaquinNeulist/homebanking-portfolio.git"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white w-11/12 text-center self-center rounded-lg my-2"
            >
              Repository
            </a>
          </div>
          <div className="border border-gray-500 flex flex-col bg-white rounded-3xl w-[275px] lg:w-[300px]">
            <img
              src="/Logo-ico.ico"
              alt=""
              className="w-full h-[175px] object-cover rounded-2xl"
            />
            <h2 className="text-2xl font-merriweather text-center">
              Stride Gear
            </h2>
            <p className="font-merriweather text-center">
              Abr - 2024 / May - 2024
            </p>
            <div className="flex justify-evenly">
              <FaHtml5 size={25} />
              <p className="font-playfair">HTML</p>
              <FaCss3Alt size={25} />
              <p className="font-playfair">CSS</p>
              <FaJs size={25} />
              <p className="font-playfair">JavaScript</p>
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://github.com/FlorAyala/Stride-Gear`}
              className="bg-blue-500 text-white text-center w-11/12 self-center rounded-lg my-2"
            >
              Repository
            </a>
          </div>
          <div className="border border-gray-500 flex flex-col bg-white rounded-3xl w-[275px] lg:w-[300px]">
            <img
              src="/tictactoe.jpg"
              alt=""
              className="w-full h-[175px] object-contain rounded-2xl"
            />
            <h2 className="text-2xl font-merriweather text-center">
              Tic Tac Toe
            </h2>
            <p className="font-merriweather text-center">
              Jul - 2024
            </p>
            <div className="flex justify-evenly">
              <FaHtml5 size={25} />
              <p className="font-playfair">HTML</p>
              <FaCss3Alt size={25} />
              <p className="font-playfair">CSS</p>
              <FaJs size={25} />
              <p className="font-playfair">JavaScript</p>
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://github.com/JoaquinNeulist/TicTacToeGame`}
              className="bg-blue-500 text-white text-center w-11/12 self-center rounded-lg my-2"
            >
              Repository
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Proyect;
