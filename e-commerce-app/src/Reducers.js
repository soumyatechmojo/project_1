import { createSlice } from '@reduxjs/toolkit'

export const allProductsSlice = createSlice({
    name:"AllProducts",
    initialState:{
        allProducts:[],
        selectedCard:"",
        cart: {},
        cartCount: 0,
        address: ""
    },
    reducers: {
        isSelected: (state, action)=> {
            state.selectedCard = action.payload;
        },
        loadAllProducts: (state, action) => {
            state.allProducts = action.payload;
        },
        addToCart: (state, action) => {
            state.cart = action.payload;
        },
        incCartCount: (state) => {
            state.cartCount += 1;
        },
        addAddress: (state, action) => {
            state.address = action.payload;
        }
    }
}); 

export const { isSelected, loadAllProducts, addToCart, incCartCount, addAddress } = allProductsSlice.actions;

export default allProductsSlice.reducer;