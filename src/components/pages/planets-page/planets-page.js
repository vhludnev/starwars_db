///// After assigning item's id to url's end /////
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ItemList from '../../item-list/item-list';
import ItemDetails, { Record } from '../../item-details/item-details';
import ErrorBoundry from '../../error-boundry';
import Row from '../../row';
import SwapiService from "../../../services/swapi-service";

import './planets-page.css';

class PlanetsPage extends Component {

  swapiService = new SwapiService();

  render() {

    const { getAllPlanets, getPlanet, getPlanetImage} = this.swapiService
    const { match, /* location, */ history } = this.props;
    const { id } = match.params;

    const itemList = (
      <ItemList 
        onItemSelected={(id) => history.push(id)}
        getData={getAllPlanets} 
        renderItem={({name, terrain}) => `${name} (${terrain})`} />
    );
    const planetDetails = (
      <ErrorBoundry>
        <ItemDetails 
          itemId={id ? id : 7}          /* max: 60 planets, but no pics */
          getData={getPlanet}
          getImageUrl={getPlanetImage} >
            <Record field="population" label="Population" />
            <Record field="diameter" label="Diameter" />
            <Record field="climate" label="Climate" />
        </ItemDetails>
      </ErrorBoundry>
    );

    return (
      <>
        <h2 className="text-center pt-2">Planets</h2>
        <Row leftEl={itemList} rightEl={planetDetails} />
      </>
    );
  };
}

export default withRouter(PlanetsPage);