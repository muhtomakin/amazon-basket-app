import { createSlice } from "@reduxjs/toolkit";
import { getDatasAsync } from "./services";

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        items: [],
        cartItems: localStorage.getItem('cartItems') ? localStorage.getItem('cartItems') : [],
        isLoading: false,
        error: null,
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartItems = [...state.cartItems, action.payload];
            localStorage.setItem('cartItems', state.cartItems);
        },
    },
    extraReducers: {
        [getDatasAsync.pending]: (state) => {
            state.isLoading = true;
        },
        [getDatasAsync.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        [getDatasAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        }
    }
});

// export const selectTodos = state => state.todos.items;
// export const selectActiveFilter = state => state.todos.activeFilter;

// export const selectFilteredTodos = (state) => {
//     if(state.todos.activeFilter === 'all') {
//         return state.todos.items;
//     }

//     return state.todos.items.filter((item) =>
//         state.todos.activeFilter === 'active' 
//             ? item.completed === false 
//             : item.completed === true
//         )
// }
export const {  
    addToCart,
} = basketSlice.actions;
export default basketSlice.reducer;