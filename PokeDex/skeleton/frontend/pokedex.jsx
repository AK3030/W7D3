import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon, fetchSinglePokemon, createPokemon } from './util/api_util';
import { receiveAllPokemon, requestAllPokemon, requestSinglePokemon } from './actions/pokemon_actions';
import { configureStore } from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';
import { merge } from 'lodash';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  window.fetchSinglePokemon = fetchSinglePokemon;
  window.requestSinglePokemon = requestSinglePokemon;
  window.createPokemon = createPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.merge = merge;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
