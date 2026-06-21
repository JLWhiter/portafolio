import Footer from "./components/Footer";
import Proyectos from "./components/Proyectos";
import Panel from "./components/Panel";

export default function Home() {
  return (
    <main className="contenedor">
      <div className="inside bg-amber-50 text-black w-[250px] z-2 border-r-2 p-2 ">
        <Panel />
      </div>

      <div className="content p-3">
        

        <section  className="seccion" id="sobre-mi">
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

      <div className="footer">
        <Footer />
      </div>
    </main>
  );
}