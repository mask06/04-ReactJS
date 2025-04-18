import React, { useEffect, useState } from 'react'
import Navi from './components/Navi'
import Form from './components/Form'
import SearchBar from './components/SearchBar'
import CardList from './components/CardList'
import './assets/styles/index.css'
import axios from 'axios'


const App = () => {
  const [godList,setGodList] = useState([]);
  const [categories,setCategories] = useState([]);
  const [selectedCategory,setSelectedCategory] = useState("Tümü");
  const [search, setSearch] = useState("");
  const [selectedGod,setSelectedGod] = useState("");


  const getMythGods = async()=>{
    const url = "http://localhost:3005/Gods";
    const response = await fetch(url);
    const gods = await response.json();
    // console.log(gods);
    setGodList(gods)
  }
  // getMythGods();//Hatalı sonsuz get döngüsüne sokar!

  const getCategories = async()=>{
    const url = "http://localhost:3005/Categories";
    const response = await axios.get(url);
    const categories = await response.data;
    setCategories(categories);
  }

  useEffect(()=>{
    getMythGods();
    getCategories();
  },[]);

  const AddNewGod = async(newGod)=>{
    let url = "http://localhost:3005/Gods";
    if(!selectedGod){//EKLEME
      //frontend Ekleme
      newGod.id = (Number(mythGods[mythGods.length-1].id)+1).toString();
      setGodList(prev=>[...prev,newGod]);
      //backend Ekleme
      const response = await axios.post(url,newGod);
      console.log("yeni Eklenen Tanrı:",response.data);
      //getMythGods();//gereksiz get atılmasına sebep olur!
    }
    else{//DUZENLEME
      //Frontend Düzenle
      newGod.id = selectedGod.id;
      setGodList(prev=>prev.map(god=>{
        if(god.id === selectedGod.id){
          //duzenlenen tanrı
          return {...newGod}
        }
        else{
          //diğer tanrı
          return {...god}
        }
      }))
      //Backend Düzenleme
      url+=`/${selectedGod.id}`
      const response2 = await axios.put(url,newGod);
      console.log("Düzenlenmis Tanrı:",response2.data);
      setSelectedGod("");
    }
  }

  const DeleteGod = async(id)=>{
    //frontend silme
    setGodList(prev=>prev.filter(statedenGelen=>statedenGelen.id !== id));
    //backend silme
    const url = `http://localhost:3005/Gods/${id}`;
    // const response = await axios.delete(url);//!!Tehlikeli
    const response = await axios.patch(url,{isDeleted:true});
    console.log("Silinen Tanrı:",response.data);
  }
  return (
    <>
      <Navi/>
      <Form AddNewGod={AddNewGod} mythGods={godList} selectedGod={selectedGod} />
      <SearchBar setSelectedCategory={setSelectedCategory} setSearch={setSearch} categories={categories}/>
      <CardList mythGods={godList} DeleteGod={DeleteGod} selectedCategory={selectedCategory} search={search} setSelectedGod={setSelectedGod} />
    </>
  )
}

export default App