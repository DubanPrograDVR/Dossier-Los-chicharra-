const generos = [
  { num: "01", label: "Punk Rock" },
  { num: "02", label: "Rock Alternativo" },
  { num: "03", label: "Blues Rock" },
  { num: "04", label: "Balada Rock" },
]

export function IdentitySection() {
  return (
    <section className="identidad" id="identidad">
      <div className="identidad-inner">
        <div data-reveal>
          <span className="etiqueta">Rock Chicharra</span>
          <h2 className="identidad-titulo">
            Un género <span className="ink-blue">propio</span>
          </h2>
          <p className="identidad-texto">
            No encajamos en una sola etiqueta, así que creamos la nuestra. El{" "}
            <strong>Rock Chicharra</strong> es la fusión de todo lo que nos
            mueve: la crudeza del punk, la libertad del rock alternativo, la raíz
            del blues y la emoción de la balada rock.
          </p>
          <p className="identidad-texto">
            El resultado es un sonido crudo, honesto y con identidad, hecho para
            sonar fuerte y para ser nuestro.
          </p>
        </div>

        <ul className="genero-list" data-reveal>
          {generos.map((genero) => (
            <li className="genero-item" key={genero.num}>
              <span className="genero-num" aria-hidden="true">
                {genero.num}
              </span>
              {genero.label}
            </li>
          ))}
          <li className="genero-item genero-item--total">
            <span className="genero-num" aria-hidden="true">
              =
            </span>
            Rock Chicharra
          </li>
        </ul>
      </div>
    </section>
  )
}
