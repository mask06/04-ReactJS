import axios from "axios";
import { createContext, useEffect, useState } from "react"
import { Flip, toast } from "react-toastify";

//Context oluşturulması
const DataContext = createContext();

//oluşturulan Context'e bir sağlayıcı oluşturulması
export const DataProvider = ({children})=>{
//Projedeki tüm yapılar, metotlar, stateler ...vs. buraya taşınacak!
//Stateler
//App.JSX'den gelenler
const [godList,setGodList] = useState([]);
const [categories,setCategories] = useState([]);
const [selectedCategory,setSelectedCategory] = useState("Tümü");
const [search, setSearch] = useState("");
const [selectedGod,setSelectedGod] = useState("");
//Form.jsx'den gelenler
const [mythGodName,setMythGodName] = useState("");
const [mythGodNation,setMythGodNation] = useState("Köken Seçiniz");
const [mythGodAnimal,setMythGodAnimal] = useState("");
const [mythGodType,setMythGodType] = useState("");
const [mythGodWeapon,setMythGodWeapon] = useState("");
const [mythGodPicture,setMythGodPicture] = useState("");
const [mythGodDescription,setMythGodDescription] = useState("");

const getMythGods = async()=>{
  const url = "http://localhost:3005/Gods";
  const response = await fetch(url);
  const gods = await response.json();
  // console.log(gods);
  setGodList(gods)
}

const getCategories = async()=>{
  const url = "http://localhost:3005/Categories";
  const response = await axios.get(url);
  const categories = await response.data;
  setCategories(categories);
}

const AddNewGod = async(newGod)=>{
  let url = "http://localhost:3005/Gods";
  if(!selectedGod){//EKLEME
    //frontend Ekleme
    newGod.id = (Number(godList[godList.length-1].id)+1).toString();
    setGodList(prev=>[...prev,newGod]);
    //backend Ekleme
    const response = await axios.post(url,newGod);
    console.log("yeni Eklenen Tanrı:",response.data);
    //Toast Message
    toast.success('Yeni Tanrı Eklendi!', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Flip,
      });
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
    //toast message
    toast.warn('Tanrının bilgileri güncellendi!', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Flip,
      });
  }
}

const DeleteGod = async(id)=>{
  const confirmation = confirm("Bu Tanrı kartını silmek istediğine emin misin?");
  if(confirmation){
    //frontend silme
    setGodList(prev=>prev.filter(statedenGelen=>statedenGelen.id !== id));
    //backend silme
    const url = `http://localhost:3005/Gods/${id}`;
    // const response = await axios.delete(url);//!!Tehlikeli
    const response = await axios.patch(url,{isDeleted:true});
    console.log("Silinen Tanrı:",response.data);
    //toast message
    toast.error('Tanrı Silindi!', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Flip,
      });
  }
}

const handleSubmit = (e)=>{
  e.preventDefault();
  AddNewGod({
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

useEffect(()=>{
    getMythGods();
    getCategories();
  },[]);

useEffect(()=>{
  if(selectedGod){
    setMythGodName(selectedGod.mythGodName);
    setMythGodNation(selectedGod.mythNation);
    setMythGodAnimal(selectedGod.mythAnimal);
    setMythGodDescription(selectedGod.mythGodDescription);
    setMythGodPicture(selectedGod.mythGodPicture);
    setMythGodWeapon(selectedGod.mythGodWeapon);
    setMythGodType(selectedGod.mythGodType);
  }
},[selectedGod])


    return  <DataContext.Provider value={{
        setSelectedCategory,setSearch,categories,//SearchBar'da kullanılanlar
        godList,selectedCategory,//CardList'te kullanılanlar
        DeleteGod,search,setSelectedGod,//Card'da kullanılanar
        selectedGod,handleSubmit,//Form'da kullanılanlar
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
    }}>
                {children}
            </DataContext.Provider>
}


export default DataContext;