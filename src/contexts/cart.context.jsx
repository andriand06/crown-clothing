import { createContext, useReducer } from "react";
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
const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  TOGGLE_CART: "TOGGLE_CART",
};
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartTotal: 0,
  cartCount: 0,
};

const cartReducer = (state, action) => {
  let { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems, cartCount, cartTotal } = state;
  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (count, cartItem) => count + cartItem.qty,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.qty * cartItem.price,
      0
    );
    const payload = {
      cartItems: newCartItems,
      cartTotal: newCartTotal,
      cartCount: newCartCount,
    };
    dispatch({ type: "SET_CART_ITEMS", payload });
    /**
     * generate newCartTotal
     * generate newCartCount
     *
     * dispatch new action with payload = {
     *  newCartItems,
     *  newCartTotal,
     *  newCartCount
     * }
     */
  };
  const setIsCartOpen = () => {
    dispatch({ type: "TOGGLE_CART", payload: !isCartOpen });
  };
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };
  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };
  const removeItem = (itemToRemove) => {
    const newCartItems = clearItem(cartItems, itemToRemove);
    updateCartItemsReducer(newCartItems);
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
