import React from "react";
import { Router, Link, withRouter } from "react-router-dom";
import history from "../history";
import { connect } from "react-redux";
import { logout } from "../store/user_redux";

const Root = ({ handleClick, isLoggedIn }) => {
  return (
    <Router history={history}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-brand">
          <img src="/favicon.ico" alt="" width="20%" height="20%"></img>
        </div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Welcome
            </Link>
          </li>
          {isLoggedIn && (
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/states">
                  USA
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/world">
                  World
                </Link>
              </li>
            </ul>
          )}
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
        {isLoggedIn ? (
          <div className=" my-2 my-lg-0">
            {/* The navbar will show these links after you log in */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/account">
                  Account
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleClick}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="my-2 my-lg-0">
            {/* The navbar will show these links before you log in */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </Router>
  );
};

const mapState = (state) => {
  return {
    isLoggedIn: !!state.userReducer.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(Root));
