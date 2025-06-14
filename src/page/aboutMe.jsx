import React from 'react';
import { FaUserAstronaut, FaCodeBranch, FaGlobe, FaLaptopCode, FaUser, FaUniversity, FaBookOpen, FaChartLine, FaAddressCard } from 'react-icons/fa';

function AboutMe() {
  const datos = [
    {
      id: 1,
      icono: FaUser,
      titulo: 'Estudiante',
      descripcion:'Darkko Stephano Zet Samayoa',
      universidad:'Universidad Mariano Galvez',
      carrera:'Ingenieria en Sistemas',
      carnet:'5190-5735',
      iconoUniversidad: FaUniversity,
      iconoCarrer: FaBookOpen,
      iconoCarnet: FaAddressCard
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-12 max-w-4xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold text-cyan-700 mb-4 animate-fadeIn group-hover:text-cyan-800 transition-colors duration-300">
          Sobre Mí
        </h1>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {datos.map(item => (
          <div
            key={item.id}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out
                       flex flex-col items-center text-center group"
          >
            <item.icono className="text-5xl text-cyan-700 mb-4 group-hover:text-cyan-800 transition-colors duration-300" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-cyan-800 transition-colors duration-300">
              {item.titulo}
            </h2>
            <p className="text-gray-600 text-xl">{item.descripcion}</p>
            {item.universidad && (
                <div className='flex gap-3'>
                      <item.iconoUniversidad className="text-xl text-gray-800" />
                    <p className="text-gray-600 text-xl">{item.universidad}</p>     

                </div>
            )}
            {item.carrera && (
                 <div className='flex gap-3'>
                      <item.iconoCarrer className="text-xl text-gray-800" />
                    <p className="text-gray-600 text-xl">{item.carrera}</p>     

                </div>
            )}
            {item.carnet && (
                <div className='flex gap-3'>
                      <item.iconoCarnet className="text-xl text-gray-800" />
                    <p className="text-gray-600 text-xl">{item.carnet}</p>     

                </div>  
            )}
          </div>
        ))}
         <div className='w-full  gap-4 flex flex-col p-4 md:p-6 bg-white rounded-lg shadow-md'>
          <div className="aspect-video relative w-full"> 
         <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/BN53ywsuI_4"
                title="Video explicativo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg"
/>
          </div>
        </div>
        </div>
    </div>
  );
}

export default AboutMe;
