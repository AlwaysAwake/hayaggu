import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import * as Actions from '../../actions/actions';

const maximumCatchwordLength = 20;

const requestFullScreen = () => {
  const docElm = document.documentElement;
  if (docElm.requestFullscreen) {
    docElm.requestFullscreen();
  } else if (docElm.mozRequestFullScreen) {
    docElm.mozRequestFullScreen();
  } else if (docElm.webkitRequestFullScreen) {
    docElm.webkitRequestFullScreen();
  } else if (docElm.msRequestFullscreen) {
    docElm.msRequestFullscreen();
  }
}


class Blinker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catchwordText: '',
      blinkerOpened: false,
    };
  }

  componentDidMount() {
    this.props.dispatch(Actions.fetchCatchwords());
  }

  onClickGoBlinker() {
    if (this.state.catchwordText.length > maximumCatchwordLength) {
      alert(`${maximumCatchwordLength}글자 내로 함축적으로 요약해보세요! 당신의 센스를 기대합니다^^`);
    } else {
      this.setState({ blinkerOpened: true });
      this.props.dispatch(Actions.addCatchwordCount({ content: this.state.catchwordText }));
      requestFullScreen();
    }
  }

  render() {
    const { catchwords } = this.props;
    const buttonStyles = {
      float: 'right',
      marginTop: 12,
    };

    return (
      <div className="blinker-container">
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-phone">
            <TextField
              floatingLabelText={`전광판에 띄울 문구를 작성해주세요. (${maximumCatchwordLength}자 이내)`}
              onChange={e => this.setState({ catchwordText: e.target.value })}
              style={{ width: '100%', display: 'inline-block' }}
              value={this.state.catchwordText}
            />
            {`${this.state.catchwordText.length}자 / ${maximumCatchwordLength}자`}
            <RaisedButton
              label="전광판 띄우기"
              onTouchTap={() => this.onClickGoBlinker()}
              secondary={true}
              style={buttonStyles}
            />
          </div>
          <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-phone">
            <Table
              onRowSelection={cws => this.setState({ catchwordText: catchwords[cws].content })}
              multiSelectable={false}
            >
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>순위</TableHeaderColumn>
                  <TableHeaderColumn>문구</TableHeaderColumn>
                  <TableHeaderColumn>채택 횟수</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {
                  catchwords.map((catchword, idx) => {
                    return (
                      <TableRow key={idx}>
                        <TableRowColumn>{`${idx + 1}위`}</TableRowColumn>
                        <TableRowColumn>{catchword.content}</TableRowColumn>
                        <TableRowColumn>{`${catchword.count}회`}</TableRowColumn>
                      </TableRow>
                    );
                  })
                }
              </TableBody>
            </Table>          
          </div>
        </div>
        <div id="blinker" className={this.state.blinkerOpened ? 'active' : ''}>
          <span>{this.state.catchwordText}</span>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    catchwords: state.catchwords,
  })
)(Blinker);