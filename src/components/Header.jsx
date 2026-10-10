import { profile } from "../data/profile.js";

const links = [
  { href: "#tentang", label: "Tentang" },
  { href: "#keahlian", label: "Keahlian" },
  { href: "#proyek", label: "Proyek" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#kontak", label: "Kontak" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand">
          {profile.name}
        </a>
        <nav aria-label="Navigasi utama">
          <ul className="nav">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
