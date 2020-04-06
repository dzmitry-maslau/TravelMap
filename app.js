import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import mapboxgl from "mapbox-gl";
import React from "react";
import store from "./redux";
import { addState, deleteState } from "./redux";
import "mapbox-gl/dist/mapbox-gl.css";
import Favicon from "react-favicon";
const mapboxSdk = require("@mapbox/mapbox-sdk/services/geocoding.js");
const { states } = require("./states");
const { config } = require("./config");

let hoveredStateId = [];

mapboxgl.accessToken = config.mapboxKey;

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -100.486052,
      lat: 37.830348,
      zoom: 2
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/light-v10",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on("load", function() {
      map.addSource("states", {
        type: "geojson",
        data: states
      });

      hoveredStateId.forEach(element => {
        map.setFeatureState(
          {
            source: "states",
            id: element
          },
          { hover: true }
        );
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
            0.4
          ]
        }
      });

      map.addLayer({
        id: "state-borders",
        type: "line",
        source: "states",
        layout: {},
        paint: {
          "line-color": "#627BC1",
          "line-width": 2
        }
      });
    });

    var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
    mapboxClient
      .forwardGeocode({
        query: "Jersey City",
        autocomplete: false,
        limit: 1
      })
      .send()
      .then(function(response) {
        if (
          response &&
          response.body &&
          response.body.features &&
          response.body.features.length
        ) {
          var feature = response.body.features[0];
          new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
        }
      });

    map.on("click", "state-fills", e => {
      if (e.features.length > 0) {
        if (!hoveredStateId.includes(e.features[0].id)) {
          hoveredStateId.push(e.features[0].id);
          map.setFeatureState(
            {
              source: "states",
              id: hoveredStateId[hoveredStateId.length - 1]
            },
            { hover: true }
          );
          this.props.addState(e.features[0].properties.STATE_NAME);
        } else {
          var index = hoveredStateId.indexOf(e.features[0].id);
          if (index > -1) {
            hoveredStateId.splice(index, 1);
          }
          map.setFeatureState(
            { source: "states", id: e.features[0].id },
            { hover: false }
          );
          this.props.deleteState(e.features[0].properties.STATE_NAME);
        }
      }
    });
  }

  render() {
    const statesFromState = states.features.filter(element =>
      this.props.usStates.includes(element.properties.STATE_NAME)
    );
    const stateIDFromState = statesFromState.map(element => element.id);
    hoveredStateId = stateIDFromState;

    return (
      <div>
        <div
          style={{
            width: "100vw",
            height: "100vh"
          }}
          ref={el => (this.mapContainer = el)}
          className="mapContainer"
        />
        <div>Visited States: {this.props.usStates.join(", ")}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  usStates: state
});

const mapDispatchToProps = {
  addState,
  deleteState
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Application);

ReactDOM.render(
  <div>
    <Favicon url="favicon.png" />
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </div>,
  document.body.appendChild(document.createElement("div"))
);
