import React from "react";

// aos
import "aos/dist/aos.css";

const Skill = () => {
    return(
        <>
            <section id="skill">
                <h2 className="ir_so">스킬</h2>
                <div className="container">
                    <div className="skill">
                        <div className="skill_title">
                            <h2 className="tit" 
                                data-aos="fade-down"
                                data-aos-duration="2000"
                                data-aos-anchor-placement="top-center"
                            >skills</h2>
                        </div>
                        <div className="skill_marquee">
                            <div className="marquee_text">
                                <div class="marquee_item">
                                    <span>html5</span><span>90%</span><span>html5</span><span>90%</span><span>html5</span><span>90%</span><span>html5</span><span>90%</span>
                                </div>
                            </div>
                            <div className="marquee_text">
                                <div class="marquee_item">
                                    <span className="marquee">css3</span><span className="marquee">90%</span><span className="marquee">css3</span><span className="marquee">90%</span><span className="marquee">css3</span><span className="marquee">90%</span><span className="marquee">css3</span><span className="marquee">90%</span>
                                </div>
                            </div>
                            <div className="marquee_text">
                                <div class="marquee_item">
                                    <span className="marquee_r">scss</span><span className="marquee_r">80%</span><span className="marquee_r">scss</span><span className="marquee_r">80%</span><span className="marquee_r">scss</span><span className="marquee_r">80%</span><span className="marquee_r">scss</span><span className="marquee_r">80%</span>
                                </div>
                            </div>
                            <div className="marquee_text">
                                <div class="marquee_item">
                                    <span className="marquee">javascript</span><span className="marquee">70%</span><span className="marquee">javascript</span><span className="marquee">70%</span><span className="marquee">javascript</span><span className="marquee">70%</span><span className="marquee">javascript</span><span className="marquee">70%</span>
                                </div>
                            </div>
                            <div className="marquee_text">
                                <div class="marquee_item">
                                    <span className="marquee_r">jquery</span><span className="marquee_r">70%</span><span className="marquee_r">jquery</span><span className="marquee_r">70%</span><span className="marquee_r">jquery</span><span className="marquee_r">70%</span><span className="marquee_r">jquery</span><span className="marquee_r">70%</span>
                                </div>
                            </div>
                            <div className="marquee_text">
                                <div class="marquee_item">
                                        <span className="marquee">react</span><span className="marquee">70%</span><span className="marquee">react</span><span className="marquee">70%</span><span className="marquee">react</span><span className="marquee">70%</span><span className="marquee">react</span><span className="marquee">70%</span>
                                </div>
                            </div>
                            <div className="marquee_text">
                                <div class="marquee_item">
                                    <span className="marquee_r">node</span><span className="marquee_r">60%</span><span className="marquee_r">node</span><span className="marquee_r">60%</span><span className="marquee_r">node</span><span className="marquee_r">60%</span><span className="marquee_r">node</span><span className="marquee_r">60%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skill;