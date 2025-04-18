import React, { useState } from 'react'
import '../assets/styles/form.scss'

const Form = ({AddNewGod,mythGods}) => {
  const [mythGodName,setMythGodName] = useState("");
  const [mythGodNation,setMythGodNation] = useState("Köken Seçiniz");
  const [mythGodAnimal,setMythGodAnimal] = useState("");
  const [mythGodType,setMythGodType] = useState("");
  const [mythGodWeapon,setMythGodWeapon] = useState("");
  const [mythGodPicture,setMythGodPicture] = useState("");
  const [mythGodDescription,setMythGodDescription] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    AddNewGod({
        id: (Number(mythGods[mythGods.length-1].id)+1).toString(),
        mythGodName:mythGodName,
        mythNation: mythGodNation,
        mythAnimal: mythGodAnimal,
        mythGodType: mythGodType,
        mythGodPicture: mythGodPicture ,
        mythGodWeapon: mythGodWeapon,
        mythGodDescription: mythGodDescription
    });
    //form reset
    setMythGodName("");
    setMythGodNation("Köken Seçiniz");
    setMythGodAnimal("");
    setMythGodDescription("");
    setMythGodPicture("");
    setMythGodWeapon("");
    setMythGodType("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Myth Ekle</h3>
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
      <input disabled={mythGodName === "" || mythGodNation === "Köken Seçiniz" || mythGodDescription === "" || mythGodAnimal === "" || mythGodWeapon === "" || mythGodType === ""} type="submit" value={"Ekle"} />
    </form>
    
  )
}

export default Form