import { configureStore } from "@reduxjs/toolkit";
import { productapi } from "./api/productApi";
import productSlice from "./api/productSlice";


export const store = configureStore({
    reducer:{
        [productapi.reducerPath]:productapi.reducer,
        product:productSlice
    },
    middleware:(myMiddleware)=>
    myMiddleware().concat(productapi.middleware)
})

