import { motion } from 'framer-motion';
import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter";
import Image from 'next/image'
import ParaPortada from '../public/Paraportada.jpg'




type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["El “jugoso” negocio de las visas dominicanas en Haití "],
        loop: true,
        delaySpeed:2000,
        
    });
  return (
    
    <div className="bg-gradient-to-tl from-black-to-gray flex flex-col items-center justify-center h-screen text-center space-y-8 relative">
      
      <Image src={ParaPortada} className='object-cover bg-center w-full h-full mix-blend-overlay' alt={''}/>
      
        <motion.h1 
        initial={{
          opacity:0,
        }}
        animate={{
          opacity:1,
        }}
        transition={{
          duration: 5,
        }}
        className="text-3xl lg:text-7xl px-5 font-bold absolute top-640 ease-in-out max-w-5xl">
          
        <span className="mr-3 ">{text}</span>
        <Cursor cursorColor="#f7ab0a"/>
        </motion.h1>
        
    </div>
  );
}

