import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../Api/AxiosInstance";
import { toast } from "react-toastify";

export const FetchEditProfile = createAsyncThunk('FetchEditProfile', async (data) => {
    let intialetoken = localStorage.getItem("token") 
    const token = 
      `Bearer ${intialetoken}`; 
     
    const config = { 
      headers: { 
        Accept: "*/*", 
        "Content-Type": "application/json", 
        Authorization: token, 
      }, 
    }; 
    try {
        const res = await axiosInstance.post('edit-profile', data, config);
        console.log("Post EditProfile Data", res);
        console.log("Submit Profile from Profile Slice",res);
        return res?.data
    } catch (error) {
        console.log(error);
    }
})



export const ProfileSlice = createSlice({
    name: "ProfileDataSlice",
    initialState: {
        profileData: [],
        status:null
    },
    reducer: {

    },
    extraReducers: {

        [FetchEditProfile.pending]: (state) => {
            state.status = "Loading...."
            state.profileData = null
        },
        [FetchEditProfile.fulfilled]: (state, { payload }) => {
            state.status = "success"
            state.profileData = payload
            toast.success("Profile Updated")

        },
        [FetchEditProfile.rejected]: (state) => {
            state.status = "Try Again"
        },


    }
})