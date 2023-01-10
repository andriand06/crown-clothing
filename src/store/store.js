import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";

//middleware is our helper before our action hits the reducer
//before the action to reduce, it hit middleware first
//we can keep logger

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type", action.type);
  console.log("payload", action.payload);
  console.log("currentState", store.getState());

  next(action);

  console.log("next state", store.getState());
};
const middleWares = [loggerMiddleware];

//compose our enchancer
//applymiddleware is a store enchancer that spread our middlewares logger
const composedEnchancer = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, composedEnchancer);
