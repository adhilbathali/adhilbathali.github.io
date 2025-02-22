import "../styles/footer.css"
import logo from "../assets/adhilBathali-logo/default-monochrome-white.svg"
import NewsLetter from "./NewsLetter"

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
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Projects</a>
                        <a href="">Blog</a>
                        <a href="">Contact</a>
                    </div>
                    <div className="follow-me">
                        <h3>Follow Me</h3>
                        <a href="https://www.linkedin.com/in/adhilbathali/" target="blank">LinkedIn</a>
                        <a href="https://github.com/adhilbathali" target="blank">GitHub</a>
                    </div>
                    <div className="contacts">
                        <h3>Contact</h3>
                        <a href="mailto:adhilbathali@gmail.com" target="blank">
                            <p>adhilbathali@gmail.com</p>
                        </a>
                        <a href="https://wa.me/7012996798" target="blank">Whatsapp</a>
                        <p>Ernakulam, Kerala</p>
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