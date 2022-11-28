import React from 'react'
import Image from 'next/image'
import Listin from '../public/logo-Listin-Diario-copy.png'
import Connectas from '../public/CONNECTAS_blanco.png'
import Icfj from '../public/horizontal_white_Name_on white.png'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-8xl px-10 justify-evenly mx-auto items-center">
        
        <div className="flex flex-col space-y-3 justify-center">
        <p className=" text-center">Infografías: <br/>Nasha Cruz y Carolina Pichardo</p>
        
        <p className=" text-center">Ilustraciones: <br/>Kharla Ceballos</p>
        
        <p className=" text-center">Multimedia: <br/>Rubí Morillo y Julio Lavandier</p>

        <p className=" text-center">Fotografías y videos: <br/>Milo Milfort y Jorge Luis Martínez</p>

        <p className=" text-center">Desarrollo web: <br/>Enriquillo Billini</p>

        <p className=" text-center">Reportaje escrito por Carolina Pichardo con reportería en Haití del periodista Milo Milfort para Listín Diario y CONNECTAS. Esta investigación se realizó con el apoyo del International Center for Journalists (ICFJ), en el marco de la Iniciativa para el Periodismo de Investigación en las Américas.</p>
        <div className="columns-3">
        <Image src={Listin} width="300" alt={''}/>
        <Image src={Connectas} width="300" className='' alt={''}/>
        <Image src={Icfj} width="300" alt={''}/>
        </div>
        </div> 
        
        
        
        
    </div>

    
  )
}

export default Footer