import React from 'react';
import { useState } from 'react';
import presets from "../utils/introduccionPresests"
import { Button } from "@material-tailwind/react";

function ArquitecturaPage() {
  const [viewMore1, setViewMore1] = useState(false);
  const [viewMore2, setViewMore2] = useState(false);

  return (
    <div className="p-6 flex flex-col bg-gray-100 rounded-lg w-full gap-10">
      <div className='p-6'>
        <p className='text-center font-extrabold text-gray-800 text-4xl'>Arquitectura de computadoras: ¿Qué son? ¿Cómo funcionan?</p>
      </div>
      <div className='block shadow-2xl p-6 bg-white border text-white border-gray-200 rounded-lg  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
        <p className='text-xl text-center'>La arquitectura tiene diferentes significados en distintos campos. Cuando se habla de arquitectura de ordenadores, suele referirse a la lógica de un dispositivo informático. Suele referirse a los principios fundamentales que guían el diseño de los procesadores o chips informáticos, sus unidades y métodos de funcionamiento. En esta entrada del blog, responderemos a todas tus preguntas sobre la arquitectura de los ordenadores, incluyendo qué es, ejemplos, ventajas y desventajas y mucho más.</p>
      </div>
      {/* */}
      <div className='w-full flex flex-col md:flex-row gap-3'>
         <div className='w-full md:w-1/2 flex flex-col gap-3'>
         <a href="#" class="block shadow-2xl p-6 bg-white border border-gray-200 rounded-lg  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-3xl text-center font-extrabold tracking-tight text-gray-900 dark:text-white">¿Qué es la arquitectura de computadoras?</h5>
          <p class="font-normal text-lg  text-gray-700 dark:text-gray-400">La arquitectura de computadoras es la organización lógica del hardware de los ordenadores. Se trata de un conjunto de principios que describen cómo se pueden describir las características del hardware del ordenador y cómo interactúan entre sí. La arquitectura de los ordenadores también se denomina arquitectura de la CPU o arquitectura del ordenador. La arquitectura de un ordenador determina su rendimiento, sus capacidades y sus límites.</p>
          
          </a>
          <div className='flex rounded-lg shadow-md p-4'>
          <img src={presets.images.ArquitecturaPage.Arqui1} className='rounded-md ' alt="" />
        </div>
        <div className='bg-white rounded-xl shadow-xl p-6 '>
          <div className="relative w-full aspect-video"> 
            <iframe 
            src="https://www.youtube.com/embed/IISUWPMjFfY?si=YlvnZzOsDnMdZix9" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
            className="absolute top-0 left-0 w-full h-full"
            >
            </iframe>
          </div>
          </div>
          <div className='bg-white rounded-xl shadow-xl p-6 '>
            <div className="relative w-full aspect-video"> 
              <iframe 
              src="https://www.youtube.com/embed/IOV7fpU8B4c?si=kUvnQFagdI6kfbos" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen
               className="absolute top-0 left-0 w-full h-full"
              >

              </iframe>
            </div>
          </div> 
        </div>
        {viewMore2 && (
            <div className=" fixed inset-0 flex items-center justify-center z-50 pointer-events-none ">
              <div className="flex  overflow-y-auto flex-col bg-white rounded-lg shadow-xl p-6  mx-auto pointer-events-auto">
                <div className='w-full flex flex-col gap-3'>
                    <div className='w-full flex gap-3'>
                        <div className='max-w-lg bg-white rounded-lg shadow-xl p-6'>
                        <p className='text-2xl text-center '>Arquitectura dataflow</p>
                        <p className='mt-2 text-center text-lg'>En la arquitectura de flujo de datos, los datos pasan por las diferentes etapas del cálculo. En esta arquitectura, el resultado de un cálculo se utiliza como entrada para otro cálculo. La arquitectura de flujo de datos es una arquitectura paralela en la que los datos pasan por diferentes etapas de cálculo. En esta arquitectura, el resultado de un cálculo se utiliza como entrada para otro cálculo. El cálculo se realiza en paralelo utilizando una red de procesadores, una red de interconexión y algún tipo de almacenamiento.</p>
                      </div>
                      <div className='max-w-lg bg-white rounded-lg shadow-xl p-6'>
                        <p className='text-2xl text-center'>Arquitectura von Neumann</p>
                        <p className='mt-2 text-center text-lg'>ELa arquitectura von Neumann es una arquitectura secuencial en la que el cálculo se ejecuta de forma secuencial. El cálculo se realiza en un orden secuencial. Esta arquitectura tiene una unidad central de procesamiento (CPU), una memoria y dispositivos de entrada-salida. La CPU tiene un registro de instrucciones y un registro de datos. La memoria es un dispositivo de almacenamiento que contiene las instrucciones y los datos durante el cálculo. También se utiliza para almacenar datos e instrucciones. Los dispositivos de entrada y salida se utilizan para comunicarse con el mundo exterior. Incluyen teclados, pantallas, impresoras, escáneres y otros dispositivos.</p>
                      </div>
                       <div className='max-w-lg bg-white rounded-lg shadow-xl p-6'>
                        <p className='text-2xl text-center'>Arquitectura Harvard</p>
                        <p className='mt-2 text-center text-lg'>Esta arquitectura es una versión modificada de la arquitectura von Neumann. Tiene dos memorias separadas: una es para las instrucciones del programa y la segunda es para los datos</p>
                      </div>
                    </div>
                    
                </div>
    

                <button
                  onClick={() => setViewMore2(false)}
                  className="cursor-pointer w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Cerrar
                </button>
              </div>
            </div>)}
        
       
        <div className='w-full md:w-1/2  flex flex-col gap-3'>
          <div className='flex bg-white rounded-lg shadow-md'>
            <img src={presets.images.ArquitecturaPage.Arqui2} className='rounded-md ' alt="" />
          </div>
          <div className='flex rounded-lg shadow-md p-4'>
           <a href="#" class="block shadow-2xl p-6 bg-white border border-gray-200 rounded-lg  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">¿Para qué sirve la arquitectura de los ordenadores?</h5>
              <p class="font-normal text-lg text-gray-700 dark:text-gray-400">En base a la arquitectura de computadoras se pueden diseñar y construir éstas. Por eso, es importante diferenciar los distintos componentes que existen en ella y también los tipos de arquitecturas existentes, ya que de ello dependerá el tipo de ordenador resultante, sus capacidades y funcionalidad, etc.</p>
              <a href="#" onClick={()=> setViewMore1(!viewMore1)} class="mt-3 inline-flex items-center px-3 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                 Componentes principales de la arquitectura
                 <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                 </svg>
              </a>
            </a>
          </div>
          {/*  */}
          <div className='bg-white rounded-xl shadow-xl p-6'>
            <div className="relative w-full aspect-video"> 
              <iframe 
              src="https://www.youtube.com/embed/wBTYlCpBEJQ?si=PJriDS1GplSdKnQa" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              eferrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen
              className="absolute top-0 left-0 w-full h-full"
              >            
              </iframe>
            </div>
          </div>
        </div>
        {viewMore1 && (
            <div className=" fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
              <div className=" bg-white rounded-lg shadow-xl p-6 max-w-2xl mx-auto pointer-events-auto">
                <p className="text-2xl text-center text-gray-800 font-semibold mb-4">
                  Componentes principales de la arquitectura
                </p>
                <p className="text-gray-600 mb-3 text-center text-xl">
                  Hay varios componentes principales de la arquitectura del ordenador:
                </p>
                <ul className='flex flex-col gap-3'>
                  <li className='flex gap-1'>
                     <p className='text-center text-lg'> <strong>CPU: </strong>es la unidad central de procesamiento o microprocesador. Esta parte se encarga de ir ejecutando las diferentes instrucciones de la ISA y los datos que el software emplea para su ejecución. Es decir, es la encargada de ejecutar los programas informáticos, incluido el sistema operativo.</p> 
                  </li>
                  <li className='flex gap-1'>
                    <p className='text-center text-lg'><strong>Bus: </strong>se refiere a los componentes que entrelazan partes de la computadora y pueden ser de varios tipos y características, como el bus de datos, el bus de direcciones, y el bus de control.</p>
                  </li>
                  <li className='flex gap-1'>
                    <p className='text-center text-lg'><strong>Memoria Principal: </strong>es la memoria RAM, generalmente, donde se guardan los programas que se van a ejecutar, es decir, los datos e instrucciones necesarios para un proceso y que serán reclamados por la CPU.</p>
                  </li>
                  <li className='flex gap-1'>
                    <p className='text-center text-lg'> <strong>E/S: </strong>por supuesto, las computadoras también necesitan un sistema de entrada y salida de la información, es decir, puertos por donde enviar y recibir datos. Esto es fundamental para el usuario, ya que de lo contrario no podría interactuar con la computadora.</p>
                  </li>
                </ul>

                <button
                  onClick={() => setViewMore1(false)}
                  className="cursor-pointer w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Cerrar
                </button>
              </div>
            </div>)}
      </div>
        {/* */}
         
     
      
     
      
    </div>
  );
}

export default ArquitecturaPage;