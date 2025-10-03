import { useState, useEffect } from "react"
import '../styles/text-cycle.css'
export default function TextCycle(){

    const texts = ["Understanding the Requirements", "Designing the Solution", "Development & Launch"]
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