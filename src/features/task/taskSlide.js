import { createSlice } from '@reduxjs/toolkit';


const initialState = [];

// 3. Create a Redux State Slice
export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        // 5. Define casos del reducer
        add: ( state, action ) => {
            state.push( action.payload );
        },
        toggle: ( state, action ) => {
            const id = action.payload;

            state = state.map( ( task ) => {
                if( task.id === id )
                    task.completed = ! task.completed;
            
                return task;
            });
        },
        remove: ( state, action ) => {
            const id = action.payload;

            const indexOfObject = state.findIndex( task => {
                return task.id === id;
            });

            state.splice( indexOfObject, 1 );
        },
        update: ( state, action ) => {
            const { id, data } = action.payload;

            const indexOfObject = state.findIndex( task => {
                return task.id === id;
            });

            state[ indexOfObject ] = { id, ...data };
        }
    }
});


// Los creadores de acciones se generan para cada función de reducción de casos.
export const { add, toggle, remove, update } = taskSlice.actions;

export default taskSlice.reducer