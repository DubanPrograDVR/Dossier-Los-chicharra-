export function SocialSection() {
  return (
    <section className="redes" id="redes">
      <div className="redes-noise" aria-hidden="true" />
      <div className="redes-inner">
        <span className="etiqueta etiqueta--blue" data-reveal>
          Redes
        </span>
        <h2 className="redes-titulo titulo--light" data-reveal>
          Sigue <span className="ink-blue">el ruido</span>
        </h2>
        <p className="redes-lead" data-reveal>
          Todo lo nuevo pasa primero por Instagram: adelantos, ensayos, fechas y
          el detrás de escena de Los Chicharra.
        </p>

        <a
          href="https://www.instagram.com/loschicharra"
          target="_blank"
          rel="noopener noreferrer"
          className="ig-card"
          data-reveal
        >
          <span className="ig-icon" aria-hidden="true">
            <i className="fa-brands fa-instagram" />
          </span>
          <span className="ig-copy">
            <span className="ig-handle">@loschicharra</span>
            <span className="ig-sub">Síguenos en Instagram</span>
          </span>
          <span className="ig-arrow" aria-hidden="true">
            <i className="fa-solid fa-arrow-up-right-from-square" />
          </span>
        </a>
      </div>
    </section>
  )
}
