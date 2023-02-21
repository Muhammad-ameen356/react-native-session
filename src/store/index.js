import {configureStore} from "@reduxjs/toolkit";
import {AuthReducer} from "./reducers";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
