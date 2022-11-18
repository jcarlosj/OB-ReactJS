import { configureStore } from '@reduxjs/toolkit';

import taskReducer from '../features/task/taskSlide';


// 1. Create a Redux Store
export const store = configureStore({
    reducer: {
        // 4. Add Slice Reducers to the Store
        task: taskReducer
    },
});