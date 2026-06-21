"use client";
import { Moon, Sun } from "@deemlol/next-icons"
import { useState } from "react";



export default function Panel() {
  const [ModoOscuro, setModoOscuro] = useState(false);
  function cambioDarck() {

    setModoOscuro(!ModoOscuro);

    if (!ModoOscuro) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark");
    }
  }
  return (
    <div className="p-5">
      <div >
        <img alt="foto-perfil"></img>
      </div>

      <div className="descripcion ">
        <p className="saludo">Hola, soy</p>
        <h1>José Luis Chamorro Baldera</h1>
        <h2>Estudiante de Ingeniería de Software</h2>
        <p>
          Me gusta el desarrollo web, las bases de datos y crear soluciones
          digitales que sean útiles, modernas y fáciles de usar.
        </p>

        <div className="botones">
          <ul>
            <li>
              <a href="#proyectos" className="boton-principal hvr-border-fade hvr-float-shadow" >
                Ver proyectos
              </a>
            </li>
            <li>
              <a href="#contacto" className="boton-secundario hvr-border-fade hvr-float-shadow">
                Contacto
              </a>

            </li>
            <li>
              <a
                id="ModoOscuro"
                onClick={cambioDarck}
                className="boton-secundario hvr-border-fade hvr-float-shadow"
              >
                <div id="contenedor_dark">
                  {ModoOscuro ? <Moon /> : <Sun />}
                </div>
              </a>
            </li>
          </ul>
        </div>  
      </div>
    </div>
  );
}