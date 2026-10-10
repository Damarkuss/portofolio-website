import { skills } from "../data/profile.js";

export default function Skills() {
  return (
    <section id="keahlian" className="section alt">
      <div className="container split">
        <h2>Keahlian</h2>
        <div className="skill-groups">
          {skills.map((g) => (
            <div key={g.group} className="skill-group">
              <h3>{g.group}</h3>
              <ul>
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
