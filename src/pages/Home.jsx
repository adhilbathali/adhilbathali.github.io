import Hero from "../components/Hero";
import Skills from "../components/Skills";
import AboutPara from "../components/AboutPara";
import Services from "../components/Services";

import { useEffect } from "react";

export default function Home(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
            <Hero />
            <Services />
            <Skills />
        </>
    )
}