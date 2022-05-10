import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: true,
};

export const sidebarMenuSlice = createSlice({
  name: "toggleSidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.active = state.active ? false : true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSidebar } = sidebarMenuSlice.actions;

export default sidebarMenuSlice.reducer;
