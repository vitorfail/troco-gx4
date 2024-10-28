"use client";
import Image from "next/image";
import "./globals.css"
import { useState } from "react";
export default function Home() {
  const [tela, settela]= useState(false)
  const [ autoplay, setautoplay]= useState("")
  function assistir(){
    settela(true)
    setautoplay("?autoplay=1&mute=0")
  }
  return (
    <div className="center">
      <div className="popup-inicial">
        <h2>Antes de começar a jogatina.</h2>
        <p>Nosso simulador de Caixar se passa em um mundo imaginário e fictício. Se quiser pode se contextualizar com ele vendo o video de introdução ou pular.</p>
         <div className={tela ==false?"tela":"show-tela"} >
          <iframe  src={"https://www.youtube.com/embed/zmu51Xlh3tc"+autoplay} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
         </div>
        <div className="botoes">
          <button className="button-54" onClick={(event)=>assistir()}>Assistir</button>
          <button className="button-54">Pular introdução</button>
        </div>
      </div>
    </div>
  );
}
