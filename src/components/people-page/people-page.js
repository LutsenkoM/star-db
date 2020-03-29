import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import { withRouter } from 'react-router-dom'

import './people-page.css';
import SwapiService from "../../services/swapi-service";

// export default class PeoplePage extends Component {
//
//   swapiService = new SwapiService();
//
//   state = {
//     selectedPerson: 3,
//     hasError: false
//   };
//
//   componentDidCatch(error, info) {
//
//     this.setState({
//       hasError: true
//     });
//   }
//
//   onPersonSelected = (selectedPerson) => {
//     this.setState({ selectedPerson });
//   };
//
//   render() {
//
//     if (this.state.hasError) {
//       return <ErrorIndicator />;
//     }
//
//     const itemList = (
//       <ItemList
//         onItemSelected={this.onPersonSelected}
//         getData={this.swapiService.getAllPeople}
//         renderItem={(item) => `${item.name} (${item.gender}, ${item.birthYear})`}
//       />
//     );
//
//     const personDetails = (
//       <PersonDetails personId={this.state.selectedPerson} />
//     );
//
//     return (
//       <div className="row mb2">
//         <div className="col-md-12">
//           {itemList}
//         </div>
//         {/*<div className="col-md-6">*/}
//         {/*  {personDetails}*/}
//         {/*</div>*/}
//       </div>
//     );
//   }
// }

const PeoplePage = ({history}) => {
  return (
    <ItemList onItemSelected={(personId) => {
      const newPath = `/people/${personId}`;
      history.push(newPath)
    }} />
  )
};

export default withRouter(PeoplePage);
