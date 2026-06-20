import { GitHub } from "@deemlol/next-icons"

export default function Proyectos() {
    return (
        <div className="proyectos">
            <div className="proyecto">
                <div>
                <h3 className="relative text-xl justify-items-center ">Sistema de Facturación</h3>
                <p className="text-md text-justify w-[90%]"  >
                    Sistema para registrar ventas, generar boletas o facturas y
                    controlar el stock de productos.
                </p>
                <a href="https://github.com/josebaldera/facturacion" target="_blank" 
                    rel="noopener noreferrer">
                    <GitHub size={24} className="relative top-[50px] max-md:top-[20px]" />
                </a>
                </div>
            </div>

            <div className="proyecto">
                <div>
                <h3 className="relative text-xl justify-items-center">Base de Datos MongoDB</h3>
                <p className="text-md text-justify w-[90%]"  >
                    Proyecto de gestión de devoluciones usando colecciones, usuarios,
                    productos, ventas y consultas en MongoDB.
                </p>
                <a href="https://github.com/josebaldera/mongodb" target="_blank" rel="noopener noreferrer">
                    <GitHub size={24} className="relative top-[20]" />
                </a>
                </div>
            </div>

            <div className="proyecto">
        
                <div>

                    <h3 className="relative text-xl justify-items-center">
                        Portafolio Web
                    </h3>

                    <p className="text-md text-justify w-[90%]"  >
                        Página personal desarrollada con Next.js para mostrar información,
                        habilidades y proyectos académicos.
                    </p>
                    <a href="https://github.com/JLWhiter/portafolio" target="_blank">
                        <GitHub className="relative top-[20px]" />
                    </a>

                </div>
            </div>
        
        </div>
    );
}