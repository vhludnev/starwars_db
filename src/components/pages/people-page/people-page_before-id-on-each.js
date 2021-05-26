import React, { Component } from 'react';

import ItemList from '../../item-list/item-list';
import ItemDetails, { Record } from '../../item-details/item-details';
import ErrorBoundry from '../../error-boundry';
import Row from '../../row';
import SwapiService from "../../../services/swapi-service";

import './people-page.css';
//import ErrorButton from '../error-button';


export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 11
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    const { getAllPeople, getPerson, getPersonImage} = this.swapiService

    const itemList = (
      <ItemList 
        onItemSelected={this.onPersonSelected}
        getData={getAllPeople} 
        renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`} />
    );
    const personDetails = (
      <ErrorBoundry>
        <ItemDetails 
          itemId={this.state.selectedPerson}
          getData={getPerson}
          getImageUrl={getPersonImage} >
          <Record field="gender" label="Gender" />
          <Record field="eyeColor" label="Eye Color" />
          <Record field="birthYear" label="Birth Year" />
        </ItemDetails>
      </ErrorBoundry>
    );

    return (
      <Row leftEl={itemList} rightEl={personDetails} />
    );
  }
}
