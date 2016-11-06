import React, { Component } from 'react';
import { GoogleMap, withGoogleMap } from 'react-google-maps';
import noop from 'lodash/noop';

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={10}
    defaultCenter={{ lat: 37.569293, lng: 126.9490233 }}
    onClick={props.onMapClick}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

export default class GoogleMapWrapper extends Component {
  render() {
    return (
      <GettingStartedGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
        onMapLoad={noop}
        onMapClick={noop}
        markers={this.props.markers}
        onMarkerRightClick={noop}
      />
    );
  }
}