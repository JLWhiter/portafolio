import Footer from "./components/Footer";
import Contenido from "./data/contenido";
import Panel from "./components/Panel";

export default function Home() {
  return (
    <main className="contenedor">
      <div className="inside text-black w-[250px] z-2 p-4 ">
        <Panel />
      </div>

      <div className="content p-3">
        <Contenido />
      </div>        
      <div className="footer">
        <Footer />
      </div>

    </main>
  );
}