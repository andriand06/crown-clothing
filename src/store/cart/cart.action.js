import { CART_ACTION_TYPES } from "./cart.types";
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
const setCartItems = (payload) => ({
  type: CART_ACTION_TYPES.SET_CART_ITEMS,
  payload,
});
export const toggleCart = (payload) => ({
  type: CART_ACTION_TYPES.TOGGLE_CART,
  payload,
});
export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};
export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return setCartItems(newCartItems);
};
export const removeItem = (cartItems, itemToRemove) => {
  const newCartItems = clearItem(cartItems, itemToRemove);
  return setCartItems(newCartItems);
};
