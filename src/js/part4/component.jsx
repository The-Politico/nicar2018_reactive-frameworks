import { h, Component } from 'preact';

class ListItem extends Component {
  render (props) {
    return <li>{props.text}</li>;
  }
}

export default ListItem;
