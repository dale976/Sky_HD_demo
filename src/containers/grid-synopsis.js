import React, { Component} from 'react';
import { connect } from 'react-redux';
import style from '../style/style.scss';

class GridSynopsis extends Component {
  render(){
    const synopsisText = this.props.selectedTile ? this.props.selectedTile.synopsis : '';

    return(
      <div className='grid-synopsis'>
        <h3>{synopsisText}</h3>
      </div>
    );
  }
}

function mapStateToProps({ selectedTile }){
  return {
    selectedTile
  };
}

export default connect(mapStateToProps)(GridSynopsis);
