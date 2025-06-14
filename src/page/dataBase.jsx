import React from 'react';
import presets from "../utils/introduccionPresests"
import Example from '../components/SistemasO/buttonMaterial';

function DateBasePage() {
  return (
    <>
    
    <div className="p-6 flex flex-col bg-gray-100 rounded-lg w-full gap-10">
     
      <h1 className="text-4xl text-center font-extrabold text-gray-800 mb-4">¿Qué es una base de datos?</h1>
      {/* */}
      <div className='w-full flex flex-col md:flex-row gap-3 '>
        <div className='w-full md:w-1/2 flex p-6 bg-white rounded-lg shadow-md'>
          <p className='text-lg'>Una base de datos o banco de datos es una herramienta que almacena información perteneciente a un mismo contexto, organizada y sistematizada lógicamente para su posterior recuperación, análisis o transmisión. Una biblioteca, un listado completo de clientes o el historial de las páginas visitadas en un navegador web son algunos ejemplos de bases de datos.</p>
        </div>
        <div className='w-full md:w-1/2 flex p-6 bg-white rounded-lg shadow-md'>
          <p className='text-lg'>Las bases de datos responden al cometido de almacenar y organizar la información para poder acudir a ella posteriormente, lo que ha sido una necesidad de la humanidad desde tiempos remotos. Sin embargo, solo tras el surgimiento de la electrónica y la computación, se ha podido satisfacer a muy gran escala, almacenando enormes cantidades de datos en espacios físicos limitados, a través de su conversión en señales eléctricas o magnéticas.</p>
        </div>
      </div>
      {/* */}
      <div className='w-full flex flex-col md:flex-row  gap-3 '>
        <div className='w-full md:w-1/2 flex p-6 bg-white rounded-lg shadow-md'>
          <img src={presets.images.DataBasePage.Db1} className='rounded-md' alt="" />
        </div>
        <div className='my-auto  w-full md:w-1/2 flex p-6 bg-white rounded-lg shadow-md'>
          <p className='text-lg'>Las bases de datos se pueden organizar de acuerdo a diferentes modelos y paradigmas, cada uno dotado de características, ventajas y desventajas, según su estructura, su jerarquía, su capacidad de transmisión o de interrelación, entre otros criterios posibles. Estas diferencias constituyen el campo de los modelos de base de datos y permiten el diseño y la implementación de algoritmos y otros mecanismos lógicos de gestión para administrar los datos guardados</p>
        </div>
      </div>
      {/* */}
      <div className='w-full p-4 bg-white rounded-lg shadow-md'>
        <p className='text-4xl font-extrabold text-gray-800 text-center mb-8'>Tipos de bases de datos</p>
        {/* */}
        <div className='w-full flex flex-col md:flex-row gap-8'>
          <div className='w-full md:w-1/2 flex flex-col gap-3'>
            <div className=''><p className='text-2xl text-center font-extrabold text-gray-800 border-b-3 border-b-teal-900'>Bases de Datos Relacionales (SQL)</p></div>
            <div className=''><p className='text-center text-lg'>Las bases de datos relacionales son el modelo más tradicional y extendido para organizar y gestionar datos. Se basan en el modelo relacional, que fue propuesto por Edgar F. Codd en 1970.</p></div>
            <div className='flex-col w-full'>
              <div><p className='text-center text-gray-800 font-bold text-xl mb-3'>Conceptos Fundamentales</p></div>
              <ul className='pl-4 text-lg'>
                <li className='flex gap-1'>
                  <div className='my-auto rounded-full bg-black w-1.5 h-1.5'></div>
                  <p className=''>Los datos se organizan en tablas (también llamadas "relaciones").</p>
                </li>
                <li className='flex gap-1'>
                  <div className='my-3 rounded-full bg-black w-1.5 h-1.5'></div>
                  <p className=''>Cada tabla está compuesta por filas (registros o tuplas) y columnas (campos o atributos).</p>
                </li>
                <li className='flex gap-1'>
                  <div className='my-3 rounded-full bg-black w-1.5 h-1.5'></div>
                  <p className=''>Cada fila representa una entidad única (por ejemplo, un cliente, un producto, un pedido).</p>
                </li>
                <li className='flex gap-1'>
                  <div className='my-3 rounded-full bg-black w-1.5 h-1.5'></div>
                  <p className=''>Cada columna representa un atributo o característica de esa entidad.</p>
                </li>
              </ul>
            </div>
            <div className='flex flex-col w-full gap-2 my-auto'>
              <div className=''><p className='text-gray-800 text-xl font-bold text-center'>Lenguaje SQL</p></div>
              <div><p className='text-lg text-center'>Es el lenguaje estándar para definir, manipular y consultar datos en bases de datos relacionales.</p></div>
              <div><p className='text-lg text-center'>DDL (Data Definition Language): Para definir la estructura (ej. CREATE TABLE, ALTER TABLE).</p></div>
              <div><p className='text-lg text-center'>DML (Data Manipulation Language): Para insertar, actualizar, eliminar y consultar datos (ej. SELECT, INSERT, UPDATE, DELETE).</p></div>
              <div><p className='text-lg text-center'>DCL (Data Control Language): Para gestionar permisos de usuario (ej. GRANT, REVOKE).</p></div>
              <div><p className='text-lg text-center'>TCL (Transaction Control Language): Para gestionar transacciones (ej. COMMIT, ROLLBACK).</p></div>
            </div>                 
          </div>
          <div className='w-full  md:w-1/2 flex flex-col gap-3'>
            <div className=''><p className='text-2xl text-center font-extrabold text-gray-800 border-b-3 border-b-teal-900'>Bases de Datos No Relacionales (NoSQL)</p></div>
            <div className=''><p className='text-center text-lg'>El término NoSQL (originalmente "NoSQL" y ahora "Not only SQL") surgió para abordar las limitaciones de las bases de datos relacionales, especialmente en entornos de Big Data, aplicaciones web modernas de alto rendimiento y esquemas flexibles. NoSQL no significa "sin SQL", sino "no solo SQL".</p></div>
            <div className='flex-col w-full'>
              <div><p className='text-center text-gray-800 font-bold text-xl mb-3'>Conceptos Fundamentales</p></div>
              <ul className='place-items-center pl-4 text-lg'>
                <li className='flex gap-1'>
                  <div className='my-auto rounded-full bg-black w-1.5 h-1.5'></div>
                  <p className=''>No se adhieren al modelo de tabla relacional tradicional.</p>
                </li>
                <li className='flex gap-1'>
                  <div className='my-3 rounded-full bg-black w-1.5 h-1.5'></div>
                  <p className=''>Almacenan datos de diversas maneras, sin un esquema rígido.</p>
                </li>
                <li className='flex gap-1'>
                  <div className='my-3 rounded-full bg-black w-1.5 h-1.5'></div>
                  <p className=''>Están diseñadas para la escalabilidad horizontal</p>
                </li>
                <li className='flex gap-1'>
                  <div className='my-3 rounded-full bg-black w-1.5 h-1.5'></div>
                  <p className=''>(escalar añadiendo más servidores en lugar de mejorar un solo servidor grande)</p>
                </li>
                <li className='flex gap-1'>
                  <div className='my-3 rounded-full bg-black w-1.5 h-1.5'></div>
                  <p className=''>Están diseñadas para manejar grandes volúmenes de datos distribuidos</p>
                </li>
              </ul>
            </div>
            <div className='flex flex-col w-full gap-2'>
              <div className=''><p className='text-gray-800 text-xl font-bold text-center'>Lenguajes de Consulta</p></div>
              <div><p className='text-lg text-center'>Cada tipo de base de datos NoSQL suele tener su propio lenguaje de consulta o API específico (ej. MongoDB tiene su lenguaje de consulta basado en JSON).</p></div>
              <div><p className='text-lg text-center'>Aunque no usan SQL de la misma manera, algunos SGBD NoSQL han empezado a añadir interfaces tipo SQL para facilitar la adopción.</p></div>
            </div>                        
          </div>
          
        </div>
      </div>
      {/* */}
      <div className='w-full flex'>
       <div className='w-full flex flex-col md:flex-row mx-auto gap-12'>
         <div className='w-full md:w-1/2 gap-4 flex flex-col p-4 md:p-6 bg-white rounded-lg shadow-md'>
          <div className="aspect-video relative w-full"> 
           <iframe  
            src="https://www.youtube.com/embed/6S8A-1jBD5Y?si=iv35E8KGSYxoxCXY" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
            className="absolute top-0 left-0 w-full h-full"
            >    
          </iframe>
          </div>
        </div>
        <div className='w-full md:w-1/2 gap-4 flex flex-col p-4 md:p-6 bg-white rounded-lg shadow-md'>
          <div className="aspect-video relative w-full"> 
          <iframe
            src="https://www.youtube.com/embed/knVwokXITGI?si=H1PGIPTb17Ca5FGQ" 
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
    </div>
    </>
  );
}

export default DateBasePage;