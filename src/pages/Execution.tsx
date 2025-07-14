import { Link } from 'react-router-dom';

export function Execution() {
  const pdfs = [
    {
      href: "pdfs/ITINERAIRE SAN-PEDRO.pdf",
      title: "Plan d'étude topographique, phase de levée d'itinéraire, partie aérienne - ACC",
    },
    {
      href: "pdfs/HTA SCI LAVION PDF.pdf",
      title: "Plan d'exécution - Raccordement électrique HTA Centaure Routiers",
    },
    {
      href: "pdfs/Plan de piquetage - AHOUE AGBOFIKAN Model.pdf",
      title: "Plan de piquetage - Alimentation Électrique Ahoue Agbofikan",
    },
    {
      href: "pdfs/Plan de piquetage - DOMANGBEU.pdf",
      title: "Plan de piquetage - Alimentation Électrique de Domangbeu",
    },
    {
      href: "pdfs/LEVEE DE PROFIL ET ETAT DES LIEUX BAIE DES MILLIARDAIRES.pdf",
      title: "Levée de profil en long et état des lieux poste d'Azito au poste Baie Des Milliardaires",
    },
    {
      href: "pdfs/Plan dexecution - BAIE BOULEY AZITO 1.pdf",
      title: "Plan d'exécution - Renforcement Électrique Baie Des Milliardaires",
    },
    {
      href: "pdfs/Plan d'amenagement du reseau electrique HTA BTA-BDK.pdf",
      title: "Plan d'aménagement du raccordement électrique Bondoukou",
    },
    {
      href: "pdfs/FIBRE OPTIQUE BDK.pdf",
      title: "Plan d'exécution du raccordement électrique Bondoukou",
    },
    {
      href: "pdfs/itineraire guiglo zagne.pdf",
      title: "Itinéraire Guiglo-Zagné",
    },
    {
      href: "pdfs/PROFIL EN LONG LIGNE HTA GUIGLO - ZAGNE.pdf",
      title: "Profil en long - ligne Guiglo-Zagné",
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Études d'Exécution</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {pdfs.map(({ href, title }, index) => (
            <div
              key={index}
              className="relative transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              <iframe
                src={href}
                className="w-full h-64 max-w-xs mx-auto border border-gray-300 shadow-lg transition-opacity duration-300 ease-in-out hover:opacity-80"
              ></iframe>
              <a
                href={href}
                target="_blank"
                className="absolute inset-0"
                aria-label={`Open ${title} in new tab`}
              ></a>
              <div className="text-center mt-2 text-xl font-semibold text-gray-700">{title}</div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h1 className="text-3xl font-bold">
            <Link to="/Galerie">Voir Galerie</Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
