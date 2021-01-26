import React from 'react'
import DesItem from './DesItem';
import './ServDes.css';

function ServDes() {
    return (
      <div className='des'>
      <h1 className='des-h1'>We can handle any project</h1>
      <div className='des__container'>
        <div className='des__wrapper'>
          <ul className='des__items'>
            <DesItem
              src='../images/stairs.jpg'
              text="Decks"
              content="Mainteance and repair"
              content1="Custom instalation"
              content2="Stain and finish"
            />
            <DesItem
              src='../images/rail.jpg'
              text="Framing"
              content="test"
              content1="test1"
              content2="test2"
            />
            <DesItem
              src='../images/walk.jpg'
              text="Siding"
              content="test"
              content1="test1"
              content2="test2"
            />
          </ul>
          <ul className='des__items'>
            <DesItem
              src='../images/backyard.jpg'
              text="Design"
              content="test"
              content1="test1"
              content2="test2"
            />
            <DesItem
              src='../images/kitchen.jpg'
              text="Framing"
              content="test"
              content1="test1"
              content2="test2"
            />
            <DesItem
              src='../images/fence.jpg'
              text="Framing"
              content="test"
              content1="test1"
              content2="test2"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServDes
