import { createSlice } from '@reduxjs/toolkit';


const initialState = [];

// 3. Create a Redux State Slice
export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {}
});


// Los creadores de acciones se generan para cada función de reducción de casos.
// export const {} = taskSlice.actions;

export default taskSlice.reducer