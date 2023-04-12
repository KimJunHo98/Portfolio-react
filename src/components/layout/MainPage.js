import React from "react";
import { useEffect } from "react";
import About from "../main/About";
import Skill from "../main/Skill";
import Projects from "../main/Projects";
import Contact from "../main/Contact";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const MainPage = () => {
    // aos
    useEffect(() => {
        AOS.init();
    });

    return(
        <>  
            <main> 
                <About />
                <Skill />
                <Projects />
                <Contact />
            </main>
        </>
    );
}
export default MainPage;

