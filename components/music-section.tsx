import { discos } from "@/lib/data"

export function MusicSection() {
  return (
    <section className="musica" id="musica">
      <div className="musica-noise" aria-hidden="true" />
      <div className="musica-inner">
        <div className="musica-encabezado" data-reveal>
          <span className="etiqueta etiqueta--blue">Música</span>
          <h2 className="titulo titulo--light">
            De dónde viene <span className="ink-blue">el sonido</span>
          </h2>
          <p className="musica-lead">
            Antes de Los Chicharra hubo otros proyectos. Muchas de aquellas
            canciones siguen vivas en nuestro repertorio actual. Escúchalas
            directamente en Spotify.
          </p>
        </div>

        <div className="musica-grid">
          {discos.map((disco) => (
            <article className="disco-card" key={disco.name} data-reveal>
              <div className="disco-head">
                <span className="disco-badge">{disco.badge}</span>
                <h3 className="disco-nombre">{disco.name}</h3>
                <p className="disco-texto">{disco.text}</p>
              </div>
              <div className="spotify-frame">
                <iframe
                  title={`Reproductor de Spotify — ${disco.name}`}
                  src={disco.embedSrc}
                  height={352}
                  frameBorder={0}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>

        <p className="musica-nota" data-reveal>
          <i className="fa-solid fa-record-vinyl" aria-hidden="true" />
          Nuevo material de Los Chicharra en camino.
        </p>
      </div>
    </section>
  )
}
