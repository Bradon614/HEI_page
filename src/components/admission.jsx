export default function Admission () {
    return <>
        <div className="admission-containt">
            <div className="admission-txt">
                <h1>Admission</h1>

                <p>Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau :</p>

                <p>une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D. </p>
            </div>

            <div className="admission-table">
                <div className="first">
                    <h1>01</h1>
                    <span>Dépôt de dossiers : </span>pour les bacheliers de toutes séries sans limite d’âge
                </div>

                <div className="second">
                    <h1>02</h1>
                    <span>Test de niveau</span>: composé d’une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D
                </div>

                <div className="third">
                    <h1>03</h1>
                    <span>Inscription définitive</span> (si test réussi)
                </div>
            </div>

            <div className="admission-button">
                <button>Inscrivez-vous ici</button>
                <button>Résultat concours</button>
            </div>
        </div>
    </>
}