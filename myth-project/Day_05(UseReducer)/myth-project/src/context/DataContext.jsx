import axios from "axios";
import { createContext, useEffect, useReducer } from "react"
import { Flip, toast } from "react-toastify";
import { initialState, reducer } from "../reducer/reducer";


const DataContext = createContext();

export const DataProvider = ({children})=>{

const [state,dispatch] = useReducer(reducer,initialState);
const {selectedGod,godList} = state;

const getMythGods = async()=>{
  const url = "http://localhost:3005/Gods";
  const response = await fetch(url);
  const gods = await response.json();
  // setGodList(gods);
  //case-1
  dispatch({type:"getMythGods",payload:gods});
}

const getCategories = async()=>{
  const url = "http://localhost:3005/Categories";
  const response = await axios.get(url);
  const categories = await response.data;
  // setCategories(categories);
  //case-2
  dispatch({type:"getCategories",payload:categories})
}

const AddNewGod = async(newGod)=>{
  let url = "http://localhost:3005/Gods";
  if(!selectedGod){//EKLEME
    //frontend Ekleme
    newGod.id = (Number(godList[godList.length-1].id)+1).toString();
    // setGodList(prev=>[...prev,newGod]);
    //isim:isim X
    //isim 
    //case-14
    dispatch({type:"AddGod",newGod})
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
    // setGodList(prev=>prev.map(god=>{
    //   if(god.id === selectedGod.id){
    //     //duzenlenen tanrı
    //     return {...newGod}
    //   }
    //   else{
    //     //diğer tanrı
    //     return {...god}
    //   }
    // }))
    //case-16
    dispatch({type:"EditGod",newGod});
    //Backend Düzenleme
    url+=`/${selectedGod.id}`
    const response2 = await axios.put(url,newGod);
    console.log("Düzenlenmis Tanrı:",response2.data);
    // setSelectedGod("");
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
    // setGodList(prev=>prev.filter(statedenGelen=>statedenGelen.id !== id));
    //case-15
    dispatch({type:"DeleteGod",id})
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
      mythGodName:state.mythGodName,
      mythNation: state.mythGodNation,
      mythAnimal: state.mythGodAnimal,
      mythGodType: state.mythGodType,
      mythGodPicture: state.mythGodPicture ,
      mythGodWeapon: state.mythGodWeapon,
      mythGodDescription: state.mythGodDescription
  });
  //form reset
  // setMythGodName("");
  // setMythGodNation("Köken Seçiniz");
  // setMythGodAnimal("");
  // setMythGodDescription("");
  // setMythGodPicture("");
  // setMythGodWeapon("");
  // setMythGodType("");
  //case-3
  dispatch({type:"formReset"});
}

useEffect(()=>{
    getMythGods();
    getCategories();
  },[]);

//case-11'de burası için düzenleme yapıldı!
// useEffect(()=>{
//   if(selectedGod){
//     setMythGodName(selectedGod.mythGodName);
//     setMythGodNation(selectedGod.mythNation);
//     setMythGodAnimal(selectedGod.mythAnimal);
//     setMythGodDescription(selectedGod.mythGodDescription);
//     setMythGodPicture(selectedGod.mythGodPicture);
//     setMythGodWeapon(selectedGod.mythGodWeapon);
//     setMythGodType(selectedGod.mythGodType);
//   }
// },[selectedGod])


    return  <DataContext.Provider value={{
        DeleteGod,handleSubmit,state,dispatch
       }}>
                {children}
            </DataContext.Provider>
}


export default DataContext;