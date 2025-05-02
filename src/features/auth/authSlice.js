import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	isLoggedIn: false,
	userData: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action) => {
			state.isLoggedIn = true;
			state.userData = action.payload;
		},
		logout: (state) => {
			state.isLoggedIn = false;
			state.userData = null;
		},
	},
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
