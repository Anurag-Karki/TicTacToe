import React from 'react'
import "./styles.css";

function Square({value,handleClick}) {
    // const [value,setVal]=useState(null);
    //    function handleClick()
    //     {
    //         // alert(`Button Clicked`);
    //         setVal('X');
    //     }
  return(
  
        <button
            className='btn'
            onClick={handleClick}
        >
        {value}
        </button>
        
)}

export default Square
