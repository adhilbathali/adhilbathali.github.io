import portfolioLogo from "../assets/adhilBathali-logo/default-monochrome.svg"
import "../styles/navbar.css"

export default function Navbar(){
    return(
        <nav>
            <div className="logo-container">
                <img className="logo" src={portfolioLogo} alt="adhilBathali" />
            </div>
            <ul>
                <li>Home</li>
                <li>Projects</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}