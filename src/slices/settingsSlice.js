// settingsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    audio: 'Off',
    caption: 'Arabic',
    animation: 'Off',
    avatar: 'Off',
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setAudio(state, action) {
            state.audio = action.payload;
        },
        setCaption(state, action) {
            state.caption = action.payload;
        },
        setAnimation(state, action) {
            state.animation = action.payload;
        },
        setAvatar(state, action) {
            state.avatar = action.payload;
        },
    },
});

export const { setAudio, setCaption, setAnimation, setAvatar } = settingsSlice.actions;
export default settingsSlice.reducer;
