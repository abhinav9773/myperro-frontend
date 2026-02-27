"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";

const ModelViewer = dynamic(
  //@ts-ignore
  () => import("@google/model-viewer"),
  { ssr: false },
);

export default function HeroCollar() {
  useEffect(() => {
    // Ensure the model-viewer script is added to the DOM
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    script.type = "module";
    document.head.appendChild(script);
  }, []);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id="product" className="relative w-full h-auto flex justify-center items-center my-20" ref={sectionRef}>
      <motion.div 
        className="w-full flex justify-center items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Image
          src="/heroCollar/background.png"
          alt="bg"
          width={1000}
          height={1000}
          className="w-[85%] sm:w-[80%] h-[80%] rounded-3xl sm:rounded-[50px]"
        />
        <div className=" absolute sm:flex flex-col justify-around text-secondary opacity-50 w-[80%] h-[80%] text-center text-[10vw]  overflow-hidden text-nowrap leading-tight font-borela">
          <h3>TAILORED</h3>
          <h3>TECHNOLOGY</h3>
          <h3>FOR YOUR PET</h3>
        </div>
        {/* @ts-ignore */}
        <model-viewer
          src="dogCollar.glb"
          alt="A 3D model of a dog collar"
          loading="eager"
          camera-controls
          camera-orbit="-10deg 60deg 45deg"
          disable-zoom
          disable-pan
          shadow-intensity="1"
          className="absolute w-[100%] h-[100%] sm:w-[80%] sm:h-[80%]"
        />
      </motion.div>
    </div>
  );
}
