import Footer from "./components/footer";
import Contenido from "./data/contenido";
import Panel from "./components/panel";

export default function Home() {
  return (
    <main className="contenedor">
        <Panel />

        <Contenido />
        
        <Footer />

    </main>
  );
}