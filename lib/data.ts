export type Member = {
  num: string
  name: string
  role: string
  photo: string
  bio: string
}

export const members: Member[] = [
  {
    num: "01",
    name: "Dubán",
    role: "Voz + Guitarra",
    photo: "/img/Duban.png",
    bio: "Frente de la banda y motor creativo. Su voz y su guitarra marcan el tono de Los Chicharra con intensidad y presencia directa.",
  },
  {
    num: "02",
    name: "Simón",
    role: "Batería",
    photo: "/img/Simon.png",
    bio: "La pegada y la dinámica del grupo. Sostiene la energía del directo y empuja cada tema hacia un sonido vivo y contundente.",
  },
  {
    num: "03",
    name: "Diego",
    role: "Bajo + Segunda voz",
    photo: "/img/Diego.png",
    bio: "El pulso y la base que sostiene cada canción, más una segunda voz que le da cuerpo al sonido. Peso, tensión y firmeza.",
  },
]

export type Disco = {
  badge: string
  name: string
  text: string
  embedSrc: string
}

export const discos: Disco[] = [
  {
    badge: "Raíz 01",
    name: "DEScaro",
    text: "El proyecto anterior de Dubán y Simón. Algunas de sus canciones forman parte del repertorio actual de Los Chicharra.",
    embedSrc:
      "https://open.spotify.com/embed/artist/1TiW0XLg3gPOp3bTNMkviH?utm_source=generator&theme=0",
  },
  {
    badge: "Raíz 02",
    name: "Dubban",
    text: "El proyecto solista de Dubán. Varias de estas canciones también forman parte de lo que interpretamos hoy con la banda.",
    embedSrc:
      "https://open.spotify.com/embed/artist/5cyTIhWKAs5qzfWam4dkws?utm_source=generator&theme=0",
  },
]

export type Platform = "instagram" | "youtube"

export type Activity = {
  platform: Platform
  title: string
  text: string
  href: string
  /** YouTube thumbnail URL, when the preview is a real video still. */
  thumbnail?: string
}

export const activities: Activity[] = [
  {
    platform: "youtube",
    title: "Los Chicharra en video",
    text: "Registro publicado en YouTube. Míranos en acción y escucha el ruido en movimiento.",
    href: "https://www.youtube.com/watch?v=JIg6yao1Res&t=53s",
    thumbnail: "https://img.youtube.com/vi/JIg6yao1Res/hqdefault.jpg",
  },
  {
    platform: "instagram",
    title: "Publicación en Instagram",
    text: "Contenido publicado en nuestro perfil. Abre la publicación original para ver todo el carrete.",
    href: "https://www.instagram.com/p/DdPtfwFAOWS/?img_index=1",
  },
  {
    platform: "instagram",
    title: "Publicación en Instagram",
    text: "Otro momento compartido en nuestras redes. Toca para ver la publicación completa en Instagram.",
    href: "https://www.instagram.com/p/DZqyhlEskAw",
  },
]

export const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#banda", label: "La banda" },
  { href: "#musica", label: "Música" },
  { href: "#identidad", label: "Rock Chicharra" },
  { href: "#actividades", label: "Actividades" },
  { href: "#redes", label: "Redes" },
]
