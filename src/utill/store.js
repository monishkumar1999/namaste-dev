import { configureStore } from "@reduxjs/toolkit";
import  cartReducer from "../cards/sliceCart";
const store=configureStore({

    reducer:{
        cart:cartReducer,
    }
}); 


export default store ;