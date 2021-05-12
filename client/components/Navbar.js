import React from "react";
import { Router, Link, withRouter } from "react-router-dom";
import history from "../history";
import { connect } from "react-redux";
import { logout } from "../store/user";

const Root = ({ handleActive, handleClick, isLoggedIn }) => {
  let pathname = window.location.pathname;
  return (
    <Router history={history}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-brand">
          <img src="/favicon.ico" alt="" width="20%" height="20%"></img>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" onClick={handleActive}>
            <li className={pathname === "/" ? "nav-item active" : "nav-item"}>
              <Link className="nav-link" to="/">
                Welcome
              </Link>
            </li>
            {isLoggedIn && (
              <ul className="navbar-nav mr-auto" onClick={handleActive}>
                <li
                  className={
                    pathname === "/states" ? "nav-item active" : "nav-item"
                  }
                >
                  <Link className="nav-link" to="/states">
                    States
                  </Link>
                </li>
                <li
                  className={
                    pathname === "/world" ? "nav-item active" : "nav-item"
                  }
                >
                  <Link className="nav-link" to="/world">
                    World
                  </Link>
                </li>
                <li
                  className={
                    pathname === "/parks" ? "nav-item active" : "nav-item"
                  }
                >
                  <Link className="nav-link" to="/parks">
                    U.S. National Parks
                  </Link>
                </li>
                {/* <li className={
                    pathname === "/wishlist" ? "nav-item active" : "nav-item"
                  }>
                  <Link className="nav-link" to="/wishlist">
                    Wishlist
                  </Link>
                </li> */}
              </ul>
            )}
            <li
              className={pathname === "/about" ? "nav-item active" : "nav-item"}
            >
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          {isLoggedIn ? (
            <div className=" my-2 my-lg-0">
              {/* The navbar will show these links after you log in */}
              <ul className="navbar-nav" onClick={handleActive}>
                <li
                  className={
                    pathname === "/account" ? "nav-item active" : "nav-item"
                  }
                >
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
              <ul className="navbar-nav" onClick={handleActive}>
                <li
                  className={
                    pathname === "/login" ? "nav-item active" : "nav-item"
                  }
                >
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li
                  className={
                    pathname === "/signup" ? "nav-item active" : "nav-item"
                  }
                >
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </Router>
  );
};

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
    handleActive(event) {
      let outerText = event.target.outerText;
      let query = document.querySelectorAll("li.nav-item");
      for (let i = 0; i < query.length; i++) {
        if (query[i].outerText === outerText) {
          if (outerText !== "Logout") {
            query[i].className = "nav-item active";
          }
        } else if (query[i].className === "nav-item active") {
          query[i].className = "nav-item";
        }
      }
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(Root));
