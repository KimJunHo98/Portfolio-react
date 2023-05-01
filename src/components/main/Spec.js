import React from "react";

const Spec = () => {
    return(
        <>
            <section id="spec">
                <h2 className="ir_so">스펙</h2>
                <div className="container">
                    <div className="inner">
                        <div className="spec">
                            <div className="spec_profile">
                                <div className="img_box">
                                    {/* <img src="../images/main-profile.png" alt="" /> */}
                                </div>
                            </div>
                            <div className="my_education">
                                <h2 className="education"
                                    data-aos="fade-down"
                                    data-aos-duration="1000"
                                >
                                    Education
                                </h2>
                                <div className="academy1"
                                    data-aos="fade-down"
                                    data-aos-duration="2000"
                                >
                                    <p className="tit">그린컴퓨터아카데미 프로젝트기반 프론트엔드 (React,Vue) 웹&앱 SW개발자 양성과정 수료</p>
                                    <span className="date">2022.11 ~ 2023.05</span>
                                </div>
                                <div className="academy2"
                                    data-aos="fade-down"
                                    data-aos-duration="2000"
                                >
                                    <p className="tit">두드림컴퓨터아카데미 UI&UX 반응형 웹 디자인&웹 퍼블리셔 양성과정 수료</p>
                                    <span className="date">2022.05 ~ 2022.09</span>
                                </div>
                                <div className="univ"
                                    data-aos="fade-down"
                                    data-aos-duration="2000"
                                >
                                    <p className="tit">수원과학대학교 건축학과 졸업</p>
                                    <span className="date">2017.03 ~ 2022.02</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Spec;