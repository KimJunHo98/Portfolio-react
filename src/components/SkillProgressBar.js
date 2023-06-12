import React, { useState, useEffect, forwardRef } from 'react';

const SkillProgressBar = forwardRef(({ skill }, ref) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = (window.pageYOffset || document.documentElement.scrollTop || window.scrollY) + window.innerHeight / 2;
            const skillRefOffsetTop = ref.current.offsetTop - 2;

            if (scrollTop >= skillRefOffsetTop) {
                setWidth(skill.percentage);
            } else {
                setWidth(0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [skill.percentage, ref]);

    return (
        <div className="skill_progress">
            <p className="skill_name">{skill.name}</p>
            <div className="progress_bar">
                <div className="progress_bar_fill" style={{ width: `${width}%` }}></div>
            </div>
            <p className="skill_percentage">{`${skill.percentage}%`}</p>
        </div>
    );
});

export default SkillProgressBar;
