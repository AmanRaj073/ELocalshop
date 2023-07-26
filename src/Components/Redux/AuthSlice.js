import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../Api/AxiosInstance";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const PostSignup = createAsyncThunk("PostSignup", async (datas) => {
  try {
    const res = await axiosInstance.post("register", datas);
    console.log("Post Register", res?.data);

    return res?.data;
  } catch (error) {
    console.log("Error From FetchHome", error);
  }
});

export const PostLogin = createAsyncThunk("PostLogin", async (datas) => {

  try {
    const res = await axiosInstance.post("login", datas);
    console.log("Post Login", res?.data);
    return res?.data;
  } catch (error) {
    console.log("Error From FetchHome", error);
  }
});

export const AuthSlice = createSlice({
  name: "SignupSlice",
  initialState: {
    user: {}, // for user object
    redirectTo: null,
    Logouttoggle: false,
    userName: null,
    redirectReg: null,
    status: "Success",
  },
  reducers: {
    //Auth Token
    Token: (state, { payload }) => {
      let token = localStorage.getItem("token");
      if (token !== null && token !== undefined) {
        state.Logouttoggle = true;
      }
    },

    // Logout
    Logout: (state, { payload }) => {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("email") || sessionStorage.removeItem("email");
      localStorage.removeItem("phone") || sessionStorage.removeItem("phone");
      state.Logouttoggle = false;
      toast.success("Logout Successfully")
    },

    ReLog: (state, { payload }) => {
      localStorage.removeItem("name");
      state.Logouttoggle = false;
    },

    // Redirect To
    RedirectTo: (state, { payload }) => {
      state.redirectTo = payload;
    },

    RedirectTo_Register: (state, { payload }) => {
      state.redirectReg = payload;
    },
  },

  extraReducers: {
    //------------- Signup -------------
    [PostSignup.pending]: (state) => {
      state.status = "Loading";
      toast.info("Please Wait...",{autoClose: 1000,})

    },
    [PostSignup.fulfilled]: (state, action) => { 
      if (!action.payload?.error) { 
        state.status = "Success"; 
        localStorage.setItem("name", action.payload?.result?.userData?.name); 
        state.redirectReg = "/login"; 
      } 
      if (action.payload?.error) { 
        if (action.payload?.error?.email) 
          toast.error(action.payload?.error?.email[0]); 
        else if (action.payload?.error?.phone) 
          toast.error(action.payload?.error?.phone[0]); 
        else toast.success("Register Successfully"); 
      } 
    },
    [PostSignup.rejected]: (state) => {
      state.status = "Try Again";
    },

    //------------- Login -------------

    [PostLogin.pending]: (state) => {
      state.status = "Loading";
      toast.info("Please Wait...",{autoClose: 1000,})
    },
    [PostLogin.fulfilled]: (state, action) => {
      state.status = "Success";
      state.user = action.payload?.result?.userdata;
      state.redirectReg = "/";
      state.userName = action.payload?.result?.userdata?.name
      
      if (action.payload?.result?.token) {
        localStorage.setItem("token", action.payload?.result?.token);
        localStorage.setItem("name", action.payload?.result?.userdata?.name);
        localStorage.setItem("email", action.payload?.result?.userdata?.email);
        localStorage.setItem("phone", action.payload?.result?.userdata?.phone);
        state.Logouttoggle = true;
      }
      action.payload?.result?.token ? toast.success("Login Successfully"): toast.error(action.payload?.error?.meaning)
    
    },
    [PostLogin.rejected]: (state) => {
      state.status = "Try Again";
      toast.warning("Something Wrong")
    },
  },
});

export const { Token, RedirectTo, Logout, RedirectTo_Register, RegLog } =
  AuthSlice.actions;
