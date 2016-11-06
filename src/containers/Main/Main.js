import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../actions/actions';
import { GoogleMapWrapper, DemoList } from '../../components';


class Main extends Component {
  componentWillMount() {

  }

  render() {
    const { demos } = this.props;

    return (
      <div className="expand mdl-grid">
        <div className="map-item-wrapper mdl-cell--6-col">
          <h4>집회 목록</h4>
          <DemoList demos={demos} />
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
  demos: PropTypes.array.isRequired,
};

export default connect(
  state => ({
    demos: state.demos,
  })
)
(Main);