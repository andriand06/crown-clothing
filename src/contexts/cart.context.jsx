import { createContext, useState, useEffect } from "react";
const addCartItem = (cartItems, productToAdd) => {
  /**
   * Check wheter productToAdd already exist in cartItems
   * if yes increment qty
   * else add new product to cartItems
   */
  let isItemExist = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (isItemExist) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, qty: cartItem.qty + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, qty: 1 }];
};
const removeCartItem = (cartItems, productToRemove) => {
  let existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  if (existingCartItem.qty - 1 === 0) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, qty: cartItem.qty - 1 }
      : cartItem
  );
};
const clearItem = (cartItems, itemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeItem: () => {},
  count: 0,
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (count, cartItem) => count + cartItem.qty,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.qty * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };
  const removeItem = (itemToRemove) => {
    setCartItems(clearItem(cartItems, itemToRemove));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    removeItem,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
