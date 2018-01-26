import React from 'react';
import { Link } from 'react-router-dom';

const PokemonDetailItem = ({ item, currentPokemon }) => (
  <li ><Link to={`/pokemon/${currentPokemon.id}/items/${item.id}`}>{item.name}</Link></li>
);

export default PokemonDetailItem;
