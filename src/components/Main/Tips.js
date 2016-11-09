import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


const Tips = ({ isDialogOpened, handleClose }) => {
  const actions = [
    <FlatButton
      label="닫기"
      primary={true}
      onTouchTap={handleClose}
    />,
  ];

  return (
    <Dialog
      title="시위 꿀팁"
      actions={actions}
      open={isDialogOpened}
      modal={false}
      onRequestClose={handleClose}
      autoScrollBodyContent={true}
    >
      Put contents here
    </Dialog>
  );
}

Tips.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isDialogOpened: PropTypes.bool.isRequired,
};

export default Tips;