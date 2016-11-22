import React, { Component } from 'react';
import GridList from '../containers/grid-list';
import GridSynopsis from '../containers/grid-synopsis';
import VideoWindow from '../components/video-window';
import GridClock from '../components/grid-clock';

import style from '../style/style.scss';

export default class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <GridSynopsis />
        <VideoWindow />
        <GridClock />
        <GridList />
      </div>
    );
  }
}
