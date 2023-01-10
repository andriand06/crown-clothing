import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItem) =>
  cartItem.reduce((count, cartItem) => count + cartItem.qty, 0)
);
export const selectCartTotal = createSelector([selectCartItems], (cartItem) =>
  cartItem.reduce((total, cartItem) => total + cartItem.qty * cartItem.price, 0)
);
