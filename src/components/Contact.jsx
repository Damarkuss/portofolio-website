import { useState } from "react";
import { profile, socials } from "../data/profile.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const email = socials.find((s) => s.label === "Email")?.url.replace("mailto:", "") ?? "";

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Form ini membuka aplikasi email pengunjung. Tidak butuh server.
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Pesan dari ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="kontak" className="section">
      <div className="container split">
        <div>
          <h2>Kontak</h2>
          <p className="muted">
            Ada lowongan atau proyek yang ingin dibicarakan? Silakan hubungi saya lewat salah satu kanal berikut.
          </p>
          <ul className="social-list">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.url} target="_blank" rel="noreferrer">
                  <span>{s.label}</span>
                  <span className="handle">{s.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className="form" onSubmit={onSubmit}>
          <label>
            Nama
            <input name="name" value={form.name} onChange={onChange} required autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={onChange} required autoComplete="email" />
          </label>
          <label>
            Pesan
            <textarea name="message" rows="5" value={form.message} onChange={onChange} required />
          </label>
          <button className="btn btn-primary" type="submit">
            Kirim lewat email
          </button>
          <p className="hint">Tombol ini membuka aplikasi email Anda dengan pesan yang sudah terisi.</p>
        </form>
      </div>
    </section>
  );
}
