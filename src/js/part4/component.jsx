import React from 'react';

class ListItem extends React.Component {
  render () {
    return (<li>{this.props.text}</li>);
  }
}

export default ListItem;
