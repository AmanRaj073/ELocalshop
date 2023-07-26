import { configureStore } from "@reduxjs/toolkit";
import { HomeSlice } from "./HomeSlice";
import { AuthSlice } from "./AuthSlice";
import { ProfileSlice } from "./ProfileSlice";


export const Store = configureStore({
    reducer: {
        homeData: HomeSlice.reducer,
        AuthData: AuthSlice.reducer,
        ProfileData:ProfileSlice.reducer
    }
})