import { useState } from "react";
import "./debug.css";

const VIDEO_BG = "/images/videoplayback.mp4";
const BRIAN_IMG = "/images/brian.jpg";

// sinopse e dados do filme
const filmData = {
  title: "Velozes & Furiosos 5",
  year: 2011,
  director: "Justin Lin",
  bilheteria: "US$ 626 milhões",
  rating: "7.3 / 10 (IMDb)",
  synopsis: "No quinto capítulo da franquia, Dom Toretto e Brian O'Connor se veem encurralados no Rio de Janeiro após fugirem da lei americana. Sem saída e com Mia grávida, os dois decidem montar um time de elite para roubar 100 milhões de dólares do corrupto empresário Hernan Reyes, o homem que controla o crime organizado da cidade. O plano é simples na teoria: um golpe único, definitivo, e depois liberdade para sempre. Mas a missão se complica quando o implacável agente Luke Hobbs chega ao Brasil com uma força-tarefa para capturá-los. Com perseguições explosivas pelas ruas do Rio, um elenco reunido dos filmes anteriores e a maior cena de ação da saga, Fast Five é amplamente considerado o melhor filme de toda a franquia.",
};

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
      text:  "A perseguição final com os cofres pelas ruas do Rio é considerada uma das cenas mais marcantes da franquia, e Brian ao volante do Subaru azul virou um símbolo para os fãs de Paul Walker.",
    },
    {
      label: "Curiosidade sobre o personagem",
      text:  "Brian O'Connor foi originalmente criado como um agente disfarçado enviado para infiltrar o grupo de Dom Toretto. Ao longo dos filmes, ele abandona sua carreira no FBI para proteger as pessoas que passou a considerar família.",
    },
    {
      label: "Legado de Paul Walker",
      text:  "Paul Walker faleceu em novembro de 2013 durante as filmagens de Velozes & Furiosos 7. O filme foi finalizado com o auxílio de seus irmãos Cody e Caleb como dublês digitais, e a cena de despedida de Brian emocionou fãs do mundo inteiro.",
    },
  ],
};

// elenco
const castData = [
  {
    name: "Paul Walker",
    role: "Brian O'Connor",
    photo: "/images/brian.jpg",
    bio: "Paul William Walker IV foi um ator americano que se tornou mundialmente famoso ao interpretar Brian O'Connor na franquia Velozes & Furiosos. Antes dos filmes, ele já tinha experiência em televisão e cinema teen nos anos 90, mas foi ao lado de Vin Diesel em 2001 que sua carreira decolou. Brian O'Connor cresceu junto com ele ao longo dos filmes, de agente infiltrado a foragido, de parceiro a irmão de família. Paul faleceu em novembro de 2013 num acidente de carro em Santa Clarita, Califórnia, aos 40 anos, deixando um legado de lealdade tanto dentro quanto fora das telas.",  },
  {
    name: "Vin Diesel",
    role: "Dominic Toretto",
    photo: "/images/vin_diesel.jpg",
    bio: "Mark Sinclair, conhecido como Vin Diesel, é ator, produtor e diretor americano. Ele não apenas protagoniza a franquia como também a produz, sendo peça central nas decisões criativas da saga. Dom Toretto nasceu como um personagem secundário de um artigo de revista sobre rachas ilegais, e Diesel o transformou num ícone cultural. Além de Velozes & Furiosos, ele é conhecido pela voz de Groot no universo Marvel e pela franquia xXx. Para Diesel, a saga é pessoal, ele frequentemente fala sobre o vínculo real de amizade que tinha com Paul Walker e como isso moldou a química entre Dom e Brian.",  },
  {
    name: "Jordana Brewster",
    role: "Mia Toretto",
    photo: "/images/jordana_mia.jpg",
    bio: "Jordana Brewster é atriz americana nascida no Panamá e criada em Nova York. Ela estava presente desde o primeiro filme da franquia, em 2001, interpretando Mia Toretto, irmã de Dom e interesse amoroso de Brian. Formada em literatura inglesa por Yale, Jordana sempre equilibrou a carreira artística com os estudos. Em Fast Five, o papel de Mia ganha nova dimensão: ela está grávida do filho de Brian, o que adiciona peso emocional real ao golpe que o grupo precisa realizar para garantir a liberdade da família.",  },
  {
    name: "Dwayne Johnson",
    role: "Luke Hobbs",
    photo: "/images/dwayne-j.jpg",
    bio: "Dwayne Johnson, o 'The Rock', é ator e ex-lutador profissional de wrestling americano. Sua entrada em Fast Five como o agente Luke Hobbs marcou uma virada na franquia, ele chegou como antagonista, mas o carisma foi tão grande que o personagem voltou em vários filmes seguintes e ganhou até um spin-off próprio, Hobbs & Shaw, em 2019. Johnson é conhecido por se dedicar intensamente a cada papel fisicamente, e sua primeira cena perseguindo Dom pelas favelas do Rio é considerada uma das apresentações de personagem mais impactantes de toda a saga.",  },
  {
    name: "Tyrese Gibson",
    role: "Roman Pearce",
    photo: "/images/tyrese-gibson.jpg",
    bio: "Tyrese Darnell Gibson é ator, cantor e modelo americano nascido em Los Angeles. Ele entrou na franquia no segundo filme, 2 Fast 2 Furious, como Roman Pearce, amigo de infância de Brian e seu parceiro de fuga. Roman é o alívio cômico do grupo, sempre reclamando do perigo mas nunca abandonando os companheiros. Fora da franquia, Tyrese tem carreira solo na música com vários álbuns de R&B e é ativista vocal nas redes sociais. Em Fast Five, seu roman reforça o lado humano e bem-humorado do time, equilibrando a seriedade das cenas de ação.",  },
  {
    name: "Ludacris",
    role: "Tej Parker",
    photo: "/images/ludacris.jpg",
    bio: "Christopher Brian Bridges, o Ludacris, é rapper, produtor musical e ator americano natural de Champaign, Illinois. Ele estreou na franquia também em 2 Fast 2 Furious como Tej Parker, o especialista em tecnologia e comunicações do grupo. Antes de virar ator, Ludacris já era um dos maiores nomes do rap americano dos anos 2000, com hits como 'Move Bitch' e 'Stand Up'. Em Fast Five, Tej assume papel central no planejamento do golpe, coordenando a equipe nos bastidores. Ao longo da saga, o personagem evoluiu de mecânico de garagem para gênio operacional de missões internacionais.",  },
];

