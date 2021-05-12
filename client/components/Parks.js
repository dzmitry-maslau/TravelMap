import React from "react";
import mapboxgl from "mapbox-gl";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllParks } from "../store/parks";
import {
  getAllVisitedParks,
  addPark,
  deletePark,
} from "../store/visited-parks";

let parks = [];
let visitedParks = [];

class Parks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -94,
      lat: 38,
      zoom: 2,
      toolbar: "all",
      sort: "name",
    };
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  componentDidMount() {
    this.props.getAllParks();
    this.props.getAllVisitedParks();

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: `mapbox://styles/mapbox/${this.props.user.style}-v10`,
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.FullscreenControl());

    map.on("load", function () {
      parks &&
        parks.forEach((park) => {
          let elem = document.createElement("div");
          elem.className = "marker";
          elem.id = "marker" + park.id;
          !visitedParks.includes(park.park)
            ? (elem.style.backgroundImage = "url(./red.png)")
            : (elem.style.backgroundImage = "url(./green.png)");
          elem.style.cursor = "pointer";
          elem.style.width = "25px";
          elem.style.height = "25px";

          let longitude = -Number(
            park.longitude.slice(0, park.longitude.indexOf("°"))
          );
          let latitude = Number(
            park.latitude.slice(0, park.latitude.indexOf("°"))
          );

          new mapboxgl.Marker(elem)
            .setLngLat([
              longitude,
              park.latitude.slice(-1) === "N" ? latitude : -latitude,
            ])
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }).setHTML(
                '<h4><a href="' +
                  "parks/" +
                  park.id +
                  '">' +
                  park.park +
                  "</a></h4><p>" +
                  park.location +
                  "</p>"
              )
            )
            .addTo(map);
        });
    });
  }

  handleAddClick(park) {
    this.props.addPark(park.park, this.props.userId);
    let marker = document.getElementById("marker" + park.id);
    marker.style.backgroundImage = "url(./green.png)";
  }

  handleDeleteClick(park, parkId) {
    this.props.deletePark(park.park, parkId);
    let marker = document.getElementById("marker" + park.id);
    marker.style.backgroundImage = "url(./red.png)";
  }

  render() {
    parks = this.props.parks;
    this.state.sort === "name" && parks.sort((One, Two) => One.id - Two.id);
    this.state.sort === "date" &&
      parks.sort(
        (One, Two) =>
          new Date(One.dateEstablished) - new Date(Two.dateEstablished)
      );
    this.state.sort === "area" &&
      parks.sort(function (One, Two) {
        return (
          Number(Two.areaAcres.replace(/,/g, "")) -
          Number(One.areaAcres.replace(/,/g, ""))
        );
      });
    this.state.sort === "visitors" &&
      parks.sort(function (One, Two) {
        return (
          Number(Two.recreationVisitors2019.replace(/,/g, "")) -
          Number(One.recreationVisitors2019.replace(/,/g, ""))
        );
      });
    let visitedParksFromState = this.props.visitedParks;
    visitedParks =
      visitedParksFromState &&
      visitedParksFromState.map((element) => element.park);
    return (
      <div>
        <h5 className="map-help">
          Please scroll down to add or remove any National Park
        </h5>
        <div
          style={{
            width: "100%",
            height: "70vh",
          }}
          ref={(el) => (this.mapContainer = el)}
          className="mapContainer"
        />
        <div className="parks">
          <div className="parks-toolbar">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  className={
                    this.state.toolbar === "all"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  onClick={() => this.setState({ toolbar: "all" })}
                >
                  All parks
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    this.state.toolbar === "visited"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  onClick={() => this.setState({ toolbar: "visited" })}
                >
                  Visited parks
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sort
                </a>
                <div className="dropdown-menu">
                  <a
                    className={
                      this.state.sort === "name"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    onClick={() => this.setState({ sort: "name" })}
                  >
                    Name
                  </a>
                  <a
                    className={
                      this.state.sort === "date"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    onClick={() => this.setState({ sort: "date" })}
                  >
                    Date established as park
                  </a>
                  <a
                    className={
                      this.state.sort === "area"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    onClick={() => this.setState({ sort: "area" })}
                  >
                    Area
                  </a>
                  <a
                    className={
                      this.state.sort === "visitors"
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    onClick={() => this.setState({ sort: "visitors" })}
                  >
                    Recreation visitors
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {this.state.toolbar === "all" ? (
            <div className="row row-cols-1 row-cols-md-4">
              {parks &&
                parks.map((element) => {
                  // let link = element.park.toLowerCase().replace(/ /g, "_");
                  let visited = visitedParks.includes(element.park);
                  return (
                    <div className="col mb-4" key={element.park}>
                      <div className="card h-100">
                        <Link to={`/parks/${element.id}`}>
                          <img
                            src={element.smallImage}
                            className="card-img-top"
                          />
                        </Link>
                        <div className="card-body">
                          <Link to={`/parks/${element.id}`}>
                            <h3 className="card-title">{element.park}</h3>
                          </Link>
                          <ul className="card-list">
                            <li>
                              <strong>Location:</strong> {element.location}
                            </li>
                            <li>
                              <strong>Date established as park:</strong>{" "}
                              {element.dateEstablished}
                            </li>
                            <li>
                              <strong>Area (2019):</strong> {element.areaAcres}{" "}
                              acres
                            </li>
                            <li>
                              <strong>Recreation visitors (2019):</strong>{" "}
                              {element.recreationVisitors2019.replace(
                                /,/g,
                                "."
                              )}
                            </li>
                          </ul>
                        </div>
                        <div className="visited-button">
                          {visited ? (
                            <button
                              onClick={() =>
                                this.handleDeleteClick(
                                  element,
                                  visitedParksFromState.filter(
                                    (el) => el.park === element.park
                                  )[0].id
                                )
                              }
                              type="button"
                              className="btn btn-secondary"
                            >
                              Remove
                            </button>
                          ) : (
                            <button
                              onClick={() => this.handleAddClick(element)}
                              type="button"
                              className="btn btn-primary"
                            >
                              Add
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="row row-cols-1 row-cols-md-4">
              {parks &&
                parks
                  .filter((elem) => visitedParks.includes(elem.park))
                  .map((element) => {
                    // let link = element.park.toLowerCase().replace(/ /g, "_");
                    let visited = visitedParks.includes(element.park);
                    return (
                      <div className="col mb-4" key={element.park}>
                        <div className="card h-100">
                          <Link to={`/parks/${element.id}`}>
                            <img src={element.image} className="card-img-top" />
                          </Link>
                          <div className="card-body">
                            <Link to={`/parks/${element.id}`}>
                              <h3 className="card-title">{element.park}</h3>
                            </Link>
                            <ul className="card-list">
                              <li>
                                <strong>Location:</strong> {element.location}
                              </li>
                              <li>
                                <strong>Date established as park:</strong>{" "}
                                {element.dateEstablished}
                              </li>
                              <li>
                                <strong>Area (2019):</strong>{" "}
                                {element.areaAcres} acres
                              </li>
                              <li>
                                <strong>Recreation visitors (2019):</strong>{" "}
                                {element.recreationVisitors2019.replace(
                                  /,/g,
                                  "."
                                )}
                              </li>
                            </ul>
                          </div>
                          <div className="visited-button">
                            {visited ? (
                              <button
                                onClick={() =>
                                  this.handleDeleteClick(
                                    element,
                                    visitedParksFromState.filter(
                                      (el) => el.park === element.park
                                    )[0].id
                                  )
                                }
                                type="button"
                                className="btn btn-secondary"
                              >
                                Remove
                              </button>
                            ) : (
                              <button
                                onClick={() => this.handleAddClick(element)}
                                type="button"
                                className="btn btn-primary"
                              >
                                Add
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  parks: state.park,
  visitedParks: state.visitedPark,
  userId: state.user.id,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAllParks: () => dispatch(getAllParks()),
    getAllVisitedParks: () => dispatch(getAllVisitedParks()),
    addPark: (park, userId) => dispatch(addPark(park, userId)),
    deletePark: (park, id) => dispatch(deletePark(park, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Parks);
