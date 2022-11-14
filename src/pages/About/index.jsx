import Collapse from '../../components/Collapse'
import banner from '../../assets/banner_about.png'
import '../../styles/pages/About.css'

function About() {
    const dataAbout = [
        {
            "title": "Fiabilité",
            "content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        },
        {
            "title": "Respect",
            "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            "title": "Service",
            "content": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },
        {
            "title": "Sécuritré",
            "content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        },
   
    ]
    return(
        <main className="main-wrapper">
            <div className='banner-home'>
                <img src={banner} alt="banner-img" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className='about-container'>
                {dataAbout.map(({title, content}) => (
                    <Collapse title={title} content={content} key={title} />
                ))}
            </div>
        </main>
    )
}

export default About