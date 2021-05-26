import React, { Component } from 'react';

import Spinner from '../spinner/spinner';
//import ErrorButton from '../error-button/error-button';
import SwapiService from '../../services/swapi-service';

import './item-details.css';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{ item[field] }</span>
    </li>
  );
};
export { Record };

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null, 
    image: null,
    loading: true
  };

  componentDidMount() { this.updateItem(); }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImageUrl !== prevProps.getImageUrl) {
      this.setState({
        loading: true 
      });
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) { 
      return; 
    }

    getData(itemId)
      .then((item) => {
        this.setState({ 
          item,
          image: getImageUrl(item),
          loading: false });
      });
//      .catch(this.onError);
  }

  render() {
    const { item, image, loading } = this.state;
    if (item && loading) {
      return <span className="centered"><Spinner/></span>;
    }
    if (!item) {
      return <span className="centered">Select a item from a list</span>;
    }
      
    const { /* id, */ name/* , gender, birthYear, eyeColor */ } = item;

    return (
      <div className="item-details card">
        <img className="item-image"
             src={image} 
             alt={name} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })
            }

            {/* <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>  */}  

              {/* <span>
                <ErrorButton />
              </span> */}          
          </ul>
        </div>
      </div>
    )
  }
}
