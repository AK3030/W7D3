import PokemonDetail from './pokemon_detail';
import React from 'react';
import { connect } from 'react-redux';
import { selectAllPokemon, selectAllItems } from '../../reducers/selectors';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  pokemon: state.entities.pokemon,
  items: selectAllItems(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestSinglePokemon: (pokemonId) => (dispatch(requestSinglePokemon(pokemonId))),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonDetail));
