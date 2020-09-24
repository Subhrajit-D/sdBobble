import React, { useState } from "react";
import GoogleLogin from "react-google-login";

import "./styles.scss";
import Facebook from "./components/facebook";
export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const responseGoogle = (response) => {
    setName(response.profile0bj.name);
    setEmail(response.profileObj.email);
  };
  return (
    <div className="App">
      <h1>Create your account</h1>
      <h3>Login with Google</h3>
      <GoogleLogin
        clientId="786539430742-b26p7lb5059e0foc58nq0cbj70oijr89.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <h3>Login with Facebook</h3>
      <Facebook />
    </div>
  );
}
