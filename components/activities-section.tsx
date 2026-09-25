import { activities, type Activity } from "@/lib/data"

function PlatformBadge({ platform }: { platform: Activity["platform"] }) {
  if (platform === "youtube") {
    return (
      <span className="actividad-plataforma">
        <i className="fa-brands fa-youtube" aria-hidden="true" />
        YouTube
      </span>
    )
  }
  return (
    <span className="actividad-plataforma">
      <i className="fa-brands fa-instagram" aria-hidden="true" />
      Instagram
    </span>
  )
}

function ActivityMedia({ activity }: { activity: Activity }) {
  if (activity.platform === "youtube" && activity.thumbnail) {
    return (
      <div className="actividad-media actividad-media--wide">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={activity.thumbnail || "/placeholder.svg"}
          alt="Miniatura del video de Los Chicharra en YouTube"
          loading="lazy"
        />
        <span className="actividad-play" aria-hidden="true">
          <span>
            <i className="fa-solid fa-play" />
          </span>
        </span>
        <PlatformBadge platform={activity.platform} />
      </div>
    )
  }

  // Instagram: preview visual estático (no se fabrica contenido inexistente).
  return (
    <div className="actividad-media actividad-media--ig">
      <i className="fa-brands fa-instagram ig-preview-mark" aria-hidden="true" />
      <PlatformBadge platform={activity.platform} />
    </div>
  )
}

export function ActivitiesSection() {
  return (
    <section className="actividades" id="actividades">
      <div className="actividades-intro" data-reveal>
        <span className="etiqueta">Actividades</span>
        <h2 className="titulo">
          Lo que estamos <span className="ink-blue">publicando</span>
        </h2>
        <p className="actividades-lead">
          Nuestro día a día vive en las redes: videos, momentos de ensayo y
          registros del directo. Aquí tienes un vistazo directo a las últimas
          publicaciones; toca cualquiera para abrir el contenido original.
        </p>
      </div>

      <div className="actividades-grid">
        {activities.map((activity, i) => (
          <a
            key={`${activity.href}-${i}`}
            href={activity.href}
            target="_blank"
            rel="noopener noreferrer"
            className="actividad"
            data-reveal
          >
            <ActivityMedia activity={activity} />
            <div className="actividad-info">
              <h3 className="actividad-titulo">{activity.title}</h3>
              <p className="actividad-texto">{activity.text}</p>
              <span className="actividad-link">
                Ver publicación
                <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
