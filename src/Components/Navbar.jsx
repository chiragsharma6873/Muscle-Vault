import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import logo from "/logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navlinks = [
    "HOME",
    "MEMBERSHIP",
    "CENTERS NEAR ME",
    "WORKOUT FORMAT",
  ];

  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-item", {
        y: -50,
        opacity: 0,
        scale: 0.8,
        rotationX: -45,
        transformOrigin: "top center",
        duration: 1.2,
        stagger: 0.15,
        ease: "power1.out",
        clearProps: "all",
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 z-50 flex w-full items-center justify-between gap-3 border-b border-white/10 bg-black px-3 py-2 text-white sm:px-5"
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Muscle Vault"
          className="nav-item w-14 shrink-0 sm:w-20"
        />

        {/* Desktop Navigation */}
        <div className="hidden w-full items-center justify-center gap-5 text-white lg:flex xl:gap-8">
          {navlinks.map((item, index) => (
            <a
              href="#"
              key={index}
              className="nav-item whitespace-nowrap text-sm transition-colors duration-300 hover:scale-105 hover:text-yellow-400"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Action Items */}
        <div className="flex shrink-0 items-center gap-2">
          <button className="nav-item cursor-pointer whitespace-nowrap rounded-xl border bg-white px-3 py-2 text-xs font-bold text-black transition-transform hover:scale-105 sm:px-5 sm:text-sm">
            GET APP
          </button>

          <a
            href="tel:7011498850"
            className="nav-item hidden whitespace-nowrap rounded-xl border bg-white px-3 py-2 text-xs font-bold text-black transition-transform hover:scale-105 md:block sm:px-5 sm:text-sm"
          >
            7011498850
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            className="flex items-center justify-center rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/60 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-[85%] max-w-sm flex-col bg-[#1b1c24] p-6 text-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Sidebar Header */}
        <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-5">
          <img
            src={logo}
            alt="Muscle Vault"
            className="w-20"
          />

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            tabIndex={isOpen ? 0 : -1}
            className="rounded-lg p-2 transition-colors hover:bg-white/10"
          >
            <X size={26} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col gap-2">
          {navlinks.map((item, index) => (
            <a
              href="#"
              key={index}
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-4 text-sm font-medium tracking-wide transition-colors hover:bg-white/10 hover:text-yellow-400"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Sidebar Footer */}
        <div className="mt-auto flex flex-col gap-4 border-t border-white/10 pt-6">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-full rounded-xl bg-white px-5 py-3 font-bold text-black transition-transform hover:scale-[1.02]"
          >
            GET APP
          </button>

          <a
            href="tel:7011498850"
            className="text-center text-sm text-white/70 transition-colors hover:text-yellow-400"
          >
            7011498850
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;