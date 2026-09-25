"use client"

import { useEffect } from "react"
import Script from "next/script"
import { activities, type Activity } from "@/lib/data"

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}

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

function YoutubeMedia({ activity }: { activity: Activity }) {
  return (
    <a
      href={activity.href}
      target="_blank"
      rel="noopener noreferrer"
      className="actividad-media actividad-media--wide"
    >
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
    </a>
  )
}

function InstagramMedia({ activity }: { activity: Activity }) {
  useEffect(() => {
    window.instgrm?.Embeds.process()
  }, [])

  return (
    <div className="actividad-media actividad-media--ig">
      <PlatformBadge platform={activity.platform} />
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={activity.href}
        data-instgrm-version="14"
        style={{ margin: 0, width: "100%", minWidth: "auto" }}
      />
    </div>
  )
}

export function ActivitiesSection() {
  return (
    <section className="actividades" id="actividades">
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.instgrm?.Embeds.process()}
      />
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
          <div key={`${activity.href}-${i}`} className="actividad" data-reveal>
            {activity.platform === "youtube" ? (
              <YoutubeMedia activity={activity} />
            ) : (
              <InstagramMedia activity={activity} />
            )}
            <div className="actividad-info">
              <h3 className="actividad-titulo">{activity.title}</h3>
              <p className="actividad-texto">{activity.text}</p>
              <a
                href={activity.href}
                target="_blank"
                rel="noopener noreferrer"
                className="actividad-link"
              >
                Ver publicación
                <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
