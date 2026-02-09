import React, { useState, useEffect, useContext } from "react";

const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const raw = sessionStorage.getItem("cravingCart");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem("cravingCart", JSON.stringify(cartItems));
    } catch (e) {
      // ignore
    }
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const idx = prev.findIndex((p) => p._id === item._id);
      if (idx !== -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], quantity: (copy[idx].quantity || 1) + 1 };
        return copy;
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => prev.filter((p) => p._id !== itemId));
  };

  const updateQuantity = (itemId, qty) => {
    setCartItems((prev) =>
      prev.map((p) => (p._id === itemId ? { ...p, quantity: Math.max(1, qty) } : p)),
    );
  };

  const clearCart = () => setCartItems([]);

  const getTotalItems = () => cartItems.reduce((s, i) => s + (i.quantity || 0), 0);

  const getTotalPrice = () =>
    cartItems.reduce((s, i) => s + (i.price || 0) * (i.quantity || 0), 0);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{props.children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);

export default CartContext;
