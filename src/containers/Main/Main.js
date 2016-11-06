import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../actions/actions';
import { GoogleMapWrapper, DemoList } from '../../components';


class Main extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <div className="expand mdl-grid">
        <div className="map-item-wrapper mdl-cell--6-col">
          <h4>집회 목록</h4>
          <DemoList />
        </div>
        <div className="map-wrapper mdl-cell--6-col">
          <GoogleMapWrapper markers={[]} />
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Main);