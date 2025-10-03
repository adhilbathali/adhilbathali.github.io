import React from "react"
import Lottie from "lottie-react"
import ContactForm from "../components/ContactForm"
import "../styles/contact-page.css"


import contentModeration from "../assets/lottie-animations/Content Moderation.json"
import developers from "../assets/lottie-animations/Developer discussing different options.json"
import webdesigner from "../assets/lottie-animations/Web designer setting up web layout.json"
import salesman from "../assets/lottie-animations/business-salesman.json"
import signing from "../assets/lottie-animations/Singing Contract.json"
import userInterface from "../assets/lottie-animations/User Interface.json"


import { useEffect } from "react";


export default function Contact(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <div className="contact-main">
            <div className="heading">
                <h1>Let's Connect</h1>
                <p>Have a question, a project in mind, or just want to say hi? Drop me a message and I'll get back to you soon!</p>
            </div>
        
            <div className="contact-info-container">
                <div className="contact-info">adhilbathali@gmail.com</div>
                <div className="contact-info">+91 7012996798</div>
                <div className="contact-info">Ernakulam, India</div>
            </div>
            <hr className="contact-hr" />
            <div className="contact-centre">
                <ContactForm />
                <div className="lottie-container">
                    <Lottie className="contact-lotties" animationData={contentModeration} loop={true} />
                    <Lottie className="contact-lotties" animationData={developers} loop={true} />
                    <Lottie className="contact-lotties" animationData={userInterface} loop={true} />
                </div>
            </div>
            {/* <div className="lottie-container">
                <Lottie className="contact-lotties" animationData={webdesigner} loop={true} />
                <Lottie className="contact-lotties" animationData={salesman} loop={true} />
                <Lottie className="contact-lotties" animationData={signing} loop={true} />
            </div> */}
        </div>
    )
}