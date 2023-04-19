import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ProgressBar from "../ProgressBar";

const Header = () => {
    return(
        <>
            <header id="header">
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