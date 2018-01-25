import React from 'react';

const PokemonIndexItem = ({ poke }) => (
<li>
  {poke.name}
  <img src={poke.image_url} height="50" width="50"></img>
  </li>
);

export default PokemonIndexItem;
