import * as React from "react";
import SideBarPanel from "./component/SideBarPanel";
import SlideShowPanel from "./component/SlideShowPanel";
import StatusBar from "./component/StatusBar";
import { Link } from "react-router-dom";
import './VigmoDashboard.css'
import authProvider from "./logic/authProvider";
import apiHandler from "./logic/apiHandler";
import "@fontsource/plus-jakarta-sans";
import { fetchUtils } from 'ra-core';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('screen_token');
    options.headers.set('Authorization', `Bearer ${token}`);
    console.log("HTTP -> " + url + " token length: ", token.length);
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = apiHandler(process.env.REACT_APP_DATA_URL, httpClient);

const loginWithScreenKey = (key) => new Promise((resolve, reject) => {
    authProvider.getName()
        .then((name) => {
            return resolve(localStorage.getItem('screen_token'));
        })
        .catch((error) => {
            console.log("Token expired, getting new token.");
            const token = authProvider.login(key);
            return resolve(token);
        });
});

const VigmoDashboard = (props) => {
    const path = props.location.pathname
    if (path === '/') {
        return ((
            <div className="component-app-no-screen">
                <div className="no-screen-center">
                    <h3>Vigmo Dashboard</h3>
                    <p>You have not provided a ScreenKey.</p>
                    <Link to="/admin" className="no-screen-admin-button">
                        Go to admin panel
                    </Link>
                </div>
            </div>
        ))
    }
    else {
        const signInKey = path.replace("/", "");
        const [loaded, setLoaded] = React.useState(false);

        React.useEffect(() => {
            loginWithScreenKey(signInKey).then((result) => {
                setLoaded(true);
            });
        }, []);

        if (!loaded) {
            return (<div className="loading-screen">
                <div>Please wait while vigmo is attempting verification...</div>
            </div>);
        }

        return ((
            <div className="component-app">
                <SideBarPanel />
                <SlideShowPanel apiHandler={dataProvider} />
            </div>
        ))
    }
};

export default VigmoDashboard;