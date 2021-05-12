import React from "react";
import { connect } from "react-redux";
import { auth } from "../store/user";

const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit} name={name} className="form-signin">
        <img
          className="mb-4"
          src="/favicon.ico"
          alt=""
          width="72"
          height="72"
        />
        {name === "signup" ? (
          <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
        ) : (
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        )}
        {name === "signup" && (
          <div className="form-group">
            <label htmlFor="firstName" className="sr-only">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              placeholder="Name"
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Email address"
            required
            // autofocus
          />
          {name === "signup" && (
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required
          />
          {error && error.response && (
            <div style={{ color: "red" }}> {error.response.data} </div>
          )}
        </div>
        <button type="submit" className="btn btn-lg btn-primary btn-block">
          {displayName}
        </button>
      </form>
    </div>
  );
};

const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    error: state.user.error,
  };
};

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.user.error,
  };
};

const mapLoginDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(auth(email, password, formName));
    },
  };
};

const mapSignupDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      const firstName = evt.target.firstName.value;
      dispatch(auth(email, password, formName, firstName));
    },
  };
};

export const Login = connect(mapLogin, mapLoginDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapSignupDispatch)(AuthForm);
