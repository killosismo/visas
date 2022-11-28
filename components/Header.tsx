import React from 'react'



type Props = {}

export default function Header({}: Props) {
  return (
    <header className="bg-[rgb(36,36,36)]  top-0 p-5 flex items-start justify-between max-w-8xl mx-auto  xl:items-center">
        <div className="flex flex-row items-center">
            <img src="logo-Listin-Diario-copy.png" width="100" alt={''}/>        
        </div>
        <div className="flex flex-row items-center -mt-2">
            <img src="CONNECTAS_blanco.png" width="100" alt={''}/> 
        </div>
    </header>
  )
}