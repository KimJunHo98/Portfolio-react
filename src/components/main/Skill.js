import React from 'react';
import SkillProgressBar from '../SkillProgressBar';

// aos
import "aos/dist/aos.css";

const Skill = () => {

    const skills = [
        {
            name: "html / css",
            percentage: 90
        },
        {
            name: "scss",
            percentage: 90
        },
        {
            name: "jquery",
            percentage: 70
        },
        {
            name: "javascript",
            percentage: 70
        },
        {
            name: "react.js",
            percentage: 80
        },
        {
            name: "node.js",
            percentage: 60
        },
    ]

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
                            <div className="skill_list">
                                {skills.map((skill) => {
                                    return (
                                        <SkillProgressBar skill={skill} />
                                    );
                                })};
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skill;