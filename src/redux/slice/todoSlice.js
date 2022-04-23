import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const initialState = {
    todos: null,
    todoStatus: "idle"
};
export const retrieveAlltodosAction = createAsyncThunk(
    "retrieveAlltodos/retrieve",
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        console.log(res,'res,')
        return res.json();
    }
);
const todoSlice = createSlice({
    name: "todos",
    initialState,
    extraReducers: {
        [retrieveAlltodosAction.fulfilled]: (state, action) => {
            return {
                ...state,
                todos: action.payload,
                todoStatus: "ok"
            };
        },
        [retrieveAlltodosAction.pending]: (state, action) => {
            return {
                ...state,
                todoStatus: "LOADING"
            };
        },
        [retrieveAlltodosAction.rejected]: (state, action) => {
            return {
                ...state,
                todoStatus: "FAIL"
            };
        },
    },
});
const { reducer } = todoSlice;
export default reducer;
