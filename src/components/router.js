import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from '../routes/auth/auth';
import Home from '../routes/home/home';
import Nav from "./nav/nav";
import Profile from "../routes/profile/profile";
import "./router.scss";

const Approuter = ({refreshUser,isLoggedIn,userobj}) => {
    return (
        <Router>
            <Switch>
                {isLoggedIn ? (
                    <main className="main">
                        <Nav userobj={userobj} />
                        <Route exact path="/">
                            <Home userobj={userobj} />
                        </Route>
                        <Route path="/profile">
                            <Profile refreshUser={refreshUser} userobj={userobj} />
                        </Route>
                    </main>
                     ) : (
                        <Route exact path="/">
                            <Auth />
                        </Route>
                    )
                }
            </Switch>
        </Router>
    );
};

export default Approuter;