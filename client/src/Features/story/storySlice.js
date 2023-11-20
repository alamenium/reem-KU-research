// settingsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    page: 1,
    started: false
};

const storySlice = createSlice({
    name: 'story',
    initialState,
    reducers: {
        setPage(state, action) {
            state.page = action.payload;
        }
    },
});

export const { setPage } = storySlice.actions;
export default storySlice.reducer;
