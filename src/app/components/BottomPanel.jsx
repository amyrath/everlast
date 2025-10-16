"use client";

import React from "react";
import { motion } from "framer-motion"; // pour l'animation fluide du panneau

// Menu coulissant simple et fonctionnel
const BottomPanel = ({ options = [], onSelect }) => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-lg border-t border-gray-300 p-4 flex overflow-x-auto space-x-4 z-50"
    >
      {options.length > 0 ? (
        options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(opt)}
            className="flex-shrink-0 px-4 py-2 rounded-xl bg-gray-200 hover:bg-blue-600 hover:text-white text-gray-800 font-semibold transition"
          >
            {opt.label}
          </button>
        ))
      ) : (
        <p className="text-gray-500">Aucune option disponible</p>
      )}
    </motion.div>
  );
};

export default BottomPanel;
