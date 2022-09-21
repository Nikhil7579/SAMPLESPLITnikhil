import React, { useEffect } from "react";
import './App.scss';
import Home from "../components/Pages/Home.jsx";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "../components/Pages/Login";
import { ThemeContext, themes } from "../api/Theme";
import musicDB from "../db/music";
import { useDispatch, useSelector } from "react-redux";
import { setPlaylist } from "../actions/actions";
import Admin from "../Adminpanel/Admin";
import AdminlogIn from "../Adminpanel/adminlogin";
import Usersignup from "../components/Pages/Auth/UsersignUp/usersignup.jsx";
import UserLogIn from "../components/Pages/Auth/UselogIn/userlogin.jsx"
import ProtectedRoute from "../Adminpanel/ProtectedRoute";
import { Redirect } from "react-router-dom";

const App = () => {

    const { language } = useSelector(state => state.musicReducer);

    const dispatch = useDispatch();
    useEffect(() => {
        if (language === null || language.includes("any")) {
            dispatch(setPlaylist(musicDB))
        }
        else if (language.includes('hindi')) {
            alert("No hindi tracks available")
        } else {
            let x = musicDB.filter((item) => (
                item.lang && language.includes(item.lang.toLowerCase())
            ))
            dispatch(setPlaylist(x))
        }
    }, [dispatch, language]);

    return (
        <ThemeContext.Provider value={themes.light}>
            <>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/usersignup" component={Usersignup} />
                        <Route path="/userlogin" component={UserLogIn} />
                        <Route path="/home" component={Home} />
                        <Route path="/adminlogin" exact component={AdminlogIn} />
                        <ProtectedRoute path="/dashboard" >
                            <Admin />
                        </ProtectedRoute>
                        <Route exact path="/dashboard">
                            <Redirect exact from="/dashboard" to="dashboard" />
                        </Route>
                        <Route path="*">
                            <Redirect from="/dashboard" to="dashboard" />
                        </Route>
                    </Switch>
                </Router>
            </>
        </ThemeContext.Provider>
    );
}

export default App;