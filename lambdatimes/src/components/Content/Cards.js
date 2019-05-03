import React, { Component } from 'react';
import Card from './Card';

import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((c,i) => <Card key = {i} card = {c} />)}

    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: PropTypes.array.isRequired,

}

export default Cards;