import React from "react";
// import { Link } from "react-router-dom";
import "../scss/Style.scss";

const Header = () => {
    return(
        <>
            <header id="header">
                <div className="container">
                    <div className="inner">
                        <div className="header">
                            <h1 className="main_profil"><span></span></h1>
                            <nav className="gnb">
                                <div className="main_logo">
                                    <h2>Logo</h2>
                                </div>
                                <ul className="gnb_link_list">
                                    <li><span>HOME</span></li>
                                    <li><span>ABOUT ME</span></li>
                                    <li><span>SKILLS</span></li>
                                    <li><span>PROJECTS</span></li>
                                    <li><span>CONTACT</span></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;