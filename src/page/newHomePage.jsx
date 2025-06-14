import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaLaptopCode, FaCogs, FaDatabase, FaCode, FaNetworkWired, FaUserAstronaut } from 'react-icons/fa';

function HomePage() {
  const temas = [
    {
      id: 1,
      titulo: "Arquitectura de Computadoras",
      icono: FaLaptopCode,
      descripcion: "Información sobre como esta diseñada la computadora, como trabajan y sus partes esenciales",
      ruta: "/arquitecDComp"
    },
    {
      id: 2,
      titulo: "Sistemas Operativos",
      icono: FaCogs,
      descripcion: "Informacion sobre como esta compuesto un Sistema Operativo y sus funciones.",
      ruta: "/sistemasOp"
    },
    {
      id: 3,
      titulo: "Bases de Datos",
      icono: FaDatabase,
      descripcion: "Información sobre donde se almacenan los datos y como esta organizada una base de datos. ",
      ruta: "/dataBase"
    },
    {
      id: 4,
      titulo: "Programación",
      icono: FaCode,
      descripcion: "Información sobre la historia de la programacion y los diferentes lenguajes.",
      ruta: "/programacion"
    },
    {
      id: 5,
      titulo: "Redes",
      icono: FaNetworkWired,
      descripcion: "Información sobre Redes y como se clasifican.",
      ruta: "/redes"
    },
    {
      id: 6,
      titulo: "Acerca de Mí",
      icono: FaUserAstronaut,
      descripcion: "Conoce más acerca de mí.",
      ruta: "/aboutMe"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-12 max-w-4xl">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 animate-fadeIn">
          ¡Bienvenido a Introducción de Sistemas!
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6 animate-slideIn">
          Explora los fundamentos de la computación con guías claras y completas sobre los pilares de la tecnología.
        </p>
       
      </div>

      {/* Sección de Temas Clave */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {temas.map(tema => (
          <Link
            key={tema.id}
            to={tema.ruta}
            className=" p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out
                       flex flex-col items-center text-center group"
          >
            <tema.icono className="text-6xl text-blue-600 mb-4 group-hover:text-blue-800 transition-colors duration-300" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
              {tema.titulo}
            </h2>
            <p className="text-gray-600 text-lg">
              {tema.descripcion}
            </p>
          </Link>
        ))}
      </div>

     
    </div>
  );
}

export default HomePage;