import React from "react";
import Card from "./Cards";
import Sdata from './Sdata';

const ncard = (val) => {
    return(
       <Card
       key={val.id} 
       imgsrc= {val.imgscr}
       title={val.title}
       sname = {val.sname}
       link={val.link}
        />
    );
} 

const App = () => {
  return(
    <>
    <h1 className="heading_style">List of top 5 Netflix Series</h1>
     {Sdata.map(ncard)};
    </>
  );
}
export default App;


