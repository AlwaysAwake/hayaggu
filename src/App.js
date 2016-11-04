import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';


class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="expand">
        <AppBar
          title={<span style={{ cursor: 'pointer' }}>Hayaggu</span>}
          onTitleTouchTap={() => dispatch(push('/'))}

          iconElementLeft={<FontIcon className="material-icons" color="#fff" style={{ fontSize: 30, marginTop: 8, marginLeft: 10, marginRight: 6 }}>whatshot</FontIcon>}
          iconElementRight={
            <div style={{ marginTop: 5 }}>
              
            </div>
          }
          style={{ position: 'fixed' }}
        />
        <div className="container">
          {children}
        </div>
      </div>
    );
  }
}

App.propTypes = {

};

export default connect()(App);