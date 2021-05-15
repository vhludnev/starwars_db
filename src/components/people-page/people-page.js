import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import SwapiService from "../../services/swapi-service";

import './people-page.css';
//import ErrorButton from '../error-button';


export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 11,
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    const itemList = (
      <ItemList 
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople} 
            renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`} />
    );
    const personDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedPerson} />
      </ErrorBoundry>
    );

    return (
      <Row leftEl={itemList} rightEl={personDetails} />
    );
  }
}
