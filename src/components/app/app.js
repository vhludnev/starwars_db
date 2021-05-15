import React, { Component } from 'react';

import Header from '../header';
//import RandomPlanet from '../random-planet';
//import ItemList from '../item-list';
//import ErrorButton from '../error-button';
import ErrorBoundry from "../error-boundry";
import ItemDetails, { Record } from '../item-details/item-details';
//import PeoplePage from '../people-page';
import Row from '../row/row';
import SwapiService from '../../services/swapi-service';

import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {                      // alternative: this.setState(() => {
      return {
        showRandomPlanet: !state.showRandomPlanet   // alternative: showRandomPlanet: !this.state.showRandomPlanet 
      }
    });
  };


  render() {

//    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;
    const { getPerson, getPersonImage, getStarship, getStarshipImage } = this.swapiService;
    const personDetails = (
            <ItemDetails 
              itemId={11}
              getData={getPerson}
              getImageUrl={getPersonImage}>
                
              <Record field="gender" label="Gender" />
              <Record field="eyeColor" label="Eye Color" />
              <Record field="birthYear" label="Birth Year" />
            </ItemDetails>
    );
    const starshipDetails = (
            <ItemDetails 
              itemId={10}
              getData={getStarship}
              getImageUrl={getStarshipImage}>

              <Record field="model" label="Model" />
              <Record field="length" label="Length" />
              <Record field="costInCredits" label="Cost" />
            </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <div className="container stardb-app">
          <Header />
          {/* { planet }
          
          <div className="row mb2 button-row">
            <span>
            <button
              className="col toggle-planet btn btn-warning btn-lg"
              onClick={this.toggleRandomPlanet}>
              Toggle Random Planet
            </button>
            </span>
            <span>
              <ErrorButton />
            </span>
          </div> */}

          <Row 
            leftEl={personDetails}
            rightEl={starshipDetails} />


          {/* <PeoplePage />
          
          <Row 
            leftEl={
              <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPlanets}
                renderItem={(item) => (<span>{item.name} ({item.terrain}) <button>!</button></span>)} />}
            rightEl={
              <ItemDetails 
                itemId={this.state.selectedPerson} />} /> */}
{/* refactored: */}
          {/* <div className="row mb2">
            <div className="col-md-6">
              <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPlanets}
                renderItem={(item) => (<span>{item.name} ({item.terrain}) <button>!</button></span>)} />
            </div>
            <div className="col-md-6">
              <PersonDetails personId={this.state.selectedPerson} />
            </div>
          </div> */}

          {/* <Row 
            leftEl={
              <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllStarships} 
                renderItem={(item) => `${item.name} (length: ${item.length})`} />}
            rightEl={
              <ItemDetails 
                itemId={this.state.selectedPerson} />} /> */}

{/* refactored: */}
          {/* <div className="row mb2">
            <div className="col-md-6">
              <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllStarships} 
                renderItem={(item) => `${item.name} (length: ${item.length})`} />
            </div>
            <div className="col-md-6">
              <PersonDetails personId={this.state.selectedPerson} />
            </div>
          </div> */}
        </div>
      </ErrorBoundry>
    );
  }
}