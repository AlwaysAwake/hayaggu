import React, { PropTypes, Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import { convertKoreanFormat } from '../../utils/time';


class DemoList extends Component {
  render() {
    const { demos, onSelectDemo } = this.props;

    return (
      <div className="demo-list-wrapper">
        {
          demos.map((demo, idx) => {
            return (
              <Card onClick={() => onSelectDemo(demo)} key={idx} containerStyle={{ marginBottom: 10 }}>
                <CardTitle title={demo.title} subtitle={convertKoreanFormat(demo.sdate)} />
                <CardText>
                  {`장소: ${demo.source}`}
                  <br />
                  {`주최: ${demo.host}`}
                </CardText>
              </Card>
            );
          })
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
  demos: PropTypes.array.isRequired,
};

export default DemoList;
