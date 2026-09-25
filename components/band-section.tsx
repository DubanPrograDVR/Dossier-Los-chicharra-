import { members } from "@/lib/data"

export function BandSection() {
  return (
    <section className="banda" id="banda">
      <div className="banda-intro" data-reveal>
        <span className="etiqueta">La banda</span>
        <h2 className="titulo">
          Tres músicos, <span className="ink-blue">un solo ruido</span>
        </h2>
        <p className="banda-lead">
          Los Chicharra nace en Molina como un power trío directo y sin filtros.
          Cada integrante trae su propio peso al sonido: voz al frente, base
          firme y una pegada que empuja cada canción.
        </p>
      </div>

      <div className="integrantes-grid">
        {members.map((member) => (
          <article className="integrante" key={member.num} data-reveal>
            <div className="integrante-foto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={member.photo} alt={`${member.name}, ${member.role}`} />
              <span className="integrante-num" aria-hidden="true">
                {member.num}
              </span>
            </div>
            <div className="integrante-info">
              <span className="rol-tag">{member.role}</span>
              <h3 className="integrante-nombre">{member.name}</h3>
              <p className="integrante-texto">{member.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
