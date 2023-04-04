import React from "react";
// import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
            <header id="header">
                <div className="inner">
                    <div className="header">
                        <h1 className="main_logo">
                            {/* <img src="../images/chatgpt-logo.png" alt="메인로고" /> */}
                        </h1>
                        <nav className="gnb">
                            <ul className="gnb_link_list">
                                <li className="link_item active"><span>HOME</span></li>
                                <li className="link_item"><span>ABOUT ME</span></li>
                                <li className="link_item"><span>SKILLS</span></li>
                                <li className="link_item"><span>PROJECTS</span></li>
                                <li className="link_item"><span>CONTACT</span></li>
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