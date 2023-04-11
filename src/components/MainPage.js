import React from "react";
import { useLayoutEffect, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const About = () => {
    const gptRef = useRef(null);
    const jptRef = useRef(null);

    useEffect(() => {
        const gpt = gptRef.current;
        const jpt = jptRef.current;

        const tl = gsap.timeline({ repeat: -1 });

        tl.to(gpt, { duration: 1.3, text: "GPT", ease: "Linear.easeNone" })
        .to(gpt, { duration: 1.1, text: "", ease: "Linear.easeNone" })
        .to(jpt, { duration: 1.3, text: "JPT", ease: "Linear.easeNone" })
        .to(jpt, { duration: 1.1, text: "", ease: "Linear.easeNone" });
    }, []);

    return(
        <>
            <section id="about1">
                <h2 className="ir_so">메인 비주얼</h2>
                <div className="container">
                    <div className="inner">
                        <div className="about1">
                            <div className="about_visual">
                                <div className="about_slog">
                                    <h2 className="slog slog1">끊임없이 배우고 발전하는</h2>
                                    <div className="split_slog">
                                        <p className="slog slog2" ref={gptRef}></p>
                                        <p className="slog slog3" ref={jptRef}></p>
                                    </div>
                                    <p className="slog slog4">가 되고싶은</p>
                                    <p className="slog slog5">
                                        <span>김준호</span>입니다
                                    </p>
                                </div>
                                <div className="profil">
                                    {/* <img src="../images/main.png" alt="" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about2">
                <h2 className="ir_so">자기소개</h2>
                <div className="container">
                    <div className="inner">
                        <div className="about2">
                            <div className="about_title">
                                <h2 className="tit">about me</h2>
                            </div>
                            <p className="about_desc">
                                안녕하세요, 신입 프론트엔드 개발자 김준호입니다. 프론트엔드의매력은 상상하는 것을 실현하는 것이라고 생각합니다. 자기가 상상
                                한것을 실현시키기 위해서는 많은 노력과 실력이 밑바탕이 되어야 한다고 생각합니다. 그런 부분에서, 저는 아직 많이 배워야하고, 훨
                                씬 더 많은 노력을 해야한다는 것을 알고 있습니다. 하지만 제가 어려움을 극복하고 한계를 극복했을 때의 성취감은 제가 이 길로 가
                                고 싶은 대답이라고 생각합니다. 앞으로 항상 배우고 발전하는 프론트엔드 개발자가 되겠습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

const Skill = () => {
    return(
        <>
            <section id="skill">
                <h2 className="ir_so">스킬</h2>
                <div className="container">
                    <div className="inner">
                        <div className="skill">
                            <div className="skill_title">
                                <h2 className="tit">skills</h2>
                            </div>
                            <p className="skill_progress">

                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

const Projects = () => {
    const btnLink = [
        {
            url1: "https://kimjunho98.github.io/project1/",
            url2: "https://github.com/KimJunHo98/project1",
            url3: "https://github.com/KimJunHo98/project1/blob/main/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B81%20%EA%B8%B0%ED%9A%8D%EC%84%9C.pdf",
        },
        {
            url1: "https://bbatsue-web.vercel.app/",
            url2: "https://github.com/hejo47/bbatsueWeb",
            // url3: "file:///C:/Users/Administrator/Downloads/%ED%8C%80-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_0203%EC%A0%9C%EC%B6%9C.pdf",
        },
        
    ]

    const component = useRef();
    const slider = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let horItems = gsap.utils.toArray(".hor_item_slide");
            gsap.to(horItems, {
                xPercent: -100 * (horItems.length - 1.8),
                ease: "none",
                scrollTrigger: {
                    trigger: slider.current,
                    pin: true,
                    scrub: 1,
                    smooth: true,
                    start: 'top 12%',
                    end: () => "+=" + slider.current.offsetWidth,
                    markers: false
                }
            });
        }, component);
        return () => ctx.revert();
    });

    return(
        <>
            <section id="projects" ref={component}>
                <h2 className="ir_so">프로젝트</h2>
                <div className="container">
                    <div className="inner">
                        <div className="projects">
                            <div className="projects_title">
                                <h2 className="tit">projects</h2>
                            </div>
                            <div className="hor_wrap" ref={slider}>
                                <div className="hor_item_slide slide1">
                                    <div className="hor_item">
                                        <h3 className="site_tit"><span>site. 01-</span>경기생활문화센터</h3>
                                        <div className="hor_item_top">
                                            <div className="site_desc">
                                                <p><span>기술 스택:</span>HTML5, CSS3, jQuery, JS</p>
                                                <p><span>작업 기간:</span>3주</p>
                                                <p><span>기여도:</span>100%</p>
                                                <p><span>특징:</span>메인 페이지, 로그인 페이지 / 반응형, 웹표준, 웹접근성을 고려하여 제작 / 날씨 API 사용</p>
                                            </div>
                                            <div className="site_btns">
                                                <button className="site_link_btn" onClick={()=>{window.open(btnLink[0].url1)}}><FontAwesomeIcon icon={faLink} /><span>Site</span></button>
                                                <button className="site_link_btn" onClick={()=>{window.open(btnLink[0].url2)}}><FontAwesomeIcon icon={faGithub} /><span>Github</span></button>
                                                <button className="site_link_btn" onClick={()=>{window.open(btnLink[0].url3)}}><FontAwesomeIcon icon={faFilePdf} /><span>proposal</span></button>
                                            </div>
                                        </div>
                                        <div className="hor_item_bottom">
                                            <div className="img_box img1"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hor_item_slide slide2">
                                    <div className="hor_item">
                                        <h3 className="site_tit"><span>site.</span> 02-뺏슈</h3>
                                        <div className="hor_item_top">
                                            <p className="site_desc">
                                                사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명
                                                사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명
                                            </p>
                                            <div className="site_btns">
                                                <button className="site_link_btn" onClick={()=>{window.open(btnLink[1].url1)}}><FontAwesomeIcon icon={faLink} /><span>Site</span></button>
                                                <button className="site_link_btn" onClick={()=>{window.open(btnLink[1].url2)}}><FontAwesomeIcon icon={faGithub} /><span>Github</span></button>
                                                {/* <button className="site_link_btn" onClick={()=>{window.open(btnLink[1].url3)}}><FontAwesomeIcon icon={faFilePdf} /><span>proposal</span></button> */}
                                            </div>
                                        </div>
                                        <div className="hor_item_bottom">
                                            <div className="img_box img1"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hor_item_slide slide3">
                                    <div className="hor_item">
                                        <h3 className="site_tit"><span>site.</span> 03</h3>
                                        <div className="hor_item_top">
                                            <p className="site_desc">
                                                사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명
                                            </p>
                                            <div className="site_btns">
                                                <button className="site_link_btn" onClick={()=>{window.open(btnLink[0].url1)}}><FontAwesomeIcon icon={faLink} /><span>Site</span></button>
                                                <button className="site_link_btn" onClick={()=>{window.open(btnLink[0].url2)}}><FontAwesomeIcon icon={faGithub} /><span>Github</span></button>
                                                <button className="site_link_btn" onClick={()=>{window.open(btnLink[0].url3)}}><FontAwesomeIcon icon={faFilePdf} /><span>proposal</span></button>
                                            </div>
                                        </div>
                                        <div className="hor_item_bottom">
                                            <div className="img_box img1"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hor_item_slide slide4">
                                    <div className="hor_item">
                                        <h3 className="site_tit"><span>site.</span> 04</h3>
                                        <div className="hor_item_top">
                                            <p className="site_desc">
                                                사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명
                                            </p>
                                            <div className="site_btns">
                                                <button className="site_link_btn" onClick={()=>{window.open(btnLink[0].url1)}}><FontAwesomeIcon icon={faLink} /><span>Site</span></button>
                                                <button className="site_link_btn" onClick={()=>{window.open(btnLink[0].url2)}}><FontAwesomeIcon icon={faGithub} /><span>Github</span></button>
                                                <button className="site_link_btn" onClick={()=>{window.open(btnLink[0].url3)}}><FontAwesomeIcon icon={faFilePdf} /><span>proposal</span></button>
                                            </div>
                                        </div>
                                        <div className="hor_item_bottom">
                                            <div className="img_box img1"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hor_item_slide slide5">
                                    <div className="hor_item">
                                        <h3 className="site_tit"><span>site.</span> 05</h3>
                                        <div className="hor_item_top">
                                            <p className="site_desc">
                                                사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명
                                            </p>
                                            <div className="site_btns">
                                                <button className="site_link_btn" onClick={()=>{window.open(btnLink[0].url1)}}><FontAwesomeIcon icon={faLink} /><span>Site</span></button>
                                                <button className="site_link_btn" onClick={()=>{window.open(btnLink[0].url2)}}><FontAwesomeIcon icon={faGithub} /><span>Github</span></button>
                                                <button className="site_link_btn" onClick={()=>{window.open(btnLink[0].url3)}}><FontAwesomeIcon icon={faFilePdf} /><span>proposal</span></button>
                                            </div>
                                        </div>
                                        <div className="hor_item_bottom">
                                            <div className="img_box img1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

const Contact = () => {
    return(
        <>
            <section id="contact">
                <h2 className="ir_so">컨택트</h2>
                <div className="container">
                    <div className="inner">
                        <div className="contact">
                            <div className="contact_title">
                                <h3 className="tit">contact me</h3>
                            </div>
                            <div className="contact_desc">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

const MainPage = () => {
    // const containerRef = useRef(null);

    // useEffect(() => {
    //     const container = containerRef.current;
    
    //     gsap.to(container, {
    //         y: () => -(container.scrollHeight - window.innerHeight),
    //         ease: 'none',
    //         scrollTrigger: {
    //             trigger: container,
    //             pin: true,
    //             scrub: 0.5,  
    //             end: () => `+=${container.scrollHeight}`,
    //         },
    //     });
    // }, []);

    return(
        <>  
            <main> 
            {/* <main ref={containerRef}>  */}
                <About />
                <Skill />
                <Projects />
                <Contact />
            </main>
        </>
    );
}
export default MainPage;

