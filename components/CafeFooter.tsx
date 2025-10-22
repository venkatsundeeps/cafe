import React from "react";

export default function CafeFooter() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="font-semibold">The Cozy Bean Cafe</div>
          <div className="text-sm">123 Main Street, Smalltown, ST 12345</div>
          <div className="text-sm">(555) 123-4567</div>
        </div>

        <div className="flex items-center gap-4">
          {/* Simple placeholders for social icons — replace with SVGs or icon components */}
          <a
            href="#"
            aria-label="Instagram"
            className="text-gray-300 hover:text-white"
          >
            IG
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="text-gray-300 hover:text-white"
          >
            FB
          </a>
          <a
            href="#"
            aria-label="X (Twitter)"
            className="text-gray-300 hover:text-white"
          >
            X
          </a>
        </div>
      </div>
    </footer>
  );
}
