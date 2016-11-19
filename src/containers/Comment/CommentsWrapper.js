import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';

import * as Actions from '../../actions/actions';
import { CommentList } from '../../components';


class CommentsWrapper extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(Actions.fetchComments());
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight && !this.props.isFetching && !this.props.noMoreComment) {
      this.props.dispatch(Actions.fetchComments());
    }
  }

  render() {
    const { comments, dispatch, isFetching, noMoreComment } = this.props;

    return (
      <div className="comments-container">
        <CommentList
          comments={comments}
          onWriteComment={({ content }) => dispatch(Actions.writeComment({ content }))}
        />
        {isFetching ? <div style={{ textAlign: 'center', margin: '20px auto' }}><CircularProgress size={60} /></div> : null}
        {noMoreComment ? <h6 style={{ textAlign: 'center' }}>더 이상 댓글이 없습니다.</h6> : null}
      </div>
    );
  }
}

CommentsWrapper.propTypes = {
  dispatch: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  noMoreComment: PropTypes.bool.isRequired,
};

export default connect(
  state => ({
    comments: state.comments.comments,
    noMoreComment: state.comments.noMoreComment,
    isFetching: state.common.isFetching,
  })
)(CommentsWrapper);