import { profile } from "../data/profile.js";

export default function About() {
  return (
    <section id="tentang" className="section">
      <div className="container split">
        <h2>Tentang saya</h2>
        <div className="prose">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
