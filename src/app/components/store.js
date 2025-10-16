// src/components/store.js
import { create } from "zustand";

export const useStore = create((set) => ({
  selectedProduct: null,   // id ou nom
  models: [],              // liste produits {id,name,src}
  materialSettings: {
    frameColor: "#d9d9d9",
    glassColor: "#ffffff88",
    jointColor: "#888888",
    metalness: 0.05,
    roughness: 0.6,
  },
  setSelected: (id) => set({ selectedProduct: id }),
  setMaterial: (patch) => set((state) => ({ materialSettings: {...state.materialSettings, ...patch} })),
  setModels: (m) => set({ models: m }),
}));
