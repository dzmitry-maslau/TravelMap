import React from "react";
import { connect } from "react-redux";
import { auth } from "../store/user_redux";

const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        {name === "signup" && (
          <div className="form-group">
            <label htmlFor="firstName">Name</label>
            <input type="text" className="form-control" name="firstName" />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password" />
          {error && error.response && (
            <div style={{ color: "red" }}> {error.response.data} </div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
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
    error: state.userReducer.error,
  };
};

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.userReducer.error,
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
