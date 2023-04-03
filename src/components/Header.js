import React from "react";
// import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
            <header id="header">
                <div className="container">
                    <div className="inner">
                        <div className="header">
                            <nav className="gnb">
                                <div className="main_logo">
                                    <h1 className="logo"><img src="../images/chatgpt-logo.png" alt="메인로고" /></h1>
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