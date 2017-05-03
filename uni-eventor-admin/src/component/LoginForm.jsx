import React, { Component } from 'react';
import * as AuthModule from '../App.Auth';
import { withRouter } from 'react-router';
import '../css/w3.css';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            username: '',
            password: ''
        };
    }

    submitHandler(e) {
        e.preventDefault();
        if (this.state.username === '' || this.state.password === '') {
            alert('Enter username and password');
        }
        else {
            AuthModule.login(this.state.username, this.state.password, () => {
                this.props.router.push('/');
            }, (error) => {
                this.setState(prevState => ({
                    username: prevState.username,
                    password: prevState.password,
                    error: 'User doesn\'t exist or username and password does not match'
                }));
            });
        }
    }
    
    handleUserNameChange(event) {
        var userName = event.target.value;
        this.setState(prevState => ({
            username: userName,
            password: prevState.password,
            error: prevState.error
        }));
    }
    
    handlePasswordChange(event) {
        var password = event.target.value;
        this.setState(prevState => ({
            username: prevState.username,
            password: password,
            error: prevState.error
        }));
    }

    render() {
        var s = {
            width: '50px'
        };
        var errorDisplay = {
            display: this.state.error === '' ? 'none' : 'block'
        };
        return (
            <div className="w3-section">
                <div className="w3-container w3-third">
                    <div className="w3-padding w3-card-4">
                        <h2 className="w3-text-blue-gray">Login</h2>

                        <form className="w3-text-blue-gray" onSubmit={this.submitHandler.bind(this)}>

                            <span style={errorDisplay} className="w3-panel w3-red w3-padding">{this.state.error}</span>

                            <div className="w3-row w3-section w3-container">
                                <div className="w3-col" style={s}><i className="w3-xxlarge fa fa-user"></i></div>
                                <div className="w3-rest">
                                    <input onChange={this.handleUserNameChange.bind(this)} className="w3-input w3-border" name="email" type="text" placeholder="User Name" />
                                </div>
                            </div>

                            <div className="w3-row w3-section w3-container">
                                <div className="w3-col" style={s}><i className="w3-xxlarge fa fa-key"></i></div>
                                <div className="w3-rest">
                                    <input onChange={this.handlePasswordChange.bind(this)} className="w3-input w3-border" name="phone" type="text" placeholder="Password" />
                                </div>
                            </div>

                            <div className="w3-section w3-container">
                                <input className="w3-check w3-margin-top" type="checkbox" /> Remember me
                            </div>

                            <p className="w3-center">
                                <button className="w3-btn w3-section w3-blue-gray w3-ripple"> Login </button>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginForm);