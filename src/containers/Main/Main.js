import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../actions/actions';
import { GoogleMapWrapper } from '../../components';


class Main extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <div className="expand mdl-grid">
        <div className="map-item-wrapper mdl-cell--6-col">

        </div>
        <div className="map-wrapper mdl-cell--6-col">
          <GoogleMapWrapper />
        </div>
      </div>
    );
  }
}

Main.propTypes = {

};

export default connect()(Main);