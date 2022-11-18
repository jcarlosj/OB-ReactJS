import { createSlice } from '@reduxjs/toolkit';


export const completionFilters = {
    ALL: "ALL",
    COMPLETED: "COMPLETED",
    NOT_COMPLETED: "NOT_COMPLETED"
}

const initialState = {
    dataList: [],
    filterByCompletion: completionFilters.ALL
};

// 3. Create a Redux State Slice
export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        // 5. Define casos del reducer
        add: ( state, action ) => {
            state.dataList.push( action.payload );
        },
        toggle: ( state, action ) => {
            const id = action.payload;

            state.dataList = state.dataList.map( ( task ) => {
                if( task.id === id )
                    task.completed = ! task.completed;
            
                return task;
            });
        },
        remove: ( state, action ) => {
            const id = action.payload;

            const indexOfObject = state.dataList.findIndex( task => {
                return task.id === id;
            });

            state.dataList.splice( indexOfObject, 1 );
        },
        update: ( state, action ) => {
            const { id, data } = action.payload;

            const indexOfObject = state.dataList.findIndex( task => {
                return task.id === id;
            });

            state.dataList[ indexOfObject ] = { id, ...data };
        },
        filterByCompletion( state, action ) {
            state.filterByCompletion = action.payload
        }
    }
});


// Los creadores de acciones se generan para cada función de reducción de casos.
export const { add, toggle, remove, update } = taskSlice.actions;

export default taskSlice.reducer;