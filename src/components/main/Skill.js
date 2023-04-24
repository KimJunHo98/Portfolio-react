import React from 'react';
import SkillProgressBar from '../SkillProgressBar';

// aos
import "aos/dist/aos.css";

const Skill = () => {
    return(
        <>
            <section id="skill">
                <h2 className="ir_so">스킬</h2>
                <div className="container">
                    <div className="inner">
                        <div className="skill">
                            <div className="skill_title">
                                <h2 className="tit"
                                    data-aos="fade-down"
                                    data-aos-duration="1000"
                                    // data-aos-anchor-placement="center-center"
                                >skills</h2>
                            </div>
                            <SkillProgressBar />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skill;