// store.js
import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './Features/settings/settingsSlice';
import avatarReducer from './Features/avatar/avatarSlice';
import storyReducer from './Features/story/storySlice';

// Function to load state from localStorage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('reduxState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

// Function to save state to localStorage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('reduxState', serializedState);
    } catch (err) {
        // Log errors here
    }
};

const store = configureStore({
    reducer: {
        settings: settingsReducer,
        avatar: avatarReducer,
        story: storyReducer,
    },
    preloadedState: loadState(), // Load initial state from localStorage
});

// Save state to localStorage whenever store state changes
store.subscribe(() => {
    saveState(store.getState());
});

export default store;
