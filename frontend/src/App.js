import React from "react";
import { Route } from "react-router-dom";
import Footer from "./components/Footer";
import MainNavbar from "./components/layout/MainNavbar";
import PublicRoutes from "./routes/PublicRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import { useAuth } from "./contexts/AuthContext";

const App = () => {
    const { currentUser, logout } = useAuth();

    const reviewUser = currentUser
        ? {
            id: currentUser.uid,
            name: currentUser.displayName || currentUser.email || "User",
        }
        : null;

    const handleLogout = async () => {
        try {
            await logout();
        } catch (e) {
            // Ignore and keep UI responsive.
        }
    };

    const authPaths = ["/dashboard", "/update-profile", "/signup", "/login", "/forgot-password"];

    return (
        <div>
            <MainNavbar currentUser={currentUser} onLogout={handleLogout} />
            <PublicRoutes reviewUser={reviewUser} />
            <Route path={authPaths} component={AuthRoutes} />
            <Footer />
        </div>
    );
};

export default App;
