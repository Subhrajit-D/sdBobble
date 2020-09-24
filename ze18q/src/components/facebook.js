import React, { Component } from "react";

import FacebookLogin from "react-facebook-login";

class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userId: "",
    name: "",
    email: ""
  };

  componentClick = () => {
    console.log("clicked");
  };

  responseFacebook = (response) => {
    this.setState({
      isLoggedIn: true,
      userId: response.userId,
      name: response.name,
      email: response.email
    });
  };

  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "f4f4f4",
            padding: "20px"
          }}
        >
          <h2>Welcome:{this.state.name}</h2>
          <h3>Email:{this.state.email}</h3>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="3680243602008449"
          autoLoad={true}
          fields="name,email"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        ></FacebookLogin>
      );
    }

    return <div>{fbContent}</div>;
  }
}

export default Facebook;
