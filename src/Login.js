import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    // sme fancy firebase login .....
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // console.log(auth);

        history.push("/");
      })
      .catch((error) => alert(error.message));
    // do some fancy firebase login.....
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it successfully create a new user with email and password
        // console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
    // do some fancy firebase register form.....
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="logo__logo"
          //   src="https://lh3.googleusercontent.com/proxy/pS5YaVl_piz-BCTRaxQGyIuVgbBdrFnOZsXbR9mZbsqIiX0W18Hza3jht9PcBU_Vja59NemZwTrOlzu9MKTdl71x5nrRlVIxSt4Y2YDJ1ReknT1VDHgtXr-Gb89RbG7XW28OOjDOjA"
          src="https://iconape.com/wp-content/png_logo_vector/amber-electrical-logo.png"
          alt="company lgo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submite"
            onClick={signIn}
            className="login__singinButton"
          >
            Sign In
          </button>
        </form>
        <p>
          <input type="checkbox" className="login__box" />
          By signing you agree to <strong>Shop's Account</strong> Conditions of
          Use & Sale. Please see our Privacy Notice, our Cookies Noticeand our
          Interest-Based Ads Notice.
        </p>
        {/*  <button onClick={register} className="login__account">
          Create a Shopping Account
  </button> */}
        <a href="" onClick={register} className="login__account">
          {" "}
          Create a Shopping Account
        </a>
      </div>
    </div>
  );
}
export default Login;
