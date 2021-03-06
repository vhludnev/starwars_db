///// After assigning item's id to url's end /////
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ItemList from '../../item-list/item-list';
import ItemDetails, { Record } from '../../item-details/item-details';
import Row from '../../row';
import ErrorBoundry from '../../error-boundry';
import SwapiService from "../../../services/swapi-service";

import './starships-page.css';

class StarshipsPage extends Component {

  swapiService = new SwapiService();

  render() {

    const { getAllStarships, getStarship, getStarshipImage} = this.swapiService
    const { match, /* location, */ history } = this.props;
    const { id } = match.params;

    const itemList = (
      <ItemList 
        onItemSelected={(id) => history.push(id)}
        getData={getAllStarships} 
        renderItem={({name, length}) => `${name} (${length})`} />
    );
    const starshipDetails = (
      <ErrorBoundry>
        <ItemDetails 
          itemId={id ? id : 27}          /* max: 43 starships, but no pics */
          getData={getStarship}
          getImageUrl={getStarshipImage} >
            <Record field="model" label="Model" />
            <Record field="crew" label="Crew" />
            <Record field="costInCredits" label="Cost" />
        </ItemDetails>
      </ErrorBoundry>
    );

    return (
      <>
        <h2 className="text-center pt-2">Starships</h2>
        <Row leftEl={itemList} rightEl={starshipDetails} />
      </>
    );
  };
}

export default withRouter(StarshipsPage);