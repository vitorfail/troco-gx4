"use client";

import "../globals.css"
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
          <div className="baixa">

          </div>
          <div className="cima">

          </div>
         </div>
    </div>
  );
}
