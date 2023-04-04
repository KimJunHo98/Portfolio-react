import React from "react";
// import { useNavigate } from "react-router-dom";

const Footer = () => {
    const url1 = "https://github.com/KimJunHo98";
    const url2 = "https://www.notion.so/React-study-note-864d5dffbbfd47c4be4ea9bdabc114cd";

    return(
        <>
            <footer id="footer">
                <div className="inner">
                    <div className="footer">
                        <p className="copy">&copy; KimJunHo</p>
                        <div className="footer_link_wrap">
                            <button className="footer_link" onClick={()=>{window.open(url1)}}>Github</button>
                            <button className="footer_link" onClick={()=>{window.open(url2)}}>Notion</button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;