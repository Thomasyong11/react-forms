import React, { Component } from "react";
import { firebase, googleAuth } from "../firebase";
class Login extends Component {
  state = {
    status: false,
  };
  signIn = () => {
    firebase.auth().signInWithPopup(googleAuth);
  };
  render() {
    return (
      <div>
        <button onClick={this.signIn}>Login</button>
      </div>
    );
  }
}
export default Login;
