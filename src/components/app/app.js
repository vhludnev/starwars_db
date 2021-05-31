import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import ErrorBoundry from "../error-boundry";
import PeoplePage from '../pages/people-page';
import PlanetsPage from '../pages/planets-page';
import StarshipsPage from '../pages/starships-page';

import {
  LoginPage,
  SecretPage } from '../pages';

import './app.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends Component {

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
    
    return (
      <ErrorBoundry>
        <Router>
          <div className="stardb-app">
            <Header isLoggedIn={isLoggedIn} />
            { planet }          
            <Switch>
              <Route exact path="/" render={() => <h2 className="text-center pt-2">Welcome to Starwars DB</h2>} />
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets/:id?" component={PlanetsPage} />
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
              <Route render={() => <h2 className="text-center pt-2">Page not found</h2>} />
            </Switch>
          </div>
        </Router>
      </ErrorBoundry>
    );
  }
}