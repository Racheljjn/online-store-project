import React from 'react'
import './collection-item.styles.scss'

const CollectionItem = ({ name, imageUrl, price, id }) => {
  return (
    <div className='collection-item' key={id}>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  )
}

export default CollectionItem
