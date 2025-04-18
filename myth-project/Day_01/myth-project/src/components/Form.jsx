import React from 'react'
import '../assets/styles/form.scss'

const Form = () => {
  return (
    <form>
      <h3>Myth Ekle</h3>
      <input type="text" placeholder='Tanrı Adı' />
      <select>
        <option>Köken Seçiniz</option>
        <option>Yunan</option>
        <option>Türk</option>
        <option>Kuzey</option>
        <option>Mısır</option>
        <option>Diğer</option>
      </select>
      <input type="text" placeholder='Görevi' />
      <input type="text" placeholder='Hayvanı' />
      <input type="url" placeholder='Resmi(url)' />
      <input type="text" placeholder='Silahı' />
      <textarea placeholder='Açıklaması'></textarea>
      <input type="submit" value={"Ekle"} />
    </form>
  )
}

export default Form