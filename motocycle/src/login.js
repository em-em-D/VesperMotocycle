import React, { useEffect, useState } from 'react';
import './login.scss';

class Login extends  React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoginOpen: true, isRegisterOpen: false };
    }

    showRegisterBox(){
        this.setState({isRegisterOpen: true, isLoginOpen: false});
    }
    showLoginBox(){
        this.setState({isRegisterOpen: false, isLoginOpen: true});
    }
    render(){

        render(
            <div id="main">
                <div className="root-container">
                    <div className="box-controller">
                        <div className="controller" onClick={this.showLoginBox.bind(this)}>
                            Login
                        </div>

                        <div className="controller" onClick={this.showRegisterBox.bind(this)}>
                            Register
                        </div>

                    </div>
        
                <div className="box-container">
                {this.state.isLoginOpen && <LoginBox />}
                {this.state.isRegisterOpen && <RegisterBox/>}
                
                </div>
        
                </div>
            </div>
        );
    };
   
}

class LoginBox extends from React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        };

        submitlogin(e){

        }
    }

    render() {
        return (
        <div className="inner-container">
             <div className="box-header">
                Login
            </div>
            <div className="box">

                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="Username" className="login-input"/>
                </div>
                <button type="button" className="login-btn" onClick={this.submitlogin.bind(this)} >Login</button>
            </div>
        </div>
        );
    }
}

class RegisterBox extends from React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        };

        submitRegister(e){

        }
    }

    render() {
        return (
        <div className="inner-container">
            <div className="box-header">
                Register
            </div>
            <div className="box">

                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="Username" className="login-input"/>
                </div>
                <button type="button" className="login-btn" onClick={this.submitRegister.bind(this)} >Register</button>
            </div>
        </div>
        );
    }
}

export default Login;