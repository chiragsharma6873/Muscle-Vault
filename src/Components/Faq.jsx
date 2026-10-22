import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    id: 1,
    question: "Is there a free trial?",
    answer:
      "Yes, new members can take advantage of our trial session to explore the gym, equipment, and training facilities.",
  },
  {
    id: 2,
    question: "Do you provide personal training?",
    answer:
      "Yes. Our certified trainers provide one-on-one personal training, customized workout plans, and guidance to help you reach your goals.",
  },
  {
    id: 3,
    question: "Is the gym suitable for beginners?",
    answer:
      "Absolutely! Our trainers can help beginners learn proper exercise techniques and create a workout plan based on their fitness goals.",
  },
  {
    id: 4,
    question: "Do you provide diet plans?",
    answer:
      "Yes, we can provide personalized nutrition guidance based on your fitness goals, workout routine, and dietary preferences.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const faqHeadingRef = useRef(null);
  const faqSubheadingRef = useRef(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // FAQ HEADING ANIMATION
      gsap.from(faqHeadingRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: faqHeadingRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // FAQ SUBTITLE ANIMATION
      gsap.from(faqSubheadingRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: faqHeadingRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // FAQ ITEMS ANIMATION
      const faqItems = gsap.utils.toArray(".faq-item");

      gsap.from(faqItems, {
        y: 60,
        opacity: 0,
        scale: 0.97,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-item",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full overflow-hidden bg-[#1b1c24] px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-8 text-center sm:mb-10">
          <h2
            ref={faqHeadingRef}
            className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl"
          >
            Frequently Asked Questions
          </h2>

          <p
            ref={faqSubheadingRef}
            className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#cecece] sm:text-base"
          >
            Find answers to the most commonly asked questions.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="faq-item overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={openId === faq.id}
                className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5"
              >
                <span className="min-w-0 break-words text-sm font-semibold leading-relaxed text-gray-800 sm:text-base md:text-lg">
                  {faq.question}
                </span>

                <span className="shrink-0 text-xl text-gray-500 sm:text-2xl">
                  {openId === faq.id ? "−" : "+"}
                </span>
              </button>

              {openId === faq.id && (
                <div className="px-4 pb-4 text-sm leading-relaxed text-gray-600 sm:px-5 sm:pb-5 sm:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;