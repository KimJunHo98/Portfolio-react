import React from "react";
import { useRef, useEffect } from "react";

// aos
import "aos/dist/aos.css";

// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const About = () => {
    // gsap
    const gptRef = useRef(null);
    const jptRef = useRef(null);

    useEffect(() => {
        const gpt = gptRef.current;
        const jpt = jptRef.current;

        const tl = gsap.timeline({ repeat: -1 });

        tl.to(gpt, { duration: 1.3, text: "GPT", ease: "Linear.easeNone" })
        .to(gpt, { duration: 1.3, text: "", ease: "Linear.easeNone" })
        .to(jpt, { duration: 1.3, text: "JPT", ease: "Linear.easeNone" })
        .to(jpt, { duration: 1.3, text: "", ease: "Linear.easeNone" });
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
                                    <h2 className="slog slog1" 
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                    >
                                        끊임없이 배우고 발전하는
                                    </h2>
                                    <div className="split_slog" 
                                        data-aos="fade-right"
                                        data-aos-duration="2000"
                                    >
                                        <p className="slog slog2" ref={gptRef}></p>
                                        <p className="slog slog3" ref={jptRef}></p>
                                    </div>
                                    <div className="slog slog4" 
                                        data-aos="fade-left"
                                        data-aos-duration="2000"
                                    >
                                        <p>가 되고싶은</p>
                                    </div>
                                    <div className="slog slog5" 
                                        data-aos="fade-left"
                                        data-aos-duration="2000"
                                    >
                                        <span>김준호</span>입니다
                                    </div>
                                </div>
                                <div className="profil" 
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                >
                                    <img src="../images/main-profile.png" alt="" />
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
                                <h2 className="tit" 
                                    data-aos="fade-down"
                                    data-aos-duration="1000"
                                    data-aos-anchor-placement="top-center"
                                >about me</h2>
                            </div>
                            <div className="about_desc" 
                                data-aos="fade-left"
                                data-aos-duration="2000"
                                data-aos-anchor-placement="top-center"
                            >
                                <span className="intro">새로운 배움을 즐기고 도전하자!</span>
                                <p>
                                    안녕하세요, 신입 프론트엔드 개발자 김준호입니다.
                                    퍼블리셔가 되기 위해서 공부를 하던 중에 프론트엔드 개발자라는 직업을 새롭게 알게 되었습니다.
                                    프론트엔드 공부를 하면서 처음 접하게 된 언어들과 활용법들이 신선한 재미와 알 수 없는 오기를 가져다 주었습니다.
                                    하지만 동시에 어려움을 느끼면서 아직 많이 배워야하고, 훨씬 더 많은 노력을 해야한다는 것과 그 어려움과
                                    한계를 극복했을 때의 성취감이 배움을 멈출 수 없게 하는 것 같습니다.
                                    저는 앞으로 항상 배우고 발전하는 프론트엔드 개발자가 되겠습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;