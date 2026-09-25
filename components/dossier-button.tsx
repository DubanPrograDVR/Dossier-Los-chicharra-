"use client"

import { useState } from "react"

/**
 * Genera un PDF (dossier) de la página capturando cada sección con
 * html2canvas y componiéndolas en un documento A4 con jsPDF.
 * Reemplaza el antiguo js/captura.js del sitio estático.
 */
export function DossierButton() {
  const [loading, setLoading] = useState(false)

  async function handleGenerate() {
    if (loading) return
    setLoading(true)

    try {
      const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ])

      const main = document.querySelector("main")
      if (!main) return

      const sections = Array.from(main.querySelectorAll("section"))
      if (!sections.length) return

      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" })
      const pageW = pdf.internal.pageSize.getWidth()
      const pageH = pdf.internal.pageSize.getHeight()

      for (let i = 0; i < sections.length; i++) {
        const canvas = await html2canvas(sections[i], {
          backgroundColor: "#0a0a0a",
          scale: 2,
          useCORS: true,
          logging: false,
        })

        const imgData = canvas.toDataURL("image/jpeg", 0.92)
        const imgW = pageW
        const imgH = (canvas.height * imgW) / canvas.width

        let heightLeft = imgH
        let position = 0
        if (i > 0) pdf.addPage()

        pdf.addImage(imgData, "JPEG", 0, position, imgW, imgH)
        heightLeft -= pageH

        // Divide secciones muy altas en varias páginas.
        while (heightLeft > 0) {
          position -= pageH
          pdf.addPage()
          pdf.addImage(imgData, "JPEG", 0, position, imgW, imgH)
          heightLeft -= pageH
        }
      }

      pdf.save("dossier-los-chicharra.pdf")
    } catch (error) {
      console.error("[v0] Error generando el dossier:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      type="button"
      className="btn-captura"
      onClick={handleGenerate}
      disabled={loading}
      aria-label="Descargar dossier en PDF"
    >
      <i
        className={loading ? "fa-solid fa-spinner fa-spin" : "fa-solid fa-download"}
        aria-hidden="true"
      />
      <span>{loading ? "Generando…" : "Dossier"}</span>
    </button>
  )
}
