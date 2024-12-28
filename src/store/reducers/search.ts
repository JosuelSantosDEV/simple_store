import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SearchState = {
    query: string
}

const initialState: SearchState = {
    query: ""
}

const searchSlice = createSlice({
    initialState,
    name: "search",
    reducers: {
        setQuery (state, action: PayloadAction<string>){
            state.query = action.payload;
        },
        resetQuery (state){
            state.query = "";
        }
    }
});

export const {setQuery, resetQuery} = searchSlice.actions;

export default searchSlice;