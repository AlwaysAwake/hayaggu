import React, { Component } from 'react';
import { GoogleMap, withGoogleMap, Marker } from 'react-google-maps';
import noop from 'lodash/noop';

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={7}
    defaultCenter={{ lat: 36.3589795, lng: 127.8878637 }}
    onClick={props.onMapClick}
  >
    {props.markers.map(marker => (
      <Marker {...marker} />
    ))}
  </GoogleMap>
));

export default class GoogleMapWrapper extends Component {
  render() {
    return (
      <GettingStartedGoogleMap
        containerElement={
          <div style={{ height: '100%', minHeight: '711px' }} />
        }
        mapElement={
          <div style={{ height: '100%', minHeight: '711px' }} />
        }
        onMapLoad={noop}
        onMapClick={noop}
        markers={this.props.markers}
      />
    );
  }
}
