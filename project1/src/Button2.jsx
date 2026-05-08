// function Button2(){
 
//  //function without parameters
//     const handleClick = () =>{
//     console.log("hey why are you clicking mw ");
//       }

// //function with parameters
//     const handleClick2=(name) =>{
//     console.log(`hey ${name} you clicked me `);
//       } 


// //for multiple line of code in => use {}

// // let count=0;
// // const handleClick3=(name)=>{
// //  if (count<3){
// //     count++;
// //     console.log(`hey ${name} you clicked me ${count} times`);
// //  } else{
// //     console.log(`${name} stop clicking me `);
// //  }
// // }  


// //event as parameters

// const handleClick4=(event)=>{


//     event.target.textContent="clicked";
//     //ye likhne se button ka text content change ho jayega jab user click karega
//     console.log(event);
//     //ye likhne se click event ke sare details console me print ho jayenge
// }
 
 
//  return(
//         <>
//         {/* <button onClick={handleClick}>click me 🤖</button> */}


//         {/*<button onClick={()=> handleClick2("yasin")}>click me 🤖</button> */}
//         {/*agar ham chahte hain ki click event automatic consele me print na ho to hm arrpw fun use krna chaiye */} 
        
//         {/* <button onClick={()=> handleClick3("yasin")}>click me 🤖</button> */}

//          <button onClick={(event)=> handleClick4(event)}>click me 🤖</button>
      
//         </>
        
//     );
// }
// export default Button2


//USING IMAGE FOR EVENT HANDELING
function Profile(){
    let count=0;
    const imge='./src/assets/PFP.jpeg';

    const clicking=(e)=>{
        count++;
console.log(`you clicked the image ${count} times`)

    }
    //here we made an arrow fun so that it will be easy to call it in the onClick event of the image tag
    // jb hm para m e paas krte hain tb ham e.target se image ke sare details console me print kar sakte hain
    //aur e.target.(jo hme change krna hai)  wo change krskte hain 
    return(
     <img src={imge} alt="pfp" onClick={(e) => clicking(e)}></img>
    )
}
export default Profile