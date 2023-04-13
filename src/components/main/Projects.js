import React from "react";
import { useLayoutEffect, useRef } from "react";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

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
        {
            url1: "https://anbd.vercel.app/",
            url2: "https://github.com/2ANBD/ANBD",
            // url3: "file:///C:/Users/Administrator/Downloads/%ED%8C%80-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_0203%EC%A0%9C%EC%B6%9C.pdf",
        },
        
    ]
    const btnName = [
        {
            name: "Site"
        },
        {
            name: "Github"
        },
        {
            name: "Proposal"
        }
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
                                <h2 className="tit" 
                                    data-aos="fade-down"
                                    data-aos-duration="2000"
                                    data-aos-anchor-placement="top-center"
                                >projects</h2>
                            </div>
                            <div className="hor_wrap" ref={slider}>
                                <div className="hor_item_slide slide1">
                                    <div className="hor_item">
                                        <h3 className="site_tit"><span>site. 01-</span>경기생활문화센터</h3>
                                        <div className="hor_item_top">
                                            <div className="site_desc">
                                                <p>기술 스택:<span>HTML5, CSS3, jQuery, JS</span></p>
                                                <p>작업 기간:<span>3주</span></p>
                                                <p>기&nbsp;&nbsp;여&nbsp;&nbsp;도:<span>개인 100%</span></p>
                                                <p>특&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;징:<span>메인 페이지, 로그인 페이지 / 반응형, 웹표준, 웹접근성을 고려하여 제작 / 날씨 API 사용 / 제이쿼리 라이브러리와 쿠키 데이터 사용하여 드래그 팝업 제작</span></p>
                                            </div>
                                            <div className="site_btns">
                                                <button className="site_link_btn" onClick={()=>{window.open(btnLink[0].url1)}}><FontAwesomeIcon icon={faLink} /><span>{btnName[0].name}</span></button>
                                                <button className="site_link_btn" onClick={()=>{window.open(btnLink[0].url2)}}><FontAwesomeIcon icon={faGithub} /><span>{btnName[1].name}</span></button>
                                                <button className="site_link_btn" onClick={()=>{window.open(btnLink[0].url3)}}><FontAwesomeIcon icon={faFilePdf} /><span>{btnName[2].name}</span></button>
                                            </div>
                                        </div>
                                        <div className="hor_item_bottom">
                                            <div className="img_box img1"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hor_item_slide slide2">
                                    <div className="hor_item">
                                        <h3 className="site_tit"><span>site.</span> 02-ANBD</h3>
                                        <div className="hor_item_top">
                                            <div className="site_desc">
                                                <p>기술 스택:<span>React, SCSS, Node, sqlLite</span></p>
                                                <p>작업 기간:<span>3주</span></p>
                                                <p>기&nbsp;&nbsp;여&nbsp;&nbsp;도:<span>개인 40%, 팀원 60%</span></p>
                                                <p>특&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;징:<span>메인 페이지, 서브 페이지 5개 / filter함수와 map함수를 활용하여 검색기능 구현, 상품업로드 실시간으로 반영 / 상품등록, 결제기능 구현 / gitflow방식으로 브랜치를 나눠서 협업 / 웹&앱으로 구현</span></p>
                                            </div>
                                            <div className="site_btns">
                                            <button className="site_link_btn" onClick={()=>{window.open(btnLink[2].url1)}}><FontAwesomeIcon icon={faLink} /><span>{btnName[0].name}</span></button>
                                                <button className="site_link_btn" onClick={()=>{window.open(btnLink[2].url2)}}><FontAwesomeIcon icon={faGithub} /><span>{btnName[1].name}</span></button>
                                                {/* <button className="site_link_btn" onClick={()=>{window.open(btnLink[2].url3)}}><FontAwesomeIcon icon={faFilePdf} /><span>{btnName[2].name}</span></button> */}
                                            </div>
                                        </div>
                                        <div className="hor_item_bottom">
                                            <div className="img_box img1"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hor_item_slide slide3">
                                <div className="hor_item">
                                        <h3 className="site_tit"><span>site.</span> 03-뺏슈</h3>
                                        <div className="hor_item_top">
                                            <div className="site_desc">
                                                <p>기술 스택:<span>HTML5, Bootstrap, SCSS, JS, AJAX</span></p>
                                                <p>작업 기간:<span>2주</span></p>
                                                <p>기&nbsp;&nbsp;여&nbsp;&nbsp;도:<span>개인 50%, 팀원 50%</span></p>
                                                <p>특&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;징:<span>메인 페이지, 서브 페이지 4개 / 영양정보 API 사용 / 로컬스토리지를 활용한 로그인 기능 구현 / gitflow방식으로 브랜치를 나눠서 협업</span></p>
                                            </div>
                                            <div className="site_btns">
                                            <button className="site_link_btn" onClick={()=>{window.open(btnLink[1].url1)}}><FontAwesomeIcon icon={faLink} /><span>{btnName[0].name}</span></button>
                                                <button className="site_link_btn" onClick={()=>{window.open(btnLink[1].url2)}}><FontAwesomeIcon icon={faGithub} /><span>{btnName[1].name}</span></button>
                                                {/* <button className="site_link_btn" onClick={()=>{window.open(btnLink[1].url3)}}><FontAwesomeIcon icon={faFilePdf} /><span>{btnName[2].name}</span></button> */}
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
                                            <div className="site_desc">
                                                사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명
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
                                <div className="hor_item_slide slide5">
                                    <div className="hor_item">
                                        <h3 className="site_tit"><span>site.</span> 05</h3>
                                        <div className="hor_item_top">
                                            <div className="site_desc">
                                                사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명 사이트 설명
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;