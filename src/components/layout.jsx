
import React, { useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer'; 


function Layout({ children }) {
  useEffect(() => {
    const LANDBOT_SCRIPT_ID = 'landbot-popup-script-loader';
    if (document.getElementById(LANDBOT_SCRIPT_ID)) {
      return; 
    }

  
    const scriptElement = document.createElement('script');
    scriptElement.id = LANDBOT_SCRIPT_ID; 
    scriptElement.type = 'text/javascript'; 
    scriptElement.async = true;

    scriptElement.innerHTML = `
      window.addEventListener('mouseover', initLandbot, { once: true });
      window.addEventListener('touchstart', initLandbot, { once: true });
      var myLandbot;
      function initLandbot() {
        if (!myLandbot) {
          var s = document.createElement('script');
          s.type = "module";
          s.async = true;
          s.addEventListener('load', function() {
            myLandbot = new Landbot.Popup({ // Usando Landbot.Popup
              configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-2809421-1007SX9Q9ZYWJ4M5/index.json', // CAMBIO: Nueva URL de configuración
            });
          });
          s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';
          // Modificación: en lugar de insertar antes del primer script existente,
          // lo adjuntamos al final del body para mayor fiabilidad en carga dinámica.
          document.body.appendChild(s);
        }
      }
    `;

    document.body.appendChild(scriptElement);

    return () => {
      const existingScript = document.getElementById(LANDBOT_SCRIPT_ID);
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }

      if (window.myLandbot && typeof window.myLandbot.destroy === 'function') {
        window.myLandbot.destroy();
        delete window.myLandbot; 
      }
     
    };
  }, []); 

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="mx-0 md:mx-auto flex-grow container p-0 md:p-4">
        {children} 
      </main>
      <Footer/>

    
    </div>
  );
}

export default Layout;
