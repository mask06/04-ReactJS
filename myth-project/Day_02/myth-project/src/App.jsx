import React, { useState } from 'react'
import Navi from './components/Navi'
import Form from './components/Form'
import SearchBar from './components/SearchBar'
import CardList from './components/CardList'
import './assets/styles/index.css'
import { Gods } from './assets/data/data'

const App = () => {
  // useState : Önyüz ile ilgilidir. Component bazlı veri tutan yapılardır. Component için oluşturduğumuz depolardır.
  // const [stateIsmi,setStateIsmi] = useState(InitialValue);
  const [godList,setGodList] = useState(Gods);

  const AddNewGod = (newGod)=>{
    // setGodList([...godList,newGod]);
    //previous state ile state güncellemesi
    setGodList(prev=>[...prev,newGod]);
  }

  const DeleteGod = (id)=>{
    // setGodList(godList.filter(statenGelen=>statenGelen.id !== id));
    setGodList(prev=>prev.filter(statedenGelen=>statedenGelen.id !== id));
  }
  return (
    <>
      <Navi/>
      <Form AddNewGod={AddNewGod} mythGods={godList}/>
      <SearchBar/>
      <CardList mythGods={godList} DeleteGod={DeleteGod}/>
    </>
  )
}

export default App