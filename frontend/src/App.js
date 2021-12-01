import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
import About from "./components/About";
import News from "./components/News";
import Footer from "./components/Footer";
import Videos from "./components/Videos";
import Music from "./components/Music";
import Services from "./components/Services";
import AddReview from "./components/add-review";
import Restaurant from "./components/restaurants"
import RestaurantsList from "./components/restaurants-list";
import Login from "./components/login";

const App = () => {
    const [user, setUser] = React.useState(null);

    async function login(user = null) {
        setUser(user);
    }

    async function logout() {
        setUser(null)
    }

    return (
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
            <Route path={'/restaurants'} exact render={(props) => (
                <div className="container mt-3 pt-5">
                    <Switch>
                        <Route exact path={["/", "/restaurants"]} component={RestaurantsList}/>
                        <Route
                            path="/restaurants/:id/review"
                            render={(props) => (
                                <AddReview {...props} user={user}/>
                            )}
                        />
                        <Route
                            path="/restaurants/:id"
                            render={(props) => (
                                <Restaurant {...props} user={user}/>
                            )}
                        />
                        <Route
                            path="/login"
                            render={(props) => (
                                <Login {...props} login={login}/>
                            )}
                        />
                    </Switch>
                </div>
            )}/>
            <Route path={'/about'} component={About}/>
            <Footer/>
        </div>
    );
};

export default App;