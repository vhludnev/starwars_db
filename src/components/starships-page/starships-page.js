import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails, { Record } from '../item-details/item-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import SwapiService from "../../services/swapi-service";

import './starships-page.css';
//import ErrorButton from '../error-button';


export default class StarshipsPage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedStarship: 5
  };

  onStarshipSelected = (selectedStarship) => {
    this.setState({ selectedStarship });
  };

  render() {

    const { getAllStarships, getStarship, getStarshipImage} = this.swapiService

    const itemList = (
      <ItemList 
        onItemSelected={this.onStarshipSelected}
        getData={getAllStarships} 
        renderItem={({name, length}) => `${name} (${length})`} />
    );
    const starshipDetails = (
      <ErrorBoundry>
        <ItemDetails 
          itemId={this.state.selectedStarship}
          getData={getStarship}
          getImageUrl={getStarshipImage} >
            <Record field="model" label="Model" />
            <Record field="crew" label="Crew" />
            <Record field="costInCredits" label="Cost" />
        </ItemDetails>
      </ErrorBoundry>
    );

    return (
      <Row leftEl={itemList} rightEl={starshipDetails} />
    );
  }
}
