import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger);

const Mid = () => {
  const sectionRef = useRef(null);
  const communityHeadingRef = useRef(null);
  const membershipHeadingRef = useRef(null);
  const membershipSubHeadingRef = useRef(null);

  const videos = [
    "https://www.pexels.com/download/video/35585700/",
    "https://www.pexels.com/download/video/34800917/",
    "https://www.pexels.com/download/video/34583322/",
    "https://www.pexels.com/download/video/34568748/",
    "https://www.pexels.com/download/video/37515281/",
  ];

  const offerPass = [
    {
      month: "1 Month",
      price: "₹ 3,000 (₹3,000/mo*)",
      image:
        "https://images.pexels.com/photos/17959564/pexels-photo-17959564.jpeg",
    },
    {
      month: "6 Month",
      price: "₹15,000 (₹2,500/mo*)",
      image:
        "https://images.pexels.com/photos/11385973/pexels-photo-11385973.jpeg",
    },
    {
      month: "12 Month",
      price: "₹24,000 (₹2,000/mo*)",
      image:
        "https://images.pexels.com/photos/17770534/pexels-photo-17770534.jpeg",
    },
    {
      month: "24 Month",
      price: "₹48,000 (₹2,000/mo*)",
      image:
        "https://images.pexels.com/photos/19254708/pexels-photo-19254708.jpeg",
    },
    {
      month: "36 Month",
      price: "₹54,000 (₹1,500/mo*)",
      image:
        "https://images.pexels.com/photos/15379770/pexels-photo-15379770.jpeg",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        communityHeadingRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: communityHeadingRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".community-video-slide",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: communityHeadingRef.current,
            start: "top 75%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        membershipHeadingRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: membershipHeadingRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        membershipSubHeadingRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: membershipHeadingRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".membership-card",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: membershipHeadingRef.current,
            start: "top 70%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#1b1c24] px-6 py-16 md:px-10 lg:px-16"
    >
      <div className="w-full">
        <h1
          ref={communityHeadingRef}
          className="text-3xl font-bold text-white md:text-4xl lg:text-5xl"
        >
          The Coolest Fitness Community
        </h1>

        <div className="mt-8 w-full">
          <Swiper
            modules={[Autoplay, Pagination,]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{}}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            className="w-full"
          >
            {videos.map((video, index) => (
              <SwiperSlide
                key={index}
                className="community-video-slide"
              >
                <video
                  src={video}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-[400px] w-full rounded-lg object-cover md:h-[450px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="mt-24 flex w-full flex-col items-center">
        <h1
          ref={membershipHeadingRef}
          className="text-center text-3xl font-bold text-white md:text-5xl"
        >
          Choose a MuscleVault Pass
        </h1>

        <h4
          ref={membershipSubHeadingRef}
          className="mt-2 text-center text-xl font-bold text-[#838282] md:text-3xl"
        >
          For all your needs
        </h4>

        <div className="mt-10 w-full">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="w-full"
          >
            {offerPass.map((pass, index) => (
              <SwiperSlide key={index}>
                <div
                  className="
                    membership-card
                    w-full
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-[#292a30]
                    bg-[#0d0e10]
                    transition-all
                    duration-300
                    hover:border-[#55565c]
                  "
                >
                  <div className="overflow-hidden">
                    <img
                      src={pass.image}
                      alt={pass.month}
                      loading="lazy"
                      decoding="async"
                      className="
                        h-[280px]
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        hover:scale-105
                      "
                    />
                  </div>

                  <h4
                    className="
                      px-6
                      pt-5
                      text-sm
                      font-medium
                      uppercase
                      tracking-[0.16em]
                      text-[#a5a5aa]
                    "
                  >
                    {pass.month}
                  </h4>

                  <h2
                    className="
                      px-6
                      pt-3
                      text-2xl
                      font-semibold
                      tracking-[-0.03em]
                      text-white
                    "
                  >
                    {pass.price}
                  </h2>

                  <div className="mx-6 mt-6 h-px bg-[#292a30]" />

                  <div className="flex justify-center px-6 py-5">
                    <button
                      type="button"
                      className="
                        w-full
                        cursor-pointer
                        rounded-full
                        bg-white
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-black
                        transition-all
                        duration-300
                        hover:bg-[#e7e7e7]
                        hover:shadow-lg
                      "
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Mid;