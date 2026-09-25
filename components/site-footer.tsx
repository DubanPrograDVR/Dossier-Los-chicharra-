import { navLinks } from "@/lib/data"

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/logo.png"
            alt="Logo de Los Chicharra"
            className="footer-logo"
          />
          <p className="footer-tagline">Rock Chicharra · Molina, Chile</p>
        </div>

        <nav className="footer-nav" aria-label="Pie de página">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-socials">
          <a
            href="https://www.instagram.com/loschicharra"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="Instagram de Los Chicharra"
          >
            <i className="fa-brands fa-instagram" aria-hidden="true" />
          </a>
          <a
            href="https://www.youtube.com/watch?v=JIg6yao1Res"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="YouTube de Los Chicharra"
          >
            <i className="fa-brands fa-youtube" aria-hidden="true" />
          </a>
          <a
            href="https://open.spotify.com/artist/1TiW0XLg3gPOp3bTNMkviH"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="Spotify de Los Chicharra"
          >
            <i className="fa-brands fa-spotify" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Los Chicharra. Todos los derechos reservados.</span>
        <span>Rock Chicharra desde Molina.</span>
      </div>
    </footer>
  )
}
