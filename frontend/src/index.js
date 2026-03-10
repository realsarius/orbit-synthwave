import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './css/bootstrap.css'
import './css/style.css';
import './js/app';
import {AuthProvider} from "./contexts/AuthContext";

ReactDOM.render(
    <BrowserRouter>
        <AuthProvider>
            <App/>
        </AuthProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
