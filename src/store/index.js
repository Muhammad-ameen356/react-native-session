import {configureStore} from "@reduxjs/toolkit";
import {AuthReducer, CartReducer} from "./reducers";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    cart: CartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
