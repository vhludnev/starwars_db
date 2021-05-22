import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails, { Record } from '../item-details/item-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import SwapiService from "../../services/swapi-service";

import './planets-page.css';
//import ErrorButton from '../error-button';


export default class PlanetsPage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPlanet: 7
  };

  onPlanetSelected = (selectedPlanet) => {
    this.setState({ selectedPlanet });
  };

  render() {

    const { getAllPlanets, getPlanet, getPlanetImage} = this.swapiService

    const itemList = (
      <ItemList 
        onItemSelected={this.onPlanetSelected}
        getData={getAllPlanets} 
        renderItem={({name, terrain}) => `${name} (${terrain})`} />
    );
    const planetDetails = (
      <ErrorBoundry>
        <ItemDetails 
          itemId={this.state.selectedPlanet}
          getData={getPlanet}
          getImageUrl={getPlanetImage} >
            <Record field="population" label="Population" />
            <Record field="diameter" label="Diameter" />
            <Record field="climate" label="Climate" />
        </ItemDetails>
      </ErrorBoundry>
    );

    return (
      <Row leftEl={itemList} rightEl={planetDetails} />
    );
  }
}