const sections = ["Sobre o Filme", "Brian O'Connor", "Elenco"];

export default function App() {
  const [activeSection, setActiveSection] = useState(0); // Seção ativa do menu
  
    const [openCuriosities, setOpenCuriosities] = useState(
    brianData.curiosities.map(() => false)
  );
 
  // Alterna uma curiosidade específica pelo índice
  // sem mexer nas outras (spread cria uma cópia do array)
  function toggleCuriosity(index) {
    setOpenCuriosities((prev) => {
      const next = [...prev];       // copia o array atual
      next[index] = !next[index];   // inverte só o índice clicado
      return next;                  // retorna o array atualizado
    });
  }
  
  const [openCast, setOpenCast] = useState(null); // Armazena o ID do item do elenco aberto

  // Alterna o estado do elenco: abre o item selecionado ou fecha se for o mesmo
  function toggleCast(index) {
    setOpenCast(openCast === index ? null : index);
  }

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

    {/* cards informativos */}
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

    {/* brian */}
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

          {/* caixinha de curiosidade (so pra nao esquecer essa parte) */}

                {/* Renderiza uma caixinha para cada item do array curiosities.
                    O .map() percorre o array e cria um bloco para cada um.
                    openCuriosities[i] diz se aquela caixinha está aberta ou não. */}
                {brianData.curiosities.map((item, i) => (
                  <div key={i} className="curiosity-box">
                    <button
                      className="curiosity-btn"
                      onClick={() => toggleCuriosity(i)}
                    >
                      {openCuriosities[i] ? `Ocultar` : item.label}
                    </button>
 
                    {openCuriosities[i] && (
                      <p className="curiosity-text fade-in">{item.text}</p>
                    )}
                  </div>
                ))}   {/* ESSE BLOCO ACABA AQUI */}
              </div>
            </div>
          </section>
        )}

    {/* elenco principal (openCast) */}
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

{/* footer */}
      <footer className="footer">
        <p>
          Em memória de <strong>Paul Walker</strong> (1973–2013) · “For Paul” 🕊️
        </p>
      </footer>
    </div>
  );
}