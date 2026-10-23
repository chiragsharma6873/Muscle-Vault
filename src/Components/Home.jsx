import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "/logo.png";

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content animation
      gsap.fromTo(
        ".hero-item",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
        },
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="HOME"
      ref={containerRef}
      className="relative flex h-screen w-full items-end justify-center overflow-hidden bg-black"
    >
 <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="https://www.pexels.com/download/video/34668838/"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />

    

      <div className="absolute inset-0 z-10 bg-black/40" />

   

      <div className="relative z-20 flex w-full flex-col items-center justify-center px-6 pb-20 text-center text-white">
        {/* Heading */}

        <h1 className="hero-item text-3xl font-bold md:text-4xl lg:text-5xl">
          WELCOME TO MUSCLE VAULT
        </h1>

        {/* Logo */}

        <img
          src={logo}
          alt="Muscle Vault"
          loading="eager"
          className="hero-item mt-5 w-32 md:w-40"
        />

        {/* Subheading */}

        <h2 className="hero-item mt-5 max-w-3xl text-xl font-bold md:text-2xl lg:text-3xl">
          India's Most Flexible Fitness Membership
        </h2>

        {/* Button */}

        <div className="hero-item mt-7">
          <button
            type="button"
            className="
              flex
              cursor-pointer
              items-center
              justify-center
              rounded-2xl
              border
              border-white
              bg-black
              px-6
              py-3
              text-lg
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-white
              hover:text-black
              md:text-xl
            "
          >
            TRY FOR FREE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;