import React from 'react'
import '../assets/styles/card.scss'
import { FaPencilAlt,FaRegTrashAlt } from "react-icons/fa";


const Card = ({item}) => {
  return (
    <div className="card-container">
      <div className='card'>
        <img src={item.mythGodPicture} alt="profil" />
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
      <button className="delete"><FaRegTrashAlt className='icon' /></button>
      <button className="edit"><FaPencilAlt className='icon' /></button>
    </div>
  )
}

export default Card