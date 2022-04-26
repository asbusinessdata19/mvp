import {configureStore} from '@reduxjs/toolkit';
import UserSessionSlicer from './slicers/UserSessionSlicer';
export default configureStore({
    reducer:{
        UserSession:UserSessionSlicer,
    }
})