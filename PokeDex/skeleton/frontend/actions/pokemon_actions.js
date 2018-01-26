import { fetchAllPokemon, fetchSinglePokemon, createPokemon } from '../util/api_util';


export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";


export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => (dispatch) => (
  fetchAllPokemon()
    .then((pokemon) => dispatch(receiveAllPokemon(pokemon)))
);

export const receiveSinglePokemon = payload => ({
  type: RECEIVE_SINGLE_POKEMON,
  payload
});

export const requestSinglePokemon = (pokemonId) => (dispatch) => (
  fetchSinglePokemon(pokemonId)
    .then((pokemon) => dispatch(receiveSinglePokemon(pokemon)))
);

export const createNewPokemon = (pokemon) => (dispatch) => (
  createPokemon(pokemon)
    .then((newPoke) => dispatch(receiveSinglePokemon(newPoke)))
);
