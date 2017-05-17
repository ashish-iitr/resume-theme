import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout(e) {
        e.preventDefault();
        browserHistory.push('/logout');
        window.isLoggedIn = false;
        localStorage.clear();
    }

    render() {
        return(
            <div>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    { window.isLoggedIn ?
                        (<Link to="/userdata" className="navbar-brand waves-effect waves-light">Resume Sample</Link>)
                        : (<Link to="/login" className="navbar-brand waves-effect waves-light">Resume Sample</Link>)
                    }
                    {/* <a className="navbar-brand waves-effect waves-light" href="/">React App</a>*/}
                </div>
                <div className="navbar-collapse collapse navbar-warning-collapse" id="navbar-collapse-1">
                    { window.isLoggedIn ? (<ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                          <a data-target="" className="dropdown-toggle" data-toggle="dropdown">
                            {window.loggedInUser}
                            <b className="caret"></b></a>
                          <ul className="dropdown-menu">
                            <li><a href="#" onClick={this.onLogout}>Logout</a></li>
                          </ul>
                        </li>
                    </ul>) : <div> </div> }
                </div>
            </div>
        );
    }
}

export default Navbar;

