import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartStore";


const appStore = configureStore({
    reducer:{
         cart : cartReducer,
        }
});

export default appStore;