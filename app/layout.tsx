import type { Metadata } from "next";
import Script from "next/script";
import "./estilos/maqueta.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio | José Luis",
  description: "Portafolio personal de José Luis Chamorro Baldera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css"/>
      </head>

      <body>
        {children}
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <Script>{`
          AOS.init({
            duration: 1000
          });
        `}</Script> 
      </body>
    </html>
  );
}