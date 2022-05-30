import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Body from "./components/Body";
import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';

function App() {

  const [data, setData] = useState({});

  useEffect(()=>{
    async function fetchData() {
      const res = await axios.get("data.json");
      // console.log(res);
      setData(res.data);
    }
    
    fetchData();
    // console.log(data)
  }, []);

  return (
    <div>
      
        <Header 
          city1={data[1] ? data[1].entries[0].city:""}
          city2={data[1] ? data[1].entries[1].city:""}
          city3={data[1] ? data[1].entries[2].city:""}
          city4={data[1] ? data[1].entries[3].city:""}
          min={data[1] ? data[1].entries[1].price:""}
          max={data[1] ? data[1].entries[3].price:""}
        />
        <Section 
          mapurl={data[1] ? data[1].entries[0].mapurl:""} 
        />
        <Body 
          img={data[1] ? data[1].entries[0].thumbnail:""}
          name={data[1] ? data[1].entries[0].hotelName:""}
          city={data[1] ? data[1].entries[0].city:""}
          rating={data[1] ? data[1].entries[0].ratings.no:""}
          ratingText={data[1] ? data[1].entries[0].ratings.text:""}
          price={data[1] ? data[1].entries[0].price:""}
        />
        <Section 
          mapurl={data[1] ? data[1].entries[1].mapurl:""} 
        />
        <Body 
          img={data[1] ? data[1].entries[1].thumbnail:""}
          name={data[1] ? data[1].entries[1].hotelName:""}
          city={data[1] ? data[1].entries[1].city:""}
          rating={data[1] ? data[1].entries[1].ratings.no:""}
          ratingText={data[1] ? data[1].entries[1].ratings.text:""}
          price={data[1] ? data[1].entries[1].price:""}
        />
        <Section 
          mapurl={data[1] ? data[1].entries[2].mapurl:""} 
        />
        <Body 
          img={data[1] ? data[1].entries[2].thumbnail:""}
          name={data[1] ? data[1].entries[2].hotelName:""}
          city={data[1] ? data[1].entries[2].city:""}
          rating={data[1] ? data[1].entries[2].ratings.no:""}
          ratingText={data[1] ? data[1].entries[2].ratings.text:""}
          price={data[1] ? data[1].entries[2].price:""}
        />
        <Section 
          mapurl={data[1] ? data[1].entries[3].mapurl:""} 
        />
        <Body 
          img={data[1] ? data[1].entries[3].thumbnail:""}
          name={data[1] ? data[1].entries[3].hotelName:""}
          city={data[1] ? data[1].entries[3].city:""}
          rating={data[1] ? data[1].entries[3].ratings.no:""}
          ratingText={data[1] ? data[1].entries[3].ratings.text:""}
          price={data[1] ? data[1].entries[3].price:""}
        />
   </div>
  );
}

export default App;
