import { profile } from "../data/profile.js";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">{profile.role} · {profile.location}</p>
          <h1>{profile.name}</h1>
          <p className="lead">{profile.intro}</p>
          <p className="status">
            <span className="dot" aria-hidden="true" /> {profile.availability}
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="#proyek">Lihat proyek</a>
            <a className="btn" href={profile.cvUrl} target="_blank" rel="noreferrer">Unduh CV</a>
            <a className="btn btn-ghost" href="#kontak">Hubungi saya</a>
          </div>
        </div>
        <div className="portrait">
          {profile.photo ? (
            <img src={profile.photo} alt={`Foto ${profile.name}`} />
          ) : (
            <span aria-hidden="true">
              {profile.name
                .split(" ")
                .slice(0, 2)
                .map((w) => w[0])
                .join("")}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
