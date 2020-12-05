import { connect } from "react-redux";
import mapboxgl from "mapbox-gl";
import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { addState, deleteState, getAllStates } from "../store/redux";
const { states } = require("../../states");
const { config } = require("../../config");
const mapboxSdk = require("@mapbox/mapbox-sdk/services/geocoding.js");

let hoveredStateId = [];

mapboxgl.accessToken = config.mapboxKey;

class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: "mapbox://styles/mapbox/light-v10",
      lng: -100.486052,
      lat: 37.830348,
      zoom: 2,
    };
  }

  componentDidMount() {
    this.props.getAllStates();

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: this.state.style,
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    map.addControl(new mapboxgl.NavigationControl());

    map.on("load", function () {
      map.addSource("states", {
        type: "geojson",
        data: states,
      });

      map.addLayer({
        id: "state-fills",
        type: "fill",
        source: "states",
        layout: {},
        paint: {
          "fill-color": "#627BC1",
          "fill-opacity": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            0.8,
            0.4,
          ],
        },
      });

      map.addLayer({
        id: "state-borders",
        type: "line",
        source: "states",
        layout: {},
        paint: {
          "line-color": "#627BC1",
          "line-width": 2,
        },
      });

      hoveredStateId.forEach((element) => {
        map.setFeatureState(
          {
            source: "states",
            id: element,
          },
          { hover: true }
        );
      });
    });

    var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
    mapboxClient
      .forwardGeocode({
        query: "Jersey City",
        autocomplete: false,
        limit: 1,
      })
      .send()
      .then(function (response) {
        if (
          response &&
          response.body &&
          response.body.features &&
          response.body.features.length
        ) {
          var feature = response.body.features[0];

          let elem = document.createElement("div");
          elem.className = "marker";
          elem.style.backgroundImage =
            "url(https://img.icons8.com/material-sharp/24/000000/marker.png)";
          elem.style.width = "25px";
          elem.style.height = "25px";

          new mapboxgl.Marker(elem).setLngLat(feature.center).addTo(map);
        }
      });

    map.on("click", "state-fills", (e) => {
      if (e.features.length > 0) {
        if (!hoveredStateId.includes(e.features[0].id)) {
          hoveredStateId.push(e.features[0].id);

          map.setFeatureState(
            {
              source: "states",
              id: hoveredStateId[hoveredStateId.length - 1],
            },
            { hover: true }
          );

          this.props.addState(
            e.features[0].properties.STATE_NAME,
            e.features[0].id,
            this.props.userId
          );
        } else {
          var index = hoveredStateId.indexOf(e.features[0].id);
          if (index > -1) {
            hoveredStateId.splice(index, 1);
          }

          map.setFeatureState(
            { source: "states", id: e.features[0].id },
            { hover: false }
          );

          this.props.deleteState(
            e.features[0].properties.STATE_NAME,
            e.features[0].id
          );
        }
      }
    });
  }

  render() {
    const propStates = this.props.usStates;

    const stateIDFromState =
      propStates && propStates.map((element) => element.stateId);
    const statesFromState =
      propStates && propStates.map((element) => element.state);

    hoveredStateId = stateIDFromState;

    return (
      <div>
        <div
          style={{
            width: "100%",
            height: "80vh",
          }}
          ref={(el) => (this.mapContainer = el)}
          className="mapContainer"
        />
        <div>
          <p>
            <b>Visited US Territories:</b> {statesFromState.join(", ")}
          </p>
          <p>
            <b>Percent of Total:</b> {statesFromState.length} of 56,{" "}
            {((statesFromState.length / 56) * 100).toFixed(2)}%
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  usStates: state.stateReducer,
  userId: state.userReducer.id,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAllStates: () => dispatch(getAllStates()),
    addState: (name, id, userId) => dispatch(addState(name, id, userId)),
    deleteState: (name, id) => dispatch(deleteState(name, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(States);
