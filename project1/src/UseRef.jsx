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

//q3.......................PREVIOUS VALUE TRACKER......................

const [count ,setcount]=useState(0);

function addcount(){
    setcount(count+1);
}
const preref=useRef(0);
useEffect(()=>{
    preref.current = count;
},[count])




//Q5..........................CHANGE INPUT BORDER USING REF..............

const colorref=useRef();

function red(){
    colorref.current.style.border="5px solid red";
     colorref.current.placeholder="LAL BORDER";
}
function green(){
    colorref.current.style.border="5px solid green";
     colorref.current.placeholder="HARA BORDER";
}
function blue(){
    colorref.current.style.border="5px solid blue";
    colorref.current.placeholder="NELA BORDER";
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


{/*Q1 .........................AUTO FOCUS INPUT..................... */}
<div>
    <h1>AUTO FOCUS INPUT</h1>
    <input ref={autofocusref} />
</div>







{/* .................................... BUTTON CLICK COUNTER........ */}


<div>
    <h1> BUTTON CLICK COUNTER</h1>
    <button onClick={inc}> click to increase in console</button>
</div>






{/* ..................................PREVIOUS VALUE TRACKER..........*/}

<div>
    <h1>PREVIOUS VALUE TRACKER</h1>
    <h3>current count : {count}</h3>
    <h3>previous count : {preref.current}</h3>
    <button onClick={addcount}>increase</button>
</div>








{/* ...............................CHANGE INPUT BORDER USING REF..... */}
<div>
    <h1>CHANGE INPUT BORDER USING REF</h1>
    <input ref={colorref}  placeholder='color changing input' /> <br />
    <button onClick={red}> LAL</button>
    <button onClick={green}> HARA</button>
    <button onClick={blue}> NEELA</button>
</div>
    </>);

}
export default UseRef