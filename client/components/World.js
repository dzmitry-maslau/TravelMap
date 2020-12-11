import React from "react";
import mapboxgl from "mapbox-gl";
import { connect } from "react-redux";
import { addCountry, deleteCountry, getAllCountries } from "../store/redux";

const { config } = require("../../config");

let hoveredStateId = [];
let countryNames = [];

mapboxgl.accessToken = config.mapboxKey;

class World extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -0.1275,
      lat: 51.507222,
      zoom: 1.5,
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.props.getAllCountries();

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/light-v10",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    map.addControl(new mapboxgl.NavigationControl());

    map.on("load", function () {
      map.addLayer({
        id: "country",
        type: "fill",
        source: {
          type: "vector",
          url: "mapbox://dima7maslovv.5ddirrtj",
        },
        "source-layer": "ne_10m_admin_0_countries-byy51y",
        layout: {},
        paint: {
          "fill-color": "#627BC1",
          "fill-opacity": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            0.8,
            0,
          ],
        },
      });

      map.addLayer({
        id: "country-borders",
        type: "line",
        source: {
          type: "vector",
          url: "mapbox://dima7maslovv.5ddirrtj",
        },
        "source-layer": "ne_10m_admin_0_countries-byy51y",
        layout: {},
        paint: {
          "line-color": "#627BC1",
          "line-width": 2,
        },
        filter: ["in", "NAME"].concat(countryNames),
      });

      hoveredStateId.forEach((element) => {
        map.setFeatureState(
          {
            source: "country",
            sourceLayer: "ne_10m_admin_0_countries-byy51y",
            id: element,
          },
          { hover: true }
        );
      });
    });

    map.on("click", "country", (e) => {
      if (e.features.length > 0) {
        if (!hoveredStateId.includes(e.features[0].id)) {
          hoveredStateId.push(e.features[0].id);

          map.setFeatureState(
            {
              source: "country",
              sourceLayer: "ne_10m_admin_0_countries-byy51y",
              id: hoveredStateId[hoveredStateId.length - 1],
            },
            { hover: true }
          );

          map.setFilter(
            "country-borders",
            ["in", "NAME"].concat([
              ...countryNames,
              e.features[0].properties.NAME,
            ])
          );

          this.props.addCountry(
            e.features[0].properties.NAME,
            e.features[0].id,
            e.features[0].properties.ADM0_A3_US,
            this.props.userId
          );
        } else {
          var index = hoveredStateId.indexOf(e.features[0].id);
          if (index > -1) {
            hoveredStateId.splice(index, 1);
          }

          map.setFeatureState(
            {
              source: "country",
              sourceLayer: "ne_10m_admin_0_countries-byy51y",
              id: e.features[0].id,
            },
            { hover: false }
          );

          const newFilter = [...countryNames];
          const filterFunc = newFilter.filter(
            (elem) => elem !== e.features[0].properties.NAME
          );
          map.setFilter("country-borders", ["in", "NAME"].concat(filterFunc));

          this.props.deleteCountry(
            e.features[0].properties.NAME,
            e.features[0].id
          );
        }
      }
    });
  }

  render() {
    const countries = this.props.countries;

    let countriesIDFromState =
      countries && countries.map((element) => element.countryId);
    let countriesNamesFromState =
      countries && countries.map((element) => element.country);

    hoveredStateId = countriesIDFromState;
    countryNames = countriesNamesFromState;

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
        <div className="visited">
          <h4>Visited Countries:</h4>
          <div className="row row-cols-1 row-cols-md-3">
            {countries &&
              countries.map((element) => {
                return (
                  <div className="col mb-4" key={element.id}>
                    <div className="card h-100">
                      <img src={element.flag} className="card-img-top" />
                      <div className="card-body">
                        <h3 className="card-title">{element.country}</h3>
                        <ul className="card-list">
                          <li>
                            <strong>Capital:</strong> {element.capital}
                          </li>
                          <li>
                            <strong>Population:</strong>{" "}
                            {String(element.population).replace(
                              /(.)(?=(\d{3})+$)/g,
                              "$1."
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer,
  countries: state.countryReducer,
  userId: state.userReducer.id,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCountries: () => dispatch(getAllCountries()),
    addCountry: (name, id, shortName, userId) =>
      dispatch(addCountry(name, id, shortName, userId)),
    deleteCountry: (name, id) => dispatch(deleteCountry(name, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(World);
