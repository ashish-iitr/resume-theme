import * as types from './types';
// import axios from 'axios';
import {loginFunc, fetchUser, update} from '../services/api';
import { browserHistory } from 'react-router';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}
export function login(data) {
    /* return (dispatch) => {
        dispatch({
            type: types.LOG_IN,
            payload: loginFunc(data)
        });
    };*/
    return () => {
        window.isLoggedIn = true;
        localStorage.setItem('isLoggedIn', true);
        loginFunc(data)
        .then((res) => {
            console.log('res---->', res);
            localStorage.setItem('loggedInUser', res.json.email);
            window.loggedInUser = res.json.email;
            browserHistory.push('/userdata');
        }, (err) => {
            console.error('err---->', err);
        });
    };
}

export function getUserData() {
    return (dispatch) => {
        dispatch({
            type: types.FETCH_USER,
            payload: fetchUser()
        });
        // browserHistory.push('/userdata');
    };
}

export function updateCatSuccess() {
    return {type: types.FETCH_USER, payload: fetchUser()};
}

export function updateCat(cat) {
    return (dispatch) => {
        return update(cat).then(responseCat => {
            dispatch(updateCatSuccess(responseCat));
        }).catch(error => {
            throw(error);
        });
    };
}


//
/* export function getDataFromDB() {
	return (dispatch) => {
		fetch('http://asdad.com')
		.then((res) => {
			dispatch({
				type: 'DB_RESPONSE',
				data: res
			});
		});
	}
}*/
