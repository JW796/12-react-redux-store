import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../Data";

const initialState = {
    products: storeData,
    amount: 0,
    total:0
}

const cartSlice = createSlice({
    name: "basket",
    initialState,
})

export default cartSlice.reducer;