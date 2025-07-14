export function References() {
  const references = [
    {
      title: "Restructuration des lignes HTA/HTB d'Adzopé",
      client: "État de Côte d'Ivoire",
      year: "2023 - En cours",
      description: "",
    },
    {
      title: "Renforcement de la ligne HTA Guiglo - Zagné",
      client: "État de Côte d'Ivoire",
      year: "2022",
      description: "",
    },
    {
      title: "Renforcement Électrique de la ligne HTA de l'Île Bouley",
      client: "État de Côte d'Ivoire",
      year: "2021",
      description: "",
    },
  ];

  const pdfs = [
    {
      href: "pdfs/ABE POWERCOM 2019.pdf",
    },
    {
      href: "pdfs/ABE POWERCOM ET DEFIS ET STRATEGIES.pdf",
    },
    {
      href: "pdfs/ABE APD POWERCOM.pdf",
    },
    {
      href: "pdfs/ABE FAISABILITE APS POWERCOM.pdf",
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Nos Références</h1>

        <div className="grid gap-8">
          {references.map((ref, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold">{ref.title}</h2>
                <span className="text-blue-600 font-semibold">{ref.year}</span>
              </div>
              <p className="text-gray-600 mb-4">{ref.description}</p>
              <p className="text-sm text-gray-500">Client: {ref.client}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {pdfs.map(({ href }, index) => (
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
                aria-label={`Open in new tab`}
              ></a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
