import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className="bg-blue-600 p-4 shadow-md font-sans">
      <div className="container w-full mx-auto flex justify-between items-center">
       
        <Link to="/" className="text-white text-2xl font-bold">
          Introducción de Sistemas
        </Link>

       
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle navigation"
        >
       
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7" 
              />
            )}
          </svg>
        </button>

      
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-blue-200 transition duration-300">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/arquitecDComp" className="text-white hover:text-blue-200 transition duration-300">
              Arquitectura de Comp.
            </Link>  
          </li>
          <li>
            <Link to="/dataBase" className="text-white hover:text-blue-200 transition duration-300">
              Bases de Datos
            </Link>
          </li>
          <li>
            <Link to="/sistemasOp" className="text-white hover:text-blue-200 transition duration-300">
              Sistemas Operativos
            </Link>
          </li>
          <li>
            <Link to="/programacion" className="text-white hover:text-blue-200 transition duration-300">
              Programación
            </Link>
          </li>
          <li>
            <Link to="/redes" className="text-white hover:text-blue-200 transition duration-300">
              Redes
            </Link>
          </li>
          <li>
            <Link to="/aboutMe" className="text-white hover:text-blue-200 transition duration-300">
              Acerca de mí
            </Link>
          </li>
        </ul>
      </div>

     
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-3 px-2">
            <li>
              <Link
                to="/"
                className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300"
                onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/arquitecDComp"
                className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Arquitectura de Comp.
              </Link>
            </li>
            <li>
              <Link
                to="/dataBase"
                className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Bases de Datos
              </Link>
            </li>
            <li>
              <Link
                to="/sistemasOp"
                className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Sistemas Operativos
              </Link>
            </li>
            <li>
              <Link
                to="/programacion"
                className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Programación
              </Link>
            </li>
            <li>
              <Link
                to="/redes"
                className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Redes
              </Link>
            </li>
             <li>
              <Link
                to="/aboutMe"
                className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Acerca de mí
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
