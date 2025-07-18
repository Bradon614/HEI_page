export default function Team () {
    return <>
    <div className="team">
        <div className="intro">
        <h1>L'équipe pédagogique</h1>

            <p>Notre équipe pédagogique se compose 
             d’experts nationaux et internationaux 
             de l’informatique, de la cybersécurité, 
             de l’intelligence artificielle, dont un 
             ingénieur chez Google. Ils sont passionnés par 
             l’informatique et sont engagés vers l’excellence. 
             Nous sommes conscients que cette équipe est
              la pierre angulaire de l’employabilité de nos étudiants, 
              elle a été soigneusement sélectionnée.
            </p >
        </div>

        <div className="equipes">

            <div className="slide-img">
                <img src="src/image/Mirado.webp" className="mickey" alt="" />
                <h1>Mirado RAFENOMAHENINTSOA</h1>
                <p>Data and Business Intelligence Specialist 5+</p>
            </div>

            <div className="slide-img">
                <img src="src/image/Lou.jpg" className="mickey" alt="" />
                <h1>Dr Lou Maurica</h1>
                <p>Docteur-Ingenieur en informatique | Fondateur  </p>
                <p> et Directeur pédagogique de HEI</p>
            </div>
        </div>
    </div>
    </>
}