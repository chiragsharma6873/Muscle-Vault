import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

  const footerRef = useRef(null);

  const services = [
    "Home",
    "MEMBERHSIP",
    "CENTER NEAR ME",
    "WORKOUT FORMAT",
    "CONTACT US"
  ];

  const posts = [
    {
      title: "The last three or four reps is what makes the muscle grow -Arnold Schwarzenegger.",
      date: "31, Aug, 2026",
    },
    {
      title: "All progress takes place outside the comfort zone.",
    },
    {
      title: "The body achieves what the mind believes -Napoleon Hill",
    },
  ];

  const hours = [
    ["Monday", "09:00 am - 10:00 pm"],
    ["Tuesday", "08:00 am - 10:00 pm"],
    ["Wednesday", "09:00 am - 10:00 pm"],
    ["Thursday", "09:00 am - 10:00 pm"],
    ["Friday", "08:00 am - 12:00 pm"],
  ];


  useEffect(() => {

    const ctx = gsap.context(() => {

      // =========================
      // FOOTER COLUMNS ANIMATION
      // =========================

      const columns = gsap.utils.toArray(".footer-column");

      gsap.from(columns, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",

        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });


      // =========================
      // FOOTER BOTTOM ANIMATION
      // =========================

      gsap.from(".footer-bottom", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",

        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });


      // =========================
      // SOCIAL ICON INTERACTION
      // =========================

      const socialIcons = gsap.utils.toArray(".social-icon");

      socialIcons.forEach((icon) => {

        icon.addEventListener("mouseenter", () => {

          gsap.to(icon, {
            y: -4,
            rotation: 4,
            duration: 0.25,
            ease: "power2.out",
          });

        });


        icon.addEventListener("mouseleave", () => {

          gsap.to(icon, {
            y: 0,
            rotation: 0,
            duration: 0.25,
            ease: "power2.out",
          });

        });

      });

    }, footerRef);

    return () => ctx.revert();

  }, []);


  return (
    <footer
      ref={footerRef}
      className="bg-[#1b1c24] text-white"
    >

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">


          {/* CONTACT INFO */}

          <div className="footer-column">

            <h3 className="text-xl font-semibold">
              Contact Info
            </h3>

            <div className="mt-4 h-2px w-7 bg-yellow-400 transition-all duration-300 hover:w-14" />

            <p className="mt-5 text-sm leading-5 text-gray-300">
              The type of gym you prefer (e.g., premium chains, 24/7 access, local neighborhood studio)
              <br />
              Your primary fitness goals (e.g., weight training, cardio, personal training, group classes like Zumba)
            </p>

            <div className="mt-7 space-y-3 text-sm">

              <p>
                <span className="text-gray-300">
                  Phone:
                </span>

                <span className="ml-4 text-gray-200">
                  7011498850
                </span>
              </p>

              <p>
                <span className="text-gray-300">
                  E-mail:
                </span>

                <span className="ml-4 text-gray-200">
                  MuscleVault@gmail.com
                </span>
              </p>

              <p>
                <span className="text-gray-300">
                  Website:
                </span>

                <span className="ml-4 text-gray-200">
                  http://MuscleVault.com
                </span>
              </p>

            </div>

          </div>


          {/* SERVICES */}

          <div className="footer-column">

            <h3 className="text-xl font-semibold">
              Services
            </h3>

            <div className="mt-4 h-2px w-7 bg-yellow-400 transition-all duration-300 hover:w-14" />

            <ul className="mt-5 space-y-3 text-sm">

              {services.map((service, index) => (

                <li key={service}>

                  <a
                    href="#"
                    className={`group flex items-center gap-3 transition-all duration-300 ${
                      index === 0
                        ? "text-yellow-400"
                        : "text-gray-300 hover:text-yellow-400"
                    }`}
                  >

                    <span className="text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-yellow-400">
                      ›
                    </span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {service}
                    </span>

                  </a>

                </li>

              ))}

            </ul>

          </div>


          {/* LATEST POSTS */}

          <div className="footer-column">

            <h3 className="text-xl font-semibold">
              Latest Posts
            </h3>

            <div className="mt-4 h-2px w-7 bg-yellow-400 transition-all duration-300 hover:w-14" />

            <div className="mt-5 space-y-4">

              {posts.map((post, index) => (

                <div key={index}>

                  <a
                    href="#"
                    className="block text-sm leading-4 text-gray-200 transition-colors duration-300 hover:text-yellow-400"
                  >
                    {post.title}
                  </a>

                  {post.date && (
                    <p className="mt-1 text-xs text-gray-500">
                      {post.date}
                    </p>
                  )}

                </div>

              ))}

            </div>

          </div>


          {/* OPENING HOURS */}

          <div className="footer-column">

            <h3 className="text-xl font-semibold">
              Opening Hours
            </h3>

            <div className="mt-4 h-2px w-7 bg-yellow-400 transition-all duration-300 hover:w-14" />

            <div className="mt-5">

              {hours.map(([day, time]) => (

                <div
                  key={day}
                  className="flex justify-between border-b border-gray-800 py-2.5 text-sm transition-colors duration-300 hover:border-yellow-400"
                >

                  <span className="text-gray-200">
                    {day}
                  </span>

                  <span className="text-gray-300">
                    {time}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* DIVIDER */}

        <div className="mt-14 border-t border-gray-800" />


        {/* FOOTER BOTTOM */}

        <div className="footer-bottom flex flex-col items-center justify-between gap-6 pt-8 md:flex-row">

          <p className="text-center text-sm text-gray-300 md:text-left">

            © Copyright 2026 MuscleVault Gym. All Rights Reserved -{" "}

            <span className="transition-colors duration-300 hover:text-yellow-400">
              Design by MuscleVault
            </span>

          </p>


          {/* SOCIAL ICONS */}

          <div className="flex gap-2">

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="social-icon flex h-7 w-7 items-center justify-center rounded-sm bg-[#252525] text-sm font-bold text-white transition-all duration-300 hover:bg-yellow-400 hover:text-black"
            >
              f
            </a>


            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="social-icon flex h-7 w-7 items-center justify-center rounded-sm bg-[#252525] text-xs text-white transition-all duration-300 hover:bg-yellow-400 hover:text-black"
            >
              ◎
            </a>


            <a
              href="https://www.x.com/"
              target="_blank"
              rel="noreferrer"
              className="social-icon flex h-7 w-7 items-center justify-center rounded-sm bg-[#252525] text-xs font-bold text-white transition-all duration-300 hover:bg-yellow-400 hover:text-black"
            >
              X
            </a>


            <a
              // href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="social-icon flex h-7 w-7 items-center justify-center rounded-sm bg-[#252525] text-xs font-bold text-white transition-all duration-300 hover:bg-yellow-400 hover:text-black"
            >
              In
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;