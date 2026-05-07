import { useState } from "react";
import "./debug.css";

const VIDEO_BG = "/images/yvideo.mp4";
const sections = ["Sobre o Filme"];

export default function App() {
  const [activeSection, setActiveSection] = useState(0); // Seção ativa do menu

  const [yugiohGlobal, setYugiohGlobal] = useState(null) //get e set

  const uri = `https://db.ygoprodeck.com/api/v7/cardinfo.php`

  fetch(uri)
    .then(res => res.json())
    .then(json => {

      setYugiohGlobal(json)
      console.log(json)
    })
    .catch(() => alert("Não foi possivel obter os dados da carta"))


  // pagina inicial
  return (
    <div className="app">
      <header className="hero">
        <video
          className="hero-video"
          src={VIDEO_BG}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="hero-tag">YU-GI-OH! · 1996</p>
          <h1 className="hero-title">YU-GI-OH! API</h1>
          <p className="hero-sub">Cartas e Duelos</p>
        </div>
      </header>

      <nav className="nav">
        {sections.map((section, index) => (
          <button
            key={section}
            className={`nav-btn ${activeSection === index ? "active" : ""}`}
            onClick={() => setActiveSection(index)}
          >
            {section}
          </button>
        ))}
      </nav>

      <div className="labelpesq">
        <label>DIGITE O NOME DA CARTA:</label>
      </div>

      <div className="pesquisar">
        <input type="text" className="psq"></input>
      </div>

    </div>

  );
}