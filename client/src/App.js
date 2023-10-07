import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import SignupPage from './Features/SignUp/SignupPage';
import Navbar from './elements/Navbar';
import ProtectedExamplePage from './components/ProtectedExamplePage';
import { ProvideAuth } from './util/authContext';
import ProtectedRoute from './components/ProtectedRoute';
import Settings from './Features/settings/Settings';
import Avatar from './Features/avatar/Avatar';
import Story from './components/Story';
import StoryStart from './components/StoryStart';
// Import the necessary components and functions for Redux
import { Provider } from 'react-redux';
import store from './store'; // Import your Redux store

function App() {
    return (
        // Wrap your entire application with the Provider component
        <Provider store={store}>
            <ProvideAuth>
                <Router>
                    <Routes>
                        <Route path="/" element={<SignupPage />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route
                            path="/protected/example"
                            element={
                                <ProtectedRoute>
                                    <ProtectedExamplePage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/story"
                            element={
                                <ProtectedRoute>
                                    <Story />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/settings/avatar"
                            element={
                                    <Avatar />
                            }
                        />
                        <Route
                            path="/storystart"
                            element={
                                <ProtectedRoute>
                                    <StoryStart />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </Router>
            </ProvideAuth>
        </Provider>
    );
}

export default App;
