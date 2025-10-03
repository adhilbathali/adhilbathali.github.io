import "../styles/footer.css"
import logo from "../assets/adhilBathali-logo/default-monochrome-white.svg"
import NewsLetter from "./NewsLetter"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-top">
                <div className="logo-and-newsletter">
                    <div>
                        <img src={logo} alt="Adhil Bathali" className="logo"/>
                    </div>
                    <NewsLetter />
                </div>
                <div className="links-and-contacts">
                    <div className="quick-links">
                        <h3>Quick Links</h3>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/projects">Projects</Link>
                        {/* <Link to="/">Blog</Link> */}
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className="follow-me">
                        <h3>Follow Me</h3>
                        <a href="https://www.linkedin.com/in/adhilbathali/" target="blank"><FontAwesomeIcon className="footer-icon" icon={faLinkedin} />LinkedIn</a>
                        <a href="https://github.com/adhilbathali" target="blank"><FontAwesomeIcon className="footer-icon" icon={faGithub} />GitHub</a>
                    </div>
                    <div className="contacts">
                        <h3>Contact</h3>
                        <a href="mailto:adhilbathali@gmail.com" target="blank">
                            <p><FontAwesomeIcon className="footer-icon" icon={faEnvelope} />adhilbathali@gmail.com</p>
                        </a>
                        <a href="https://wa.me/7012996798" target="blank"><FontAwesomeIcon className="footer-icon" icon={faWhatsapp} />Whatsapp</a>
                        <p><FontAwesomeIcon className="footer-icon" icon={faLocationDot} />Ernakulam, Kerala</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="credits">
                <p>&#169; 2025 Muhammed Adhil P. All Rights Reserved.</p>
            </div>
        </footer>
    )
}