import { LinkedIn, GitHub } from "@deemlol/next-icons";

export default function Footer() {
  return (
    <footer
      className="relative flex w-full bg-gray-900 text-white 
      items-center justify-center text-center top-[-20px] p-8 gap-12"
    >
      <p>
        © 2024 José Luis Chamorro Baldera. Todos los derechos reservados.
      </p>

      <div className="redes-sociales flex justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/jos%C3%A9-luis-chamorro-baldera-048489320/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 hover:text-gray-500 hover:translate-y-[-2px]"
        >
          <span>LinkedIn</span>
          <LinkedIn size={20} className="inline-block ml-1" />
        </a>

        <a
          href="https://github.com/JLWhiter"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 hover:text-gray-500 hover:translate-y-[-2px]"
        >
          <span>GitHub</span>
          <GitHub size={20} className="inline-block ml-1" />
        </a>
      </div>
    </footer>
  );
}