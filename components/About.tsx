import React from 'react'
import Gallery from './Gallery'
import Gallery2 from './Gallery2'
import Gallery3 from './Gallery3'


type Props = {}

function About({}: Props) {
  return (
    
    <div className="flex-col h-screen justify-center items-center text-black   text-lg scroll-smooth">
      
         <div className="max-w-3xl container mx-auto justify-center px-5">
          <br/>
          <p>“Somos jóvenes y no trabajamos, es un gran sacrificio poder encontrar este dinero. No hay futuro en el país. No hay condiciones para vivir. Así que tienes que pensar en irte”, dice Marie Wildrène Bonhomme, quien pagó 350 dólares a una agencia de viaje en agosto de 2021 para conseguir una visa dominicana y poder salir de Haití.</p>
          <br/>
          <p>Luego de unos meses, le devolvieron el pasaporte sin visado y 200 dólares del total pagado; perdió el resto y no ha podido salir. Supuestamente el agente que le haría el trámite quedó atrapado en Juana Méndez, ciudad fronteriza a donde se dirigió para gestionar la visa fácilmente. “Conozco a otras personas que han experimentado la misma situación. Gente que perdió su dinero”.</p>
          <br/>
          <iframe className="w-full aspect-video" src="https://drive.google.com/file/d/1rk6Yjkaxn_icDK5i5EzCRzYZQETyQAI6/preview" allow="autoplay"></iframe>
          <br/>
          <p>En Haití hay un “mercado negro y paralelo” en la emisión de visas, admite desde la sala de su casa, en la catastrófica ciudad de Puerto Príncipe, el excanciller haitiano Claude Joseph. Algunos, como Wildréne son estafados por las agencias de viaje y agentes que ofrecen estos trámites en un mes. Sin embargo, de acuerdo con la Cancillería dominicana las solicitudes de visas deben ser personales y directamente en el Consulado o la Embajada, de no ser así es un proceso irregular, indica la Ley 875 sobre Visados.</p>
          <br/>
          <p>“La estructura de este mercado negro es que ya la población no tiene acceso directo al consulado, es decir si viene al consulado con sus documentos y su dinero, no tienen acceso, dicen que no hay visas. Entonces te fuerzan a pasar por unas agencias que trabajan con el consulado y es a través de esa agencia que tienes que pasar y ellos ponen el precio que quieran”, explica Joseph, en una entrevista en septiembre para esta investigación de Listín Diario y CONNECTAS.</p>
          <br/>
          <p>Entre 2020 y 2021, la emisión de visas dominicanas en Haití aumentó en un 41%. Aunque no se puede comprobar que el incremento se deba solo a las agencias, sí es un reflejo de la desesperación de los haitianos en escapar del territorio donde justo en ese último año fue asesinado su presidente Jovenel Moïse, tuvieron un terremoto mortal y 767 personas murieron por covid-19, además del impacto de otras enfermedades.</p>
          <br/>
        </div>
        
          <Gallery2/>
        
        
        
        <div className="max-w-3xl container mx-auto justify-center px-5">
          <br/>
          <p>De hecho, de 2015 hasta el primer semestre de 2022, el 89% de las 818,885 visas emitidas desde misiones dominicanas se entregaron a haitianos, según datos de la Cancillería proporcionados para esta investigación. Solo desde Puerto Príncipe, en el barrio de Pétion-Ville, salieron 269,625 pasaportes visados, la mayoría de negocio múltiple (NM), que representa el 89%. La de turismo múltiple (TM) está en segundo lugar con 35,065 y, en el tercero, turismo simple (TS) con 12,213.</p>
          <br/>
          <p>En ese periodo, las misiones en Haití tuvieron ingresos de 64,214,645 de 85,748,330 dólares, que representa el 75% del total del dinero que recibieron los consulados dominicanos en el mundo.</p>
          <br/>
        </div>

        <iframe title="Interactive or visual content" className="w-full aspect-video" src="https://flo.uri.sh/visualisation/11373141/embed" ></iframe> 
          
        <div className="max-w-3xl container mx-auto justify-center px-5">
          <br/>
          <p>No es fácil determinar cuánto cuesta oficialmente cada visa. Dentro de los datos oficiales de la Cancillería existe una disparidad entre los precios del visado dominicano. La vigente resolución 2-07 del Ministerio de Relaciones Exteriores señala que deberían ser entre 40 y 60 dólares, dependiendo el tipo. Pero en la información entregada por esta misma instancia, luego de una consulta realizada para este reportaje, se indica que las visas cuestan 70, 80, 85 y 90 dólares, también dependiendo la categoría. Sin embargo, los afiches colocados en los consulados dominicanos en Haití y publicaciones en sus redes sugieren que el costo puede ir desde 175 para niños hasta 225 dólares para un adulto.</p>
          <br/>
          <p>Estas variaciones evidencian una desorganización en los precios que hace imposible determinar exactamente cuánto dinero manejaron los funcionarios consulares en Haití durante los últimos años. Por ejemplo, de cada visa emitida, el Consulado debe quedarse con 10 dólares para gastos administrativos y operacionales y la Cancillería con 20, según la resolución vigente. Pero de ese dinero que sobra no se sabe su destino ni uso, al menos esta interrogante no fue aclarada en los más de 132 correos enviados ni en las 22 solicitudes realizadas al Ministerio de Relaciones Exteriores como parte de una investigación de Listín Diario, publicada el 18 de abril de este año.</p>
          <br/>
        </div>
        
        <iframe src='https://flo.uri.sh/visualisation/11360157/embed' title='Interactive or visual content' className="w-full aspect-video"></iframe>

        <div className="max-w-3xl container mx-auto justify-center px-5">
          <br/>
          <p>En este contexto, el legislador de la provincia fronteriza Elías Piña, Yvan Lorenzo, propuso en 2021 un proyecto de ley sobre funciones consulares en busca de estandarizar las tarifas  y que las recaudaciones de estos servicios sean depositadas en una cuenta única en la Tesorería Nacional, aspectos que actualmente no son abordados en la normativa vigente para el sector. El Congreso Nacional aún no tomó en cuenta esta iniciativa.</p>
          <br/>
          <p>En octubre de 2020, Enrique García, director general de Migración en ese entonces, expuso que los cónsules dominicanos en Haití tenían un negocio en la expedición de visas.  Sin embargo, la denuncia no fue tomada en cuenta. Su predecesor, el actual director Venancio Alcántara, no quiso referirse al tema.</p>
          <br/>
          <p>Joshua, un periodista haitiano, es otro ejemplo de esta irregularidad. Ha aplicado tres veces a la visa dominicana pero nunca pudo ingresar a la oficina consular, por eso sus opciones fueron agencias de viaje o “terceros”.</p>
          <br/>
          <iframe title="Conversación con haitiano que ha aplicado por agencia" src="https://view.genial.ly/62cb2e51318e520011c0844c" className="w-full aspect-video"></iframe>
          <br/>
        </div>
        
        <div className="max-w-3xl container mx-auto justify-center px-5">
          <br/>
          <p>El Gobierno ha realizado algunos cambios tímidos intentando solucionar la problemática del mercado paralelo de visas y desde que asumió el cargo en diciembre de 2021, el cónsul dominicano en Juana Méndez, Margarito de León, dice que ha eliminado a los “colaboradores del consulado”, porque los agentes tenían un “negocio al margen”.</p>
          <br/>
          <p>“Encontramos que había una gran cantidad de personas, un número indeterminado, quienes eran los que manejaban el control total del acceso al consulado. Porque como el consulado estaba hacinado, estaba sometido a una especie de cerco humano (…) Las personas no podían acceder a buscar una visa. Ese control lo tenía ese grupo afuera, incluso intimidaban a cualquier ciudadano para que no pudiera acceder al Consulado”, asegura De León.</p>
          <br/>
          <p>De León era subdirector nacional de Investigaciones de República Dominicana cuando estalló un sonado escándalo de supuesta venta de visas, con el que se destituyó al anterior cónsul de Juana Méndez, José Altagracia Valenzuela Arias.</p>
          <br/>
          <h1 className='lg:text-6xl font-semibold max-w-3xl items-center justify-center text-center'>Visas sin rostro: el “modus operandi”</h1>
          <br/>
          <iframe className="w-full aspect-video" src="https://drive.google.com/file/d/1VXDv_6I4znOXC6LuSDEYlzbjPkt44tP4/preview" allow="autoplay"></iframe>
          <br/>
          <p>Las agencias de viaje, tanto reales como las que tienen direcciones ficticias, se han multiplicado. Además, el precio de la obtención de este visado por agencias aumenta cada año. Para 2021 el promedio era 400 dólares; en la actualidad es de aproximadamente 600.</p>
          <br/>
          <p>El aumento del valor en el mercado negro de visas está relacionado con “un mecanismo de intermediación que sirve para manipular y extorsionar, en el que el Consulado dice que no hay visa, pero las personas las pueden conseguir a través de agencias”, explica el senador Yvan Lorenzo, afirmación en la que coincide el excanciller Claude Joseph. Es decir que se genera una demanda de visas que incide en el incremento del precio.</p>
          <br/>
          <p>Anabelle es la dueña de una agencia de viajes en Puerto Príncipe y aclara que las agencias no emiten la visa, sino que pasa por diferentes procesos y personas hasta llegar al Consulado. Esta ruta comienza cuando el solicitante le entrega al agente el pasaporte y el dinero; ella dice que se queda con 20 dólares del total pagado, y le paga otros 20 a una persona de “su confianza”, y así va pasando por otras tres manos hasta llegar al Consulado donde, según revela, se pueden quedar con hasta 400 dólares.</p>
          <br/>
          <p>Los solicitantes no son solo de Haití. Algunos haitianos solicitan la visa desde República Dominicana para regularizar su estatus. Así hizo Marcos quien en 2007 entró a territorio dominicano ilegalmente y, meses después, pagó 300 dólares a un buscón (persona que realiza los trámites de visas dominicanas) que viajaba semanalmente a la ciudad de Belladere, en Haití. Al cabo de un mes, la visa de negocios estaba en sus manos en Santo Domingo.</p>
          <br/>
          <p>Aunque a veces la agencia promete un tiempo de entrega, Anabelle señala que cuando se agotan las visas en el Consulado, se puede posponer. Así lo explica también Haideal Travel Agency, otra de las tramitadoras consultadas, que admitió en 2020 sobre las demoras que “el cónsul no ha regresado con la nueva visa para imprimir, los pasaportes ya están dentro del Consulado”.</p>
          <br/>
          <p>A mediados de año, la Cancillería confirmó en un documento entregado a este medio que no había una cifra o cuota específica de visas por misión consular, y que todo dependería de la cantidad de solicitudes que reciban. La respuesta de la Cancillería a un nuevo pedido de información sobre las solicitudes de los últimos siete años solo se limitó a las 726,300  visas que habían entregado.</p>
          <br/>
        </div>

        <Gallery/>

        <div className="max-w-3xl container mx-auto justify-center">
          <br/>
          <h1 className='lg:text-6xl font-semibold max-w-3xl items-center justify-center text-center'>Una irregularidad a simple vista</h1>
          <br/>
        </div>

        <p>Galeria Fotos de agencias</p>

        <div className="max-w-3xl container mx-auto justify-center px-5">
          <br/>
          <p>El negocio de tramitar visas se ha generalizado a tal punto que es común encontrar agencias publicitando el servicio en las calles de Santo Domingo. Five Stars Turismo tiene oficinas en Puerto Príncipe, Santo Domingo y Brasil. Los registros dicen que la oficina principal se encuentra en el país sudamericano. Aunque no específica el precio en su página web, sí invita a los haitianos interesados a llamar a la oficina en República Dominicana, ubicada en Paraíso del Mar Plaza, en la autopista Las Américas, Santo Domingo Este.</p>
          <br/>
          <p>Una de las empleadas admitió que tenían visas dominicanas y, para el momento de la visita, a inicios de septiembre, costaba 600 dólares. “Eso varía (el precio) a veces cuesta 300, 400, 500, a veces 600 dólares, pero no es a la agencia que se paga eso, es al Consulado porque… tú sabes ellos (consulados) son así. Siempre lo suben un poco”, dice la dependiente.</p>
          <br/>
          <iframe className="w-full aspect-video" src="https://drive.google.com/file/d/1ZaHpDcUMcbySrG-Kw_O04ZUdbMABtpOS/preview" allow="autoplay"></iframe>
          <br/>
          <p>En JR Plus (Entreprises Multiservices S.R.L), en otra plaza ubicada en Las Américas, solo había un empleado en un pequeño local con aire acondicionado y mejor iluminación que negó este servicio, aunque el cartel publicitario fuera del negocio sí lo mencionaba.</p>
          <br/>
          <p>Ortiz y Peralta Tours, en la calle 19 de Marzo, en Santo Domingo, también tiene un afiche que promociona transporte desde y hacia Haití, además de envío de paquetes y documentos y trámites de visa dominicana.</p>
          <br/>
          <p>Pero donde la publicidad de estos trámites es más evidente es en las ciudades de Haití. En los alrededores de la Oficina de la Emigración e Inmigración de Haití (Bureau de l'Emigration et de l'Immigration, en francés), ubicada en Puerto Príncipe, se encuentran más oficinas de agencias de viaje que ofrecen servicios de visados dominicanos y planificación de viajes. Allí no utilizan la expresión, "solicitar un visado", sino "comprar un visado dominicano".</p>
          <br/>
          <p>Cerca de estas oficinas de inmigración, situadas a menos de un kilómetro del Palacio Nacional haitiano, se reúnen vendedores de alimentos, mototaxis y, sobre todo, buscones. Algunas están alojadas en un espacio físico identificable, otras son simplemente personas acampadas en una esquina o sentadas en un auto o, al menos, utilizando direcciones ficticias. "El visado dominicano es el más caro y el más difícil de encontrar en Haití en este momento", dijo el gerente de una agencia al que consultamos.</p>
          <br/>
          <p>Para los haitianos la visa de Estados Unidos cuesta 120 dólares, la Schengen para la Unión Europea 80 euros, la de Reino Unido 119 dólares y la de Brasil 80 dólares.</p>
          <br/>
          <p>Pagar la visa dominicana con tramitadores no solo implica un costo más alto, sino arriesgarse a perder el dinero, como le pasó a Marie Wildrène y lo mismo, en mayo de este año, al hermano de Dayana Pierre, quien pagó 400 dólares a un empleado de una agencia de viajes con quien había hecho el proceso en otras ocasiones. No fue hasta octubre cuando por fin le fue devuelto el pasaporte, pero no tenía la visa dominicana y perdió su dinero.</p>
          <br/>
          <p>La constante búsqueda de visados dominicanos ha hecho que muchos haitianos desesperados caigan en manos de agencias y buscones que también entregan visas falsas, otro problema relacionado con la escasa regulación de este negocio. Entre febrero y octubre de 2022, agentes de migración dominicanos detectaron 162 visas falsas en puntos fronterizos de Elías Piña y Dajabón, indican cifras oficiales de la Dirección General de Migración.</p>
          <br/>
          <p>Margarito de León, cónsul en Juana Méndez, comparó a las agencias como aquellos "tributarios" o tramitadores de servicios que se colocan en los alrededores de oficinas públicas dominicanas y se ofrecen a agilizar el proceso de emisión de documentos a los solicitantes. Explicó que antes de ser juramentado en su puesto “había agencias no reguladas” que tomaban los pasaportes a haitianos desesperados y los arrojaban en el río Masacre (que delimita la frontera dominico-haitiana) y se quedaban con el dinero.</p>
          <br/>
          <p>El cónsul explica que no tiene objeción en aceptar agentes que trabajen para agencias reguladas por el Estado haitiano. “Siempre habrá personas que no puedan venir (al consulado) y si ellos legalmente (agencias) tienen autorización del Estado haitiano, entonces nosotros no tenemos ninguna objeción en aceptarles a ellos que puedan representar a una persona o a un tercero en la consecución de una renovación de visa”, dice en la entrevista.</p>
          <br/>
          <p>En los últimos siete años, el Consulado de Juana Méndez ha dado 147,354 visas a haitianos y recibido más de 10,211,685 dólares por emisión, según la Cancillería.</p>
          <br/>
          <h1 className='lg:text-6xl font-semibold max-w-3xl items-center justify-center text-center'>Venta en redes sociales</h1>
          <br/>
          <p>Videos de agencias</p>
          <br/>
          <p>Las redes sociales se han convertido en espacios donde los tramitadores han encontrado la oportunidad de hacer crecer las agencias de viaje por ser lugares donde hay menos control que en los negocios físicos.</p>
          <br/>
          <p>“Aprovechen el especial, tenemos muchas visas dominicanas”, “Les estamos dando la visa dominicana porque la pidieron” y “Aunque hay escasez de visas dominicanas, siempre hacemos las cosas para satisfacer a nuestros clientes”. Así se publicita el jugoso negocio de los trámites de visas de las agencias de viaje en redes sociales.</p>
          <br/>
          <p>Solo con escribir la frase “Viza Dominiken” (visa dominicana, en creole), los buscadores de Facebook, Instagram, Twitter y hasta TikTok ofrecen un sinnúmero de opciones que varían por tiempo de entrega y precios, algunas en grupos privados y, la gran mayoría, en perfiles públicos.</p>
          <br/>
          <p>Debido al deficiente sistema estatal de Haití, acceder a plataformas de verificación de registros comerciales es una tarea casi titánica. Sin embargo, plataformas internacionales muestran datos que indican que algunas de estas agencias sí están registradas. Las dos más conocidas son Haideal Travel Agency y Five Stars Turismo Travel Agency con más de 73,000 seguidores en Facebook, en conjunto. La primera, creada el 18 de diciembre de 2015, fue seleccionada entre las cinco compañías de tours más importantes en la capital haitiana, de acuerdo con el portal Tourhdq.</p>
          <br/>
          <p>Otra de las más activas en redes sociales es Ann Deal Travel Agency que, el 23 de junio de 2021, publicó un video en Facebook donde se muestra cómo una persona imprime una visa en papel timbrado alusivo a la Cancillería, extrae un papel adhesivo y lo coloca en una página del pasaporte. Luego sella la firma de quien aparenta ser el cónsul de Cabo Haitiano en turno, coloca otro papel plástico para proteger la visa y, por último, escanea el documento en la plataforma.</p>
          <br/>
          <p>Incluso, a dos meses y medio del cierre de las oficinas consulares debido al incremento de la violencia y la extrema crisis social y política de Haití, agencias como Haideal siguen anunciando en redes sociales visas dominicanas. “Nos dan acceso para volver a tomar 10 visas dominicanas”, anunció en Instagram el pasado 26 de octubre. Otras fotografías que circulan en redes muestran presuntos visados dominicanos emitidos en octubre y noviembre que incluso tienen sellos de migración, aunque no se puede precisar si son legítimos.</p>
          <br/>
          <h1 className='lg:text-6xl font-semibold max-w-3xl items-center justify-center text-center'>En Haití niegan menos del 1% de las visas</h1>
          <br/>
          <p>En teoría, entregar todos los requerimientos no le garantiza al solicitante tener una respuesta positiva, la decisión final está en manos de la Cancillería. “El funcionario consular no puede decidir si le otorgará o no la visa hasta que usted solicite formalmente y sea evaluada su solicitud por el Ministerio de Relaciones Exteriores”, detalla el Mirex.</p>
          <br/>
          <p>A pesar de que los haitianos que aplican a la visa dominicana, tanto por la vía oficial de los consulados como por la irregular de las agencias, no entregan los documentos requeridos por el Gobierno, los consulados solo han denegado 178 visados en siete años y medio. Esta cifra representa el 0.02% de la cantidad de visas emitidas. Estos números ni siquiera se acercan a los de solicitantes en Venezuela y Cuba, donde fueron rechazadas entre 41% y 17% de las solicitudes, respectivamente, según información de la Cancillería para esta investigación.</p>
        </div>

        <iframe src='https://flo.uri.sh/visualisation/11372230/embed' title='Interactive or visual content' className="w-full aspect-video"></iframe>

        <div className="max-w-3xl container mx-auto justify-center px-5">
          <p>En algunos casos, parece que fuera cuestión de suerte. Ana solicitó la visa dominicana en dos ocasiones a través del Consulado de Puerto Príncipe, y en ninguna tuvo que llenar formulario ni entregar documentos. O María que hizo el proceso con una agencia de Dajabón, provincia fronteriza dominicana, tanto en 2006 como en 2013, y solo entregó el dinero y el pasaporte. A ambas les dieron visas vigentes, sin mayores inconvenientes.</p>
          <br/>
          <p>Aunque estas prácticas irregulares no se dan en todos los consulados. Por ejemplo, Alba Rodríguez, de España; Julien Bocquier, de Francia; Francisco Ávila, de Venezuela, y Eyda Pantoja de Cuba han solicitado visas dominicanas desde sus países y sus experiencias han sido diferentes a las de haitianos. Ellos sí siguieron el reglamento del Mirex y sus aplicaciones se dieron conforme a la ley. Hicieron cita para el visado, entraron a los consulados, entregaron los documentos y esperaron el tiempo requerido para la entrega de la visa. No encontraron irregularidades en el proceso consular.</p>
          <br/>
        </div>

        <Gallery3/>

        <div className="max-w-3xl container mx-auto justify-center px-5">
          <br/>
          <p>República Dominicana tiene 47 consulados (cinco en Haití) y 30 secciones consulares en igual número de embajadas en el exterior.</p>
          <br/>
          <p>El pasado 11 de mayo, el Ministerio de Relaciones Exteriores de República Dominicana anunció un plan piloto para externalizar los servicios consulares tras una investigación periodística publicada en Listín Diario el 18 de abril, donde se revela el uso de millones de dólares con total discreción por los consulados en Haití. Este plan se iniciaría primero en seis ciudades: Boston, en Estados Unidos; en Barcelona, España; y el de Caracas, Venezuela. Igual en tres embajadas como Beijing, China; Santiago de Chile y Buenos Aires, Argentina. Haití no está en la lista del plan preliminar para mejorar los servicios.</p>
          <br/>
          <p>En una comunicación de prensa en mayo, el canciller dominicano, Roberto Álvarez, aseguró que  “hemos recopilado elementos suficientes que nos han permitido identificar las deficiencias de los procesos actuales. Llegó el momento de acompañar el diagnóstico con una solución moderna, eficiente y satisfactoria, siguiendo las instrucciones del presidente Luis Abinader”.</p>
          <br/>
          <p>Listín Diario solicitó vía telefónica, mensajes de texto, correos y cartas físicas al Ministerio de Relaciones Exteriores una entrevista con el actual viceministro de Asuntos Consulares, Opinio Díaz, así como con los cónsules de Haití para aclarar algunos puntos de esta investigación, pero al cierre de la publicación no hubo respuesta.</p>
          <br/>
          <p>Reportaje escrito por Carolina Pichardo con reportería en Haití del periodista Milo Milfort para Listín Diario y CONNECTAS. Esta investigación se realizó con el apoyo del International Center for Journalists (ICFJ), en el marco de la Iniciativa para el Periodismo de Investigación en las Américas.</p>
          <br/>
        </div>
    </div>
  )
}

export default About