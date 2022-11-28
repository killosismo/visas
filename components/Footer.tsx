import React from 'react'


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
        <img src="logo-Listin-Diario-copy.png" width="300" alt={''}/>
        <img src="CONNECTAS_blanco.png" width="300" className='' alt={''}/>
        <img src="horizontal_white_Name_on white.png" width="300" alt={''}/>
        </div>
        </div> 
        
        
        
        
    </div>

    
  )
}

export default Footer