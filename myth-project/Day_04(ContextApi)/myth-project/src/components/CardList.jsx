import React, { useContext } from 'react'
import Card from './Card'
import DataContext from '../context/DataContext'


const CardList = () => {
  const {godList,selectedCategory} = useContext(DataContext);
  return (
    <div className='card-list'>
      {
        godList.map(item=>
          !item.isDeleted &&
          (
            (item.mythNation === selectedCategory || selectedCategory === "Tümü") &&
            <Card key={item.id} item={item}/> 
          )
        )
      }
          
    </div>
  )
}

export default CardList