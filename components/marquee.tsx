const items = [
  "Rock Chicharra",
  "Punk Rock",
  "Rock Alternativo",
  "Blues Rock",
  "Balada Rock",
  "Molina · Chile",
]

export function Marquee() {
  // Doubled so the -50% translate loop is seamless.
  const loop = [...items, ...items]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span key={i}>
            {item}
            <span className="dot"> ✦ </span>
          </span>
        ))}
      </div>
    </div>
  )
}
