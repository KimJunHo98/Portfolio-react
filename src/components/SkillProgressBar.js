// import React, {useState, useRef} from 'react';
import React from 'react';

const SkillProgressBar = () => {
    // const [width, setWidth] = useState(0);
    // const barFillRef = useRef();


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

    return (
        <div className="skill_list" >
            {skills.map((skill) => {
                return (
                    <div className="skill_progress"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        key={skill.name}
                    >
                        <p className="skill_name">{skill.name}</p>
                        <div className="progress_bar">
                            {/* <div className="progress_bar_fill" ref={barFillRef} onChage={onChange} style={{width: `${width}%`}}></div>  */}
                            <div className="progress_bar_fill" style={{width: `${skill.percentage}%`}}></div> 
                        </div>
                        <p className="skill_percentage">{`${skill.percentage}%`}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default SkillProgressBar;
