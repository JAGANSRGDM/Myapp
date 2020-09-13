import React from 'react';
import './App.css';
import Data from './data/data.json';


class Profile extends React.Component{
render(){
var indexValue=this.props.location.data.id;
var specificProfile=Data.profiles[indexValue];
return(
<div>
<h2>{specificProfile.basicInfo.Name} </h2>
</div>)
}
}

export default Profile;



// export default class App extends React.Component{
//   render(){
//     var styles={
//         background:"blue",
//         color:"#fff",
//         padding:"1%"
//     }
//     let array=["jagan","ramu","krishnaveni","sj"];
//     let array1=["ramu","krishnaveni","jagan","RJ"]
//     return(
//       <div className='App'>
//         <h2 class="h5" style={styles}>Jagan Saragdan</h2>
//         {array.map((i,index)=>(
//           <Profile name={array[index]} bestfriend={array1[index]} key={index}/>
//         ))
//         }
//       </div>
//       );
//   }
//}
