import React from "react";
import { Route, useNavigate } from "react-router-dom";
import { useAuth } from "../util/authContext";

function ProtectedRoute({ children, ...rest }) {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    if (!isLoggedIn) {
        // Redirect the user to the login page or any other desired route
        navigate("/", { replace: true });
        return null; // Render nothing for unauthenticated users
    }

    return <Route {...rest}>{children}</Route>;
}

export default ProtectedRoute;
