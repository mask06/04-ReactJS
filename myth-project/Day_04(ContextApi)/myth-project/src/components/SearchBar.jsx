import React, { useContext } from 'react'
import '../assets/styles/searchBar.scss'
import { GrInspect } from "react-icons/gr";
import DataContext from '../context/DataContext';

const SearchBar = () => {
  const {setSelectedCategory,setSearch,categories} = useContext(DataContext);
  return (
    <div  id='esb' className='searchbar'>
      <ul>
        {
          categories.map((item)=>
            <li onClick={e=>setSelectedCategory(e.target.innerText)} key={item.id}>
              {item.categoryName}
            </li>
          )
        }
      </ul>
      <div className="searchbar-input">
        <input onChange={e=>setSearch(e.target.value)} type="text" placeholder='Ara...' />
        <GrInspect className='search-icon'/>
      </div>
    </div>
  )
}

export default SearchBar