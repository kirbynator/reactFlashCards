import React from 'react';
import Fcard from './Fcard';


const FCards = ({cards, remove}) => (
<div> {
cards.map( card =>(
  <Fcard key={card.id} card={{...card}} remove={remove}/>
  ))}
</div>
  

);



export default FCards;