import React, { useState, useRef, useEffect } from 'react';

const SkillProgressBar = ({skill}) => {
    const [width, setWidth] = useState(0);
    const progressRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = (window.pageYOffset || document.documentElement.scrollTop || window.scrollY) + window.innerHeight / 2;
            const skillRefoffsetTop = progressRef.current.offsetTop - 2;
    
            if(scrollTop >= skillRefoffsetTop){
                setWidth(skill.percentage);
            }else{
                setWidth(0);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [skill.percentage]);

    return (
        <div className="skill_progress" ref={progressRef}>
            <p className="skill_name">{skill.name}</p>
            <div className="progress_bar">
                <div className="progress_bar_fill" style={{width: `${width}%`}}></div> 
            </div>
            <p className="skill_percentage">{`${skill.percentage}%`}</p>
        </div>
    );
};

export default SkillProgressBar;
