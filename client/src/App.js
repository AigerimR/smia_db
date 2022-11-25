import React, { useState } from 'react';
import classes from './App.module.scss';
import SerachBar from './SearchBar/SearchBar';
import CardsContainer from './CardsContainer/CardsContainer';


function App() {
  const [foundApis, setFoundApis] = useState();
  const getData = async () => {
    const api_url = 'http://localhost:5000';
    const response = await fetch(api_url);
    const data = await response.json();
    return data;
  };
  const data = getData();
  return (
    <div className={classes.App}>
      <h1>What are you searching for?</h1>
      <SerachBar data = {data} setFoundApis={setFoundApis}/>
      <CardsContainer data = {foundApis} />
    </div>
  );
}

export default App;
