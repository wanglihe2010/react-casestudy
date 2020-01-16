import React, { Component } from 'react';
import './SignInModal.css'
import authService from '../authService.js'
import { connect } from 'react-redux';
import productActions from '../reducers/productReducer';

class SignInModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMessage: ""
    }
  }

  closeModalHandler = (event) => {
    document.querySelector('.modal-bg').style.display = "none";
  }

  formChangehandler = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  signInForm = (event) => {
    event.preventDefault();
    const validLogin = authService(this.state.username, this.state.password);
    console.log("log in");
    if( validLogin) {
      this.props.updateUser(this.state.username);
      this.closeModalHandler(event);
    } else {
      this.setState({errorMessage: "Invalid log in"})
    }
  }
  render() {
    return (
      <div className="modal-bg">
        <div className="modal-content">
          <button className="close-button" onClick={this.closeModalHandler}>+</button>
          <form onSubmit={this.signInForm}>
            <input type="text" placeholder="User Name" name ="username" value = {this.state.username} onChange = {this.formChangehandler}/>
            <input type="password" name="password" placeholder="password" value = {this.state.password} onChange = {this.formChangehandler}/>
            <input type="submit" value="Sign In" />
          </form>
          <div>
            {this.state.errorMessage}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, {
  updateUser: productActions.updateUserActionCreator
}) (SignInModal);