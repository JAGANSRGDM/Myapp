import React from 'react';
import './App.css';
import Data from './data/data.json';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Profile from './profile';

var App=()=>{
return(
<BrowserRouter>
<Route exact path="/" component={Home} />
<Route exact path="/Profile" component={Profile} />
</BrowserRouter>
);
}

let Home=()=>{
var info=Data.profiles;
  return(
    <section className="parent">
    {info.map((i,index)=>(
      <article key={index} className="child">
        <h2>{i.basicInfo.Name}</h2>
        <h2 class="h3">{i.basicInfo.Role}</h2>
        <a href={"mailto:"+i.basicInfo.Email}>{i.basicInfo.Email}</a><br/>
        <a href={"tel:"+i.basicInfo.Mobile}>{i.basicInfo.Mobile}</a><br/>
        <Link to={{pathname:"/profile",data:{id:index}}}>Viewprofile >></Link>
      </article>
      ))
    }
    </section>);
}
export default App;
//tell for mobile users









