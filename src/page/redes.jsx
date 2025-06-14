import React from 'react';
import presets from '../utils/introduccionPresests';
import { FaRegCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

function RedesPage() {
  const [viewBack, setViewBack] = useState(false)
  return (
    <div className="flex flex-col gap-5 p-6 bg-gray-100 rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-600 mb-4 text-center">¿Qué es una red?</h1>
      {/*  */}
      <div className='w-full flex flex-col md:flex-row  gap-5'>
        <div className='w-full md:w-1/2 gap-2 flex flex-col p-6 bg-white rounded-lg shadow-md'>
          <p className='text-lg text-center'>En informática, una red (también llamada red informática o red de computadoras) es la interconexión de un número determinado de computadoras mediante dispositivos alámbricos o inalámbricos. A través de impulsos eléctricos, ondas electromagnéticas u otros medios físicos, estos envían y reciben información en forma de paquetes de datos.</p>
          <p className='text-lg text-center'>Las redes permiten a los sistemas informáticos actuar de manera conjunta y organizada, compartir recursos y emitir y recibir mensajes, gracias a una serie de códigos y estándares que garantizan su correcta comunicación. A estos estándares de comunicación se los conoce como protocolos informáticos; el más común de ellos actualmente es el TCP/IP.</p>
        </div>
         <div
          className={`
            w-full
            md:w-1/2 flex h-[480px]  
            group
            cursor-pointer
            ${viewBack ? 'is-flipped' : ''} 
          `}
          onClick={() => setViewBack(!viewBack)}
        >
          <div className='flip-card-inner'>
           <div className='flip-card-front w-full'>
            <div className='gap-2 flex flex-col p-6 bg-white rounded-lg shadow-md'>
              <img src={presets.images.RedesPage.REDES1} className='rounded-md w-full h-auto object-center' alt="" />
            </div>
           
           </div>
            <div className='flip-card-back'>
               <div className='gap-2 flex flex-col p-6 bg-white rounded-lg shadow-md'>
                <div className=''><p className='text-2xl text-gray-600 font-bold'>¿Por qué se llaman “redes”?</p></div>
                <div>
                  <p className='text-xl'>A este tipo de conexiones informáticas de enjambre se las conoce como “redes” por un traslado del inglés net, con el que se las conoció inicialmente. En sus orígenes, la información fluía entre los distintos terminales conectados a través de cables de cobre, que conformaban figuradamente una malla o red tejida.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      {/*  */}
      <div className='w-full flex flex-col md:flex-row gap-5'>
        <div className='w-full md:w-1/2 gap-4 flex flex-col p-6 bg-white rounded-lg shadow-md'>
          <p className='text-4xl text-gray-600 text-center font-extrabold'>Elementos de una red</p>
          <div className='flex flex-col gap-3'>
            <div className='flex gap-1'>
              <FaRegCheckCircle className='w-4 h-4 shrink-0 mt-1'/>
              <p className='text-lg'><strong className='text-xl'>Clientes o terminales. </strong>Son el conjunto de computadoras interconectadas que permiten a los usuarios acceder a la red informática. A menudo se las conoce también como “máquinas de trabajo”, ya que dependen de la presencia de un operador humano.</p>
            </div>
             <div className='flex gap-1'>
              <FaRegCheckCircle className='w-4 h-4 shrink-0 mt-1'/>
              <p className='text-lg'><strong className='text-xl'>Servidores. </strong>Son computadoras conectadas a la red en las que no opera ningún usuario, sino que se dedican a procesar el flujo de datos de la red, atendiendo a las peticiones de los terminales.</p>
            </div>
             <div className='flex gap-1'>
              <FaRegCheckCircle className='w-4 h-4 shrink-0 mt-1'/>
              <p className='text-lg'><strong className='text-xl'>Elementos de hardware. </strong>Son los dispositivos y periféricos que permiten el establecimiento de la comunicación en red, como son las tarjetas de red, módems y enrutadores, o antenas repetidoras, en el caso de las redes inalámbricas.</p>
            </div>
             <div className='flex gap-1'>
              <FaRegCheckCircle className='w-4 h-4 shrink-0 mt-1'/>
              <p className='text-lg'><strong className='text-xl'>Elementos de software.  </strong>Son los programas requeridos para administrar el hardware de comunicaciones, como es el Sistema Operativo de Redes (también llamado NOS o Network Operating System), y los protocolos de comunicación, como TCP/IP.</p>
            </div>
             <div className='flex gap-1'>
              <FaRegCheckCircle className='w-4 h-4 shrink-0 mt-1'/>
              <p className='text-lg'><strong className='text-xl'>Medios físicos de transmisión.  </strong>Son los elementos encargados de la transmisión física de la información, ya sea el cableado o las ondas electromagnéticas.</p>
            </div>
          </div>
        </div>
        <div className='my-auto w-full md:w-1/2 gap-4 flex flex-col p-6 bg-white rounded-lg shadow-md'>
            <div>
              <img src={presets.images.RedesPage.REDES2} className='rounded-md w-full h-auto object-center' alt="" />
            </div>
            <div>
              <p className='text-lg text-center'>Las redes informáticas están constituidas principalmente por computadoras interconectadas, lo cual requiere de la participación de ciertos tipos de elementos</p>
            </div>
        </div>
      </div>
      {/*  */}
      <div className='w-full flex flex-col gap-5'>
        <div className='my-auto'><p className='text-gray-600 p-4 font-extrabold text-4xl text-center bg-white rounded-lg shadow-md'>Tipos de red</p></div>
        <div className='w-full flex flex-col md:flex-row gap-3 my-auto'>
           <div className='w-full md:w-1/2 gap-4 flex flex-col p-6 bg-white rounded-lg shadow-md'>
          <p className='text-3xl text-gray-600 text-center font-bold'>Redes según sus dimensiones</p>
          <div className='flex flex-col gap-3'>
            <div className='flex gap-1'>
              <FaRegCheckCircle className='w-4 h-4 shrink-0 mt-1'/>
              <p className='text-lg'><strong className='text-xl'>Redes LAN. </strong>Su nombre proviene del inglés Local Area Network (“Red de Área Local”), ya que se trata de las redes de menor envergadura y alcance, como las que se pueden instalar en un hogar o una oficina.</p>
            </div>
             <div className='flex gap-1'>
              <FaRegCheckCircle className='w-4 h-4 shrink-0 mt-1'/>
              <p className='text-lg'><strong className='text-xl'>Redes MAN. </strong>Su nombre proviene del inglés Metropolitan Area Network (“Red de Área Metropolitana”), pues se trata de redes de tamaño mediano, óptimas para un campus universitario o el edificio de una biblioteca o una empresa de varios pisos.</p>
            </div>
             <div className='flex gap-1'>
              <FaRegCheckCircle className='w-4 h-4 shrink-0 mt-1'/>
              <p className='text-lg'><strong className='text-xl'>Redes WAN. </strong>Su nombre proviene del inglés Wide Area Network (“Red de Área Amplia”), pues se trata de redes de gran tamaño y alcance, que pueden abarcar un país o incluso el planeta entero, como ocurre con internet.</p>
            </div>
          </div>
        </div>
        {/*  */}
          <div className='w-full md:w-1/2 gap-4 flex flex-col p-6 bg-white rounded-lg shadow-md'>
          <p className='text-3xl text-gray-600 text-center font-bold'>Redes según su medio de conexión</p>
          <div className='flex flex-col gap-3'>
            <div className='flex gap-1'>
              <FaRegCheckCircle className='w-4 h-4 shrink-0 mt-1'/>
              <p className='text-lg'><strong className='text-xl'>Redes de medios guiados. </strong>Son aquellas que enlazan sus terminales mediante sistemas físicos de cableado, ya sea par trenzado, coaxiales o fibra óptica. Estas redes tienen la ventaja de ser más veloces y no tener tanto ruido, pero a la vez son menos cómodas y prácticas.</p>
            </div>
             <div className='flex gap-1'>
              <FaRegCheckCircle className='w-4 h-4 shrink-0 mt-1'/>
              <p className='text-lg'><strong className='text-xl'>Redes de medios no guiados. </strong>Son aquellas que establecen la conexión mediante sistemas dispersos y de alcance de área, como las ondas de radio, la señal infrarroja o las microondas. Es el caso de los sistemas satelitales y el Wifi, redes un poco más lentas pero mucho más cómodas y prácticas.</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      {/*  */}
      <div className='w-full flex gap-4 flex-col md:flex-row justify-around'>
         <div className='w-full md:w-1/2 gap-4 flex flex-col p-4 md:p-6 bg-white rounded-lg shadow-md'>
            <div className='w-full aspect-video relative'>

              <iframe 
              src="https://www.youtube.com/embed/uunnO9yZCYk?si=RqJ8Eh7MpEBK6pad" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen
              className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
         </div>
         <div className='w-full md:w-1/2 gap-4 flex flex-col p-4 md:p-6 bg-white rounded-lg shadow-md'>
           <div className='relative w-full aspect-video'>
              <iframe 
            src="https://www.youtube.com/embed/aPHHVwHpg9M?si=fyvR0gKyGre-vYwv" 
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
    </div>
  );
}

export default RedesPage;