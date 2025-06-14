import React, { useState } from 'react';
import presets from '../../utils/introduccionPresests';

const TiposOS = ({titulo, src, infoTexto,className})=>{
const [viewMore, setViewMore] = useState(false)   
  return (
    
    <div 
    className={`flex flex-col gap-4 ${className}`}
    >
      <div className="w-full max-w-md overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5 flex flex-col min-h-[420px]">
        
      
        <div className="w-full aspect-video overflow-hidden">
         
          <img className="h-full w-full object-cover rounded-t-lg" src={src} alt="image" />
        </div>
        
        
        <div className="flex-grow w-full rounded px-3"> 
          <h6 className="font-sans text-base font-bold text-center antialiased md:text-lg lg:text-3xl">
            {titulo}
          </h6>
        </div>
        
       
        <div className=" w-full rounded px-3 pb-3 pt-1.5">
          
          <button onClick={()=>setViewMore(!viewMore)} data-width="full" className="cursor-pointer border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-gradient-to-tr from-slate-800 to-slate-700 border-slate-800 text-slate-50 hover:brightness-105">
              Ver Más
          </button>
        </div>
      </div>
      
      {viewMore && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none"> 
          <div className="flex overflow-y-auto flex-col bg-white rounded-lg shadow-xl p-6 mx-auto pointer-events-auto max-h-[90vh] max-w-lg"> 
            <div className='w-full flex flex-col gap-3'>
              <div className='w-full flex gap-3'>
                <div className='w-full bg-white rounded-lg shadow-xl p-6'>
                  <p className='text-2xl md:text-4xl text-center text-gray-600 font-bold border-b-[3px] border-gray-700'>{titulo}</p> 
                  <p className='mt-2 text-base md:text-lg text-center'>{infoTexto}</p>
                </div>
              </div>
            </div>
            
            <button 
            onClick={() => setViewMore(false)}
            data-width="full" className="mt-4 cursor-pointer border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-gradient-to-tr from-slate-800 to-slate-700 border-slate-800 text-slate-50 text-lg hover:brightness-105">
                Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default TiposOS;
