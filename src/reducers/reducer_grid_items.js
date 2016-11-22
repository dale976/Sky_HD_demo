// Reducer to fetch and parse the grid json data and save it as a redux state
import tiles from '../data/data.json';

export default function(state = null) {

    if (tiles) {
        return tiles;
    }

    return state;
}