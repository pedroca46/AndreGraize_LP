import logo from "../../images/logo.png"
import './Navbar.css'
import '../../global.css'

function Navbar(){
    return(
        <>
            <div className="main">
                <img src={logo} className="logo"></img>

                <ul className="nav-list">
                    <li className="nav-item"><a href="#home">Home</a></li>
                    <li className="nav-item"><a href="#services">Serviços</a></li>
                    <li className="nav-item"><a href="#footer">Contato</a></li>
                    <a href="https://wa.me/5533998704029" target="_blank"><li className="nav-button">Saiba Mais</li></a>
                </ul>
            </div>
        </>
    )
}

export default Navbar