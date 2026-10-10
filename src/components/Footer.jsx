import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a href="#top">Kembali ke atas ↑</a>
      </div>
    </footer>
  );
}
