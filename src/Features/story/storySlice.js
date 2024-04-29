// settingsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    page: 1,
    pageCount: 2,
    currStory: "a",
    started: false
};

const storySlice = createSlice({
    name: 'story',
    initialState,
    reducers: {
        setPage(state, action) {
            state.page = action.payload;
        },
        setCount(state, action) {
            state.pageCount = action.payload;
        },
        setCurr(state, action) {
            state.currStory = action.payload;
        }
    },
});

export const { setPage , setCount, setCurr} = storySlice.actions;
export default storySlice.reducer;
