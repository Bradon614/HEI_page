export default function Admission() {
  return (
    <div className="admission-container">
      <div className="admission-header">
        <h1>Admission</h1>
        <p>
          Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se
          fait par test de niveau :
        </p>
        <p>
          une épreuve de français niveau B2 et d’une épreuve de mathématiques
          niveau Terminale D.
        </p>
      </div>

      <div className="admission-steps">
        <div className="step-box" style={{ backgroundColor: '#c7b385ff' }}>
          <h2>01</h2>
          <span>Dépôt de dossiers :</span> pour les bacheliers de toutes séries sans limite d’âge
        </div>
        <div className="step-box" style={{ backgroundColor: '#caa581ff' }}>
          <h2>02</h2>
          <span>Test de niveau :</span> composé d’une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D
        </div>
        <div className="step-box" style={{ backgroundColor: '#d2ba20ff' }}>
          <h2>03</h2>
          <span>Inscription définitive</span> (si test réussi)
        </div>
      </div>

      <div className="admission-buttons">
        <button className="btn primary">Inscrivez-vous ici</button>
        <button className="btn secondary">Résultat concours</button>
      </div>
    </div>
  );
}
