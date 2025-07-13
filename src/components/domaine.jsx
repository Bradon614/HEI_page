export default function Domaines() {
  return (
    <div className="domaines-container">
      <div className="domaines-header">
        <h2>Domaines</h2>
        <p>
          Au cours de vos trois ans de formation, naviguez entre les domaines
          les plus porteurs du numérique du présent et de l’avenir :
        </p>
      </div>

      <div className="domaines-grid">
        <div className="domaine-card">
          <div className="domaine-img">{ <img src="src/image/Cloud-et-cybersecurite_Plan-de-travail-1-100x100.png" alt="cloud" />}</div>
          <h3 className="title blue">Cloud et cybersécurité</h3>
          <p>
            Maîtrisez les engrenages des outils en ligne interconnectés sur les
            nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation
            des données en ligne ou des programmes et applications contre les
            cybermenaces. Chez HEI, vous allez vous former dans ce domaine clé.
          </p>
        </div>

        <div className="domaine-card">
          <div className="domaine-img">{<img src="src/image/Intelligence-artificielle_Plan-de-travail-1-100x100.png" alt="AI" />}</div>
          <h3 className="title gold">Intelligence artificielle</h3>
          <p>
            Le monde de la reconnaissance faciale ou la détection d’obstacles
            par les voitures semi-autonomes vous fascinent ? Ce n’est pas
            sorcier, cela s’apprend. Apprenez les bases de l’intelligence
            artificielle lors de vos cours chez HEI.
          </p>
        </div>

        <div className="domaine-card">
          <div className="domaine-img">{<img src="src/image/Ingenierie-logicielle_Plan-de-travail-1-1-100x100.png" alt="dev" />}</div>
          <h3 className="title orange">Ingénierie logicielle</h3>
          <p>
            Apprenez les principes de la conception ou le développement de
            programmes et d’applications web et mobile et explorez le monde
            fascinant des “codes”. À la fin de votre formation, vous serez aptes
            à proposer des solutions pratiques, créatives et innovantes à des
            défis numériques réels.
          </p>
        </div>
      </div>
    </div>
  );
}
