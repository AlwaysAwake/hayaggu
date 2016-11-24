import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import { cyan500 } from 'material-ui/styles/colors';

import * as Actions from './actions/actions';
import { Tips } from './components';

// iconElementLeft={<FontIcon className="material-icons" color="#fff" style={{ fontSize: 30, marginTop: 8, marginLeft: 10, marginRight: 6 }}>whatshot</FontIcon>}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpened: false,
    };
  }

  render() {
    const { children, dispatch } = this.props;
    const appBarButtonStyles = { color: '#fff' };

    return (
      <div className="expand">
        <AppBar
          title={<span className="noto" style={{ cursor: 'pointer' }}>하야해! 하야꾸!</span>}
          onTitleTouchTap={() => dispatch(push('/'))}
          onLeftIconButtonTouchTap={() => this.setState({ drawerOpened: !this.state.drawerOpened })}
          iconElementRight={
            <div className="appbar-button-wrapper" style={{ marginTop: 5 }}>
              <span className="report-email">집회 제보: koreastandupnow@gmail.com</span>
              <FlatButton label="써보그라" style={appBarButtonStyles} onTouchTap={() => dispatch(push('/comments'))} />
              <FlatButton label="보고가그라" style={appBarButtonStyles} onTouchTap={() => dispatch(push('/tips'))} />
              <FlatButton label="싸보그라" style={appBarButtonStyles} onTouchTap={() => dispatch(push('/toilet'))} />
            </div>
          }
          style={{ position: 'fixed', backgroundColor: cyan500 }}
        />
        <div className="container" onTouchTap={() => this.setState({ drawerOpened: false })}>
          {children}
        </div>
        <Drawer open={this.state.drawerOpened}>
          <MenuItem onTouchTap={() => this.setState({ drawerOpened: false })}>메뉴 닫기</MenuItem>
          <MenuItem onTouchTap={() => {
            this.setState({ drawerOpened: false });
            return dispatch(push('/'));
          }}>모이그라</MenuItem>
          <MenuItem onTouchTap={() => {
            this.setState({ drawerOpened: false });
            return dispatch(push('/comments'));
          }}>써보그라</MenuItem>
          <MenuItem onTouchTap={() => {
            this.setState({ drawerOpened: false });
            return dispatch(push('/tips'));
          }}>보고가그라</MenuItem>
          <MenuItem onTouchTap={() => {
            this.setState({ drawerOpened: false });
            return dispatch(push('/toilet'));
          }}>싸보그라</MenuItem>
        </Drawer>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);