import portfolioLogo from "../assets/adhilBathali-logo/default-monochrome.svg"
import { useState } from "react"
import "../styles/navbar.css"

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
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
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
                    <li><a href="" onClick={toggleMenu}></a>Home</li>
                    <li><a href="" onClick={toggleMenu}></a>About</li>
                    <li><a href="" onClick={toggleMenu}></a>Projects</li>
                    <li><a href="" onClick={toggleMenu}></a>Blog</li>
                    <li><a href="" onClick={toggleMenu}></a>Contact</li>
                </ul>
            </div>
        </nav>
    )
}