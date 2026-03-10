import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Services from "../components/Services";
import Introduction from "../components/Introduction";
import News from "../components/News";
import Videos from "../components/Videos";
import Music from "../components/Music";
import About from "../components/About";
import OurPartners from "../components/OurPartners";
import AddReview from "../components/add-review";
import Restaurant from "../components/restaurants";
import RestaurantsList from "../components/restaurants-list";

const PublicRoutes = ({ reviewUser }) => {
    return (
        <>
            <Route path="/" exact render={() => (
                <>
                    <Header />
                    <Services />
                    <Introduction />
                    <News />
                    <Videos />
                    <Music />
                </>
            )} />

            <Route path="/restaurants" render={() => (
                <div className="container mt-3 pt-5">
                    <Switch>
                        <Route exact path="/restaurants" component={RestaurantsList} />
                        <Route
                            path="/restaurants/:id/review"
                            render={(props) => <AddReview {...props} user={reviewUser} />}
                        />
                        <Route
                            path="/restaurants/:id"
                            render={(props) => <Restaurant {...props} user={reviewUser} />}
                        />
                    </Switch>
                </div>
            )} />

            <Route path="/about" component={About} />
            <Route path="/our-partners" component={OurPartners} />
        </>
    );
};

export default PublicRoutes;
