import React, { useContext } from 'react'
import '../assets/styles/form.scss'
import DataContext from '../context/DataContext'

const Form = () => {
  const {
    selectedGod,handleSubmit,
    mythGodName,
    mythGodNation,
    mythGodType,
    mythGodAnimal,
    mythGodPicture,
    mythGodWeapon,
    mythGodDescription,
    setMythGodName,
    setMythGodNation,
    setMythGodType,
    setMythGodAnimal,
    setMythGodPicture,
    setMythGodWeapon,
    setMythGodDescription
  } = useContext(DataContext);

  return (
    <form onSubmit={handleSubmit}>
      <h3>{selectedGod?"Myth Düzenle":"Myth Ekle"}</h3>
      <input value={mythGodName} type="text" placeholder='Tanrı Adı' onChange={e=>setMythGodName(e.target.value)}/>
      <select value={mythGodNation} onChange={e=>setMythGodNation(e.target.value)}>
        <option>Köken Seçiniz</option>
        <option>Yunan</option>
        <option>Türk</option>
        <option>Kuzey</option>
        <option>Mısır</option>
        <option>Diğer</option>
      </select>
      <input value={mythGodType} type="text" placeholder='Görevi' onChange={e=>setMythGodType(e.target.value)}/>
      <input value={mythGodAnimal} type="text" placeholder='Hayvanı' onChange={e=>setMythGodAnimal(e.target.value)}/>
      <input value={mythGodPicture} type="url" placeholder='Resmi(url)' onChange={e=>setMythGodPicture(e.target.value)}/>
      <input value={mythGodWeapon} type="text" placeholder='Silahı' onChange={e=>setMythGodWeapon(e.target.value)}/>
      <textarea value={mythGodDescription} placeholder='Açıklaması' onChange={e=>setMythGodDescription(e.target.value)}></textarea>
      <input disabled={mythGodName === "" || mythGodNation === "Köken Seçiniz" || mythGodDescription === "" || mythGodAnimal === "" || mythGodWeapon === "" || mythGodType === ""} type="submit" value={selectedGod?"Düzenle":"Ekle"} />
    </form>
    
  )
}

export default Form