import React, { Component } from 'react';
import './App.css';
import FCards from './FCards'
import CardForm from './CardForm'
import { Card, Container, Header } from "semantic-ui-react";

class App extends Component {
  state = {
    cards:[
      { id: 1, front: "red", back: "yes"},
      { id: 2, front: "yellow", back: "maybe"},
      { id: 3, front: "blue", back: "no"},
    ],
  };

  getId = () => Math.floor((1 + Math.random()) * 10000);

  addCard = (cardData) => {
    let card = { id: this.getId(), ...cardData, };
    this.setState({ cards: [...this.state.cards, card], });
  }

  removeCard = (id) => {
    const cards = this.state.cards.filter( card => {
      if (card.id !== id)
        return card
    });
    this.setState({ cards, });
  }


  render() {
    return (
      <Container>
        <Header>
          Death
          </Header>      
          <CardForm addCard={this.addCard} />
        <Card.Group>
        <FCards  cards={this.state.cards} remove={this.removeCard} />
      </Card.Group>
      </Container>
    );
  }
}

export default App;
