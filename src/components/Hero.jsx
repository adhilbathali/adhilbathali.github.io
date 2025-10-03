import '../styles/hero.css'
import TextCycle from './TextCycle'
import { Link } from "react-router-dom";


export default function Hero(){
    return(
        <main>
            <div className="hero">
                <div className='hero-left'>
                    <div className='hero-portrait'>
                        <img src="/juggling1.png" alt="" />
                    </div>
                    <TextCycle />
                </div>
                <div className="hero-right">
                    <div className="hero-cap">
                        <h1>Your <span className="vision-text">Vision </span>, My Code<br /> Let's Create the <span className="extraordinary-text">Extraordinary</span></h1>
                    </div>
                    <div className="hero-cta-btns">
                        <Link to='./projects'><button className='my-works-btn'>Explore My Works</button></Link>
                        <Link to="./contact"><button className='collaborate-btn'>Let's Collaborate</button></Link>
                    </div>
                </div>
            </div>
        </main>
    )
}