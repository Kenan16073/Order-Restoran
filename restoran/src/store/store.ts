import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import orderSlice from "./Order/orderSlice";

export const store = configureStore({
    reducer : {
        [api.reducerPath] : api.reducer,
        orderSlice : orderSlice
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(api.middleware)
    }
});

