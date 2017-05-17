import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import * as EmailValidator from 'email-validator';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                email: '',
                password: ''
            },
            sending: false,
            error: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        if(!EmailValidator.validate(this.state.info.email)) {
            this.setState({error: 'This email address is invalid'});
            return;
        }
        this.setState({sending: true});
        this.props.login(this.state.info);
    }
    onChange(e) {
        this.setState({ info: { ...this.state.info, [e.target.name]: e.target.value } });
        // this.setState({[e.target.name]: e.target.value});
        this.setState({error: ''});
    }

    render() {
        const {email, password} = this.state.info;
        const {sending, error} = this.state;
        return(
			<form onSubmit={this.onSubmit}>
                <h3>LOG IN</h3>
				<div className="form-group">
				    <input type="text" className="form-control" name="email" value={email} onChange={this.onChange} placeholder="Email" required/>
				    { error ? (<p className="error">{error}</p>) : <p></p>}
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="password" value={password} onChange={this.onChange} placeholder="Password" required/>                </div>
                { !sending ? (
                    <div className="form-group">
                        <button className="btn btn-primary btn-lg">LogIn</button>
                    </div>
                ) : <div>
                        <button className="btn btn-primary btn-lg" disabled="true">Loading...</button>
                    </div>
                }

		    </form>
		);
    }
}

LoginForm.propTypes = {
    login: PropTypes.func.isRequired
};


export default connect(null, {login})(LoginForm);
