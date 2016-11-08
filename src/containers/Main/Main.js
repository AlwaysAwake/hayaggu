import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../actions/actions';
import { fixtureDemos } from '../../constants/fixtures';
import { GoogleMapWrapper, DemoList } from '../../components';


class Main extends Component {
  componentWillMount() {
    this.props.dispatch(Actions.fetchDemos());
  }

  selectDemo = (demo) => {
    this.props.dispatch(Actions.selectDemo(demo));
  }

  render() {
    const { demos, demoPositions, selectedDemo } = this.props;

    return (
      <div className="expand mdl-grid">
        <div className="map-item-wrapper mdl-cell mdl-cell--6-col">
          <h4>집회 목록</h4>
          <DemoList demos={demos} onSelectDemo={this.selectDemo} selectedDemo={selectedDemo} />
        </div>
        <div className="map-wrapper mdl-cell mdl-cell--6-col">
          <GoogleMapWrapper markers={demoPositions} />
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
  demos: PropTypes.array.isRequired,
  selectedDemo: PropTypes.object.isRequired,
};

export default connect(
  state => ({
    demos: state.demos.demos,
    selectedDemo: state.demos.selectedDemo,
    demoPositions: state.demos.demos.map(demo => ({
      key: demo.id,
      position: {
        lat: demo.source_latitude,
        lng: demo.source_longitude,
      },
    })),
  })
)
(Main);
