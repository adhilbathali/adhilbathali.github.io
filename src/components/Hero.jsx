import '../styles/hero.css'
import TextCycle from './TextCycle'

export default function Hero(){
    return(
        <main>
            <div className="hero">
                <div className='hero-left'>
                    <div className='hero-portrait'>
                    </div>
                    <TextCycle />
                </div>
                <div className="hero-right">
                    <div className="hero-cap">
                        <h1>Your <span className="vision-text">Vision </span>, My Code<br /> Let's Create Something <span className="extraordinary-text">Extraordinary</span></h1>
                    </div>
                    <div className="hero-cta-btns">
                        <button className='my-works-btn'>Explore My Works</button>
                        <button className='collaborate-btn'>Let's Collaborate</button>
                    </div>
                </div>
            </div>
        </main>
    )
}