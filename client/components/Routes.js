import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import World from "./World";
import States from "./States";
import Account from "./Account";
import NotFound from "./NotFound";
import { Login, Signup } from "./Login";
import { me } from "../store/user_redux";

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <main className="container">
        <Switch>
          {/* Routes placed here are available to all visitors */}
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {isLoggedIn && (
            <Switch>
              {/* Routes placed here are only available after logging in */}
              <Route exact path="/states" component={States} />
              <Route exact path="/world" component={World} />
              <Route exact path="/account" component={Account} />
              <Route exact path="*" component={NotFound} />
            </Switch>
          )}
          {/* Displays NotFound component as a fallback */}
          {/* <Route exact path="*" component={NotFound} /> */}
        </Switch>
      </main>
    );
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.userReducer.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(Routes));
