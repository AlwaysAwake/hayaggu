import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

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

  onMoveWeek(nextWeekOffset) {
    if (nextWeekOffset >= 0) {
      this.props.dispatch(Actions.fetchDemos(nextWeekOffset));
    }
  }

  render() {
    const { demos, demoPositions, selectedDemo, currentWeekOffset } = this.props;
    const buttonStyles = { display: 'inline-block', margin: 5 };

    return (
      <div className="expand mdl-grid">
        <div className="map-item-wrapper mdl-cell mdl-cell--6-col">
          <div className="child-inline">
            <h4 className="noto">집회 목록</h4>
            <div style={{ float: 'right', margin: '16px 0' }}>
              <RaisedButton
                style={{...buttonStyles, marginRight: 12}}
                label="이전 주"
                onTouchTap={() => this.onMoveWeek(currentWeekOffset - 1)}
              />
              <RaisedButton
                style={buttonStyles}
                label="다음 주"
                onTouchTap={() => this.onMoveWeek(currentWeekOffset + 1)}
              />
            </div>
          </div>
          
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
  currentWeekOffset: PropTypes.number.isRequired,
  demos: PropTypes.array.isRequired,
  selectedDemo: PropTypes.object.isRequired,
};

export default connect(
  state => {
    const { demos, selectedDemo } = state.demos;

    return {
      currentWeekOffset: state.common.currentWeekOffset,
      demos: demos,
      selectedDemo,
      demoPositions: demos.filter(d => selectedDemo.id ? d.id === selectedDemo.id : true).map(demo => ({
        key: demo.id,
        position: {
          lat: demo.source_latitude,
          lng: demo.source_longitude,
        },
      })),
    };
  }
)
(Main);
