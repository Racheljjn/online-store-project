import React, { Component } from 'react'
import SHOP_DATA from './shopData'
import Collections from '../../components/collections/collections'

class Shop extends Component{
 constructor(){
  super()
  this.state={
   collections: SHOP_DATA 

  }
 }


 render(){
  const { collections } = this.state
  return (   
   <div>
    {

    collections.map(function ({title,items,id}) {
     
      return <Collections key={id} title={title} items={items}/>
    })

    }

   </div>
  )
 }
}

export default Shop;