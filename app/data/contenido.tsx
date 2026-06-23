import Proyectos from "../components/Proyectos"

export default function Contenido() {
    return (
        <div className="Contenido bg-[#ffffff] rounded-xl p-8">
            <section className="seccion" id="sobre-mi">
                <h2>Sobre mí</h2>
                <p>
                    Soy estudiante de Ingeniería de Software. Me interesa aprender nuevas
                    tecnologías, mejorar mis habilidades de programación y desarrollar
                    proyectos que ayuden a resolver problemas reales.
                </p>
            </section>

            <section className="seccion">
                <h2>Habilidades</h2>

                <div className="grid">
                    <div className="card hvr-border-fade hvr-float-shadow">Tailwind</div>
                    <div className="card hvr-border-fade hvr-float-shadow">JavaScript</div>
                    <div className="card hvr-border-fade hvr-float-shadow">React</div>
                    <div className="card hvr-border-fade hvr-float-shadow">Next.js</div>
                    <div className="card hvr-border-fade hvr-float-shadow">Java</div>
                    <div className="card hvr-border-fade hvr-float-shadow">PostgreSQL</div>
                    <div className="card hvr-border-fade hvr-float-shadow">MongoDB</div>
                </div>
            </section>

            <section className="seccion" id="proyectos">
                <h2>Proyectos</h2>
                <Proyectos />
            </section>

            <section className="seccion" id="contacto">
                <h2>Contacto</h2>
                <p>Correo: josebaldera.2021@gmail.com</p>
                <p>Ubicación: Lima, Perú</p>
            </section>
            
        </div>
    );
}