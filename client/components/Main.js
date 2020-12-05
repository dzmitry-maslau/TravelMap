import React from "react";
import { connect } from "react-redux";

export const UserHome = (props) => {
  const { firstName } = props;

  return (
    <div>
      <div className="jumbotron">
        {firstName ? (
          <h1 className="display-4">Welcome to TravelMap, {firstName}!</h1>
        ) : (
          <h1 className="display-4">Welcome to TravelMap!</h1>
        )}
        <p className="lead">
          Save your travels and get inspiration for your next journey!
        </p>
        <hr className="my-4" />
        {firstName ? (
          <p>Please go to <a className="badge badge-light" href="/states">USA</a> or <a className="badge badge-light" href="/world">World</a> tabs to get full experience of TravelMap.</p>
        ) : (
          <p>Please Login or Sign Up to get full experience of TravelMap.</p>
        )}
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    firstName: state.userReducer.firstName,
  };
};

export default connect(mapState)(UserHome);
