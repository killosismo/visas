import Head from 'next/head'
import About from '../components/About'
import Hero from '../components/Hero'
import Intro from '../components/Intro'




export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white  h-screen ">
      <Head>
        <title>Visas dominicanas para Haiti</title>
      </Head>

      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="tx" className="snap-center">
       <Intro />
      </section>
      
      <section id="tx" className="snap-center">
       <About />
      </section>

      

      
      

      
      </div>
  )
}
