import { Link } from 'react-router-dom'
import logo from '../assets/logo_kasa.png'
import '../styles/components/Header.css'

function Header() {
    return(
        <div className="navbar">
            <img src={logo} alt="logo-kasa" className='logo-header' />
            <nav className='header-nav'>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </div>
        
    )
}

export default Header