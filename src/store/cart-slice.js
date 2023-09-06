import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload; // payload => item when I add
      const existingItem = state.items.find((item) => item.id === newItem.id);

      /**
       * newItem existing in items increase the quantity and total price
       * newItem !existing in items add the newItem in items
       */
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.totalPrice;
      }
    },
    removeItemFromCart() {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
