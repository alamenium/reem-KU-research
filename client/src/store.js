// store.js
import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './Features/settings/settingsSlice';
import avatarReducer from './Features/avatar/avatarSlice';

const store = configureStore({
    reducer: {
        settings: settingsReducer,
        avatar: avatarReducer,
    },
});

export default store;
