import React from 'react'


type Props = {}

function Gallery({}: Props) {
  
  return (
    <div className=" flex container mx-auto space-x-7 p-5 snap-x snap-mandatory overflow-x-scroll  overflow-y-hidden">
        
          <section className="snap-start container mx-auto  flex-shrink-0  items-center justify-center"> 
            <img src='Consulado/Sec C-1@300x-100.jpg' />
          </section>
          <section className="snap-start container mx-auto  flex-shrink-0  items-center justify-center"> 
            <img src='Consulado/Sec C-2@300x-100.jpg' />
          </section>
          <section className="snap-start container mx-auto  flex-shrink-0  items-center justify-center"> 
            <img src='Consulado/Sec C-3@300x-100.jpg' />
          </section>
          <section className="snap-start container mx-auto  flex-shrink-0  items-center justify-center"> 
            <img src='Consulado/Sec C-4@300x-100.jpg' />
          </section>
            
        
    </div>
  )
}

export default Gallery