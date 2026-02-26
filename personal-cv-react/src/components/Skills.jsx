import { useState } from "react";

function Skills() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button 
        id="toggleSkills" 
        onClick={() => setVisible(!visible)}
      >
        {visible ? "▲  Skills" : "▼  Skills"}
      </button>

      <section 
        className={`card ${visible ? "visible" : ""}`} 
        id="skillsSection"
      >
        <h2>Skills</h2>
        <ul>
          <li>Web Development
            <ul>
              <li>Frontend
                <ul>
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </li>
              <li>Backend
                <ul>
                  <li>MySQL</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Programming Languages
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>C</li>
              <li>PHP</li>
              <li>SQL</li>
            </ul>
          </li>
          <li>Development Tools
            <ul>
              <li>Git & GitHub</li>
              <li>Visual Studio Code</li>
              <li>NetBeans</li>
            </ul>
          </li>
          <li>Design Tools
            <ul>
              <li>Canva</li>
              <li>Figma</li>
            </ul>
          </li>
          <li>Database Management
            <ul>
              <li>MySQL</li>
            </ul>
          </li>
          <li>Productivity & Systems
            <ul>
              <li>Microsoft Office</li>
              <li>Operating Systems (Windows, Linux)</li>
            </ul>
          </li>
          <li>Soft Skills
            <ul>
              <li>Problem Solving</li>
              <li>Critical Thinking</li>
              <li>Team Collaboration</li>
              <li>Time Management</li>
              <li>Adaptability</li>
            </ul>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Skills;