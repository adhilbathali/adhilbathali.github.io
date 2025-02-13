import { useState, useEffect } from "react"
import '../styles/text-cycle.css'
export default function TextCycle(){

    const texts = ["\"I develop full-stack applications\"", "\"I design intelligent AI models\"", "\"I create immersive digital experiences\""]
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(()=>{
            setIndex((prevIndex)=>(prevIndex + 1) % texts.length)
        }, 3000)

        return ()=>clearInterval(interval)
    }, [])

    return(
        <div className='text-container'>
            {
                texts.map((text, i)=>(<h3 key={i} className={`text ${i === index ? "fade-in" : "fade-out"}`}>{text}</h3>))
            }
        </div>
    )
}