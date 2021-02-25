import React, { Component } from 'react';
//import { FormErrors } from './FormErrors';
import Bonds from './Bonds';
import './Form.css';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false,
      showScreen: false,
      loginEmail: 'bondsindia@gmail.com',
      loginPassword: 'a123456'
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //this.setState({ emailValid });
    this.setState({ showScreen: false });
    this.setState({[name]: value},
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'Email is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': 'Password is too short';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid
    });
  }

  logout() {
    this.setState({
      email: this.state.email = "",
      formValid: false,
      showScreen: false
    });
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  handleSubmit(event) {
    console.log(this.state.email);
    console.log(this.state.loginEmail);
    if ((this.state.email == this.state.loginEmail) && (this.state.password == this.state.loginPassword)) {
      this.setState({ showScreen: !this.state.showScreen });
    } else {
      this.setState({ emailValid: false });
    }
    ///console.log(name);
    //this.setState({ showScreen: !this.state.showScreen });
    //event.preventDefault();
    //alert('A name was submitted: ' + this.state.formValid);
  }

  render () {
    return (
      <div className={`wrapper-wrap ` + ((this.state.showScreen === true) && (this.state.formValid === true) ? "bondsShown" : "")} >
  
          {this.state.showScreen === true && this.state.formValid === true && (
            <div className="login_details"><p>Welcome <span>{this.state.email}</span> | <a className="link" onClick={() => this.logout()} >Logout</a></p></div>
          )}


          <div className="wrapper wrapper-screens">
            {this.state.showScreen === true && this.state.formValid === true &&  (
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <Bonds />
                  </div>
                </div>
              </div>
              )}
          </div>
        
      <div className="wrapper wrapper-sign">
        <div className="container">
          <div className="row">
              <div className="col-md-12 col-lg-6 form-text">
                <h4>Sign in to your account</h4>
                <p>BONDS India is the best platform for real time trading. It is very simple and offers best price for your deals. Just go for it!</p>
                <p className="author">- Jason MacDonald</p> 
              </div>
              <div className="col-md-12 col-lg-6 form-col">
                  <h3>Sign in to your account</h3>
                  <form className="" onSubmit={this.handleSubmit}>
                    {/* <div className="panel panel-default">
                      <FormErrors formErrors={this.state.formErrors} />
                    </div> */}
                    <div className={`form-group form-input-group ${this.errorClass(this.state.formErrors.email)}`}>
                      <label className="form-input-label" htmlFor="email">Email ID/Phone Number*</label>
                      <input type="email" required className="form-control" name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleUserInput}  />
                        <div className="inp-error form-error">
                          
                          {this.state.formErrors.email}
                          
                          {this.state.emailValid === false && (
                              <span>The email does'nt match password</span>
                          )}
                          
                          </div>
                    </div>
                    <div className={`form-group form-input-group ${this.errorClass(this.state.formErrors.password)}`}>
                    <label className="form-input-label" htmlFor="password">Password*</label>
                      <input type="password" className="form-control" name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleUserInput}  />
                        <a className="btn show_pw" onClick={() => this.show_pw()}><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                        <div className="inp-error form-error">{this.state.formErrors.password}</div>
                    </div>
                    <div className={`form-group form-input-group form-input-group-remember-me d-flex justify-content-between align-items-center ${this.errorClass(this.state.formErrors.password)}`}>
                        <label className="form-group-checkbox" htmlFor="remember_me"> <input type="checkbox" name="remember_me" className="form-control" /> <span>Remember me</span></label>
                        <a className="link">Forgot Password?</a>
                    </div>
                    <div className={`form-group  ${this.errorClass(this.state.formErrors.password)}`}>
                      <a className="btn btn-first btn-submit btn-block form-control" onClick={() => this.handleSubmit()} disabled={!this.state.formValid} >Sign In</a>
                      <div className="info-sign-up">Don’t have an account? <a className="link">Sign up</a></div>
                    </div>
                  </form>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Form;
