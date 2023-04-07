import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
    return(
        <>
            <header id="header">
                <div className="inner">
                    <div className="header">
                        <h1 className="main_logo">
                            KimJunHo
                            {/* <img src="../images/chatgpt-logo.png" alt="메인로고" /> */}
                        </h1>
                        <nav className="gnb">
                            <ul className="gnb_link_list">
                                <li className="link_item"><AnchorLink href="#about1">ABOUT ME</AnchorLink></li>
                                <li className="link_item"><AnchorLink href="#skill">SKILLS</AnchorLink></li>
                                <li className="link_item"><AnchorLink href="#projects">PROJECTS</AnchorLink></li>
                                <li className="link_item"><AnchorLink href="#contact">CONTACT</AnchorLink></li>
                            </ul>
                        </nav>
                        <p className="pf">PORTFOLIO</p>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;