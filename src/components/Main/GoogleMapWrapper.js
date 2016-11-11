import React, { Component } from 'react';
import { GoogleMap, withGoogleMap, Marker } from 'react-google-maps';


const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={{ lat: 36.3589795, lng: 127.8878637 }}
  >
    {props.markers.map(marker => (
      <Marker onClick={() => props.onSelectPin(marker.key)} {...marker} />
    ))}
  </GoogleMap>
));

export default class GoogleMapWrapper extends Component {
  render() {
    return (
      <GettingStartedGoogleMap
        containerElement={
          <div className="google-map-container" />
        }
        mapElement={
          <div className="google-map-wrapper" />
        }
        markers={this.props.markers}
        onSelectPin={this.props.onSelectPin}
      />
    );
  }
}
