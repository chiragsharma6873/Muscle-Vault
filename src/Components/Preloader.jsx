
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += 2;
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete?.();
        }, 200);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-black text-white flex flex-col justify-between p-6 md:p-10"
    >
      <div className="text-4xl tracking-[0.3em] pt-10">
        MUSCLE{" "}
        <span className="text-[#ebad32]">VAULT</span>
      </div>

      <div>
        <div className="flex justify-between items-end mb-4">
          <h1 className="text-6xl md:text-[10rem] font-bold leading-none">
            {progress}%
          </h1>

          <span className="text-gray-500 mb-3">
            LOADING...
          </span>
        </div>

        <div className="w-full h-[2px] bg-gray-800">
          <motion.div
            className="h-full bg-[#ebad32]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="text-[#ebad32] text-sm">
        MUSCLE VAULT / 2026
      </div>
    </motion.div>
  );
};

export default Preloader;
