import React from 'react'

type Props = {}

export default function Gallery({}: Props) {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        
          <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20"> 
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <img src='Agencia/Sec A-1@300x-100.jpg' />
            <div>
              <h4>
                <span>Paso 1</span>
              </h4>
            </div>

            </div>
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <img src='Agencia/Sec A-2@300x-100.jpg' />
            <div>
              <h4>
                <span>Paso 1</span>
              </h4>
            </div>

            </div>
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <img src='Agencia/Sec A-3@300x-100.jpg' />
            <div>
              <h4>
                <span>Paso 1</span>
              </h4>
            </div>

            </div>
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <img src='Agencia/Sec A-4@300x-100.jpg' />
            <div>
              <h4>
                <span>Paso 1</span>
              </h4>
            </div>

            </div>
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <img src='Agencia/Sec A-5@300x-100.jpg' />
            <div>
              <h4>
                <span>Paso 1</span>
              </h4>
            </div>

            </div>
         
          </div>

    </div>
  )
}