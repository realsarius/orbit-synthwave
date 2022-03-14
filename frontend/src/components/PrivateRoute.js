import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {getAuth} from "firebase/auth";
// import {useAuth} from "../../../senior-projekt/frontend/src/contexts/AuthContext";
import {useAuth} from "../contexts/AuthContext"

export default function PrivateRoute({component: Component, ...rest}) {
    const {currentUser} = useAuth();
    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to={"/login"}/>
            }}>

        </Route>
    );
};