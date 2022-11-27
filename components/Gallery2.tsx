import React from 'react'


type Props = {}

function Gallery2({}: Props) {
  
  return (
    <div className=" bg-[rgb(36,36,36)] text-white h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        
          <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20"> 
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <img src='Consulado/Sec C-1@300x-100.jpg' width="600px" />
                <div className="space-y-10 px-0 md:px:10 max-w-6xl" >
                  <h4 className="text-4xl font-semibold text-center">
                    <span>1 - Se trata de hacer cita en el consulado, sin embargo la página sólo arroja errores</span>
                  </h4>
                  <p>Deslize hacia la izquierda</p>
                </div>
            </div>

            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <img src='Consulado/Sec C-2@300x-100.jpg' width="600px"/>
              <div className="space-y-10 px-0 md:px:10 max-w-6xl" >
                  <h4 className="text-4xl font-semibold text-center">
                    <span>2 - Tampoco funciona llamar por teléfono, no toman la llamada</span>
                  </h4>
                  <p></p>
                </div>
            </div>

            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <img src='Consulado/Sec C-3@300x-100.jpg' width="600px"/>
              <div className="space-y-10 px-0 md:px:10 max-w-6xl" >
                <h4 className="text-4xl font-semibold text-center">
                  <span>3 - La fila para llegar al consulado es interminable</span>
                </h4>
                <p>Luego de horas en línea no te dejan entrar a las oficinas</p>
              </div>
            </div>

            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <img src='Consulado/Sec C-4@300x-100.jpg' width="600px"/>
              <div className="space-y-10 px-0 md:px:10 max-w-6xl" >
                <h4 className="text-4xl font-semibold text-center">
                  <span>4 - Entregas el pasaporte y el dinero a una persona del consulado</span>
                </h4>
                <p>Y esperas a que te llamen para informarte si está listo o no</p>
              </div>
            </div>

          </div>
          
          
    </div>
    
  )
}

export default Gallery2