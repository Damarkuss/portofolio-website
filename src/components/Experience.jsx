import { experience } from "../data/profile.js";

export default function Experience() {
  return (
    <section id="pengalaman" className="section alt">
      <div className="container split">
        <h2>Pengalaman &amp; pendidikan</h2>
        <ol className="timeline">
          {experience.map((e) => (
            <li key={e.title + e.period}>
              <p className="period">{e.period}</p>
              <div>
                <h3>{e.title}</h3>
                <p className="place">{e.place}</p>
                <p>{e.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
