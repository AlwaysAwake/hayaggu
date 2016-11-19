import React, { PropTypes, Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { convertKoreanFormat } from '../../utils/time';


class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  onWriteComment() {
    if (this.state.content.length > 255) {
      alert("댓글의 길이가 너무 깁니다.");
      return;
    }
    if (this.state.content !== '') {
      this.props.onWriteComment({ content: this.state.content });
      this.setState({ content: '' });
    }
  }

  onPressEnterComment(e) {
    if (this.state.content !== '' && e.keyCode === 13) {
      if (this.state.content.length > 255) {
        alert("댓글의 길이가 너무 깁니다.");
        return;
      }
      this.props.onWriteComment({ content: this.state.content });
      this.setState({ content: '' });
    }
  }

  render() {
    const buttonStyles = {
      float: 'right',
      marginTop: 12,
    };

    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-phone">
          <TextField
            floatingLabelText="댓글을 작성해주세요"
            onKeyUp={e => this.onPressEnterComment(e)}
            onChange={e => this.setState({ content: e.target.value })}
            style={{ width: '100%', display: 'inline-block' }}
            value={this.state.content}
          />
          <RaisedButton
            label="댓글 작성"
            onTouchTap={() => this.onWriteComment()}
            secondary={true}
            style={buttonStyles}
          />
        </div>
        <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-phone" style={{ maxWidth: '1010px' }}>
          <h4 className="noto">댓글 목록</h4>
          {this.props.comments.length > 0
            ? (
              <Paper zDepth={2} style={{ paddingTop: 1 }}>
                {
                  this.props.comments.map((comment, idx) => {
                    return (
                      <div style={{ overflow: 'auto' }} key={idx}>
                        <div className="comment-content">
                          <h6 className="noto dont-break-out">{comment.content}</h6>
                        </div>
                        <div className="comment-date">
                          <h6 className="noto dont-break-out">{convertKoreanFormat(comment.cdate)}</h6>
                        </div>
                        <Divider />
                      </div>
                    );
                  })
                }
              </Paper>
            ) : <h6>아직 댓글이 없습니다. 첫 번째 댓글을 작성해보세요.</h6>
          }
        </div>
      </div>
    );
  }
}

CommentList.propTypes = {
  onWriteComment: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
};

export default CommentList;