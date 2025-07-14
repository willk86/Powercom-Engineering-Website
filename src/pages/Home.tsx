import { ChevronRight } from "lucide-react";
import { useRef } from "react";

export function Home() {
  const servicesRef = useRef<HTMLElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <header className="relative h-600px">
        <div className="absolute inset-0">
          <img
            src="images/dark-topographic-map/17344.jpg"
            alt="Engineering background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-blue-900/90"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-[calc(95vh-88px)] flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              L’excellence en ingénierie des systèmes d’alimentation
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Créée en 2012, Powercom Engineering est un bureau d'ingénierie
              spécialisé dans les études et le contrôle des infrastructures
              électriques.
            </p>
            <button
              onClick={scrollToServices}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition"
            >
              <span>Nos Services</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Services Overview Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Nos Domaines d'Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Études Générales",
                description:
                  "Études préliminaires, de faisabilité, d'avant-projets sommaires, et d'avant-projets détaillées pour infrastructures électriques.",
              },
              {
                title: "Contrôle et Supervision",
                description:
                  "Supervision des travaux HTB, HTA, BTA et systèmes de contrôle commande.",
              },
              {
                title: "Études Détaillées",
                description:
                  "Conception détaillée de projets d'électricité et de téléconduite.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section ref={servicesRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Nos Services Détaillés
          </h2>

          {/* Domaines d'intervention */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-semibold mb-6">
              Domaines d'intervention
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium text-blue-600 mb-4">
                  Électricité
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>HTB (Haute Tension B)</li>
                  <li>HTA (Haute Tension A)</li>
                  <li>BTA (Basse Tension A)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-blue-600 mb-4">
                  Contrôle et Télécommunication
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Contrôle commande</li>
                  <li>Téléconduite de réseau électrique</li>
                  <li>Télécommunication</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Types de services */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center mb-8">
              Nos prestations
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Études de faisabilité",
                  description: "Analyse technique et économique des projets",
                },
                {
                  title: "Études d'avant-projet sommaire (APS)",
                  description:
                    "Conception préliminaire et estimation budgétaire",
                },
                {
                  title: "Études d'avant-projet détaillé (APD)",
                  description:
                    "Conception détaillée et dossiers d'appel d'offres",
                },
                {
                  title: "Études d'exécution",
                  description: "Plans détaillés et spécifications techniques",
                },
                {
                  title: "Contrôle et supervision",
                  description: "Suivi des travaux et contrôle qualité",
                },
                {
                  title: "Assistance technique",
                  description: "Support et conseil aux équipes projet",
                },
              ].map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-blue-600 mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
