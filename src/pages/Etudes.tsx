import { motion, useInView, hover } from "framer-motion";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export function Etudes() {
  const MyComponent = () => {
    return (
      <ul
        style={{
          listStyleType: "disc",
          marginLeft: "20px",
          paddingLeft: "0",
          color: "white",
        }}
      >
        <li style={{ marginBottom: "8px" }}></li>
      </ul>
    );
  };

  const styles = {
    ul: {
      listStyleType: "disc",
      marginLeft: "20px",
      paddingLeft: "0",
    },
    li: {
      marginBottom: "8px",
    },
  };

  const galleryImages = [
    { src: "images/Projet VUE GENERALE.jpg", alt: "Projet Vue Générale" },
    {
      src: "images/PROJET BATIMENT EMS ET DMS.jpg",
      alt: "Projet Bâtiment EMS et DMS",
    },
    {
      src: "images/Projet Batiments d'exploitation.jpg",
      alt: "Projet Bâtiments d'Exploitation",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2, // Stagger animation based on index
        duration: 0.5,
      },
    }),
  };

  const listRef = useRef(null);
  const isInView = useInView(listRef, { once: true }); // Animate only once when in view

  const listItems = [
    "Un bâtiment principal de trois niveaux (R+3) avec des bâtiments et services annexes sur un terrain de 3 hectares",
    "Un centre de contrôle sécurisé dans le bâtiment principal",
    "Renouvellement des systèmes de téléconduite des postes de transformation et centres de production",
    "Mise en œuvre de systèmes de contrôle-commande numérique (CCN) redondants",
    "Migration des RTUs des postes 90 et 225 kV vers des RTUs avec fonctions CCN",
    "Séparation des RTUs entre étages HTB et HTA",
    "Réseau de télécommunications moderne à haut débit",
    "Dispatchings EMS et DMS modernes avec fonctionnalités avancées",
  ];

  return (
    <div>
      <section
        style={{
          backgroundImage: "url('images/dark-topographic-map/1734.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
        }}
        className="text-white h-610px"
      >
        <div
          className="bg-gray-900/70"
          style={{ width: "full", height: "668px", overflowY: "auto" }}
        >
          <h1
            className="text-3xl font-bold mt-40 mb-6 px-6"
            style={{ color: "white" }}
          >
            Le Nouveau Dispatching de Yamoussoukro
          </h1>

          <div className="max-w-7xl mx-auto px-6">
            <br></br>

            {/* Carousel Slider */}
            <div className="relative w-full max-w-2xl mx-auto mb-8 overflow-hidden rounded-lg shadow-lg">
              {galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    index === currentImageIndex
                      ? "translate-x-0"
                      : "translate-x-full hidden"
                  }`}
                />
              ))}
              {/* Navigation Controls */}
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                onClick={goToPrevImage}
              >
                ◀
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                onClick={goToNextImage}
              >
                ▶
              </button>
              {/* Dots Navigation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentImageIndex
                        ? "bg-blue-500"
                        : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  ></button>
                ))}
              </div>
            </div>

            <div
              className="prose max-w-none"
              style={{ width: "80%", margin: "0 auto" }}
            >
              <br></br>

              <p className="mb-6">
                Le projet de construction du nouveau Dispatching de Yamoussoukro
                a fait l'objet d'études de faisabilité, d'avant-projet sommaire
                (APS) et d'avant-projet détaillé (APD) réalisées par Powercom
                Engineering dans le cadre de contrats d'études tirés sur
                CI-ENERGIES. Les études se sont déroulées en 2013, 2014 et 2015.
              </p>
              {/* Animated List */}
              <h3 className="text-xl font-semibold text-white mt-8 mb-4">
                Composantes du Projet
              </h3>
              <motion.ul
                ref={listRef}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                style={{
                  listStyleType: "disc",
                  marginLeft: "20px",
                  paddingLeft: "0",
                  color: "white",
                }}
              >
                {listItems.map((item, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    variants={listVariants}
                    style={{ marginBottom: "8px" }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <p style={{ transform: "scale(0.9)" }} className="mb-20">
                <a
                  href="pdfs/APDNDSCH-02 Vue d'ensemble RSO télécom DISPATCHING V18-02-2019.pdf"
                  target="_blank"
                >
                  <img
                    src="pdfs/pdfs cover/APDNDSCH-02 Vue d'ensemble RSO télécom DISPATCHING V18-02-2019.png"
                    alt="Avant Projet Détaillée : Nouveau Dispatching de Yamoussokro – Vue d’ensemble du réseau de télécommunications"
                    style={{
                      transition: "filter 0.3s ease",
                      filter: "brightness(1)",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.filter = "brightness(0.5)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.filter = "brightness(1)")
                    }
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div>
        {/* Inline Style Tag for Keyframes */}
        <style>
          {`
      @keyframes scroll {
        0% { transform: translateX(100%); }
        50% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
      }

      .scrolling-buttons {
        display: flex;
        animation: scroll 10s ease-in-out infinite;
        white-space: nowrap;
        width: 100vw; /* Ensure the scrolling container takes up full viewport width */
        animation-play-state: running; /* Default to running */
      }

      .scrolling-buttons:hover {
        animation-play-state: paused; /* Pause animation when hovering over the container */
      }

      .scrolling-buttons .button {
        min-width: 300px;
        text-align: center;
        margin-right: 10px;
        background-size: cover;
        background-position: center;
        color: #315180;
        font-size: 1.875rem; /* 3xl */
        font-weight: bold;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        transition: background-color 0.3s, filter 0.3s ease;
        flex-shrink: 0; /* Prevent the button from shrinking */
      }

      .scrolling-buttons .button:first-child {
        background-image: url('images/');
      }

      .scrolling-buttons .button:last-child {
        background-image: url('images/');
      }

      .scrolling-buttons .button:hover {
        background-color: rgba(0, 0, 0, 0.3); /* darkens background on hover */
        filter: brightness(0.8);
      }
    `}
        </style>

        {/* Container for Scrolling Buttons */}
        <div className="overflow-hidden mt-12" style={{ width: "100%" }}>
          <div className="scrolling-buttons">
            <Link to="/faisabilite" className="button">
              Études de Faisabilité et Études d'Avant-Projet Sommaire (APS)
            </Link>

            <Link to="/execution" className="button">
              Études d'Exécution
            </Link>
          </div>
        </div>
      </div>

      <br></br>
    </div>
  );
}
