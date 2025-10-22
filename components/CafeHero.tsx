"use client";
import React from "react";

const CafeHero = () => (
  <section
    className="relative h-screen flex items-center justify-center"
    style={{
      backgroundImage:
        "url('https://res.cloudinary.com/drkquyjdt/image/upload/v1761147208/Black_and_White_Modern_Cozy_Cafe_Presentation_1_vf3iw9.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    aria-label="Cozy cafe background"
  >
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-transparent" />
    {/* Hero Content */}
    <div className="relative z-10 text-center text-white animate-fade-in-up flex flex-col items-center justify-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
        Welcome to The Cozy Bean Cafe
      </h1>
      <p className="text-xl md:text-2xl mb-8 drop-shadow">
        Sip, Relax, and Enjoy. Order your favorites now!
      </p>
      {/* Coffee cup with animated steam */}
      <div
        className="relative flex flex-col items-center justify-center mb-8"
        style={{ height: 120 }}
      >
        {/* Realistic animated steam using SVG paths */}
        <svg
          className="absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none z-10"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "visible" }}
        >
          <path
            className="steam-path steam-path1"
            d="M20 50 C18 40, 28 35, 25 25"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.7"
          />
          <path
            className="steam-path steam-path2"
            d="M30 52 C32 42, 22 37, 35 22"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.5"
          />
          <path
            className="steam-path steam-path3"
            d="M40 50 C42 40, 38 35, 45 25"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.4"
          />
        </svg>
        {/* Coffee cup SVG */}
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="32"
            cy="54"
            rx="18"
            ry="6"
            fill="#222"
            fillOpacity="0.18"
          />
          <rect
            x="14"
            y="24"
            width="36"
            height="22"
            rx="11"
            fill="#fff"
            stroke="#d1bfa3"
            strokeWidth="2"
          />
          <ellipse
            cx="32"
            cy="24"
            rx="18"
            ry="7"
            fill="#fff"
            stroke="#d1bfa3"
            strokeWidth="2"
          />
          <ellipse cx="32" cy="24" rx="13" ry="4" fill="#6b3e26" />
          <path
            d="M50 32c6 0 6 10 0 10"
            stroke="#d1bfa3"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      <a
        href="#order"
        className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
      >
        Order Now
      </a>
    </div>
    {/* Fade-in and realistic steam animation */}
    <style>{`
      .animate-fade-in-up {
        opacity: 0;
        transform: translateY(40px);
        animation: fadeInUp 1s forwards 0.3s;
      }
      @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: none;
        }
      }
      .steam-path1 {
        animation: steamWobble1 2.2s infinite ease-in-out;
      }
      .steam-path2 {
        animation: steamWobble2 1.7s infinite ease-in-out 0.5s;
      }
      .steam-path3 {
        animation: steamWobble3 2.5s infinite ease-in-out 1s;
      }
      @keyframes steamWobble1 {
        0% { opacity: 0; transform: translateY(10px) scaleX(1); }
        10% { opacity: 0.5; }
        30% { opacity: 1; transform: translateY(-5px) scaleX(1.05) skewX(-2deg); }
        60% { opacity: 0.8; transform: translateY(-18px) scaleX(1.1) skewX(2deg); }
        100% { opacity: 0; transform: translateY(-32px) scaleX(1.15) skewX(-3deg); }
      }
      @keyframes steamWobble2 {
        0% { opacity: 0; transform: translateY(8px) scaleX(1); }
        20% { opacity: 0.6; }
        40% { opacity: 1; transform: translateY(-8px) scaleX(1.08) skewX(3deg); }
        70% { opacity: 0.7; transform: translateY(-20px) scaleX(1.13) skewX(-2deg); }
        100% { opacity: 0; transform: translateY(-30px) scaleX(1.18) skewX(2deg); }
      }
      @keyframes steamWobble3 {
        0% { opacity: 0; transform: translateY(12px) scaleX(1); }
        15% { opacity: 0.4; }
        35% { opacity: 1; transform: translateY(-6px) scaleX(1.04) skewX(1deg); }
        65% { opacity: 0.6; transform: translateY(-16px) scaleX(1.09) skewX(-2deg); }
        100% { opacity: 0; transform: translateY(-28px) scaleX(1.13) skewX(3deg); }
      }
    `}</style>
  </section>
);

export default CafeHero;
