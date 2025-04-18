import React from 'react'
import '../assets/styles/searchBar.scss'

const SearchBar = () => {
  return (
    <div className='searchbar'>
      <ul>
        <li>Yunan</li>
        <li>Türk</li>
        <li>Kuzey</li>
        <li>Mısır</li>
        <li>Diğer</li>
      </ul>
      <div className="searchbar-input">
        <input type="search" placeholder='Ara...' />
      </div>
    </div>
  )
}

export default SearchBar