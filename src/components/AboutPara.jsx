import '../styles/about.css'
import Resume from '../assets/Muhammed_Adhil_P_Resume.pdf'
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


export default function AboutPara(){
    return(

        <section className="about">
            <div>
                <h1>About</h1>
                <hr />
                <p>Hey there, I am <b>Adhil Bathali</b>. As an aspiring entrepreneur and a freelance web developer, I thrive on building impactful solutions through technology. My passion for web development led me to freelance projects like medievallife.ae, a medical supply company website, and paaju.com, where I showcase my work and provide web services. Beyond web development, I’m delving into AI and machine learning, with the goal of fostering a Python community to mentor others and grow together.</p>
            </div>
            <div className='download-resume-btn'>
                <a href={Resume} download="Adhil_Bathali_Resume.pdf" ><button className='download-resume' >Download Résumé</button></a>
                {/* <FontAwesomeIcon icon={ faArrowDown } color='black' /> */}
            </div>
        </section>
    )
}