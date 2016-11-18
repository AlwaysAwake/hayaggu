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

  toggleDialog = () => {
    this.props.dispatch(Actions.toggleDialog());
  }

  render() {
    const { children, dispatch, isDialogOpened } = this.props;
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
              <FlatButton label="집회 목록" style={appBarButtonStyles} onTouchTap={() => dispatch(push('/'))} />
              <FlatButton label="시위 꿀팁" style={appBarButtonStyles} onTouchTap={() => dispatch(Actions.toggleDialog())} />
              <FlatButton label="화장실 위치" style={appBarButtonStyles} onTouchTap={() => dispatch(push('/toilet'))} />
            </div>
          }
          style={{ position: 'fixed', backgroundColor: cyan500 }}
        />
        <div className="container" onTouchTap={() => this.setState({ drawerOpened: false })}>
          {children}
        </div>
        <Drawer open={this.state.drawerOpened}>
          <MenuItem onTouchTap={() => {
            this.setState({ drawerOpened: false });
            return dispatch(push('/'));
          }}>집회 목록</MenuItem>
          <MenuItem onTouchTap={() => {
            this.setState({ drawerOpened: false });
            return dispatch(Actions.toggleDialog());
          }}>시위 꿀팁</MenuItem>
          <MenuItem onTouchTap={() => {
            this.setState({ drawerOpened: false });
            return dispatch(push('/toilet'));
          }}>화장실 위치</MenuItem>
        </Drawer>
        <Tips isDialogOpened={isDialogOpened} handleClose={this.toggleDialog} />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isDialogOpened: PropTypes.bool.isRequired,
};

export default connect(
  state => ({
    isDialogOpened: state.common.isDialogOpened,
  })
)(App);