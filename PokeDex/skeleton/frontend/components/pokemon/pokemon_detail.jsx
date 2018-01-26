import React from 'react';
import ItemDetailContainer from '../items/item_detail_container';
import { Route } from 'react-router';
import PokemonDetailItem from './pokemon_detail_item';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.pokemonId !== this.props.match.params.pokemonId){
        this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }

  }

  render() {
    const { items, pokemon } = this.props;
    const currentPokemon = pokemon[this.props.match.params.pokemonId];
    const PokemonDetailItems = items.map(item => (<PokemonDetailItem key={item.id} currentPokemon={currentPokemon} item={item} />));

    if (currentPokemon) {
      return (
        <div>
          <ul>
            <li>{currentPokemon.name}</li>
            <li>{currentPokemon.poke_type}</li>
            <li>{currentPokemon.attack}</li>
            <li>{currentPokemon.defense}</li>
            <li>{currentPokemon.moves}</li>
          </ul>

        <ul>
          { PokemonDetailItems }
        </ul>
        <Route path={`/pokemon/${currentPokemon.id}/items/:itemId`} component={ItemDetailContainer}></Route>
        </div>
      );
    }

    return null;
  }
}

export default PokemonDetail;
