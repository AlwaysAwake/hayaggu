import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';


class App extends Component {
  render() {
    const { children, dispatch } = this.props;

    return (
      <div className="expand">
        <AppBar
          title={<span className="noto" style={{ cursor: 'pointer' }}>하야해! 하야꾸!</span>}
          onTitleTouchTap={() => dispatch(push('/'))}

          iconElementLeft={<FontIcon className="material-icons" color="#fff" style={{ fontSize: 30, marginTop: 8, marginLeft: 10, marginRight: 6 }}>whatshot</FontIcon>}
          iconElementRight={
            <div style={{ marginTop: 5 }}>
              <FlatButton label="집회 일정 보기" style={{ color: '#fff' }} onTouchTap={() => dispatch(push('/'))} />
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
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);