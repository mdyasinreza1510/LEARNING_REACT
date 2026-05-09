//to use hooks we need to import react and useState from react
//hooks use krne se hm directly virtual dom me changes kr skte h without using class component


import React, { use, useState } from 'react';

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
// function Counter(){
// const[count, setCount]=useState(0);

// const increase =() =>{
//     setCount(count+1);
// }

// const decrease =() =>{
//     setCount(count-1);
// }
// const reset = ()=>{
//     setCount(0);
// }



// return(
//     <div className="counter">
//         <h1> {count} </h1>
//         <button onClick={increase}> ⬆️</button>
//         <button onClick={decrease}> ⬇️</button>
//         <button onClick={reset}> 0️⃣</button>
//     </div>
// );
// }
// export default Counter



//......................................onChange event in react............................................................


//onchange = used primarly for for elements
// ex.  <input> <textarea> <select> <radio>
// trigger a function every time the value of the input changes 
// function onChange(){

//     const [name, setName]=useState("guest");//for setting nameused an input
//     const [age, setAge]=useState(0); //for setting age used an input
//     const [comment,Setcomment]=useState(" ");//for setting comment used textarea
//     const [payment,setPayment]=useState(" ");//for setting payment method used select tag
   
//     //radio tag
//     const[shipping, setshipping]=useState(" ");//for setting shipping method used radio tag
   
//     function handlechange(event){
//         setName(event.target.value);
//     }
//     //YHA EK FUN BANAYA JO EVT KO AS AGMNT. LRGA AUR JIS BHI EVENT KO CHANGE KRNE HAI EVT.TARGET.(EVENT KA NAAM EG "VALUE") LIKHENGE
//     // AB SETNAME KYA KREGA EVENT K VALUE KO CHANGE KREGA  jaise hi hm input ko change krenge
    
    
//     function agechange(event){
//         setAge(event.target.value);
//     }


//     function commentchange(event){
//         Setcomment(event.target.value);
//     }

//     function changepayment(event){
//         setPayment(event.target.value);
//     }


//     function changeshipping(event){
//         setshipping(event.target.value);
//     }

//     return(
//         <div>
//             <input value={name} onChange={handlechange} type="text" />{
//             /*IS LINE KA MTLB YE HAI K JAB INPUT CHNAGE HOGA YA JAISE HI CHANGE HOGA
//             AB HAM HANDLECHANGE FUNCTION KO CALL KRDENGE*/}
//            <h2>Name: {name}</h2>


//             <input value={age} onChange={agechange} type="number" />
//             <h2>Age: {age}</h2>

//             <textarea value={comment} onChange={commentchange}></textarea>
//             <p>MyComment : {comment}</p>

//             <select value={payment} type="text" onChange={changepayment}>
//                 <option value=" ">select pay method</option>
//                 <option value="phonePay">PhonePay</option>
//                 <option value="GPay">GPay🌚</option>
//                 <option value="amazonPay">AmazonPay</option>
//                 <option value="RuPay">RuPay</option>
//             </select>
//             <h2>Payment Method: {payment}</h2>

//             {/*//kyu ki select me hm value ko change nhi krskte sirf addd krskte hain to jo hmn =e values set ki hain
//                  wahi value change krne pe hw2 me show hogi*/}
        
//         {/* using radio buttons */}
       
//        <label>

//         {/* RADIO BUTTON ME HME "NAME KO SAME RKHNA CHAIYE KYU KI WO EK HI GROUP ME ATE HAIN
//          ISILIYE DONO ME SE KOI E HI SELECT HOGA DONO NAHI
//          YA FIR HAM CHECKED===PICKUP/DELIVERY BHI USE KRSKTE HAIN*/}
        
        
//         <input type="radio" name="shipping" value="PICK UP" onChange={changeshipping}/>PICK UP
//         <br />
//         <input type="radio" name="shipping" value="DELIVERY" onChange={changeshipping} />DELIVERY
//         </label>
//         <p>shipping method : {shipping}</p>
//         </div>

//     );
// }
// export default onChange


