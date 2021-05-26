import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
//import ErrorButton from '../error-button';
import ErrorBoundry from "../error-boundry";
import PeoplePage from '../pages/people-page';
import PlanetsPage from '../pages/planets-page';
import StarshipsPage from '../pages/starships-page';
//import SwapiService from '../../services/swapi-service';
import {
  // PeoplePage,
  // PlanetsPage,
  // StarshipsPage,
  // PageNotFound,
  LoginPage,
  SecretPage } from '../pages';

import './app.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends Component {

//  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    isLoggedIn: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {                      // alternative: this.setState(() => {
      return {
        showRandomPlanet: !state.showRandomPlanet   // alternative: showRandomPlanet: !this.state.showRandomPlanet 
      }
    });
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  render() {

    const { showRandomPlanet, isLoggedIn } = this.state;

    const planet = showRandomPlanet ? <RandomPlanet /* updateInterval={2000} */ /> : null;
    // const { getPerson, getPersonImage, getStarship, getStarshipImage, getPlanet, getPlanetImage } = this.swapiService;
    // const personDetails = (
    //         <ItemDetails 
    //           itemId={11}
    //           getData={getPerson}
    //           getImageUrl={getPersonImage}>
                
    //           <Record field="gender" label="Gender" />
    //           <Record field="eyeColor" label="Eye Color" />
    //           <Record field="birthYear" label="Birth Year" />
    //         </ItemDetails>
    // );
    // const starshipDetails = (
    //         <ItemDetails 
    //           itemId={10}
    //           getData={getStarship}
    //           getImageUrl={getStarshipImage}>

    //           <Record field="model" label="Model" />
    //           <Record field="length" label="Length" />
    //           <Record field="costInCredits" label="Cost" />
    //         </ItemDetails>
    // );

    // const planetDetails = (
    //         <ItemDetails 
    //           itemId={10}
    //           getData={getPlanet}
    //           getImageUrl={getPlanetImage}>

    //           <Record field="population" label="Population" />
    //           <Record field="diameter" label="Diameter" />
    //           <Record field="climate" label="Climate" />
    //         </ItemDetails>
    // );

    return (
      <ErrorBoundry>
        <Router>
          <div className="stardb-app">
            <Header />
            { planet }
            
          {/*  <div className="row mb2 button-row">
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
            <Switch>
              <Route exact path="/" render={() => <h2 className="text-center pt-2">Welcome to Starwars DB</h2>} />

              {/* <Route exact path="/people" render={() => <h2 className="text-center pt-2">People</h2>} /> */}
              <Route path="/people/:id?" component={PeoplePage} />

              {/* <Route exact path="/planets" render={() => <h2 className="text-center pt-2">Planets</h2>} /> */}
              <Route path="/planets/:id?" component={PlanetsPage} />

              {/* <Route exact path="/starships" render={() => <h2 className="text-center pt-2">Starships</h2>} /> */}
              <Route path="/starships/:id?" component={StarshipsPage} />

              <Route
                path="/login"
                render={() => (
                  <LoginPage
                    isLoggedIn={isLoggedIn}
                    onLogin={this.onLogin}/>
                )}/>

              <Route
                path="/secret"
                render={() => (
                  <SecretPage isLoggedIn={isLoggedIn} />
                )}/>
              {/* <Route component={PageNotFound}/> */}
              <Route render={() => <h2 className="text-center pt-2">Page not found</h2>} />
            </Switch>
        {/* <PeoplePage />
            <PlanetsPage />
            <StarshipsPage /> */}


            {/* <Row 
              leftEl={
                <ItemList
                  onItemSelected={this.onPersonSelected}
                  getData={this.swapiService.getAllPeople}
                  renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`} 
                  />}
              rightEl={personDetails} /> */}

            {/* <Row 
              leftEl={starshipDetails}
              rightEl={planetDetails} /> */}
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
        </Router>
      </ErrorBoundry>
    );
  }
}