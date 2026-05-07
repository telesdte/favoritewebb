import { useState } from "react";
import "./debug.css";

const VIDEO_BG = "/images/yvideo.mp4";
const BRIAN_IMG = "/images/brian.jpg";

// brian
const brianData = {
  name: "Brian O'Connor",
  actor: "Paul Walker",
  description:
    "Ex-agente federal que cruzou para o outro lado da lei por lealdade e amor. Em Fast Five, Brian está foragido com Dom e Mia, esperando um filho e tentando garantir a liberdade de sua família através de um último e arriscado golpe no Rio de Janeiro.",
  traits: ["Leal", "Corajoso", "Piloto nato", "Protetor"],

  //  curiosidades
  curiosities: [
    {
      label: "Ver cena icônica",
      text: "A perseguição final com os cofres pelas ruas do Rio é considerada uma das cenas mais marcantes da franquia, e Brian ao volante do Subaru azul virou um símbolo para os fãs de Paul Walker.",
    },
    {
      label: "Curiosidade sobre o personagem",
      text: "Brian O'Connor foi originalmente criado como um agente disfarçado enviado para infiltrar o grupo de Dom Toretto. Ao longo dos filmes, ele abandona sua carreira no FBI para proteger as pessoas que passou a considerar família.",
    },
    {
      label: "Legado de Paul Walker",
      text: "Paul Walker faleceu em novembro de 2013 durante as filmagens de Velozes & Furiosos 7. O filme foi finalizado com o auxílio de seus irmãos Cody e Caleb como dublês digitais, e a cena de despedida de Brian emocionou fãs do mundo inteiro.",
    },
  ],
};

const sections = ["Sobre o Filme"];

export default function App() {
  const [activeSection, setActiveSection] = useState(0); // Seção ativa do menu

  const [openCuriosities, setOpenCuriosities] = useState(
    brianData.curiosities.map(() => false)
  );

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
        <input type="text"></input>
      </div>

    </div>
  );
}