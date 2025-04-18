import React from 'react'
import '../assets/styles/searchBar.scss'
import { categories } from '../assets/data/data'

const SearchBar = () => {
  return (
    <div  id='esb' className='searchbar'>
      <ul>
        {
          categories.map((item)=>
            <li key={item.id}>{item.categoryName}</li>
          )
        }
      </ul>
      <div className="searchbar-input">
        <input type="search" placeholder='Ara...' />
      </div>
    </div>
  )
}

export default SearchBar