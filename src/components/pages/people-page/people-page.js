// import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';

// import ItemList from '../item-list/item-list';
// import ItemDetails, { Record } from '../item-details/item-details';
// import ErrorBoundry from '../error-boundry';
// import Row from '../row';
// import SwapiService from "../../services/swapi-service";

// import './people-page.css';
// //import ErrorButton from '../error-button';


// export default class PeoplePage extends Component {

//   swapiService = new SwapiService();

//   state = {
//     selectedPerson: 11
//   };

//   onPersonSelected = (selectedPerson) => {
//     this.setState({ selectedPerson });
//   };

//   render() {

//     const { getAllPeople, getPerson, getPersonImage} = this.swapiService
//     const { history, match } = this.props
    
//     const itemList = (
//       <ItemList 
//         onItemSelected={this.onPersonSelected}
//         getData={getAllPeople} 
//         renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`} />
//     );
//     const personDetails = (
//       <ErrorBoundry>
//         <ItemDetails 
//           itemId={this.state.selectedPerson}
//           getData={getPerson}
//           getImageUrl={getPersonImage} >
//           <Record field="gender" label="Gender" />
//           <Record field="eyeColor" label="Eye Color" />
//           <Record field="birthYear" label="Birth Year" />
//         </ItemDetails>
//       </ErrorBoundry>
//     );

//     return (
//       <Row leftEl={itemList} rightEl={personDetails} />
//     );
//   }
// }

///// After assigning item's id to url's end /////
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
//import PropTypes from "prop-types";

import ItemList from '../../item-list/item-list';
import ItemDetails, { Record } from '../../item-details/item-details';
import Row from '../../row';
import ErrorBoundry from '../../error-boundry';
import SwapiService from "../../../services/swapi-service";

import './people-page.css';

class PeoplePage extends Component {

  // static propTypes = {
  //   match: PropTypes.object.isRequired,
  //   location: PropTypes.object.isRequired,
  //   history: PropTypes.object.isRequired
  // };

  swapiService = new SwapiService();

  render() {
    const { getAllPeople, getPerson, getPersonImage} = this.swapiService
    const { match, /* location, */ history } = this.props;
    const { id } = match.params;

    const itemList = (
      <ItemList 
        onItemSelected={(id) => history.push(id)}
        getData={getAllPeople} 
        renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`} />
    );
    const personDetails = (
      <ErrorBoundry>
        <ItemDetails 
          itemId={id ? id : 11} /* max: 83 people, use: "Math.floor(Math.random() * 83 + 1)" */
          getData={getPerson}
          getImageUrl={getPersonImage} >
          <Record field="gender" label="Gender" />
          <Record field="eyeColor" label="Eye Color" />
          <Record field="birthYear" label="Birth Year" />
        </ItemDetails>
      </ErrorBoundry>
    );

    return (
      <>
        <h2 className="text-center pt-2">People</h2>
        <Row leftEl={itemList} rightEl={personDetails} />
      </>
    );
  };
}

export default withRouter(PeoplePage);