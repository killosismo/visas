import React from 'react'
import Image from 'next/image'
import Listin from '../public/logo-Listin-Diario-copy.png'
import Connectas from '../public/CONNECTAS_blanco.png'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="bg-[rgb(36,36,36)]  top-0 p-5 flex items-start justify-between max-w-8xl mx-auto  xl:items-center">
        <div className="flex flex-row items-center">
            <Image src={Listin} width="100" alt={''}/>        
        </div>
        <div className="flex flex-row items-center -mt-2">
            <Image src={Connectas} width="100" alt={''}/> 
        </div>
    </header>
  )
}