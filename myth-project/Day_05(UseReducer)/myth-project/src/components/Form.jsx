import React, { useContext } from 'react'
import '../assets/styles/form.scss'
import DataContext from '../context/DataContext'

const Form = () => {
  const {handleSubmit,state,dispatch } = useContext(DataContext);

  const {selectedGod,mythGodName,mythGodNation,mythGodType,mythGodAnimal,mythGodPicture,mythGodWeapon,mythGodDescription} = state

  return (
    <form onSubmit={handleSubmit}>
      <h3>{selectedGod?"Myth Düzenle":"Myth Ekle"}</h3>
      <input value={mythGodName} type="text" placeholder='Tanrı Adı' onChange={e=>dispatch({type:"GodName",payload:e.target.value})}/>
      <select value={mythGodNation} onChange={e=>dispatch({type:"GodNation",payload:e.target.value})}>
        <option>Köken Seçiniz</option>
        <option>Yunan</option>
        <option>Türk</option>
        <option>Kuzey</option>
        <option>Mısır</option>
        <option>Diğer</option>
      </select>
      <input value={mythGodType} type="text" placeholder='Görevi' onChange={e=>dispatch({type:"GodType",payload:e.target.value})}/>
      <input value={mythGodAnimal} type="text" placeholder='Hayvanı' onChange={e=>dispatch({type:"GodAnimal",payload:e.target.value})}/>
      <input value={mythGodPicture} type="url" placeholder='Resmi(url)' onChange={e=>dispatch({type:"GodPicture",payload:e.target.value})}/>
      <input value={mythGodWeapon} type="text" placeholder='Silahı' onChange={e=>dispatch({type:"GodWeapon",payload:e.target.value})}/>
      <textarea value={mythGodDescription} placeholder='Açıklaması' onChange={e=>dispatch({type:"GodDescription",payload:e.target.value})}></textarea>
      <input disabled={mythGodName === "" || mythGodNation === "Köken Seçiniz" || mythGodDescription === "" || mythGodAnimal === "" || mythGodWeapon === "" || mythGodType === ""} type="submit" value={selectedGod?"Düzenle":"Ekle"} />
    </form>
    
  )
}

export default Form