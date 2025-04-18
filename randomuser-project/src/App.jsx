import React, { useReducer } from 'react'
import Card from './Card'
import './App.css'
import { initialState, reducer } from './reducer/reducer'

const App = () => {
const [state,dispatch]= useReducer(reducer,initialState);
  const getRandomUser = async () => {
    try {
      // Başlangıç Durumu
      // setUser("");
      // setLoading(true);
      // setError("");
      dispatch({type:"START"});
      const url = "https://randomuser.me/api/";
      const response = await fetch(url);
      const user = await response.json();
      // OLumlu Durum
      // setUser(user.results[0]);
      // setLoading(false);
      // setError("");
      dispatch({type:"SUCCESS",payload:user.results[0]});
    } catch (error) {
      // Olumsuz durum
      // setUser("");
      // setLoading(false);
      // setError("hata");
      dispatch({type:"ERROR"})
    }
  }
  return (
    <>
      <Card getRandomUser={getRandomUser} state={state}/>
    </>
  )
}

export default App