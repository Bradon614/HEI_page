export default function About() {
    return <>

    <div className="about-all">
        <div className="about-img">
            <div className="image__behind">
                <img src="/image/mypic.png" className="mypic" alt="" />
            </div>

            <div className="image__front">
                <img src="/image/otherpic.jpeg" className="otherpic" alt="" />
            </div>
        </div>

        <div className="about">
            <h1>À propos de nous</h1>

            <div className="container">
                <div className="icon">
                    <i></i>
                    <span>+3ans</span>
                </div>

                <div>
                    Depuis 3 ans, nous formons ceux qui décodent le futur,
                    aux métiers de l’informatique. Nous sommes un groupe d’experts,
                    de professionnels et des passionnés de l’informatique
                    de Madagascar et du monde entier.
                </div>

            </div>

            <div className="container">
                <div className="icon">
                    <i></i>
                    <span>+250 étudiants</span>
                </div>

                <div>
                    Plus de 250 étudiants et plus d’une dizaine d’entreprises
                    ont déjà fait confiance à notre formation habilitée par
                    l’État malgache. Avec eux tous, nous sommes fiers de
                    pouvoir parler de la “grande famille HEI”.
                </div>

            </div>

            <div className="container">
                <div className="icon">
                    <i></i>
                    <span>Notre mission</span>
                </div>

                <div>
                    Notre mission est d’amener des jeunes malgaches sur des
                    domaines porteurs comme l’intelligence artificielle,
                    la cybersécurité ou la programmation afin de favoriser
                    leur employabilité et le développement de Madagascar.
                </div>

            </div>
        </div>
    </div>
    </>
}