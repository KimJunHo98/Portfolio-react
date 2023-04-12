import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ProgressBar from "../ProgressBar";

const Header = () => {
    const [isHeaderActive, setIsHeaderActive] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        
        if (scrollY >= 10047) {
            setIsHeaderActive(true);
        } else {
            setIsHeaderActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <>
            <header id="header" className={isHeaderActive ? "active" : ""}>
                <div className="inner">
                    <div className="header">
                        <h1 className="main_logo">
                            <AnchorLink href="#wrap">KimJunHo</AnchorLink>
                        </h1>
                        <nav className="gnb">
                            <ul className="gnb_link_list">
                                <li className="link_item"><AnchorLink href="#wrap">Home</AnchorLink></li>
                                <li className="link_item"><AnchorLink href="#about2">ABOUT ME</AnchorLink></li>
                                <li className="link_item"><AnchorLink href="#skill">SKILLS</AnchorLink></li>
                                <li className="link_item"><AnchorLink href="#projects">PROJECTS</AnchorLink></li>
                                <li className="link_item"><AnchorLink href="#contact">CONTACT</AnchorLink></li>
                            </ul>
                        </nav>
                        <p className="pf">PORTFOLIO</p>
                    </div>
                </div>
            </header>
            <ProgressBar />
        </>
    );
}
export default Header;