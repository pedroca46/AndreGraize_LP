import logo from "../../images/logo.png"
import './Navbar.css'

function Navbar(){
    return(
        <>
            <div className="main">
                <img src={logo} className="logo"></img>

                <ul className="nav-list">
                    <li className="nav-item"><a href="#">Home</a></li>
                    <li className="nav-item"><a href="#">Sobre</a></li>
                    <li className="nav-item"><a href="#">Contato</a></li>
                    <li className="nav-item"><a href="#">Blog</a></li>
                    <li className="nav-item"><a href="#">Services for Foreigners - EN</a></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar