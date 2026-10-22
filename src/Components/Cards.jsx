import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  const cards = [
    {
      title: "At Home",
      image:
        "https://images.pexels.com/photos/7900680/pexels-photo-7900680.jpeg",
      description: "Guided workouts from the ease of home",
      points: [
        "HIIT + at-home workouts",
        "Strength, dance & yoga",
        "Meditation sessions & health podcasts",
      ],
    },
    {
      title: "Lux",
      image:
        "https://images.pexels.com/photos/29526371/pexels-photo-29526371.jpeg",
      description: "Premium fitness spaces with elevated amenities",
      points: [
        "World-class equipment",
        "Personal training available",
        "Custom workout plans",
      ],
    },
    {
      title: "Transform",
      image:
        "https://images.pexels.com/photos/31849600/pexels-photo-31849600.jpeg",
      description: "Online sustainable weight loss program",
      points: [
        "Custom workout plans",
        "Daily habits + progress",
        "Personal coach check-ins",
        "Tailored meal plans",
      ],
    },
    {
      title: "Play",
      image:
        "https://images.pexels.com/photos/9030291/pexels-photo-9030291.jpeg",
      description: "Badminton, swimming, and table tennis",
      points: [
        "Access to multiple sports centers",
        "Badminton, swimming & other sports",
        "Guaranteed playing partner",
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".service-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full overflow-hidden bg-[#1B1C24] px-4 py-8 sm:px-6 md:px-10 lg:px-12"
    >
      {/* HEADER */}
      <div
        ref={headingRef}
        className="mb-8 flex w-full items-end justify-between"
      >
        <div className="w-full">
          <p className="mb-2 text-[11px] uppercase tracking-[0.35em] text-[#c5a56c]">
            Our Programs
          </p>

          <h1 className="max-w-4xl font-serif text-3xl font-normal leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Training for a Stronger You
          </h1>
        </div>
      </div>

      {/* RESPONSIVE CARDS */}
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="service-card group relative h-[460px] min-w-0 overflow-hidden rounded-[14px] border border-white/15 bg-[#090b0d] sm:h-[480px] lg:h-[500px]"
          >
            {/* IMAGE */}
            <div className="absolute inset-x-0 top-0 h-[54%] overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10" />

              <div className="absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-[#090b0d] via-[#090b0d]/75 to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="absolute inset-x-0 bottom-0 z-10 flex h-[60%] flex-col px-4 pb-5 pt-7 sm:px-5 md:px-6">
              {/* CATEGORY */}
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-5 shrink-0 bg-[#b99a64]" />

                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#c7a86d]">
                  {card.title}
                </span>
              </div>

              {/* TITLE */}
              <h2 className="max-w-full break-words font-serif text-xl font-normal leading-tight text-white sm:text-[22px] lg:text-[24px]">
                {card.description}
              </h2>

              {/* POINTS */}
              <div className="mt-4 flex flex-col gap-1.5">
                {card.points.map((point, pointIndex) => (
                  <p
                    key={pointIndex}
                    className="text-[11px] leading-relaxed text-white/55 sm:text-xs"
                  >
                    {point}
                  </p>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto pt-4">
                <button
                  type="button"
                  className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[#d1b276] transition-all duration-300 group-hover:gap-6"
                >
                  <span>Learn More</span>
                  <span className="text-lg leading-none">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;