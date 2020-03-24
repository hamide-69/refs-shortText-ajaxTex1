import React from 'react';
import Login from "./login";
 import Register from './register'
 
 


function SingIn(){
   return(
       <div className='container'>
       <div className='row'>
    <Login className="   col-md-4" />
    <Register className="   col-md-4" />
 
</div> 
</div>      

   )
}

 

export default SingIn
