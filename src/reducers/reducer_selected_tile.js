export default function(state=[], action){

  switch (action.type){
    case 'TILE_SELECTED':
      return action.payload;
  }

  return state;
}
