import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosInstance } from "../../Api/AxiosInstance";
import { toast } from "react-toastify";

export const FetchHome = createAsyncThunk("fetchcommondata", async () => {
    try {
        const res = await axiosInstance.post("common-data")
        return res?.data
    } catch (error) {
        console.log("Error From FetchHome",error);
    }
})

export const HomeSlice = createSlice({
    name: "HomeSlice",
    initialState: {
        commondata: [],
        status:"Success"
    },
    reducers: {
        
    },
    extraReducers: {
        [FetchHome.pending]: (state) => {
            state.status = "Loading"
            state.commondata=null
        },
        [FetchHome.fulfilled]: (state,action) => {
            state.status = "Success"
            state.commondata = action.payload
        },
        [FetchHome.rejected]: (state) => {
            state.status = "Try Again"
        },
    }
})