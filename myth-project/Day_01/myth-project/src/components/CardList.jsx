import React from 'react'
import Card from './Card'
import { mythGods } from '../assets/data/data'

const CardList = () => {
  return (
    <div className='card-list'>
      {
        mythGods.map(item=>
            <Card key={item.id} item={item}/> 
        )
      }
          
    </div>
  )
}

export default CardList