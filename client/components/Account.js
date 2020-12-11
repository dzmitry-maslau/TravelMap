import React from "react";
import { connect } from "react-redux";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.user.firstName,
      email: props.user.email,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapState)(Account);
