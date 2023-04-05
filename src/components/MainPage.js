import React from "react";
// import { useEffect, useRef } from 'react';

// gsap
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const About = () => {
    return(
        <>
            <section id="about1">
                <h2 className="ir_so">메인 비주얼</h2>
                <div className="container">
                    <div className="inner">
                        <div className="about1">
                            <div className="about_visual">
                                <div className="about_slog">
                                    <h2 className="slog slog1">인공지능처럼 코드를 연결하고</h2>
                                    <h2 className="slog slog3">쉽게 정보를 공유하는</h2>
                                    <h2 className="slog slog2">김준호입니다</h2>
                                    {/* <div className="bg-img1">
                                        <img src="../images/bg-img1.png" alt="" />
                                    </div> */}
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
                <h2 className="ir_so">about me</h2>
                <div className="container">
                    <div className="inner">
                        <div className="about2">
                            <div className="about_title">
                                <h3 className="tit">about <br />me</h3>
                            </div>
                            <p className="about_desc">
                                안녕하세요, 신입 프론트엔드 개발자 김준호입니다. 프론트엔드의
                                매력은 상상하는 것을 실현하는 것이라고 생각합니다. 자기가 상상
                                한것을 실현시키기 위해서는 많은 노력과 실력이 밑바탕이 되어야
                                한다고 생각합니다. 그런 부분에서, 저는 아직 많이 배워야하고, 훨
                                씬 더 많은 노력을 해야한다는 것을 알고 있습니다. 하지만 제가 어
                                려움을 극복하고 한계를 극복했을 때의 성취감은 제가 이 길로 가
                                고 싶은 대답이라고 생각합니다. 앞으로 항상 배우고 발전하는 프론
                                트엔드 개발자가 되겠습니다.
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
                                <h3 className="tit">skills</h3>
                            </div>
                            <p className="skill_prog">

                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

const Projects = () => {
    return(
        <>
            <section id="projects">
                <h2 className="ir_so">프로젝트</h2>
                <div className="container">
                    <div className="inner">
                        <div className="projects">
                            <div className="projects_title">
                                <h3 className="tit">projects</h3>
                            </div>
                            <div className="hor_wrap">
                                <div className="hor_item">
                                    <div className=""></div>
                                    <div className=""></div>
                                </div>
                                <div className="hor_item">
                                    <div className=""></div>
                                    <div className=""></div>
                                </div>
                                <div className="hor_item">
                                    <div className=""></div>
                                    <div className=""></div>
                                </div>
                                <div className="hor_item">
                                    <div className=""></div>
                                    <div className=""></div>
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

