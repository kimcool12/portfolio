import SectionHeader from "./SectionHeader";
import skills from "../content/skills";

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionHeader eyebrow="skills" title="Skills & Tools" />
      <div className="skills">
        {skills.map((group) => (
          <div key={group.title} className="skills__card">
            <h3>{group.title}</h3>
            <ul>
              {group.items.map(({ name, icon: Icon, image }) => (
                <li key={name} className="chip">
                  {image ? (
                    <img src={image} alt="" />
                  ) : (
                    <Icon aria-hidden="true" />
                  )}
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
