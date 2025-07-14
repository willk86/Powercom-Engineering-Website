import { Link } from "react-router-dom";

export function FaisabiliteAPS() {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Études de Faisabilité et Études d'Avant-Projet Sommaire (APS)</h1>

        <div id="pdf-links-container" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {[
            {
              href: "pdfs/TRACE ATTAKRO ADZOPE AGBOVILLE.pdf",
              title: "Tracé de la ligne Attakro-Agboville",
            },
            {
              href: "pdfs/SCHEMA UNIFILAIRE.ATTAKRO.pdf",
              title: "Schéma unifilaire de l'extension du poste d'Attakro",
            },
            {
              href: "pdfs/Analyse financiere tableau PROJET ADZOPE.pdf",
              title: "Tableau de l'analyse financière du projet d'Adzopé",
            },
            {
              href: "pdfs/SCHEMA  PRINCIPE.SYSTEME .TELECOM D'ADZOPE.pdf",
              title: "Schéma de principe du système de télécommunications du poste d'Adzopé",
            },
            {
              href: "pdfs/Schema unifilaire simulation poste creation poste 90 kV d'ADZOPE.pdf",
              title: "Schéma unifilaire du poste d'Adzopé (simulation)",
            },
            {
              href: "pdfs/SCHEMA UNIFILAIRE.ADZOPE.pdf",
              title: "Schéma unifilaire du poste d'Adzopé",
            },
            {
              href: "pdfs/SCHEMA UNIFILAIRE.AGBOVILLE.pdf",
              title: "Schéma unifilaire de l'extension du poste d'Agboville",
            },
          ].map(({ href, title }, index) => (
            <div key={index} className="pdf-item transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <a href={href} target="_blank">
                <div className="relative">
                  <iframe
                    src={href}
                    className="w-full h-64 max-w-xs mx-auto border border-gray-300 shadow-lg"
                  ></iframe>
                  <a
                    href={href}
                    target="_blank"
                    className="absolute inset-0"
                    aria-label={`Open ${title} in new tab`}
                  ></a>
                </div>
              </a>
              <div className="text-center mt-2 text-xl font-semibold text-gray-700">{title}</div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h1 className="text-3xl font-bold">
            <Link to="/Execution">Voir Études d'exécution</Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
