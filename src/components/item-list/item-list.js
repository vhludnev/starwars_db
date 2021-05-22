import React, { Component } from 'react';
//import { traverseTwoPhase } from 'react-dom/test-utils';
import Spinner from '../spinner/spinner';
//import SwapiService from '../../services/swapi-service';

import './item-list.css';

export default class ItemList extends Component {

//  swapiService = new SwapiService();

  state = {
    itemList: null
  };

  componentDidMount() {

    const { getData } = this.props;

    getData()
    //this.swapiService
    //  .getAllPeople()
      .then((itemList) => {
        this.setState({ 
          itemList
        });
      });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.renderItem(item)
      return (
        <li className="list-group-item" 
            key={id}
            onClick={() => this.props.onItemSelected(id)}>
            { label }
        </li>
      );
    });
  }

  render() {

    const { itemList } = this.state;

    if (!itemList) {
      return <span className="centered"><Spinner /></span>
    }

    return (
      <ul className="item-list list-group">
        { this.renderItems(itemList) }
      </ul>
    );
  }
}
