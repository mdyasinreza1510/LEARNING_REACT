//to use hooks we need to import react and useState from react
//hooks use krne se hm directly virtual dom me changes kr skte h without using class component


import React, { useState } from 'react';
// function Mycomponent(){
// //to use useState we need to call it and pass the initial value of the state variable

//     const [name, setName/* setter function */] = useState();
//     const [age, setAge]=useState(10);  /* for updating age*/
//     const[istudent,setMode]=useState(false);
   
//     const updatename= () =>{
//         setName("MD YASIN REZA");
//     }
     
    
//     const updatAge= () =>{
//         setAge(age+1);
//     }


//     const updateOccupation=() =>{
//         setMode(!istudent);
//     }


//     const resetAll= () =>{
//     setName(" guest ");
//     setAge(0);
// }
   

//     return(
//         <div>
//             <p>NAME: {name}</p>
//             <p>AGE: {age}</p>
//             <p>OCCUPATION : {istudent ? "student" : "not a student"}</p>
            
//             <button onClick={updatename}>UPDATE YOUR NAME</button>
            
//             <button onClick={updatAge}>UPDATE YOUR AGE</button>
            
//             <button onClick={updateOccupation}>see your occupation</button>
            
//             <button onClick ={resetAll}>Reset</button>
//         </div>
//     );
// }
// export default Mycomponent





//.....................................making a COUNTER......................................................
function Counter(){
const[count, setCount]=useState(0);

const increase =() =>{
    setCount(count+1);
}

const decrease =() =>{
    setCount(count-1);
}
const reset = ()=>{
    setCount(0);
}



return(
    <div className="counter">
        <h1> {count} </h1>
        <button onClick={increase}> ⬆️</button>
        <button onClick={decrease}> ⬇️</button>
        <button onClick={reset}> 0️⃣</button>
    </div>
);
}
export default Counter