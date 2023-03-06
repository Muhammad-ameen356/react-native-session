import {createSlice, isAnyOf} from "@reduxjs/toolkit";
import {
  loginWithEmailAndPassword,
  loginWithFacebook,
  loginWithGoogle,
  signupWithEmailAndPassword,
} from "../actions";

const initialState = {
  loading: false,
  cart: {},
  item: [],
  total: 0,
};

const CartReducer = createSlice({
  name: "CartReducer",
  initialState,
  reducers: {
    addCart(state, {payload}) {
      const data = payload;
      if (state.cart[data.id]) {
        state.cart[data.id].counting++;
        state.total += payload.price;
      } else {
        state.cart[data.id] = {
          counting: 1,
          data: data,
        };
        state.total += payload.price;
      }
    },
    removeItem(state, action) {
      delete state.cart[action.payload?.data.id];
      state.total =
        state.total - action.payload?.data?.price * action.payload?.counting;
    },
    increaseQuantity(state, action) {
      state.cart[action.payload?.data?.id].counting++;
      state.total += action.payload.data.price;
    },
    decreaseQuantity(state, action) {
      state.cart[action.payload?.data?.id].counting--;
      state.total = state.total - action.payload.data.price;
    },
  },
});

export const {addCart, increaseQuantity, decreaseQuantity, removeItem} =
  CartReducer.actions;

export default CartReducer.reducer;
