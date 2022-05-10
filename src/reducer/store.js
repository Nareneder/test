import { configureStore } from "@reduxjs/toolkit";
import toggleSidebar from "./SidebarMenu";

const store = configureStore({
  reducer: {
    toggleSidebar: toggleSidebar
  }
});

export default store;
