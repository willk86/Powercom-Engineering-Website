import { motion, useInView, hover } from "framer-motion";
import { useState, useRef } from "react";

export function Controle() {

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
    "En tant qu'ingénieur partenaire de SOFRECO pour la mise à disposition d’experts et de superviseurs locaux dans le cadre du projet ENERGOS.",
    "En tant qu'ingénieur partenaire de TRACTEBEL pour la mise à disposition d’experts, de superviseurs locaux et de personnels divers dans le cadre du projet de construction du barrage hydro-électrique de Gribo Popoli.",
    "En tant qu'ingénieur conseil de CI-ENERGIES pour le projet de dédoublement de la file 225 KV Taabo-Kossou-Bouaké 2.",
  ];

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 text-gray-700"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold mb-8"
          >
            Contrôle et Supervision de Travaux
          </motion.h1>

          <p>
            Proposant son appui aux équipes projet CI-ENERGIES, Powercom Engineering intervint :
          </p>

          <motion.ul
            ref={listRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{
              listStyleType: "disc",
              marginLeft: "20px",
              paddingLeft: "0",
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
        </motion.div>

        <div className="space-y-12">
          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-6">Services de Contrôle</h2>
            <div className="grid md:grid-cols-2 gap-8 justify-center">
              <div className="bg-white rounded-xl p-8 shadow-sm mx-auto">
                <h3 className="text-xl font-semibold mb-4">Contrôle Technique</h3>
                <ul className="list-disc list-inside space-y-3 text-gray-600 text-left">
                  <li>Supervision des travaux d'installation</li>
                  <li>Contrôle qualité des équipements</li>
                  <li>Vérification des normes de sécurité</li>
                  <li>Tests et essais des installations</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm mx-auto">
                <h3 className="text-xl font-semibold mb-4">Supervision de Chantier</h3>
                <ul className="list-disc list-inside space-y-3 text-gray-600 text-left">
                  <li>Coordination des équipes</li>
                  <li>Suivi de planning</li>
                  <li>Contrôle des coûts</li>
                  <li>Rapports d'avancement</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="flex justify-center items-center text-center">
            <div className="max-w-3xl w-full">
              <h2 className="text-2xl font-semibold mb-6">Systèmes de Contrôle</h2>
              <div className="bg-white rounded-xl p-8 shadow-sm mx-auto">
                <ul className="list-disc list-inside space-y-3 text-gray-600 text-left">
                  <li>Systèmes SCADA :</li>
                  <ul className="list-inside space-y-3 text-gray-600 px-6">
                    <li>Contrôle-commande numérique</li>
                    <li>Téléconduite des réseaux</li>
                  </ul>
                  <li>Automatismes industriels</li>
                  <li>Systèmes de protection</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="flex justify-center items-center text-center">
            <div className="max-w-3xl w-full">
              <h2 className="text-2xl font-semibold mb-6">Maintenance</h2>
              <div className="bg-white rounded-xl p-8 shadow-sm mx-auto">
                <ul className="list-disc list-inside space-y-3 text-gray-600 text-left">
                  <li>Plans de maintenance préventive</li>
                  <li>Diagnostic des installations</li>
                  <li>Optimisation des performances</li>
                  <li>Formation des équipes de maintenance</li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
