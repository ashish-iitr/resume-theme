import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

class LogIn extends Component {
    render() {
        return(
			<div className="form-group row">
				<div className="col-md-4 col-md-offset-4">
					<LoginForm />
				</div>
			</div>
		);
    }
}

export default LogIn;
