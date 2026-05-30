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
..................
Value change
   ↓
NO re-render
 agar ui me change chaiye to Usestate use jrna chaiye 
agar dom me change chaiye to Useref use jrna chaiye


koi bhi operation krne pe page dubara rendr nhi hoga bs values store honge
*/


import React ,{useState , useEffect, useRef } from 'react'


function UseRef(){

    // const [number, setnumber]=useState(0);  //by this method it wil render two time so we need to use useref
    
const inputref1= useRef(null);
const inputref2= useRef(null);
const inputref3= useRef(null);

    useEffect(()=>{
        console.log("button clicked")
    })

    function handlenum(){
        // ref.current++;
        // console.log(ref.current);

        inputref1.current.focus();
        inputref1.current.style.backgroundColor="red";

        inputref2.current.style.backgroundColor="";
        inputref3.current.style.backgroundColor="";
    }

    function click2(){
        inputref2.current.focus();
        inputref2.current.style.backgroundColor="green";
        inputref1.current.style.backgroundColor="";
        inputref3.current.style.backgroundColor="";
    
    }
        function click3(){
        inputref3.current.focus();
        inputref3.current.style.backgroundColor="blue";

          inputref1.current.style.backgroundColor="";
          inputref2.current.style.backgroundColor="";
    }



// Q1..................AUTO FOCUS INPUT......................

const autofocusref=useRef(null);

useEffect(()=> {
     autofocusref.current.focus();
     console.log("focused");
},[])
// function focus(){
//     autofocusref.current.focus();
// }



//Q2....................... BUTTON CLICK COUNTER............

const countref=useRef(0);
function inc(){
    countref.current++;
    console.log(countref.current);
}






    return(<>
<div>
    <button onClick={handlenum}>click 1</button>
    <br />
    <input ref={inputref1} /> <br />
    <button onClick={click2}>click 2</button>
    <br />
      <input ref={inputref2} /> <br />
    <button onClick={click3}>click 3</button>
    <br />
        <input ref={inputref3} />
    
</div>


{/*Q1     AUTO FOCUS INPUT           */}
<div>
    <h1>AUTO FOCUS INPUT</h1>
    <input ref={autofocusref} />
</div>

{/* .................................... BUTTON CLICK COUNTER........ */}
<div>
    <h1> BUTTON CLICK COUNTER</h1>
    <button onClick={inc}> click to increase</button>
</div>



    </>);

}
export default UseRef