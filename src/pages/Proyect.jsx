import React from "react";
import { FaCss3, FaHtml5, FaJava, FaJs } from "react-icons/fa";
import { motion } from "framer-motion";

const Proyect = () => {
  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-400 via-violet-300 to-violet-400 flex flex-col items-center justify-center">
      <div className="flex flex-col min-h-full rounded-3xl">
        <h1 className="text-3xl lg:text-[48px] my-4 text-white">Proyectos: </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 gap-4 my-4">
          {[
            {
              img: "/battleship.jpg",
              title: "Aqua Battles",
              date: "Jun - 2024 / Jul - 2024",
              techs: [<FaHtml5 size={25} />, <FaCss3 size={25} />, <FaJs size={25} />, <FaJava size={25} />],
              repo: "https://github.com/JoaquinNeulist/AquaBattles.git",
            },
            {
              img: "/homebanking.png",
              title: "Homebanking",
              date: "May - 2024 / Jun - 2024",
              techs: [<FaHtml5 size={25} />, <FaCss3 size={25} />, <FaJs size={25} />, <FaJava size={25} />],
              repo: "https://github.com/JoaquinNeulist/homebanking-portfolio.git",
            },
            {
              img: "/Logo-ico.ico",
              title: "Stride Gear",
              date: "Abr - 2024 / May - 2024",
              techs: [<FaHtml5 size={25} />, <FaCss3 size={25} />, <FaJs size={25} />],
              repo: "https://github.com/FlorAyala/Stride-Gear",
            },
            {
              img: "/tictactoe.jpg",
              title: "Tic Tac Toe",
              date: "Jul - 2024",
              techs: [<FaHtml5 size={25} />, <FaCss3 size={25} />, <FaJs size={25} />],
              repo: "https://github.com/JoaquinNeulist/TicTacToeGame",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              initial="hidden"
              animate="visible"
              className="border border-gray-500 flex flex-col bg-white rounded-3xl w-[275px] lg:w-[300px]"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-[175px] object-cover rounded-2xl"
              />
              <h2 className="text-2xl font-merriweather text-center">{project.title}</h2>
              <p className="font-merriweather text-center">{project.date}</p>
              <div className="flex justify-evenly">
                {project.techs.map((tech, idx) => (
                  <React.Fragment key={idx}>
                    {tech}
                    <p className="font-playfair">{tech.type.name.replace('Fa', '')}</p>
                  </React.Fragment>
                ))}
              </div>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white w-11/12 text-center self-center rounded-lg my-2"
              >
                Repository
              </a>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Proyect;
