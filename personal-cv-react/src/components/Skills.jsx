import { useState } from "react";

function Skills({ skills }) {
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
          {skills.map((skill, index) => (
            <li key={index}>
              {skill.category}

              {skill.subcategories && (
                <ul>
                  {skill.subcategories.map((sub, subIndex) => (
                    <li key={subIndex}>
                      {sub.name}
                      <ul>
                        {sub.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              )}

              {skill.items && (
                <ul>
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Skills;