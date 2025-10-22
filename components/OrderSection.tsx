"use client";
import { useState, useEffect } from "react";
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

// Example menu items (replace with your actual menu)
const menuItems = [
  { id: 1, name: "Espresso", price: 120 },
  { id: 2, name: "Cappuccino", price: 150 },
  { id: 3, name: "Latte", price: 140 },
  { id: 4, name: "Mocha", price: 160 },
];

const OrderSection = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Sync cart with localStorage and sidebar actions
  useEffect(() => {
    // Load cart from localStorage on mount
    const stored = localStorage.getItem("ordersection_cart");
    if (stored) {
      try {
        setCart(JSON.parse(stored));
      } catch {}
    }
    // Listen for cart updates from sidebar
    const handler = () => {
      const updated = localStorage.getItem("ordersection_cart");
      if (updated) {
        try {
          setCart(JSON.parse(updated));
        } catch {}
      }
    };
    window.addEventListener("ordersection_cart_updated", handler);
    return () =>
      window.removeEventListener("ordersection_cart_updated", handler);
  }, []);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [completed, setCompleted] = useState(false);

  const addToCart = (item: (typeof menuItems)[0]) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.id === item.id);
      let updatedCart;
      if (existing) {
        updatedCart = prev.map((ci) =>
          ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      } else {
        updatedCart = [...prev, { ...item, quantity: 1 }];
      }
      // Sync to localStorage so sidebar and navbar stay in sync
      localStorage.setItem("ordersection_cart", JSON.stringify(updatedCart));
      window.dispatchEvent(new Event("ordersection_cart_updated"));
      return updatedCart;
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const updatedCart = prev
        .map((ci) => (ci.id === id ? { ...ci, quantity: ci.quantity - 1 } : ci))
        .filter((ci) => ci.quantity > 0);
      localStorage.setItem("ordersection_cart", JSON.stringify(updatedCart));
      window.dispatchEvent(new Event("ordersection_cart_updated"));
      return updatedCart;
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || cart.length === 0) return;
    setCompleted(true);
  };

  if (completed)
    return (
      <>
        {/* Dynamic Popup */}
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4 text-emerald-700">
              Thank you for your order!
            </h2>
            <p className="text-lg mb-2">
              Order details have been shared to your number{" "}
              <span className="font-semibold">{phone}</span>.
            </p>
            <div className="mb-4 text-left">
              <h3 className="font-semibold mb-1">Order Summary:</h3>
              <ul className="mb-2">
                {cart.map((item) => (
                  <li key={item.id}>
                    {item.name} x {item.quantity} — ₹
                    {(item.price * item.quantity).toLocaleString("en-IN")}
                  </li>
                ))}
              </ul>
              <div className="font-bold">
                Total: ₹{total.toLocaleString("en-IN")}
              </div>
            </div>
            <button
              className="mt-2 px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold"
              onClick={() => window.location.reload()}
            >
              Close
            </button>
          </div>
        </div>
        <style>{`
          .animate-fade-in-up {
            opacity: 0;
            transform: translateY(40px);
            animation: fadeInUp 0.7s forwards 0.1s;
          }
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: none;
            }
          }
        `}</style>
      </>
    );

  return (
    <section id="order" className="py-16 bg-emerald-50">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-emerald-700 text-center">
          Order & Booking
        </h2>
        {/* Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-3"
            >
              <div>
                <span className="font-medium">{item.name}</span>
                <span className="ml-2 text-gray-500">
                  ₹{item.price.toLocaleString("en-IN")}
                </span>
              </div>
              <button
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-1 rounded-full font-semibold transition"
                onClick={() => addToCart(item)}
              >
                Add
              </button>
            </div>
          ))}
        </div>
        {/* Cart */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Your Cart</h3>
          {cart.length === 0 ? (
            <p className="text-gray-500">No items added yet.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li
                  key={item.id + "-" + item.name}
                  className="flex justify-between items-center mb-2"
                >
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>
                    ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    <button
                      className="ml-3 text-red-500 hover:underline"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove one"
                    >
                      Remove
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-2 font-bold text-lg">
            Total: ₹{total.toLocaleString("en-IN")}
          </div>
        </div>
        {/* Booking Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end"
        >
          <div>
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              className="w-full border rounded px-3 py-2"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="Enter your phone"
            />
          </div>
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-full transition text-lg"
              disabled={!name.trim() || !phone.trim() || cart.length === 0}
            >
              Complete Purchase
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrderSection;
