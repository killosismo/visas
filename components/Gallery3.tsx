import React from 'react'


type Props = {}

function Gallery3({}: Props) {
  
  return (
    <div className=" bg-[rgb(36,36,36)] text-white h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        
          <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20"> 
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <img src='Cancilleria/Sec Cc-1@300x-100.jpg' width="600px" />
                <div className="space-y-10 px-0 md:px:10 max-w-6xl" >
                  <h4 className="text-4xl font-semibold text-center">
                    <span>1 - El solicitante debe llenar el formulario de visa en línea</span>
                  </h4>
                  <p>Deslize hacia la izquierda</p>
                </div>
            </div>

            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <img src='Cancilleria/Sec Cc-2@300x-100.jpg' width="600px"/>
              <div className="space-y-10 px-0 md:px:10 max-w-6xl" >
                  <h4 className="text-4xl font-semibold text-center">
                    <span>2 - Debe llevar los documentos necesarios a la Cancillería</span>
                  </h4>
                  <p></p>
                </div>
            </div>

            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <img src='Cancilleria/Sec Cc-3 @300x - 100.jpg' width="600px"/>
              <div className="space-y-10 px-0 md:px:10 max-w-6xl" >
                <h4 className="text-4xl font-semibold text-center">
                  <span>3 - Luego se debe esperar a que te informen si la visa fue aceptada o denegada</span>
                </h4>
                <p></p>
              </div>
            </div>

          </div>
          
          
    </div>
    
  )
}

export default Gallery3