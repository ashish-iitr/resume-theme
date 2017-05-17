import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
import  Navbar  from './Navbar';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { children } = this.props;

        return(
            <div>
                <nav className="navbar navbar-default navbar-fixed-top" style={{background: 'steelblue'}}>
                    <div className="container">
                    <Navbar />
                    </div>
                </nav>
                <div className="mainContent">
                { children }
                { window.isLoggedIn ? (
                    <footer className="footer">
                    {/* <Link to="/userdata">UserData</Link>*/}
                    {/* <Link to="/filtertable">Filterable Table</Link>
                    <Link to="/about">About</Link>*/}
                    </footer>
                ) :
                <div></div>
                }

                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object
};

export default App;
