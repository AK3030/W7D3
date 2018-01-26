import React from 'react';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      attack: 0,
      defense: 0,
      poke_type: "",
      moves: [],
      image_url: ""
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {

    return e => {
      let value = e.target.value;
      if (property === "moves") {
        value = e.target.value.split(" ");
      }
      return this.setState({ [property]: value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createNewPokemon({pokemon: this.state});
  }

  render() {
    const types = [
      'fire',
      'electric',
      'normal',
      'ghost',
      'psychic',
      'water',
      'bug',
      'dragon',
      'grass',
      'fighting',
      'ice',
      'flying',
      'poison',
      'ground',
      'rock',
      'steel'
    ];

    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <h1>Create a new Pokemon!</h1>

        <label>Name
          <input onChange={(e) => this.update("name")(e)} type="text" value={this.state.name}></input>
        </label>
        <label>attack
          <input onChange={(e) => this.update("attack")(e)} type="number" value={this.state.attack}></input>
        </label>
        <label>Defense
          <input onChange={(e) => this.update("defense")(e)} type="number" value={this.state.defense}></input>
        </label>
        <label>Poke Type
          <select onChange={(e) => this.update("poke_type")(e)}>
            { types.map((type) => <option key={type} value={type}>{type}</option>) }
          </select>
        </label>
        <label>Moves
          <input onChange={(e) => this.update("moves")(e)} type="text" value={this.state.moves.join(" ")}></input>
        </label>
        <label>Image Url
          <input onChange={(e) => this.update("image_url")(e)} type="text" value={this.state.image_url}></input>
        </label>

        <button>Create Pokemon!</button>
      </form>
    );
  }
}

export default PokemonForm;
