import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setUser: (state, action) => action.payload,
        logout: (state, action) => null,
    },

});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;