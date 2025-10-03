import "../styles/services-section.css"
import Lottie from "lottie-react"

import { useState, useEffect } from "react"

import chatAutomating from "../assets/lottie-animations/chat-automation.json"
import scaledAutomating from "../assets/lottie-animations/automation-scaled.json"
import webdev from "../assets/lottie-animations/webdev.json"
import pinkdev from "../assets/lottie-animations/pinkdev.json"
import aiBot from "../assets/lottie-animations/ai-chat-bot.json"
import checkMark from "../assets/lottie-animations/check_mark.json"

export default function Services(){

    return(
        <section className="services">
            <div className="services-heading">
                <h1>Services</h1>
                <h3>Empowering Businesses with Smart Tech Solutions</h3>
                <p>Every business faces challenges—manual tasks slow you down, outdated systems limit growth, and customer engagement feels like a struggle. That’s where I come in. I build AI-powered automation, full-stack applications, and intelligent assistants to streamline your operations, boost efficiency, and enhance user experience. Whether you need custom tech solutions or expert guidance, I help you leverage the right technology to scale smarter and grow faster.</p>
            </div>
            <div className="services-container">
                <div className="service">
                    <div className="service-content">
                        <h2>AI-Powered Automation Systems</h2>
                        <p>AI-Powered Automation Systems streamline repetitive tasks, reduce errors, and boost efficiency. From workflow automation to AI-driven data processing and chatbots, we help businesses save time and scale faster. Get in touch to automate your operations!</p>
                    </div>
                    <div className="service-lottie-container">
                        <Lottie animationData={scaledAutomating} loop={true} className="service-lottie" />
                    </div>
                </div>
                <div className="service">
                    <div className="service-content">
                        <h2>Full-Stack Application Development</h2>
                        <p>Full-Stack Application Development – I build scalable, high-performance web and mobile applications with modern frontend and backend technologies. From intuitive UI/UX to robust databases and APIs, I create seamless digital experiences. Let’s build something amazing</p>
                    </div>
                    <div className="service-lottie-container">
                        <Lottie animationData={pinkdev} loop={true} className="service-lottie" />
                    </div>
                </div>
                <div className="service">
                    <div className="service-content">
                        <h2>Web Agents & AI Assistants</h2>
                        <p>Web Agents & AI Assistants – Enhance user experience and automate interactions with AI-powered chatbots and virtual assistants. From customer support automation to personalized recommendations, I develop smart solutions that improve engagement and efficiency. Let’s build your AI assistant</p>
                    </div>
                    <div className="service-lottie-container">
                        <Lottie animationData={aiBot} loop={true} className="service-lottie" />
                    </div>
                </div>
                <div className="service" id="consultation">
                    <div className="service-content">
                        <h2>Tech Consultation & Custom Solutions</h2>
                        <p>Tech Consultation & Custom Solutions – Get expert guidance and tailored technology solutions for your business. From system architecture planning to AI-driven automation and software development, I help you choose the right tech to scale efficiently. Let’s find the best solution for you</p>
                    </div>
                    <div className="service-lottie-container">
                        <Lottie animationData={webdev} loop={true} className="service-lottie" />
                    </div>
                </div>
            </div>
        </section>
    )
}