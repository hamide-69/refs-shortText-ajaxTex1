import React, {useState} from 'react';
import Refs from './Refs'

import Nav from './Nav'


 import NotFound from './NotFound'
import UserOutput from './UserOutput'
import UserInput from './UserInput'
import ValidationComponent from './ValidationComponent'
import CharComponent from './CharComponent'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import './App.css'


class App extends React.Component {

 constructor(){
    super()
   this.state = {
      username:'hamide' ,
      reshte:'' ,
      tool:''
   }
   this.EventHandler = this.EventHandler.bind();
 }
 


EventHandler = (e) => {
   this.setState({
     username: e.target.value 
   })
}


EventHandler2 = (e) => {
   this.setState({
     reshte: e.target.value 
   })
}
deleteCharHandler = (index) => {
   const text = this.state.reshte.split('');
   text.splice(index, 1);
   const updatedText = text.join('');
   this.setState({ reshte: updatedText });
}


render(){

       const charList = this.state.reshte.split('').map((ch, index) => {
         return <CharComponent
           character={ch}
           key={index}
           clicked={() => this.deleteCharHandler(index)} />
       });

   return(
      <Router className="container-fluid" >
      <div className='App row'>

<Nav  />
<div  className="col-md-9">
<switch >
 
<Route path="/refs" component={Refs}/>






</switch>



<div className="col-md-8 offset-md-2 part1-input">
<UserInput changed= {this.EventHandler}  currentName={this.state.username}/>
  
   <UserOutput username={this.state.username} />    
 <UserOutput  username = "mohsen"/>  

 <input  type="text"  name="reshte" value={this.state.reshte} onChange={this.EventHandler2} />
<div>   {this.state.reshte.length}</div>
<ValidationComponent  length={this.state.reshte.length} />
{charList}



{/* 

<CharComponent param = {Array.from(this.state.reshte)}/> */}


</div>
</div>
        </div> 
        </Router>

   )
}

}



export default App
