import React, { useState } from 'react';
import presets from '../utils/introduccionPresests';
import { FaRegArrowAltCircleRight, FaRegCheckCircle } from 'react-icons/fa';

function ProgramacionPage() {
  const [viewBack, setViewBack] = useState(false);

  return (
   
    <div className=" flex flex-col gap-5 p-4 md:p-6 bg-gray-100">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-600 mb-4 text-center">
        ¿Qué es la programación?
      </h1>

      
      <div className="w-full flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col gap-3 bg-white rounded-lg shadow-md">
          <p className="text-base md:text-lg text-center">
            La programación es el acto de programar, es decir, organizar una secuencia de pasos ordenados a seguir para hacer cierta cosa. Este término puede utilizarse en muchos contextos, es común hablar de programación a la hora de organizar una salida, las vacaciones o de la lista de programas con sus días y horarios de emisión de los canales de televisión o la lista de películas de un cine.
          </p>
          <p className="text-base md:text-lg text-center">
            Además, en el campo de la informática, la programación es la pieza clave en la relación entre los ordenadores y los usuarios.
          </p>
        </div>

        <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col gap-3 bg-white rounded-lg shadow-md">
          <div className="mx-auto">
            <p className="text-2xl md:text-3xl font-extrabold text-gray-600 text-center">
              Programación en informática
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-base md:text-lg text-center">
              En el ámbito de la informática, la programación refiere a la acción de crear programas o aplicaciones a través del desarrollo de un código fuente, que se basa en el conjunto de instrucciones que sigue el ordenador para ejecutar un programa.
            </p>
            <p className="text-base md:text-lg text-center">
              La programación es lo que permite que un ordenador funcione y realice las tareas que el usuario solicita.
            </p>
          </div>
        </div>
      </div>

      
      <div className="w-full flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col gap-3 bg-white rounded-lg shadow-md">
          <div className="mx-auto">
            <p className="text-2xl md:text-3xl font-extrabold text-gray-600 text-center">
              Lenguaje de programación
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-base md:text-lg text-center">
              El lenguaje de programación es un idioma artificial prediseñado formado por signos, palabras y símbolos que permite la comunicación entre el programador y el ordenador.
            </p>
            <p className="text-base md:text-lg text-center">
              Las instrucciones que sigue el ordenador para la ejecución de aplicaciones y programas están escritas en lenguaje de programación y luego son traducidas a un lenguaje de máquina que puede ser interpretado y ejecutado por el hardware del equipo (parte física).
            </p>
            <p className="text-base md:text-lg text-center">
              El código fuente está formado por líneas de texto que expresan en lenguaje de programación las instrucciones que debe llevar a cabo el ordenador. Este código es creado, diseñado, codificado, mantenido y depurado a través de la programación.
            </p>
          </div>
        </div>
        <div className="my-auto w-full md:w-1/2 gap-4 flex flex-col p-4 md:p-6 bg-white rounded-lg shadow-md">
          <div>
            <img src={presets.images.PrograPage.PROGRA1} className="rounded-md w-full h-auto object-center" alt="Diagrama de flujo de programación" />
          </div>
        </div>
      </div>

      
      <div className="w-full flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2 gap-4 flex flex-col p-4 md:p-6 bg-white rounded-lg shadow-md">
          <div className="flex flex-col mx-auto gap-2">
            <p className="text-2xl md:text-3xl font-extrabold text-gray-600 text-center">
              Historia de la programación
            </p>
            <div className="flex flex-col gap-3">
              <p className="text-base md:text-lg text-center">
                Los comienzos del desarrollo de la programación informática coinciden con la aparición de las primeras computadoras en la segunda mitad del siglo XX. La historia de la programación se puede describir a través del desarrollo de los diferentes lenguajes de programación.
              </p>
              <p className="text-base md:text-lg text-center">
                El principal objetivo de la programación es definir instrucciones para que un ordenador pueda ejecutar sistemas, programas y aplicaciones que sean eficaces, accesibles y amigables para el usuario.
              </p>
              <p className="text-base md:text-lg text-center">
                Los programas informáticos suelen seguir algoritmos, que son el conjunto de instrucciones organizadas y relacionadas entre sí que permiten trabajar al software de los equipos de computación.
              </p>
            </div>
          </div>
        </div>
        
        
        <div
          className={`
            w-full 
            md:w-1/2 flex  h-[600px] md:h-[400px]
            group
            cursor-pointer
            ${viewBack ? 'is-flipped' : ''} 
          `}
          onClick={() => setViewBack(!viewBack)}
        >
          <div className='flip-card-inner'>
            <div className="flip-card-front bg-white rounded-lg shadow-md p-4 md:p-5 flex flex-col gap-4">
              <div>
                <p className='text-2xl md:text-3xl font-extrabold text-center text-gray-600'>Programación</p>
              </div>
              <div className='flex-col flex gap-2 h-auto'>
                <div className='flex flex-col gap-3'>
                  <div className='flex gap-2 items-start'>
                    <FaRegCheckCircle className='w-4 h-4 flex-shrink-0 mt-1.5'/>
                    <p className='text-base md:text-lg'><strong className='text-lg md:text-xl'>Lenguaje máquina. </strong>En este primer período se utilizaban lenguajes máquina muy básicos y limitados basados en el sistema binario (uso de los números 0 y 1 en distintas combinaciones) que es el lenguaje que los ordenadores reconocen, por lo que aún hoy todo lenguaje es convertido a este</p>
                  </div>
                  <div className='flex gap-2 items-start'>
                    <FaRegCheckCircle className='w-4 h-4 flex-shrink-0 mt-1.5'/>
                    <p className='text-base md:text-lg'><strong className='text-lg md:text-xl'>Lenguaje ensamblador. </strong>Más tarde comenzaron a surgir lenguajes que hacían uso de códigos de palabras. Se utilizaban palabras simples, mnemotécnicas y abreviaturas que tenían su correlativo y eran traducidas al código máquina</p>
                  </div>
                  <div className='flex gap-2 items-start'>
                    <FaRegCheckCircle className='w-4 h-4 flex-shrink-0 mt-1.5'/>
                    <p className='text-base md:text-lg'><strong className='text-lg md:text-xl'>Lenguaje de alto nivel. </strong>A finales de la década del 50 surgió el Fortran, un lenguaje de programación desarrollado por IBM que dio inicio a la aparición de lenguajes basados en conjuntos de algoritmos mucho más complejos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-card-back bg-white rounded-lg shadow-md p-4 md:p-5 flex flex-col gap-4">
              <div>
                <p className='text-2xl md:text-3xl font-bold text-center text-gray-600'>Tipos de programación</p>
              </div>
              <div className='flex-col flex gap-2'>
                <div className='flex flex-col gap-3'>
                  <div className='flex gap-2 items-start'>
                    <FaRegArrowAltCircleRight className='w-4 h-4 flex-shrink-0 mt-1.5'/>
                    <p className='text-base md:text-lg'><strong className='text-lg md:text-xl'>Programación estructurada. </strong>Busca mejorar y reducir el tiempo del proceso al utilizar subrutinas (subalgoritmos dentro del algoritmo principal que resuelve una tarea).</p>
                  </div>
                  <div className='flex gap-2 items-start'>
                    <FaRegArrowAltCircleRight className='w-4 h-4 flex-shrink-0 mt-1.5'/>
                    <p className='text-base md:text-lg'><strong className='text-lg md:text-xl'>Programación modular. </strong>Divide los programas en módulos para trabajar con ellos y resolver los problemas de manera más simple.</p>
                  </div>
                  <div className='flex gap-2 items-start'>
                    <FaRegArrowAltCircleRight className='w-4 h-4 flex-shrink-0 mt-1.5'/>
                    <p className='text-base md:text-lg'><strong className='text-lg md:text-xl'>Programación orientada a objetos. </strong>Utiliza objetos (entes con características, estado y comportamiento) como elementos fundamentales para la búsqueda de soluciones.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className='flex flex-col md:flex-row w-full gap-5'>
        <div className='w-full md:w-1/2 gap-4 flex flex-col p-4 md:p-6 bg-white rounded-lg shadow-md'>
          <div>
            <p className='text-2xl md:text-3xl font-bold text-center text-gray-600'>Elementos de la programación</p>
          </div>
          <div className='flex-col flex gap-2'>
            <p className='text-base md:text-lg text-center'>Existen ciertos elementos que son clave a la hora de conocer o ejecutar un lenguaje de programación, entre los más representativos están:</p>
            <div className='flex flex-col gap-3'>
              <div className='flex gap-2 items-start'>
                <FaRegCheckCircle className='w-4 h-4 flex-shrink-0 mt-1.5'/>
                <p className='text-base md:text-lg'><strong className='text-lg md:text-xl'>Palabras reservadas. </strong>Palabras que dentro del lenguaje significan la ejecución de una instrucción determinada, por lo que no pueden ser utilizadas con otro fin.</p>
              </div>
              <div className='flex gap-2 items-start'>
                <FaRegCheckCircle className='w-4 h-4 flex-shrink-0 mt-1.5'/>
                <p className='text-base md:text-lg'><strong className='text-lg md:text-xl'>Operadores. </strong>Símbolos que indican la aplicación de operaciones lógicas o matemáticas.</p>
              </div>
              <div className='flex gap-2 items-start'>
                <FaRegCheckCircle className='w-4 h-4 flex-shrink-0 mt-1.5'/>
                <p className='text-base md:text-lg'><strong className='text-lg md:text-xl'>Variables. </strong>Datos que pueden variar durante la ejecución del programa.</p>
              </div>
              <div className='flex gap-2 items-start'>
                <FaRegCheckCircle className='w-4 h-4 flex-shrink-0 mt-1.5'/>
                <p className='text-base md:text-lg'><strong className='text-lg md:text-xl'>Constantes. </strong>Datos que no varían durante la ejecución del programa.</p>
              </div>
              <div className='flex gap-2 items-start'>
                <FaRegCheckCircle className='w-4 h-4 flex-shrink-0 mt-1.5'/>
                <p className='text-base md:text-lg'><strong className='text-lg md:text-xl'>Identificadores. </strong>Nombre que se le da a las diferentes variables para identificarlas.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='my-auto w-full md:w-1/2 gap-4 flex flex-col p-4 md:p-6 bg-white rounded-lg shadow-md'>
            <img src={presets.images.PrograPage.PROGRA2} className='rounded-md w-full h-auto object-center' alt="Ilustración de conceptos de programación" />
        </div> 
      </div>

      
      <div className='flex flex-col md:flex-row w-full justify-around gap-5'> 
        <div className='w-full md:w-1/2 gap-4 flex flex-col p-4 md:p-6 bg-white rounded-lg shadow-md'>
          <div className="aspect-video w-full"> 
            <iframe
              src="https://www.youtube.com/embed/mIVbUb7shE8?si=gZeTDbR0GtYr6pMR"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full" 
            ></iframe>
          </div>
        </div>
        <div className='w-full md:w-1/2 gap-4 flex flex-col p-4 md:p-6 bg-white rounded-lg shadow-md'>
          <div className="aspect-video w-full"> 
            <iframe
              src="https://www.youtube.com/embed/pWw4UtQhdek?si=kS1pKb6f-eCZZ9vi"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full" 
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramacionPage;
