// // ......................conditional rendering.................................
// function UserGreeting(props) {
  

//         // if(props.isLogedin){
//         // return <div>
//         //     <p>Welcome <i>{props.name}</i></p>
//         //     <p>Username:{props.username}</p>
//         //     <p>loggedIn: {props.isLogedin ? "Yes" : "No"    }</p>
//         // </div>
//         // } 
        
//         // else
//         // {
//         //     return <h1>please login first</h1>
           
//         // }

//         // by using ternary opr.
//         return( props.isLogedin ? 
//            //agar kahi pe t ernary me multiple options dena ho ya kahi bhi multiple tags add krna ho to ham <></> ka use krte hain
//            <>
//             <p className="txt"><h2>Welcome</h2> <h3>{props.name}</h3></p>
//             <p className="txt">username: {props.username}</p>
//             <p className="txt">loginstatus :{props.isLogedin ?"Sucessful" :"no"}</p>
//             </>
//               //hm ise ek cont var me bhi save krke use krskte hain
//               //eg: const msg=<h2>Welcome</h2> <h3>{props.name}</h3></p>
//               //aur fir ? ke baad use krskte hain
//              : 
//             <h1>please login first</h1> ) 
       
    

// }
// export default UserGreeting