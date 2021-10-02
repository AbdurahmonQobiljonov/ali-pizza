import { combineReducers } from 'redux';

import filtersReduser from './filters';
import pizzasReduser from './pizzas';

const rootReducer = combineReducers({
  filters: filtersReduser,
  pizzas: pizzasReduser,
});
export default rootReducer;
