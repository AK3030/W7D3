import {connect} from 'react-redux';
import React from 'react';
import { createNewPokemon } from '../../actions/pokemon_actions';
import PokemonForm from './pokemon_form';

const mapDispatchToProps = (dispatch) => ({
  createNewPokemon: (pokemon) => dispatch(createNewPokemon(pokemon))
});

export default connect(null, mapDispatchToProps)(PokemonForm);
