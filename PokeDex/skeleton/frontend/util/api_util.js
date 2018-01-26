export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pokemon',
    dataType: 'json'
  })
);

export const fetchSinglePokemon = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/pokemon/${id}`,
    dataType: 'json'
  })
);

export const createPokemon = (pokemon) => (
  $.ajax({
    method: 'POST',
    url: `/api/pokemon`,
    dataType: 'json',
    data: pokemon
  })
);
