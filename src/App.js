import './App.css';
import BusinessList from '././components/BusinessList/BusinessList';
import {SearchBar, searchYelp} from '././components/SearchBar/SearchBar';
import React, {useState, useEffect} from 'react'


function App() {

  let [arr, setArr] = useState([]);

  async function getArr(term, location, sortBy){
    let newArr = await searchYelp(term,location,sortBy)
    setArr(()=>newArr)
    
  }

  return (
    <div className="App">
      <h1>ReddyMeals</h1>
      <SearchBar getArr={getArr} />
      <BusinessList businesses={arr}/>
    </div>
  );
}

export default App;
