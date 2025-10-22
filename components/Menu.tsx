"use client";
import React, { useState } from "react";

type Nutrition = {
  calories: number;
  protein: string;
  fat: string;
  carbs: string;
};
type MenuItem = {
  name: string;
  price: number;
  icon: string;
};
type SidebarItem = MenuItem & { nutrition?: Nutrition | null };

const coffeeNutrition: Record<string, Nutrition> = {
  Espresso: { calories: 5, protein: "0g", fat: "0g", carbs: "1g" },
  Americano: { calories: 10, protein: "0g", fat: "0g", carbs: "2g" },
  Cappuccino: { calories: 80, protein: "4g", fat: "4g", carbs: "8g" },
  Latte: { calories: 120, protein: "6g", fat: "5g", carbs: "12g" },
};
const pastryNutrition: Record<string, Nutrition> = {
  Croissant: { calories: 230, protein: "5g", fat: "12g", carbs: "26g" },
  "Blueberry Muffin": { calories: 210, protein: "3g", fat: "8g", carbs: "32g" },
  "Banana Bread": { calories: 190, protein: "3g", fat: "6g", carbs: "30g" },
  "Cinnamon Roll": { calories: 250, protein: "4g", fat: "9g", carbs: "38g" },
};

export default function Menu() {
  function closeSidebar() {
    setSidebarOpen(false);
    setSelectedItem(null);
  }
  const coffees: MenuItem[] = [
    { name: "Espresso", price: 120, icon: "☕" },
    { name: "Americano", price: 130, icon: "☕" },
    { name: "Cappuccino", price: 140, icon: "☕" },
    { name: "Latte", price: 150, icon: "☕" },
  ];

  const pastries: MenuItem[] = [
    { name: "Croissant", price: 90, icon: "🥐" },
    { name: "Blueberry Muffin", price: 100, icon: "🧁" },
    { name: "Banana Bread", price: 110, icon: "🍌" },
    { name: "Cinnamon Roll", price: 95, icon: "🍩" },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SidebarItem | null>(null);
  const [addedMsg, setAddedMsg] = useState(false);

  function handleItemClick(item: MenuItem, type: "coffee" | "pastry") {
    setSelectedItem({
      ...item,
      nutrition:
        type === "coffee"
          ? coffeeNutrition[item.name] || null
          : pastryNutrition[item.name] || null,
    });
    setSidebarOpen(true);
  }

  return (
    <>
      <section className="py-20 bg-gray-900 relative">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-emerald-800 tracking-tight drop-shadow">
          Our Menu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Coffee Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-amber-700 flex items-center gap-2">
              <span>☕</span> Coffee
            </h3>
            <ul className="space-y-4">
              {coffees.map((c) => (
                <li
                  key={c.name}
                  className="flex items-center justify-between bg-gray-800 rounded-lg shadow p-4 border border-transparent hover:border-amber-400 hover:shadow-xl transition cursor-pointer group"
                  onClick={() => handleItemClick(c, "coffee")}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${c.name}`}
                >
                  <span className="flex items-center gap-3 text-lg relative">
                    {/* Steam animation */}
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 flex gap-1 pointer-events-none">
                      <span className="steam w-2 h-5 rounded-full bg-linear-to-t from-white/60 to-transparent animate-steam1"></span>
                      <span className="steam w-2 h-4 rounded-full bg-linear-to-t from-white/50 to-transparent animate-steam2"></span>
                      <span className="steam w-1.5 h-3 rounded-full bg-linear-to-t from-white/40 to-transparent animate-steam3"></span>
                    </span>
                    <span className="text-2xl">{c.icon}</span>
                    {c.name}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="font-bold text-amber-400 text-lg">
                      ₹{c.price.toLocaleString("en-IN")}
                    </span>
                    <svg
                      className="w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pastries Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-amber-700 flex items-center gap-2">
              <span>🥐</span> Pastries
            </h3>
            <ul className="space-y-4">
              {pastries.map((p) => (
                <li
                  key={p.name}
                  className="flex items-center justify-between bg-gray-800 rounded-lg shadow p-4 border border-transparent hover:border-amber-400 hover:shadow-xl transition cursor-pointer group"
                  onClick={() => handleItemClick(p, "pastry")}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${p.name}`}
                >
                  <span className="flex items-center gap-3 text-lg">
                    <span className="text-2xl">{p.icon}</span>
                    {p.name}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="font-bold text-amber-400 text-lg">
                      ₹{p.price.toLocaleString("en-IN")}
                    </span>
                    <svg
                      className="w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar for item details */}
        {sidebarOpen && selectedItem && (
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 animate-slide-in flex flex-col">
            <button
              className="self-end m-4 text-gray-500 hover:text-emerald-700 text-2xl"
              onClick={closeSidebar}
              aria-label="Close sidebar"
            >
              &times;
            </button>
            <div className="px-8 pb-8 flex-1 flex flex-col justify-center">
              <div className="text-5xl mb-2">{selectedItem.icon}</div>
              <div className="text-2xl font-bold mb-1">{selectedItem.name}</div>
              <div className="text-lg text-emerald-700 font-semibold mb-4">
                ₹{selectedItem.price.toLocaleString("en-IN")}
              </div>
              {selectedItem.nutrition ? (
                <div className="mb-4">
                  <div className="font-semibold mb-2 text-gray-700">
                    Nutritional Info (approx):
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Calories: {selectedItem.nutrition.calories}</li>
                    <li>Protein: {selectedItem.nutrition.protein}</li>
                    <li>Fat: {selectedItem.nutrition.fat}</li>
                    <li>Carbs: {selectedItem.nutrition.carbs}</li>
                  </ul>
                </div>
              ) : (
                <div className="text-sm text-gray-400 mb-4">
                  No nutrition info available.
                </div>
              )}
              <button
                className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-full transition text-lg shadow"
                onClick={() => {
                  try {
                    const cart = JSON.parse(
                      localStorage.getItem("ordersection_cart") || "[]"
                    );
                    const idx = cart.findIndex(
                      (i: { name: string; price: number; quantity: number }) =>
                        i.name === selectedItem.name
                    );
                    if (idx > -1) {
                      cart[idx].quantity = (cart[idx].quantity || 1) + 1;
                      cart[idx].price = selectedItem.price;
                    } else {
                      cart.push({
                        name: selectedItem.name,
                        price: selectedItem.price,
                        quantity: 1,
                      });
                    }
                    localStorage.setItem(
                      "ordersection_cart",
                      JSON.stringify(cart)
                    );
                    window.dispatchEvent(
                      new Event("ordersection_cart_updated")
                    );
                  } catch {}
                  setAddedMsg(true);
                  setTimeout(() => {
                    setAddedMsg(false);
                    closeSidebar();
                  }, 900);
                }}
              >
                {addedMsg ? "Added to cart!" : "Order Now"}
              </button>
            </div>
          </div>
        )}
      </section>
      <style>{`
        .animate-slide-in {
          animation: slideInSidebar 0.3s cubic-bezier(.4,1.7,.6,.97) both;
        }
        @keyframes slideInSidebar {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: none; opacity: 1; }
        }
        .animate-steam1 {
          animation: steamUp 1.6s infinite linear;
        }
        .animate-steam2 {
          animation: steamUp 1.2s infinite linear 0.4s;
        }
        .animate-steam3 {
          animation: steamUp 1.1s infinite linear 0.8s;
        }
        @keyframes steamUp {
          0% { opacity: 0; transform: translateY(10px) scaleX(1); }
          30% { opacity: 1; }
          70% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-16px) scaleX(1.2); }
        }
      `}</style>
    </>
  );
}
