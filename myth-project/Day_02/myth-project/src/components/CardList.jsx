import React from 'react'
import Card from './Card'


const CardList = ({mythGods,DeleteGod}) => {
  return (
    <div className='card-list'>
      {
        mythGods.map(item=>
            <Card key={item.id} item={item} DeleteGod={DeleteGod}/> 
        )
      }
          
    </div>
  )
}

export default CardList