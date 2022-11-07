import '../styles/components/Footer.css'
import logo from '../assets/logo_footer.png'


function Footer() {
    return(
        <footer className="footer">
            <div className='bloc-footer'>
                <img src={logo} alt="footer-img" />
            </div>
            <div className='bloc-footer'>
                <h2>© 2020 Kasa. All rights reserved</h2>
            </div>
        </footer>
    )
}

export default Footer