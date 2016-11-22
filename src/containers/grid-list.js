// framework
import React, { Component } from 'react';
import { connect } from 'react-redux';
// user actions
import { tileSelected } from '../actions/index';
import { bindActionCreators } from 'redux';
// style
import style from '../style/style.scss';

class GridList extends Component {
  constructor(props){
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  // Upon grid loading, focus the first item in the list
  componentDidMount() {
    for (let x in this.refs) {
      if (this.refs[x].value === 0) {
        this.refs[x].focus();
      }
    }
  }

  // handles the UL list navigation
  handleKeyPress(event) {
    const left = 37;
    const up = 38;
    const right = 39;
    const down = 40;

    const currIndex = event.target.value;

    // navigation modifiers
    let leftTargetIndex = currIndex - 1;
    let upTargetIndex = currIndex - 4;
    let rightTargetIndex = currIndex + 1;
    let downTargetIndex = currIndex + 4;

    switch(event.keyCode){
      case left:
        if (currIndex === 0) {
          leftTargetIndex = 3;
        } else if (currIndex === 4) {
          leftTargetIndex = 7;
        }
        event.preventDefault();
        this.focusItemAtIndex(leftTargetIndex);
        break;
      case up:
        if (currIndex <= 3) {
          upTargetIndex = currIndex;
        }
        event.preventDefault();
        this.focusItemAtIndex(upTargetIndex);
        break;
      case right:
        if (currIndex === 3) {
          rightTargetIndex = 0;
        } else if (currIndex === 7) {
          rightTargetIndex = 4;
        }
        event.preventDefault();
        this.focusItemAtIndex(rightTargetIndex);
        break;
      case down:
        if (currIndex >= 4) {
          downTargetIndex = currIndex;
        }
        event.preventDefault();
        this.focusItemAtIndex(downTargetIndex);
        break;
      default:
        console.log('some other key pressed');

    }
  }

  // Focus a grid item at a given index
  focusItemAtIndex(index){
    for (let x in this.refs) {
      if (this.refs[x].value === index) {
        this.refs[x].focus();
      }
    }
  }

  // renders a list item
  renderTileItem(tile, index){
    return(
      <li
        ref={index}
        tabIndex='0'
        value={index}
        key={tile.title}
        onKeyDown={this.handleKeyPress}
        onFocus={() => this.props.tileSelected(tile)}
        className="tile-items">
        <div className='tile-title'>{tile.title}</div>
      </li>
    );
  }

  render(){
      return(
        <div className="tile-container">
          <ul >
              {this.props.gridItems.tiles.map((tile, index) => {
                return(
                this.renderTileItem(tile, index)
              );
              })}
          </ul>
        </div>
      );
  }
}

function mapStateToProps({ gridItems }) {
  return {
    gridItems
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ tileSelected : tileSelected}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GridList);
