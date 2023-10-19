import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slices/wishListSlice"
const store =configureStore({
    reducer:{
                 wishlistReducer:wishlistSlice

    }
})
export default store