/**
 * 1. syntax  
   const refName = useRef(initialValue);

     function focusInput() {
    // Current input element access karo
    inputRef.current.focus();
  }
    in return
    
    Ref connect kiya
    <input ref={inputRef} type="text" />

 */
import React ,{useState , useEffect, useRef } from 'react'


function UseRef(){

    // const [number, setnumber]=useState(0);  //by this method it wil render two time so we need to use useref
    
const ref= useRef(0);

    useEffect(()=>{
        console.log("button clicked")
    })

    function handlenum(){
        // ref.current++;
        // console.log(ref.current);
    }


    return(<>
<div>
    <h1>number :</h1>
    <button onClick={handlenum}>increase</button>
    <br />
    <input type="text" />
</div>
    </>);

}
export default UseRef