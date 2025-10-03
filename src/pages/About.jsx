import AboutPara from "../components/AboutPara"
import TBR from "../components/TBR"
import { useEffect } from "react"

export default function About(){

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);

    return(
        <>
            <AboutPara />
            <TBR />
        </>
    )
}