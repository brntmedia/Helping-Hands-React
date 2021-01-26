import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='cards-h1'>We can handle any project</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../images/deck.jpg'
              text="We give free estimates so you're never caught off guard" 
              label='Affordable'
              path='/services'
            />
            <CardItem
              src='images/room.jpg'
              text='As a family buisness we understand the importance of trust'
              label='Reliable'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/wall.jpg'
              text="We build dynamic and unique projects"
              label='Experienced'
              path='/services'
            />
            <CardItem
              src='images/porch.jpg'
              text='We will work with you to ensure your vision'
              label='Courteous'
              path='/services'
            />
            <CardItem
              src='images/pool.jpg'
              text='We prioritize your projects and your home '
              label='Efficient'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;