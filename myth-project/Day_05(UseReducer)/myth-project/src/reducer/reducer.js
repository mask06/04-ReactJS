//useReducer UseState alternatifidir.
//Context Api yapısı ile çok uyumlu çalışır.
//------
//useReducer terimleri Redux teknolojisine benzer.(state,dispatch,action)
//Redux-Redux Toolkit
//NextJS (ReactJS'in fullStack webFramework'ü.)
export const initialState = {
    godList:[],
    categories:[],
    selectedCategory:"Tümü",
    search:"",
    selectedGod:"",
    mythGodName:"",
    mythGodNation:"Köken Seçiniz",
    mythGodAnimal:"",
    mythGodWeapon:"",
    mythGodPicture:"",
    mythGodDescription:"",
    mythGodType:""
}

export const reducer = (state,action)=>{
    switch(action.type){
        //case-1
        case"getMythGods": return{
            ...state,
            godList:action.payload
        }
        //case-2
        case"getCategories": return{
            ...state,
            categories:action.payload
        }
        //case-3
        case"formReset": return{
            ...state,
            mythGodName:"",
            mythGodNation:"Köken Seçiniz",
            mythGodAnimal:"",
            mythGodWeapon:"",
            mythGodPicture:"",
            mythGodDescription:"",
            mythGodType:""
        }
        //case-4 (formdanGelenler)
        case"GodName": return{
            ...state,
            mythGodName: action.payload
        }
        //case-5 (formdanGelenler)
        case"GodNation": return{
            ...state,
            mythGodNation: action.payload
        }
        //case-6 (formdanGelenler)
        case"GodType": return{
            ...state,
            mythGodType: action.payload
        }
        //case-7 (formdanGelenler)
        case"GodAnimal": return{
            ...state,
            mythGodAnimal: action.payload
        }
        //case-8 (formdanGelenler)
        case"GodPicture": return{
            ...state,
            mythGodPicture: action.payload
        }
        //case-9 (formdanGelenler)
        case"GodWeapon": return{
            ...state,
            mythGodWeapon: action.payload
        }
        //case-10 (formdanGelenler)
        case"GodDescription": return{
            ...state,
            mythGodDescription: action.payload
        }
        //!case-11
        case"SelectedGod": 
        //projede herhangi bir card üzerindeki edit butonuna basıldığında seçilen tanrı state'i doldurulurken aynı zamanda da seçilen bilgilerin form aktarılması için form stateleri de doldurulabilir. böylelikle fazladan bir case yazılmadan ve contextdeki useeffect'e ihtiyac duyulmadan işlem gerçekleştirilir.
        const selected = action.payload
        return{
            ...state,
            selectedGod: selected,
            mythGodName:selected.mythGodName,
            mythGodNation:selected.mythNation,
            mythGodAnimal:selected.mythAnimal,
            mythGodWeapon:selected.mythGodWeapon,
            mythGodPicture:selected.mythGodPicture,
            mythGodDescription:selected.mythGodDescription,
            mythGodType:selected.mythGodType
        }
        //case-12
        case"selectedCategory": return{
            ...state,
            selectedCategory: action.payload
        }
        //case-13
        case"search": return{
            ...state,
            search:action.payload
        }
        //case-14
        case"AddGod": 
        const newGodList = [...state.godList,action.newGod];
        //state'i direk olarak action objesinden gelen newGod ile güncelleyemeyiz. çünkü bu durumda eski verileri silip sadece yeniyi ekler. Eskilerin üzerine ekleme işlemi yapılması için bu yöntem kullanılmıştır.
        return{
            ...state,
            godList: newGodList
        }
        //case-15
        case"DeleteGod":
        const updateGodList = state.godList.filter(item=>item.id !== action.id)
        return{
            ...state,
            godList: updateGodList
        }
        //case-16
        case"EditGod":
        const edittedGodList = state.godList.map(item=>{
            if(item.id === state.selectedGod.id){
                return{...action.newGod}
            }else{
                return{...item}
            }
        })
        return{
            ...state,
            selectedGod:"",
            godList:edittedGodList
        }

    }
}
