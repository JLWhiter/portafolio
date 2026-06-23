import Footer from "./components/Footer";
import Contenido from "./data/contenido";
import Panel from "./components/Panel";

export default function Home() {
  return (
    <main className="contenedor">
        <Panel />

        <Contenido />
        
        <Footer />

    </main>
  );
}