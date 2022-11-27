import React from 'react'

type Props = {}

export default function Gallery({}: Props) {
  return (
    <div className=" bg-[rgb(36,36,36)] text-white h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        
          <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20"> 
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <img src='Agencia/Sec A-1@300x-100.jpg' width="600px" />
                <div className="space-y-10 px-0 md:px:10 max-w-6xl" >
                  <h4 className="text-4xl font-semibold text-center">
                    <span>1 - La persona se dirige a la agencia de viajes</span>
                  </h4>
                  <p>Deslize hacia la izquierda</p>
                </div>
            </div>

            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <img src='Agencia/Sec A-2@300x-100.jpg' width="600px"/>
              <div className="space-y-10 px-0 md:px:10 max-w-6xl" >
                  <h4 className="text-4xl font-semibold text-center">
                    <span>2 - Se encuentra con el agente o empleado</span>
                  </h4>
                  <p></p>
                </div>
            </div>

            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <img src='Agencia/Sec A-3@300x-100.jpg' width="600px"/>
              <div className="space-y-10 px-0 md:px:10 max-w-6xl" >
                <h4 className="text-4xl font-semibold text-center">
                  <span>3 - Antes de llegar al consulado</span>
                </h4>
                <p>El pasaporte pasa por algunas cinco personas con distintas comisiones</p>
              </div>
            </div>

            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <img src='Agencia/Sec A-4@300x-100.jpg' width="600px"/>
              <div className="space-y-10 px-0 md:px:10 max-w-6xl" >
                <h4 className="text-4xl font-semibold text-center">
                  <span>4 - El pasaporte es visado por un funcionario</span>
                </h4>
                <p>El pasaporte llega con una cantidad aproximada de 400 US a una persona que le da seguimiento</p>
              </div>
            </div>

            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <img src='Agencia/Sec A-5@300x-100.jpg' width="600px"/>
            <div className="space-y-10 px-0 md:px:10 max-w-6xl" >
                <h4 className="text-4xl font-semibold text-center">
                  <span>5 - Se entrega otra vez a la agencia que se lo da al solicitante</span>
                </h4>
                <p></p>
              </div>
            </div>
            
          </div>
          
          
    </div>
    
  )
}