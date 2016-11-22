import { combineReducers } from 'redux';
import GridRedcuer from './reducer_grid_items';
import SelectedTile from './reducer_selected_tile';

const rootReducer = combineReducers({
  gridItems: GridRedcuer,
  selectedTile: SelectedTile
});

export default rootReducer;
