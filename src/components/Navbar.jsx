import portfolioLogo from "../assets/adhilBathali-logo/default-monochrome.svg"
import { useState } from "react"
import "../styles/navbar.css"
import Resume from '../assets/Muhammed_Adhil_P_Resume.pdf'
import { Link } from "react-router-dom";



export default function Navbar(){

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = ()=>{
        setMenuOpen(!menuOpen)
    }

    return(
        <nav className="navbar">

            {/* logo */}
            <div className="logo-container">
                <img className="logo" src={portfolioLogo} alt="adhilBathali" />
            </div>

            {/* desktop nav */}
            <ul className="nav-links-desktop">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

            {/* menu-icon */}
            <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu} >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* mobile nav */}
            <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
                <ul >
                    <li>
                        <Link to="/" onClick={toggleMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={toggleMenu}>About</Link>
                    </li>
                    <li>
                        <Link to="/projects" onClick={toggleMenu}>Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}