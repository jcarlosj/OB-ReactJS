import { configureStore } from '@reduxjs/toolkit';

import taskReducer from '../features/task/taskSlide';
import authReducer from '../features/auth/authSlice';


// 1. Create a Redux Store
export const store = configureStore({
    reducer: {
        // 4. Add Slice Reducers to the Store
        task: taskReducer,
        auth: authReducer
    }
});
