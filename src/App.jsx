import { useState } from "react";
import "./debug.css";

const VIDEO_BG = "/images/videoplayback.mp4";
const BRIAN_IMG = "/images/brian.jpg";

const filmData = {
  title: "Velozes & Furiosos 5",
  year: 2011,
  director: "Justin Lin",
  bilheteria: "US$ 626 milhões",
  rating: "7.3 / 10 (IMDb)",
  synopsis:
    "Dom Toretto e Brian O'Connor reúnem sua equipe para um último grande golpe nas ruas do Rio de Janeiro, enfrentando um poderoso chefão do crime e uma força-tarefa federal implacável.",
};

const brianData = {
  name: "Brian O'Connor",
  actor: "Paul Walker",
  description:
    "Ex-agente federal que cruzou para o outro lado da lei por lealdade e amor. Em Fast Five, Brian está foragido com Dom e Mia, esperando um filho e tentando garantir a liberdade de sua família através de um último e arriscado golpe no Rio de Janeiro.",
  traits: ["Leal", "Corajoso", "Piloto nato", "Protetor"],
  curiosity:
    "A perseguição final com os cofres pelas ruas do Rio é considerada uma das cenas mais marcantes da franquia, e Brian ao volante do Subaru azul virou um símbolo para os fãs de Paul Walker.",
};

const castData = [
  {
    name: "Paul Walker",
    role: "Brian O'Connor",
    photo: "/images/brian.jpg",
    bio: "Ator americano que imortalizou Brian O'Connor na franquia. Faleceu em 2013 e segue lembrado com muito carinho pelos fãs.",
  },
  {
    name: "Vin Diesel",
    role: "Dominic Toretto",
    photo: "/images/vin_diesel.jpg",
    bio: "Protagonista da franquia e produtor. Dom Toretto se tornou o centro emocional da saga ao longo dos filmes.",
  },
  {
    name: "Jordana Brewster",
    role: "Mia Toretto",
    photo: "/images/jordana_mia.jpg",
    bio: "Atriz que interpreta Mia Toretto, irmã de Dom e companheira de Brian, presente desde o início da franquia.",
  },
  {
    name: "Dwayne Johnson",
    role: "Luke Hobbs",
    photo: "/images/dwayne-j.jpg",
    bio: "Entrou em Fast Five como o agente Hobbs, trazendo presença física e energia nova para a saga.",
  },
  {
    name: "Tyrese Gibson",
    role: "Roman Pearce",
    photo: "/images/tyrese-gibson.jpg",
    bio: "Responsável por boa parte do humor da equipe, Roman é conhecido pelas falas rápidas e pelo carisma.",
  },
  {
    name: "Ludacris",
    role: "Tej Parker",
    photo: "/images/ludacris.jpg",
    bio: "Tej é o cérebro técnico do grupo, cuidando de estratégia, tecnologia e apoio operacional.",
  },
];

const sections = ["Sobre o Filme", "Brian O'Connor", "Elenco"];

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [showCuriosity, setShowCuriosity] = useState(false);
  const [openCast, setOpenCast] = useState(null);

  function toggleCast(index) {
    setOpenCast(openCast === index ? null : index);
  }

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
          <p className="hero-tag">FRANQUIA FAST & FURIOUS · 2011</p>
          <h1 className="hero-title">VELOZES &amp; FURIOSOS 5</h1>
          <p className="hero-sub">A última corrida começa no Rio</p>
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

      <main className="content">
        {activeSection === 0 && (
          <section className="section fade-in">
            <div className="film-layout">
              <div className="film-text">
                <h2>{filmData.title}</h2>

                <div className="info-grid">
                  <div className="info-card">
                    <span>Ano</span>
                    <p>{filmData.year}</p>
                  </div>
                  <div className="info-card">
                    <span>Diretor</span>
                    <p>{filmData.director}</p>
                  </div>
                  <div className="info-card">
                    <span>Nota</span>
                    <p>{filmData.rating}</p>
                  </div>
                  <div className="info-card">
                    <span>Bilheteria</span>
                    <p>{filmData.bilheteria}</p>
                  </div>
                </div>

                <p className="text-block">{filmData.synopsis}</p>
              </div>
            </div>
          </section>
        )}

        {activeSection === 1 && (
          <section className="section fade-in">
            <div className="brian-layout">
              <aside className="brian-image-box">
                <img
                  src={BRIAN_IMG}
                  alt="Paul Walker como Brian O'Connor"
                  className="brian-img"
                />
                <p className="photo-credit">Paul Walker · 1973–2013</p>
              </aside>

              <div className="brian-text">
                <h2>{brianData.name}</h2>
                <p className="actor-tag">
                  Interpretado por <strong>{brianData.actor}</strong>
                </p>
                <p className="text-block">{brianData.description}</p>

                <div className="traits">
                  {brianData.traits.map((trait) => (
                    <span key={trait} className="trait">
                      {trait}
                    </span>
                  ))}
                </div>

                <div className="curiosity-box">
                  <button
                    className="curiosity-btn"
                    onClick={() => setShowCuriosity(!showCuriosity)}
                  >
                    {showCuriosity ? "Ocultar curiosidade" : "Ver cena icônica"}
                  </button>

                  {showCuriosity && (
                    <p className="curiosity-text fade-in">{brianData.curiosity}</p>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 2 && (
          <section className="section fade-in">
            <h2>Elenco Principal</h2>

            <ul className="cast-list">
              {castData.map((member, index) => (
                <li key={member.name} className="cast-item">
                  <button
                    className="cast-trigger"
                    onClick={() => toggleCast(index)}
                  >
                    <div>
                      <span className="cast-name">{member.name}</span>
                      <span className="cast-role">{member.role}</span>
                    </div>
                    <span className={`cast-arrow ${openCast === index ? "open" : ""}`}>
                      ▼
                    </span>
                  </button>

                  {openCast === index && (
                    <div className="cast-content fade-in">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="cast-photo"
                      />
                      <p className="cast-bio">{member.bio}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>
          Em memória de <strong>Paul Walker</strong> (1973–2013) · “For Paul” 🕊️
        </p>
      </footer>
    </div>
  );
}