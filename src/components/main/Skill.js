import React from "react";
import SkillBar from 'react-skillbars';

// aos
import "aos/dist/aos.css";

const Skill = () => {
    const skills = [
        { type: 'html5', level: 100 },
        { type: 'css3', level: 90 },
        { type: 'scss', level: 80 },
        { type: 'javascript', level: 70 },
        { type: 'jQuery', level: 70 },
        { type: 'react', level: 70 },
        // { type: 'REDUX', level: 20 },
        // { type: 'NODE.JS', level: 0 },
        // { type: 'NEXT.JS', level: 0 },
        { type: 'PHTOSHOP', level: 80 },
        { type: 'FIGMA', level: 80 },
    ];

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
                            <SkillBar skills={skills} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skill;