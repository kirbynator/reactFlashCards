import React from 'react';
import { Card, Button } from "semantic-ui-react";

class Fcard extends React.Component {
  state = {flipped:false}

  flip = () => this.setState({ flipped: !this.state.flipped, });
  
render() {
  return (
  <Card >
    <Card.Content >
      <Card.Header onClick={() => {this.flip()}}>
        
       {this.state.flipped ? this.props.card.back : this.props.card.front} 
       
      </Card.Header>
      <div className='ui two buttons'>
          <Button basic color='yellow'>
            Edit
          </Button>
          <Button basic color='red' onClick={() => this.props.remove(this.props.card.id)}>
            Delete
          </Button>
        </div>
    </Card.Content>
  </Card>
  )}}

export default Fcard;