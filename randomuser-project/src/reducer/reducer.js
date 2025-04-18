export const initialState = {
    user: "",
    loading: false,
    error: ""
}
export const reducer = (state, action) => {
    switch (action.type) {
        case "START": return {
            ...state,
            loading: "true",
        }
        case "SUCCESS" : return{
            ...state,
            user:action.payload,
            loading:false,
        }
        case "ERROR": return{
            ...state,
            loading:false,
            error:"HATAAAA!!!!!"
        }
    }
}