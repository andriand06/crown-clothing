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
const calculateTotal = (cartItems) => {
  return cartItems.reduce(
    (total, cartItem) => total + cartItem.qty * cartItem.price,
    0
  );
};
const calculateCount = (cartItems) => {
  return cartItems.reduce((count, cartItem) => count + cartItem.qty, 0);
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
  TOGGLE_CART_OPEN: "TOGGLE_CART_OPEN",
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  REMOVE_ITEM_FROM_CART: "REMOVE_ITEM_FROM_CART",
  REMOVE_ITEM: "REMOVE_ITEM",
};
//reducer can only keep readable value
//best practice is to send the transformed payload to reducer instead of doing process / transform inside reducer
const cartReducer = (state, action) => {
  const { type, payload } = action;
  console.log(action);
  console.log(state);

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART_OPEN:
      return {
        ...state,
        isCartOpen: true,
      };
    case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
      let addedCartItems = addCartItem(state.cartItems, payload);
      return {
        ...state,
        cartItems: addedCartItems,
        cartTotal: calculateTotal(addedCartItems),
        cartCount: calculateCount(addedCartItems),
      };
    case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
      let removedCartItems = removeCartItem(state.cartItems, payload);
      return {
        ...state,
        cartItems: removedCartItems,
        cartTotal: calculateTotal(removedCartItems),
        cartCount: calculateCount(removedCartItems),
      };
    case CART_ACTION_TYPES.REMOVE_ITEM:
      let newCartItems = clearItem(state.cartItems, payload);
      return {
        ...state,
        cartItems: newCartItems,
        cartTotal: calculateTotal(newCartItems),
        cartCount: calculateCount(newCartItems),
      };
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartTotal: 0,
  cartCount: 0,
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems, cartCount, cartTotal } = state;
  const addItemToCart = (productToAdd) => {
    dispatch({
      type: CART_ACTION_TYPES.ADD_ITEM_TO_CART,
      payload: productToAdd,
    });
  };
  const setIsCartOpen = () => {
    dispatch({
      type: CART_ACTION_TYPES.TOGGLE_CART_OPEN,
      payload: !isCartOpen,
    });
  };
  const removeItemFromCart = (productToRemove) => {
    dispatch({
      type: CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART,
      payload: productToRemove,
    });
  };
  const removeItem = (itemToRemove) => {
    dispatch({
      type: CART_ACTION_TYPES.REMOVE_ITEM,
      payload: itemToRemove,
    });
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
