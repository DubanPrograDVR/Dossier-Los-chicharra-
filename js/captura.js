document
  .getElementById("btn-captura")
  .addEventListener("click", async function () {
    const btn = this;
    const grain = document.querySelector(".grain");
    btn.style.display = "none";
    if (grain) grain.style.display = "none";

    try {
      const secciones = document.querySelectorAll("main > section");
      const { jsPDF } = window.jspdf;

      const paginaAncho = 210;
      const paginaAlto = 297;
      const margen = 10;
      const areaAncho = paginaAncho - margen * 2;
      const areaAlto = paginaAlto - margen * 2;
      const fondo = "#0a0a0a";

      let pdf = null;

      for (let i = 0; i < secciones.length; i++) {
        const seccion = secciones[i];
        const canvas = await html2canvas(seccion, {
          scale: 2,
          useCORS: true,
          backgroundColor: null,
        });

        const imgData = canvas.toDataURL("image/jpeg", 0.95);
        const ratio = canvas.width / canvas.height;

        let imgW = areaAncho;
        let imgH = imgW / ratio;

        if (imgH > areaAlto) {
          imgH = areaAlto;
          imgW = imgH * ratio;
        }

        const x = margen + (areaAncho - imgW) / 2;
        const y = margen + (areaAlto - imgH) / 2;

        if (i === 0) {
          pdf = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });
        } else {
          pdf.addPage("a4", "p");
        }

        pdf.setFillColor(fondo);
        pdf.rect(0, 0, paginaAncho, paginaAlto, "F");
        pdf.addImage(imgData, "JPEG", x, y, imgW, imgH);
      }

      if (pdf) pdf.save("Los_Chicharra_Dossier.pdf");
    } catch (err) {
      console.error(err);
      alert("No se pudo generar el PDF.");
    } finally {
      btn.style.display = "";
      if (grain) grain.style.display = "";
    }
  });
