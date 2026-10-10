import { projects } from "../data/profile.js";

function initials(title) {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Projects() {
  return (
    <section id="proyek" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Proyek</h2>
          <p>Beberapa website dan aplikasi yang pernah saya buat.</p>
        </div>

        <div className="project-list">
          {projects.map((p, i) => (
            <article className="project" key={p.title}>
              <div className="project-thumb">
                {p.image ? (
                  <img src={p.image} alt={`Tampilan ${p.title}`} loading="lazy" />
                ) : (
                  <span aria-hidden="true">{initials(p.title)}</span>
                )}
              </div>
              <div className="project-body">
                <p className="meta">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span>{p.type}</span>
                  <span>{p.year}</span>
                </p>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <ul className="tags">
                  {p.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <p className="links">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer">
                      Buka website ↗
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer">
                      Kode sumber ↗
                    </a>
                  )}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
