"use client";

import React, { useState, useEffect } from "react";

const getCartCount = () => {
  if (typeof window === "undefined") return 0;
  try {
    const cart = JSON.parse(localStorage.getItem("ordersection_cart") || "[]");
    return Array.isArray(cart)
      ? cart.reduce((sum, item) => sum + (item.quantity || 0), 0)
      : 0;
  } catch {
    return 0;
  }
};

export default function CafeNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Listen for cart changes in localStorage (demo purpose)
  useEffect(() => {
    function updateCart() {
      setCartCount(getCartCount());
    }
    updateCart();
    window.addEventListener("storage", updateCart);
    return () => window.removeEventListener("storage", updateCart);
  }, []);

  // For demo: update cart count on mount and when menu toggled
  useEffect(() => {
    setCartCount(getCartCount());
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/95 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Mobile menu button */}
        <button
          className="md:hidden mr-2 p-2 rounded hover:bg-gray-100 focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Left nav links */}
        <div className="hidden md:flex flex-1 items-center gap-8">
          <a href="#home" className="text-sm font-medium hover:underline">
            Home
          </a>
          <a href="#menu" className="text-sm font-medium hover:underline">
            Menu
          </a>
          <a href="#order" className="text-sm font-medium hover:underline">
            Order
          </a>
          <a href="#location" className="text-sm font-medium hover:underline">
            Location
          </a>
        </div>

        {/* Logo */}
        <div className="flex-none">
          <a href="#home" className="text-xl font-bold tracking-wide">
            {/* Replace with logo image if available */}
            The Cozy Bean
          </a>
        </div>

        {/* Cart icon and right links */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <a href="#order" className="relative inline-flex items-center group">
            <svg
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-amber-600 group-hover:text-amber-700"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8M8 16h8" />
            </svg>
            <span className="ml-2 hidden md:inline text-sm font-medium">
              Cart
            </span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full px-2 py-0.5 font-bold shadow">
                {cartCount}
              </span>
            )}
          </a>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md border-t z-50 md:hidden animate-fade-in-up">
            <div className="flex flex-col gap-2 py-4 px-6">
              <a
                href="#home"
                className="text-sm font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#menu"
                className="text-sm font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Menu
              </a>
              <a
                href="#order"
                className="text-sm font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Order
              </a>
              <a
                href="#location"
                className="text-sm font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Location
              </a>
            </div>
          </div>
        )}
      </div>
      <style>{`
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.3s forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </nav>
  );
}
