import React from "react";

export default function Location() {
  return (
    <section id="location" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="h-80 md:h-96 bg-gray-200 overflow-hidden rounded">
          {/* Replace src with the real Google Maps embed URL */}
          <iframe
            title="Cafe Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019488..."
            className="w-full h-full border-0"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-3">Find Us</h3>
          <p className="text-gray-700 mb-2">
            123 Main Street, Smalltown, ST 12345
          </p>
          <p className="text-gray-700 mb-4">(555) 123-4567</p>

          <h4 className="font-medium mb-2">Opening Hours</h4>
          <ul className="text-gray-700 space-y-1">
            <li>Mon - Fri: 7:00 AM - 6:00 PM</li>
            <li>Sat: 8:00 AM - 5:00 PM</li>
            <li>Sun: 8:00 AM - 3:00 PM</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
