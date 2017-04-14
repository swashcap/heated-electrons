import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const initialItems = [{
  summary: 'One isolated electron, whirring through empty space all alone.',
  title: 'Hydrogen',
}, {
  summary: 'Twenty-four happy electrons, spread through this shiny element.',
  title: 'Chromium',
}];

// TODO: Move to separate module
const items = (state = initialItems, action) => state;

const rootReducer = combineReducers({
  items,
  routing,
});

export default rootReducer;
