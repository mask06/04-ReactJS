import React from 'react'
import Card from './Card'


const CardList = ({mythGods,DeleteGod,selectedCategory,search,setSelectedGod}) => {
  return (
    <div className='card-list'>
      {
        mythGods.map(item=>
          !item.isDeleted &&
          (
            (item.mythNation === selectedCategory || selectedCategory === "Tümü") &&
            <Card key={item.id} item={item} DeleteGod={DeleteGod} search={search} setSelectedGod={setSelectedGod} /> 
          )
        )
      }
          
    </div>
  )
}

export default CardList