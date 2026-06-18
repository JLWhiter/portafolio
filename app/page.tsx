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

        <div data-aos="fade-left" className="tarjeta-perfil" >
          <h3>Sobre mí</h3>
          <p>6to ciclo</p>
          <p>UTP</p>
          <p>Frontend | Backend | BD</p>
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
          <div className="card">HTML</div>
          <div className="card">CSS</div>
          <div className="card">JavaScript</div>
          <div className="card">React</div>
          <div className="card">Next.js</div>
          <div className="card">Java</div>
          <div className="card">PostgreSQL</div>
          <div className="card">MongoDB</div>
        </div>
      </section>

      <section data-aos="fade-up" className="seccion" id="proyectos">
        <h2>Proyectos</h2>
        <div className="proyectos">
          <div className="proyecto">
            <h3>Sistema de Facturación</h3>
            <p>
              Sistema para registrar ventas, generar boletas o facturas y
              controlar el stock de productos.
            </p>
          </div>

          <div className="proyecto">
            <h3>Base de Datos MongoDB</h3>
            <p>
              Proyecto de gestión de devoluciones usando colecciones, usuarios,
              productos, ventas y consultas en MongoDB.
            </p>
          </div>

          <div className="proyecto">
            <h3>Portafolio Web</h3>
            <p>
              Página personal desarrollada con Next.js para mostrar información,
              habilidades y proyectos académicos.
            </p>
          </div>
        </div>
      </section>

      <section data-aos="fade-right" className="seccion" id="contacto">
        <h2>Contacto</h2>
        <p>Correo: josebaldera.2021@gmail.com</p>
        <p>Ubicación: Lima, Perú</p>
      </section>
    </main>
  );
}