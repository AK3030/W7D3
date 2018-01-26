import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ poke }) => (
<li>
  <Link to={`/pokemon/${poke.id}`}>
    {poke.name}
    <img src={poke.image_url} height="50" width="50"></img>
  </Link>
  </li>
);

export default PokemonIndexItem;
