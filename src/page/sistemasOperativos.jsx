import React from 'react';
import { useState } from 'react';
import presets from '../utils/introduccionPresests';
import { FaArrowAltCircleRight, FaArrowCircleRight, FaBeer, FaCheckCircle, FaChevronCircleRight, FaLaptopCode, FaRegArrowAltCircleRight, FaRegCheckCircle } from 'react-icons/fa';
import TiposOS from '../components/SistemasO/sistemasOperativos';


function SistemasOPage() {
  const [viewBack, setViewBack] = useState(false)
  return (
    <div className="p-6 w-full flex flex-col gap-10 bg-gray-100 rounded-lg ">
      
       <div className='flex justify-center items-center'>
         <h1 className="my-auto text-4xl font-extrabold text-gray-600 text-center">¿Qué es el sistema operativo?</h1>

       </div>
      
      {/*  */}
      <div className='w-full flex flex-col md:flex-row gap-5 p-3'>
        {/*  */}
       <div className='flex w-full md:w-1/2 flex-col gap-5'>
        <a href="#" class="flex gap-5 flex-col p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <p class="font-semibold text-center text-lg text-gray-700 dark:text-gray-200">El sistema operativo es el software que coordina y dirige todos los servicios y aplicaciones que utiliza el usuario en una computadora, por eso es el más importante y fundamental. Se trata de programas que permiten y regulan los aspectos más básicos del sistema. Los sistemas operativos más utilizados son Windows, Linux, OS/2 y DOS.</p>
          <p class="font-semibold text-center text-lg text-gray-700 dark:text-gray-200">El sistema operativo es el protocolo básico de operatividad del computador, que coordina todas sus demás funciones de comunicaciones, de procesamiento, de interfaz con el usuario.</p>
          <p class="font-semibold text-center text-lg text-gray-700 dark:text-gray-200">Los sistemas operativos consisten en interfaces gráficas, entornos de escritorio o gestores de ventanas que brindan al usuario una representación gráfica de los procesos en marcha. También puede ser una línea de comandos, es decir, un conjunto de instrucciones ordenado según su prioridad y que funciona con base a órdenes introducidas por el usuario.</p>
        </a>
        <img src={presets.images.SistemasPage.SO3} className='rounded-md' alt="" />
          <a  class="block  p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-center font-bold tracking-tight text-3xl text-gray-900 dark:text-white">¿Para qué sirve un sistema operativo?</h5>
            <div className='flex flex-col gap-2'>
              <p class="font-semibold text-center text-lg text-gray-100 dark:text-gray-400">Los sistemas operativos permiten que otros programas puedan utilizarlos de apoyo para poder funcionar. Por eso, a partir del sistema utilizado pueden ser instalados ciertos programas y otros no.</p>
            <p class="font-semibold text-center text-lg text-gray-100 dark:text-gray-400">Son parte esencial del funcionamiento de los sistemas informáticos y la pieza de software central en la cadena de procesos, ya que establecen las condiciones mínimas para que todo funcione: la administración de los recursos, el método de comunicación con el usuario y con otros sistemas, las aplicaciones adicionales.</p>

            </div>
          </a>
          <img src={presets.images.SistemasPage.SO4} className='rounded-md' alt="" />
       </div>
        {/*  */}  
        <div className='w-full  md:w-1/2 gap-10 flex flex-col md:gap-5 p-3'>
          <img src={presets.images.SistemasPage.SO2} className='rounded-md' alt="" />
          <a  class="flex gap-5 flex-col p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div>
              <p className="text-center text-3xl font-bold text-white">Características de un sistema operativo</p>
            </div>
           <div className='flex font-semibold  text-lg text-gray-100 dark:text-gray-100 flex-col gap-3'>
            <div className='flex  gap-2 items-start'>
              <FaRegCheckCircle className='w-4 h-4 flex-shrink-0 mt-1.5'/>
              <p className='text-lg'><strong className='text-xl'>Intermediario entre usuario y hardware. </strong>El sistema operativo actúa como el puente entre la persona que lo usa y los componentes físicos del dispositivo, también llamados hardware.</p>
            </div>
            <div className='flex gap-2 items-start'>
              <FaRegCheckCircle className='w-4 h-4 flex-shrink-0 mt-1.5'/>
              <p className='text-lg'><strong className='text-xl'>Indispensable para el funcionamiento. </strong>El sistema operativo es necesario para el funcionamiento de todos los computadores, tabletas y teléfonos móviles.</p>
            </div>
            <div className='flex gap-2 items-start'>
              <FaRegCheckCircle className='w-4 h-4 flex-shrink-0 mt-1.5'/>
              <p className='text-lg'><strong className='text-xl'>Seguridad y protección. </strong>Es el encargado de la seguridad de los programas y archivos del ordenador, defendiéndolo de daños o accesos no autorizados.</p>
            </div>
             <div className='flex gap-2 items-start'>
              <FaRegCheckCircle className='w-4 h-4 flex-shrink-0 mt-1.5'/>
              <p className='text-lg'><strong className='text-xl'>Diseñado para la usabilidad. </strong>El objetivo de su diseño es ser amigable con el usuario, intuitivo y fácil de usar.</p>
            </div>
             <div className='flex gap-2 items-start'>
              <FaRegCheckCircle className='w-4 h-4 flex-shrink-0 mt-1.5'/>
              <p className='text-lg'><strong className='text-xl'>Gestión de recursos eficiente. </strong>Es lo que permite administrar los recursos del ordenador, como la memoria, dispositivos periféricos o el procesador.</p>
            </div>
          </div>
          </a>
          <div
          className={`
            relative h-[380px]  
            group
            cursor-pointer
            mt-[320px]
            md:mt-5
            ${viewBack ? 'is-flipped' : ''} /* Clase condicional para el volteo */
          `}
          onClick={() => setViewBack(!viewBack)}
        >
          <div className="flip-card-inner">
           
            <div className="flip-card-front">
              <div  class=" block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-3xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Funciones de un sistema operativo</h5>
                <div className='flex-col text-gray-50 flex gap-2 mt-0 md:mt-5 '>
                <div className='flex flex-col gap-3'>
                  <div className='flex gap-2  items-start'>
                    <FaRegCheckCircle className='w-4 h-4  flex-shrink-0 mt-1.5'/>
                    <p className='text-lg '><strong className='text-xl text-white'>Gestionar la memoria y ejecutar las aplicaciones. </strong>El sistema operativo es el encargado de controlar la memoria de acceso aleatorio y asignar los recursos necesarios para ejecutar las aplicaciones o los programas.</p>
                  </div>
                  <div className='flex gap-2 items-start'>
                    <FaRegCheckCircle className='w-4 h-4 flex-shrink-0 mt-1.5 text-white'/>
                    <p className='text-lg '><strong className='text-xl'>Administrar el CPU. </strong>El sistema operativo gestiona el CPU gracias a un algoritmo de programación, que le permite coordinar el uso del procesador en función de los procesos que estén activos.</p>
                  </div>
                  <div className='flex gap-2 items-start'>
                    <FaRegCheckCircle className='w-4 h-4 flex-shrink-0 text-white mt-1.5'/>
                    <p className='text-lg'><strong className='text-xl'>Direccionar las entradas y salidas de datos. </strong>A través de drivers, el sistema operativo maneja la comunicación con los periféricos (mouse, teclado, impresora, etc.). Todo esto lo hace por medio de los periféricos de entrada o salida.</p>
                  </div>
                </div>
              </div>
              </div>
              
              
            </div>
            <div className="flip-card-back ">
              
             <div class="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-3xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Componentes de un sistema operativo</h5>
              <div className='flex-col flex gap-2'>
                <div className='flex flex-col text-gray-50 gap-3'>
                  <div className='flex gap-2 items-start'>
                    <FaRegArrowAltCircleRight className='w-4 h-4 flex-shrink-0 mt-1.5'/>
                    <p className='text-lg'><strong className='text-xl'>Sistema de archivos. </strong>Es el registro de archivos donde adquieren una estructura arbórea.</p>
                  </div>
                  <div className='flex gap-2 items-start'>
                    <FaRegArrowAltCircleRight className='w-4 h-4 flex-shrink-0 mt-1.5'/>
                    <p className='text-lg'><strong className='text-xl'>Interpretación de comandos. </strong>Se logra con aquellos componentes que permiten la interpretación de los comandos, que tienen como función comunicar las órdenes dadas por el usuario en un lenguaje que el hardware pueda interpretar (sin que aquel que dé las órdenes conozca dicho lenguaje).</p>
                  </div>
                  <div className='flex gap-2 items-start'>
                    <FaRegArrowAltCircleRight className='w-4 h-4 flex-shrink-0 mt-1.5'/>
                    <p className='text-lg'><strong className='text-xl'>Núcleo. </strong>Permite el funcionamiento en cuestiones básicas como la comunicación, entrada y salida de datos, gestión de procesos y la memoria, entre otros.</p>
                  </div>
                </div>
              </div>  

              </div>
            </div>
          </div>
        </div>
        
        <a class="block mt-[300px] md:mt-5 h-fit p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="text-center text-3xl cursor-pointer font-bold tracking-tight text-gray-900 dark:text-white">Sistemas Operativos</h5>
        </a>
        
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col md:flex-row  justify-between gap-3'>
          <TiposOS 
          className="flex-1" 
          titulo={"Windows"} 
          src={presets.images.SistemasPage.SOICON1} 
          infoTexto={"De los más populares que existen, inicialmente se trató de un conjunto de distribuciones o entornos operativos gráficos, cuyo rol era brindar a otros sistemas operativos más antiguos como el MS-DOS una representación visual de soporte y de otras herramientas de software. Se publicó por primera vez en 1985 y desde entonces se ha actualizado a nuevas versiones."}></TiposOS>
          <TiposOS 
          className="flex-1" 
          titulo={"UNIX"} 
          src={presets.images.SistemasPage.SOICON2}
          infoTexto={"Este sistema operativo fue desarrollado en 1969 para ser portable, multitarea y multiusuario. Se trata realmente de una familia entera de SO similares, algunas de cuyas distribuciones se han ofrecido comercialmente y otros en formato libre, siempre a partir del núcleo llamado Linux."}
          ></TiposOS>
          <TiposOS 
          className="flex-1" 
          titulo={"MacOS"} 
          src={presets.images.SistemasPage.SOICON3}
          infoTexto={"Es el sistema operativo de los computadores Macintosh de Apple, también conocido como OSX o Mac OSX. Basado en Unix y desarrollado y vendido en computadores Apple desde 2002, se trata de la competencia más acérrima del popular Windows."}
          ></TiposOS>
        </div>
         <div className='flex flex-col md:flex-row justify-between gap-3'>
          <TiposOS 
          className="flex-1" 
          titulo={"MS-DOS"} 
          src={presets.images.SistemasPage.SOICON4}
          infoTexto={"Se trata del Sistema Operativo de Disco de MicroSoft (siglas en inglés de MicroSoft Disk Operating System), uno de los sistemas operativos más comunes para computadoras personales IBM durante la década de 1980 y mediados de los 90. Contaba con una serie de comandos internos y externos mostrados en una pantalla oscura de manera secuencial."}
          ></TiposOS>
          <TiposOS 
          className="flex-1" 
          titulo={"Ubuntu"} 
          src={presets.images.SistemasPage.SOICON5}
          infoTexto={"Este sistema operativo es libre y de código abierto, o sea, todo el mundo puede modificarlo sin violar derechos autorales. Toma su nombre de cierta filosofía surafricana ancestral, enfocada en la lealtad del hombre hacia su propia especie por encima de todo. Basado en GNU/Linux, Ubuntu se orienta hacia la facilidad de uso y la libertad total. La empresa británica que lo distribuye, Canonical, subsiste brindando servicio técnico."}
          ></TiposOS>
          <TiposOS 
          className="flex-1" 
          titulo={"Android"} 
          src={presets.images.SistemasPage.SOICON6}
          infoTexto={"Este sistema operativo basado en el núcleo Linux opera en teléfonos celulares y tablets y otros artefactos dotados de pantalla táctil. Fue desarrollado por Android Inc. y comprado posteriormente por Google, gracias a lo cual es tan popular que las ventas de sistemas informáticos Android superan a las de IOS (para teléfonos celulares Macintosh) y a las de Windows Phone (para teléfonos celulares MicroSoft)."}
          ></TiposOS>
        </div>
       
       

      </div>

    </div>
  );
}

export default SistemasOPage;