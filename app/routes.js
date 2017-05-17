import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import FilterableTable from './containers/FilterableTable';
import About from './components/About';
import LogIn from './containers/LogIn';
import UserData from './containers/UserData';
import Logout from './components/Logout';

import './styles/index.scss';

window.isLoggedIn = localStorage.getItem('isLoggedIn');
window.loggedInUser = localStorage.getItem('loggedInUser');

function checkAuth(nextState, replace) {
    if (!window.isLoggedIn) {
        replace({
            pathname: '/',
            state: { nextPathname: nextState.location.pathname}
        });
    }
}

export default () => {
    return (<Route path="/" component={App}>
        <IndexRoute component={window.isLoggedIn ? UserData : LogIn} />
        <Route onEnter={checkAuth}>
            <Route path="/login" component={LogIn} />
            <Route path="/filtertable" component={FilterableTable} />
            <Route path="/userdata" component={UserData} />
            <Route path="/about" component={About} />
            <Route path="/logout" component={Logout} />
        </Route>
    </Route>);
};
