import React from 'react'


function DesItem(props) {
    return (
        <>
      <li className='des__item'>
        <div className='des__item__link' to={props.path}>
          <figure className='des__item__pic-wrap' >
          <img
              className='des__item__img'
              alt='gallery'
              src={props.src}
            />
          </figure>
          <div className='des__item__info'>
            <h5 className='des__item__text'>{props.text}</h5>
            <div className="des__item__p">
              <p className='des__item__content'>{props.content}</p>
              <p className='des__item__content'>{props.content1}</p>
              <p className='des__item__content'>{props.content2}</p>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default DesItem
