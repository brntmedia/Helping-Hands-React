import React from 'react'

class Image extends React.Component {
  render(props) {
    return (
       <img src={require({...props.src})}
       />
    );
  }
}

export default Image
