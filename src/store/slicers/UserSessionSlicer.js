import { createSlice } from "@reduxjs/toolkit";

export const UserSessionSlicer = createSlice({
    name:'UserSession',
    initialState:{
        value:{
            authenticated:false,
            user:null,
            authorities:[]
        }
    },
    reducers:{
        setAuthenticated:(state,action)=>{
            state.value.authenticated=true;
            state.value.user = action.payload;
        },
        setUnAuthenticated:(state,action)=>{
            state.value.authenticated=false;
            state.value.user = null;
        }
    }
});

export const {setAuthenticated,setUnAuthenticated} = UserSessionSlicer.actions;
export default UserSessionSlicer.reducer; 