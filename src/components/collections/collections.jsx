import React from 'react'
import './collections.styles.scss'
import CollectionItem from '../collection-items/collection-items'

const Collections = ({ title, items }) => {
  return (
    <div className='collection'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => {
            return index < 4
          })
          .map(({id,name,price,imageUrl}) => {
            return <CollectionItem  key={id}  name={name}  price={price} imageUrl={imageUrl}/>
          })}
      </div>
    </div>
  )
}

export default Collections
