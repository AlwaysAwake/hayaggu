import React, { PropTypes, Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { blue500 } from 'material-ui/styles/colors';

import { convertKoreanFormat } from '../../utils/time';


class DemoList extends Component {
  render() {
    const { demos, onSelectDemo, selectedDemo } = this.props;

    return (
      <div className="demo-list-wrapper">
        {demos.length > 0 ?
          demos.map((demo, idx) => {
            return (
              <Card
                className="select-none"
                onClick={() => onSelectDemo(demo)}
                key={idx}
                containerStyle={{ marginBottom: 10, padding: 0, backgroundColor: selectedDemo.id === demo.id && blue500, cursor: 'pointer' }}
              >
                <CardTitle
                  title={`[${demo.region}] ${demo.source}`}
                  subtitle={convertKoreanFormat(demo.sdate)}
                  style={{ padding: 10 }}
                  titleStyle={{ fontSize: 18, color: selectedDemo.id === demo.id && 'rgba(255, 255, 255, 0.870588)', lineHeight: 'normal' }}
                  subtitleStyle={{ color: selectedDemo.id === demo.id ? 'rgba(255, 255, 255, 0.541176)' : 'rgba(0, 0, 0, 0.541176)' }}
                />
                <CardText style={{ padding: 10, paddingTop: 0, color: selectedDemo.id === demo.id && 'rgba(255, 255, 255, 0.870588)' }}>
                  {`집회 명: ${demo.title}`}
                  <br />
                  {demo.host ? `주최: ${demo.host}` : null}
                </CardText>
              </Card>
            );
          })
          : <h6 className="noto">아직 예정된 집회가 없습니다.</h6>
        }
      </div>
    );
  }
}

DemoList.defaultProps = {
  demos: [],
};

DemoList.propTypes = {
  onSelectDemo: PropTypes.func.isRequired,
  selectedDemo: PropTypes.object.isRequired,
  demos: PropTypes.array.isRequired,
};

export default DemoList;
