// src/components/CustomizerCanvas.jsx
"use client"
import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, ContactShadows } from "@react-three/drei";
import { useStore } from "./store";
import { a, useSpring } from "@react-spring/three";

function ProductModel({ src, isCenter, materialSettings }) {
  const { scene } = useGLTF(src);
  // find meshes and set material override
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = child.material || child.material?.clone?.();
        // assign simple standard material if none
        child.material.color.set(materialSettings.frameColor);
        child.material.roughness = materialSettings.roughness;
        child.material.metalness = materialSettings.metalness;
        // if mesh named "glass" set its color/transparency
        if (/glass/i.test(child.name)) {
          child.material.color.set(materialSettings.glassColor);
          child.material.transparent = true;
          child.material.opacity = parseFloat(materialSettings.glassColor.slice(-2) || 0.6);
        }
      }
    });
  }, [scene, materialSettings]);

  // animation: if center, scale up, else small
  const props = useSpring({ scale: isCenter ? 1.0 : 0.28, config: { mass:1, tension:170, friction:26 } });

  return (
    <a.group scale={props.scale} dispose={null}>
      <primitive object={scene} />
    </a.group>
  );
}

function SceneInner() {
  const { models, selectedProduct, materialSettings } = useStore();
  const centerModel = models.find(m => m.id === selectedProduct) || models[0];

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 10, 7]} intensity={0.8} castShadow />
      <Suspense fallback={null}>
        {/* left mini */}
        {models.slice(0,3).map((m, i) => (
          <group key={m.id} position={[(i-1)*3.5, 0, -4]}>
            <ProductModel src={m.src} isCenter={m.id === selectedProduct} materialSettings={materialSettings} />
          </group>
        ))}

        {/* center display (big) */}
        <group position={[0, -0.4, 0]}>
          {centerModel && <ProductModel src={centerModel.src} isCenter={true} materialSettings={materialSettings} />}
        </group>

        <ContactShadows opacity={0.6} scale={6} blur={2} />
        <Environment preset="warehouse" />
      </Suspense>
      <OrbitControls enablePan={false} maxPolarAngle={Math.PI/2} />
    </>
  );
}

export default function CustomizerCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 35 }}>
      <SceneInner />
    </Canvas>
  );
}
