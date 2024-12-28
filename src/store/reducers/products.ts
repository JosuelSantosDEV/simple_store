import { createSlice } from "@reduxjs/toolkit";
import datas from "../../mocks/products.json";


const initialStateProducts = datas.categories;

const productSlice = createSlice({
    name: "products",
    initialState: initialStateProducts,
    reducers: {

    }
});

export default productSlice;