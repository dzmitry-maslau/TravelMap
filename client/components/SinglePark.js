import mapboxgl from "mapbox-gl";
import { connect } from "react-redux";
import React, { Component } from "react";
import { getSinglePark } from "../store/single-park";

let park = {};
let longitude = null;
let latitude = null;

class SinglePark extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getSinglePark(this.props.match.params.id);
  }

  componentDidUpdate() {
    longitude = -Number(park.longitude.slice(0, park.longitude.indexOf("°")));
    latitude = Number(park.latitude.slice(0, park.latitude.indexOf("°")));

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: `mapbox://styles/mapbox/${this.props.user.style}-v10`,
      center: [
        longitude,
        park.latitude.slice(-1) === "N" ? latitude : -latitude,
      ],
      zoom: 3,
    });

    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.FullscreenControl());

    map.on("load", function () {
      let elem = document.createElement("div");
      elem.className = "marker";
      elem.style.backgroundImage = "url(/black.png)";
      elem.style.cursor = "pointer";
      elem.style.width = "25px";
      elem.style.height = "25px";

      new mapboxgl.Marker(elem)
        .setLngLat([
          longitude,
          park.latitude.slice(-1) === "N" ? latitude : -latitude,
        ])
        .addTo(map);
    });
  }

  render() {
    park = this.props.park;
    function goBack() {
      window.history.back();
    }
    return (
      <div>
        <img
          style={{
            maxHeight: "500px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          src={park.image}
        />
        <br />
        <strong>
          <h4 style={{ textAlign: "center" }}>{park.park}</h4>
        </strong>
        <strong>Location:</strong> {park.location} ({park.longitude},{" "}
        {park.latitude}) <br />
        <strong>Date established as park:</strong> {park.dateEstablished}
        <br />
        <strong>Area (2019):</strong> {park.areaAcres} acres ({park.areakm2}{" "}
        km2)
        <br />
        <strong>Recreation visitors (2019):</strong>{" "}
        {park.recreationVisitors2019}
        <br />
        <strong>Description:</strong> {park.description}
        <br />
        <br />
        <br />
        <a onClick={() => goBack()}>
          <img src="/back-arrow.png" />
          <strong>Go Back</strong>
        </a>
        <br />
        <br />
        <div
          style={{
            width: "100%",
            height: "60vh",
          }}
          ref={(el) => (this.mapContainer = el)}
          className="mapContainer"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    park: state.singlePark,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSinglePark: (id) => dispatch(getSinglePark(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePark);
