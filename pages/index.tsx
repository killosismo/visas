import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Intro from '../components/Intro'




export default function Home() {
  return (
    
    
    <><Header /><div className="bg-[rgb(36,36,36)] text-white  h-screen ">
      <Head>
        <title> El "jugoso" negocio de las visas dominicanas en Haití | Listín Diario - Connectas</title>
      </Head>

      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="in" className="snap-center">
        <Intro />
      </section>

      <section id="tx" className="snap-center">
        <About />
      </section>







    </div></>
   
  )
}
