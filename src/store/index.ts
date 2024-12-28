import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/products";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import searchSlice from "./reducers/search";

const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        search: searchSlice.reducer,
    }
});

export default store;
export const useAppDispatch: ()=> typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;