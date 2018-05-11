import React from "react";
import GoogleMapReact from "google-map-react";
import { UncontrolledTooltip } from "reactstrap";

export default class Map extends React.Component {
  state = {
    zoom: 15
  };
  center = {
    lat: 29.0426983,
    lng: -110.97010649999999
  };
  changeZoom = ({ zoom }) => {
    if (zoom) {
      this.setState(prevState => {
        return {
          zoom
        };
      });
    }
  };
  render() {
    return (
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCXr6sj4U7PYRP-RpAMjeGC-NN6osCDzws" }}
          defaultCenter={this.center}
          center={this.center}
          defaultZoom={15}
          onChange={this.changeZoom}
          onChildMouseEnter={() => {}}
          onChildMouseLeave={() => {}}
        >
          <div
            {...Object.assign({}, this.center, { text: "Aquí" })}
            style={{
              width: this.state.zoom * 1.5,
              height: this.state.zoom * 1.5,
              borderRadius: "100%",
              background: "red"
            }}
            id="tooltip"
          />
          <UncontrolledTooltip placement="top" target="tooltip">
            Aquí se encuentra TSH
          </UncontrolledTooltip>
        </GoogleMapReact>
      </div>
    );
  }
}
