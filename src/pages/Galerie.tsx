export function Galerie() {
  const images = [
    {
      url: "images/ACC à San-Pedro - Raccordement au Réseau Électrique du site du projet (3) tagged.jpg",
    },
    {
      url: "images/ACC à San-Pedro - Raccordement au Réseau Électrique du site du projet (2) tagged.jpeg.jpg",
    },
    {
      url: "images/ACC à San-Pedro - Raccordement au Réseau Électrique du site du projet (4) tagged.jpg",
    },
    {
      url: "images/ACC à San-Pedro - Raccordement au Réseau Électrique du site du projet (5) tagged.jpg",
    },
    {
      url: "images/ACC à San-Pedro - Raccordement au Réseau Électrique du site du projet (6) tagged.jpg",
    },
    {
      url: "images/PROJET BATIMENT EMS ET DMS.jpg",
    },
    {
      url: "images/Projet Batiments d'exploitation.jpg",
    },
    {
      url: "images/Projet VUE GENERALE.jpg",
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Galerie</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
            >
              <a href={image.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={image.url}
                  alt={`Image ${index + 1}`}
                  className={`w-full h-80 object-cover ${index < 1 ? "object-[50%_25%]" : "object-center"} ${index >= 2 ? "object-[50%_35%]" : "object-center"} ${index > 3 ? "object-[50%_23%]" : "object-center"}`}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
