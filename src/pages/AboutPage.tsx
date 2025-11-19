//import React from 'react'

export const AboutPage = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-center text-4xl font-semibold tracking-tight mb-5">
        Nosotros
      </h1>

      {/* Imagen de fondo */}
      <img src="" alt="Imagen de fondo" />

      <div className="flex flex-col gap-4 tracking-tighter leading-7 text-sm font-medium text-slate-800">
        <p>
          PrintopiaMx es una empresa mexicana dedicada a transformar ideas en realidad 
          mediante impresión 3D en filamento y resina.
        </p>
        <p>
          Su fundadora siempre ha sentido una profunda pasión por la creación y por la posibilidad de convertir lo imaginario en algo tangible.
          Lo que comenzó como pequeños proyectos personales y piezas únicas para amigos, 
          evolucionó hasta convertirse en un servicio profesional 
          capaz de ofrecer soluciones personalizadas a personas y negocios con necesidades y sueños muy diversos.
        </p>
        <p>
          En PrintopiaMx se fabrican desde maquetas arquitectónicas y llaveros empresariales, 
          hasta figuras coleccionables, props de cosplay y piezas especiales para proyectos creativos. 
          Cada pieza se diseña con detalle y se imprime con precisión, 
          entendiendo que detrás de cada pedido hay una historia, una pasión o un proyecto importante para el cliente.
        </p>
        <p>
          Aunque la empresa nació en Campeche, México, sus creaciones pueden enviarse a cualquier parte del país. 
          PrintopiaMx se inspira en la manera en que la tecnología se integra 
          con la cultura, el arte y la vida cotidiana de las personas.
        </p>
        <p>
          Hoy, PrintopiaMx es más que un taller de impresión 3D: es un espacio donde las ideas cobran forma.
          La impulsa la creatividad, la innovación y la satisfacción de ver a cada cliente sostener en sus manos 
          algo que antes solo existía en su imaginación.
        </p>
      </div>
    </div>
  );
}
