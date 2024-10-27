import Image from "next/image";
import "./globals.css"
export default function Home() {
  return (
    <div className="center">
      <div className="popup-inicial">
        <h2>Antes de começar a jogatina.</h2>
        <p>Nosso simulador de Caixar se passa em um mundo imaginário e fictício. Se quiser pode se contextualizar com ele vendo o video de introdução ou pular.</p>
                        <iframe src="https://www.youtube.com/embed/zmu51Xlh3tc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
      </div>
    </div>
  );
}
