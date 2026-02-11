/**
 * Client-side PDF export: capture an HTML element with html2canvas and save as PDF via jspdf.
 * Use in browser only (e.g. from a button click).
 */

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const PDF_OPTIONS = {
  scale: 2,
  useCORS: true,
  allowTaint: true,
  logging: false,
  backgroundColor: '#ffffff',
}

export async function exportElementAsPdf(
  element: HTMLElement,
  filename: string = 'case-study.pdf'
): Promise<void> {
  const canvas = await html2canvas(element, PDF_OPTIONS)
  const imgData = canvas.toDataURL('image/png', 1.0)
  const pageW = 210 // A4 width in mm
  const imgW = pageW
  const imgH = (canvas.height * pageW) / canvas.width
  const pdf = new jsPDF({
    orientation: imgH > pageW ? 'portrait' : 'landscape',
    unit: 'mm',
    format: [pageW, Math.max(297, imgH)],
  })
  pdf.addImage(imgData, 'PNG', 0, 0, imgW, imgH)
  const safeName = filename.replace(/\.pdf$/i, '') + '.pdf'
  pdf.save(safeName)
}
