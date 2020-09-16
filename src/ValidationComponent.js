import React from 'react'

function ValidationComponent(props){


    if (props.length < 5 ) { 
           return (
            <div>
            <h1>«text too short» </h1>
      </div>
       
           )
       
    } 
     return (   
           <div> <h1>«text long enough» </h1></div>
        )
    
    }

   
 
export default ValidationComponent