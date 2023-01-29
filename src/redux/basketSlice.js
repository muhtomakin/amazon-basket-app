import { createSlice } from "@reduxjs/toolkit";
import { getDatasAsync } from "./services";

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        items: localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [],
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
        isLoading: false,
        error: null,
    },
    reducers: {
        addToCart: (state, action) => {
            let cartItem = {...action.payload, quantity: 1};
            state.cartItems.find(item => {
                if(item.productId === action.payload.productId){
                    item.quantity += 1;
                }
            });
            if(state.cartItems.find(item => item.productId === action.payload.productId) === undefined) {
                state.cartItems = [...state.cartItems, cartItem];
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        deleteItem: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.productId !== action.payload);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        changeQuantity: (state, action) => {
            state.cartItems.find(item => {
                if(item.productId === action.payload.id) {
                    item.quantity = action.payload.e;
                }
            })
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        }
    },
    extraReducers: {
        [getDatasAsync.pending]: (state) => {
            state.isLoading = true;
        },
        [getDatasAsync.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
            localStorage.setItem('items', JSON.stringify(action.payload));
        },
        [getDatasAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        }
    }
});

export const {  
    addToCart,
    deleteItem,
    changeQuantity,
} = basketSlice.actions;
export default basketSlice.reducer;