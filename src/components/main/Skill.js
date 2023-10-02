import React, { useRef } from 'react';
import SkillProgressBar from '../SkillProgressBar';

// aos
import "aos/dist/aos.css";

const Skill = () => {
    const skillRef = useRef(null);
    
    const skills = [
        {
            id: 0,
            name: "HTML / CSS",
            percentage: 90
        },
        {   id: 1,
            name: "SCSS",
            percentage: 80
        },
        {   id: 2,
            name: "jQuery",
            percentage: 75
        },
        {   id: 3,
            name: "JavaScript",
            percentage: 70
        },
        {   id: 4,
            name: "React",
            percentage: 70
        },
        {   id: 5,
            name: "Node",
            percentage: 60
        },
        {   id: 6,
            name: "Photoshop",
            percentage: 80
        },
        {   id: 7,
            name: "Figma",
            percentage: 80
        },
    ];

    return(
        <>
            <section id="skill">
                <h2 className="ir_so">스킬</h2>
                <div className="container">
                    <div className="inner">
                        <div className="skill">
                            <div className="skill_title">
                                <h2
                                    className="tit"
                                    data-aos="fade-down"
                                    data-aos-duration="1000"
                                >
                                    skills
                                </h2>
                            </div>
                            <div className="skill_list" ref={skillRef}>
                                {skills.map((skill) => (
                                    <SkillProgressBar skill={skill} ref={skillRef} key={skill.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skill;
