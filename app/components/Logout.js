import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.loginAgain = this.loginAgain.bind(this);
    }

    loginAgain() {
        browserHistory.push('/login');
    }

    render() {
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4 loginAgain">
                <button className="btn btn-primary btn-lg" onClick={this.loginAgain}>LogIn Again</button>
                </div>
            </div>
        );
    }
}

export default Logout;
