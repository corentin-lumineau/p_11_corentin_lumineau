import { Link } from "react-router-dom"
import '../styles/pages/Error.css'

function Error() {
    return(
        <main className="error-container">
            <div>
                <h1 className="error-title">404</h1>
                <p className="error-message">Oups ! La page que vous demandez n'existe pas.</p>
            </div>
            <Link to="/">Retournez sur la page d'accueil</Link>
        </main>
    )
}

export default Error