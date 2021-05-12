import React from "react";
import { connect } from "react-redux";
import { changeName } from "../store/user";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.user.firstName,
      email: this.props.user.email,
      style: this.props.user.style,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.changeName(
      this.state.firstName,
      this.state.email,
      this.props.user.id,
      this.state.style
    );
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
          <div>
            <label htmlFor="style">Map style</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="lightstyle"
                  value="light"
                  name="style"
                  checked={this.state.style === "light"}
                  onChange={this.handleChange}
                />
                <label className="form-check-label" htmlFor="lightstyle">
                  Light Style
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="darkstyle"
                  value="dark"
                  name="style"
                  checked={this.state.style === "dark"}
                  onChange={this.handleChange}
                />
                <label className="form-check-label" htmlFor="darkstyle">
                  Dark Style
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="streetsstyle"
                  value="streets"
                  name="style"
                  checked={this.state.style === "streets"}
                  onChange={this.handleChange}
                />
                <label className="form-check-label" htmlFor="streetsstyle">
                  Streets Style
                </label>
              </div>
            </div>
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name, email, id, style) =>
      dispatch(changeName(name, email, id, style)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
