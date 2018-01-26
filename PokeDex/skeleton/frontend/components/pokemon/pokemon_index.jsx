import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonFormContainer from './pokemon_form_container';
import { Route } from 'react-router';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    const pokemonItems = pokemon.map((poke) => <PokemonIndexItem key={poke.id} poke={poke}/>);

    if (pokemon) {
      return (
        <div>
          <Route exact path="/pokemon" component={PokemonFormContainer}></Route>
          <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer}></Route>
        <ul>
          {pokemonItems}
        </ul>
        </div>
      );
    }

    return null;
  }
}

export default PokemonIndex;
