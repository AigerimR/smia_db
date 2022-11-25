import { useState } from 'react';
import classes from './SearchBar.module.scss';
import axios from "axios";

function SerachBar (props) {
  const [searchApi, setSearchApi] = useState('');

  const handleChange = (e) => {
    setSearchApi(e.target.value);
  }
  const handleCLick = async() => {
    const data = await props.data;
    if(searchApi===''){
      props.setFoundApis(data);
    }
    else{
      const foundData = data.filter(el=> el.API.toLowerCase().includes(searchApi.toLowerCase()))
      props.setFoundApis(foundData);
      axios.post("http://localhost:5000/createApi", {newApis: foundData});
    }
  }

  return (
    <div className={classes.main}>
      <input className={classes.search_input} onChange = {handleChange}></input>
      <button className={classes.search_btn} onClick = {handleCLick}>SEARCH</button>
    </div>
  );
}

export default SerachBar;
