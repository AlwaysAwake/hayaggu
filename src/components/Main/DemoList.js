import React, { PropTypes, Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';


class DemoList extends Component {
  render() {
    const { demos } = this.props;

    return (
      <div className="demo-list-wrapper">
        {
          demos.map((demo, idx) => {
            return (
              <Card>
                <CardTitle title={demo.title} subtitle={demo.subtitle} />
                <CardText>{demo.description}</CardText>
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
  demos: PropTypes.array.isRequired,
};

export default DemoList;