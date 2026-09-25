export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-noise" aria-hidden="true" />
      <i className="fa-solid fa-bolt bolt bolt--1" aria-hidden="true" />
      <i className="fa-solid fa-bolt bolt bolt--2" aria-hidden="true" />
      <i className="fa-solid fa-bolt bolt bolt--3" aria-hidden="true" />

      <div className="hero-grid">
        <div className="hero-inner" data-reveal>
          <span className="hero-kicker">
            <span className="tick" aria-hidden="true" />
            Molina · Chile · Est. 2025
          </span>

          <h1 className="hero-title">
            <span className="hero-line">Los</span>
            <span className="hero-line hero-line--stroke">Chicharra</span>
          </h1>

          <span className="hero-genre">Rock Chicharra</span>

          <p className="hero-phrase">
            Ruido crudo, identidad propia y canciones hechas para sonar fuerte.
          </p>

          <div className="hero-cta">
            <a href="#musica" className="btn btn--blue">
              <i className="fa-solid fa-play" aria-hidden="true" />
              Escuchar música
            </a>
            <a href="#banda" className="btn btn--ghost">
              Conocer la banda
              <i className="fa-solid fa-arrow-down" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/logo.png"
          alt="Afiche de Los Chicharra: amplificador con rayos y estrellas"
          className="hero-logo"
          data-reveal
        />
      </div>
    </section>
  )
}
