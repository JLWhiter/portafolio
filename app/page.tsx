import Footer from "./components/footer";
import Proyectos from "./components/proyectos";

export default function Home() {
  return (
    <main className="contenedor">
      <section className="inicio">
        <div data-aos="fade-right" className="texto-inicio" >
          <p className="saludo">Hola, soy</p>
          <h1>José Luis Chamorro Baldera</h1>
          <h2>Estudiante de Ingeniería de Software</h2>
          <p>
            Me gusta el desarrollo web, las bases de datos y crear soluciones
            digitales que sean útiles, modernas y fáciles de usar.
          </p>

          <div className="botones">
            <a href="#proyectos" className="boton-principal hvr-border-fade hvr-float-shadow" >
              Ver proyectos
            </a>

            <a href="#contacto" className="boton-secundario hvr-border-fade hvr-float-shadow">
              Contacto
            </a>
          </div>

        </div>

        <div data-aos="fade-left" className="tarjeta-perfil " >
          <h3 >Sobre mí</h3 >
          <p className="hvr-border-fade hvr-float-shadow">6to ciclo</p>
          <p className="hvr-border-fade hvr-float-shadow">UTP</p>
          <p className="hvr-border-fade hvr-float-shadow">Frontend | Backend | BD</p>
        </div>
      </section>

      <section data-aos="fade-up" className="seccion" id="sobre-mi" >
        <h2>Sobre mí</h2>
        <p>
          Soy estudiante de Ingeniería de Software. Me interesa aprender nuevas
          tecnologías, mejorar mis habilidades de programación y desarrollar
          proyectos que ayuden a resolver problemas reales.
        </p>
      </section>

      <section data-aos="fade-up" className="seccion">
        <h2>Habilidades</h2>
        <div className="grid">
          <div className="card hvr-border-fade hvr-float-shadow">tailwind</div>
          <div className="card hvr-border-fade hvr-float-shadow">JavaScript</div>
          <div className="card hvr-border-fade hvr-float-shadow">React</div>
          <div className="card hvr-border-fade hvr-float-shadow">Next.js</div>
          <div className="card hvr-border-fade hvr-float-shadow">Java</div>
          <div className="card hvr-border-fade hvr-float-shadow">PostgreSQL</div>
          <div className="card">MongoDB</div>
        </div>
      </section>

      <section data-aos="fade-up" className="seccion" id="proyectos">
        <h2>Proyectos</h2>
        <Proyectos />
      </section>

      <section data-aos="fade-up" className="seccion" id="contacto">
        <h2>Contacto</h2>
        <p>Correo: josebaldera.2021@gmail.com</p>
        <p>Ubicación: Lima, Perú</p>
      </section>

      <Footer/>
    
    </main>
  );
}