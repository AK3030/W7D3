import React from 'react';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;

    return (
      <div>
        <ul>
          <li>{item.name}</li>
          <li>Price: {item.price}</li>
          <li>Happiness: {item.happiness}</li>
        </ul>
      </div>
    );
  }
}

export default ItemDetail;
