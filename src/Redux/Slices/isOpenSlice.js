//For sidebar expand
import { createSlice } from "@reduxjs/toolkit";

const isOpenSlice = createSlice({
    name: "isOpen",
    initialState: true,
    reducers: {
        toggleIsOpen: (state) => !state,
    },
});

export const {toggleIsOpen} =isOpenSlice.actions;

export default isOpenSlice.reducer;