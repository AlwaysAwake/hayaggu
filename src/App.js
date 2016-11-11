import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import { cyan500 } from 'material-ui/styles/colors';

import * as Actions from './actions/actions';
import { Tips } from './components';


class App extends Component {
  toggleDialog = () => {
    this.props.dispatch(Actions.toggleDialog());
  }

  render() {
    const { children, dispatch, isDialogOpened } = this.props;

    return (
      <div className="expand">
        <AppBar
          title={<span className="noto" style={{ cursor: 'pointer' }}>하야해! 하야꾸!</span>}
          onTitleTouchTap={() => dispatch(push('/'))}
          iconElementLeft={<FontIcon className="material-icons" color="#fff" style={{ fontSize: 30, marginTop: 8, marginLeft: 10, marginRight: 6 }}>whatshot</FontIcon>}
          iconElementRight={
            <div style={{ marginTop: 5 }}>
              <FlatButton label="시위 꿀팁" style={{ color: '#fff' }} onTouchTap={() => dispatch(Actions.toggleDialog())} />
            </div>
          }
          style={{ position: 'fixed', backgroundColor: cyan500 }}
        />
        <div className="container">
          {children}
        </div>
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