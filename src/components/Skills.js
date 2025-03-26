import React, { useEffect, useState, useRef } from "react";
import "../styles/Skills.css"; 

const Skills = () => {
  const skillSet = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Redux", level: 75 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Bootstrap", level: 80 },
    { name: "Git & GitHub", level: 85 },
    { name: "Responsive Design", level: 90 },
    { name: "API Integration", level: 80 },
    { name: "TypeScript", level: 70 },
    { name: "Next.js", level: 60 },
    { name: "Figma to Code", level: 85 },
  ];

  const [progress, setProgress] = useState(
    skillSet.map(() => 0) // Start from 0%
  );
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          skillSet.forEach((skill, index) => {
            setTimeout(() => {
              setProgress((prev) => {
                const newProgress = [...prev];
                newProgress[index] = skill.level;
                return newProgress;
              });
            }, index * 300); // Delay animation for each skill
          });
        }
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section className="skills" id="skills" ref={skillsRef}>
      <h2>My Skills</h2>
      <div className="skills-container">
        {skillSet.map((skill, index) => (
          <div key={index} className="skill-box">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: `${progress[index]}%` }}
              >
                {progress[index]}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
