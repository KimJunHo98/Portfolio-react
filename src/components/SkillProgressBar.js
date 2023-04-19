import React from 'react';

const SkillProgressBar = ({ skill, percentage }) => {
    return (
        <div className="skill_progress"
            data-aos="fade-right"
            data-aos-duration="1200"
        >
            <p className="skill_name">{skill}</p>
            <div className="progress_bar">
                <div className="progress_bar_fill" style={{ width: `${percentage}%` }}></div>
            </div>
            <p className="skill_percentage">{`${percentage}%`}</p>
        </div>
    );
};

export default SkillProgressBar;
