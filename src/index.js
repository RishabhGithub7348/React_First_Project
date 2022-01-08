import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import App from "./App";


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

ReactDOM.render(
<App />,
  document.getElementById('root') );


