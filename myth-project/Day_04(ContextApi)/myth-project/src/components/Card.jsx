import React, { useContext } from 'react'
import '../assets/styles/card.scss'
import { FaPencilAlt,FaRegTrashAlt } from "react-icons/fa";
import DefaultGod from "../assets/img/random.jpeg"
import DataContext from '../context/DataContext';


const Card = ({item}) => {
  const {DeleteGod,search,setSelectedGod} = useContext(DataContext);
  return (

    (
      (item.mythGodName.toLowerCase().startsWith(search.toLowerCase()))
      ||
      (item.mythGodWeapon.toLowerCase().startsWith(search.toLowerCase()))
    )
    
    &&

    <div className="card-container">
      <div className='card'>
        <img src={item.mythGodPicture?item.mythGodPicture:DefaultGod} alt="profil" />
        <div className="card-text">
          <span>{item.mythGodName}</span>
          <span>Köken: {item.mythNation}</span>
          <span>Görev: {item.mythGodType}</span>
          <span>Silahı: {item.mythGodWeapon.length<=15 ? item.mythGodWeapon : item.mythGodWeapon.substring(0,item.mythGodWeapon.substring(0,15).lastIndexOf(" "))+"..."}</span>
          <span>
            Açıklaması: {item.mythGodDescription.substring(0,item.mythGodDescription.substring(0,70).lastIndexOf(" "))+"..."}
          </span>
        </div>
      </div>
      <button onClick={()=>DeleteGod(item.id)} className="delete"><FaRegTrashAlt className='icon' /></button>
      <button onClick={()=>setSelectedGod(item)} className="edit"><FaPencilAlt className='icon' /></button>
    </div>
  )
}

export default Card