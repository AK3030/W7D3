import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ItemDetail from './item_detail';
import { selectPokemonItem } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  item: selectPokemonItem(state, ownProps.match.params.itemId),
});


export default withRouter(connect(mapStateToProps, null)(ItemDetail));
