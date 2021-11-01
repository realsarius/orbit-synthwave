import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
import About from "./components/About";
import News from "./components/News";
import Footer from "./components/Footer";
import Videos from "./components/Videos";
import Music from "./components/Music";
import Services from "./components/Services";

const App = () => {
    return (
        <Router>
            <div>
                <NavBar/>
                <Route path={'/'} exact render={(props) => (
                    <>
                        <Header/>
                        <Services/>
                        <Introduction/>
                        <News/>
                        <Videos/>
                        <Music/>
                    </>
                )}/>
                <Route path={'/about'} component={About}/>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;