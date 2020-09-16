import React from 'react'

function CharComponent(props){
    const navStyle ={
        display :'inline-block ',
        padding:'15px',
        margin:'15 px' ,
        textAlign:'center' ,
        border:'1px solid black' ,


    };

    return (
        <div style={navStyle}  onClick={props.clicked}>
            {props.character}
        </div>
    );
    }

   
 
export default CharComponent