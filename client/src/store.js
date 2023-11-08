// store.js
import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './Features/settings/settingsSlice';
import avatarReducer from './Features/avatar/avatarSlice';
import storyReducer from './Features/story/storySlice';

const store = configureStore({
    reducer: {
        settings: settingsReducer,
        avatar: avatarReducer,
        story: storyReducer,
    },
});

export default store;
