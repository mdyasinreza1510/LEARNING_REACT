import {useState} from 'react'


function Practice(){

    //character ccount app
    const [count, setCount]=useState(0);

    const countCharacter=(event) =>{
        setCount(event.target.value.length);
}


//show / hide password

const [showpass, sethowpass] = useState(false);
const passhow=() => {
    sethowpass(!showpass);

}


//background color change
const [color, setbgcolor]=useState("#6FCF97");

const red=()=>{
setbgcolor("red")
}
const blue=()=>{
setbgcolor("blue")
}

const green=()=>{
setbgcolor("green")
}





// gender selection
const[gender,setgender]=useState();

function male(){
    setgender("MALE");
}

function female(){
    setgender("FEMALE");
}


    return(
        <>
        <h1>character Counter</h1>
        <div className="ch-count">
        <textarea onChange={countCharacter}></textarea>
        <p>number of character : {count}</p>
        </div>



        {/* Show/Hide Password */}
        <h1>Password Visibility</h1>
        <div className="pass-visib">
            <input type={showpass ? "text" : "password"} />
            {/* yaha hmne phlse se hi type define kiya hai to hme bs toggle krna hai koi bhi onchange ki zarurat nhi hai */}
            <button onClick={passhow}>{showpass?"hide":"show"}</button>
            {/* onclick me hamesha arrow function call hoga 
            click krne pe passshow call hua waha se showpass toggle hua  */}
        </div>
      

{/* Background Color Changer */}
      <h1>Background Color Changer</h1>

      <div className="BGCOLOR" style={{backgroundColor:color}}>
        <p  style={{color: color}}>y</p>
      </div>
      <button onClick={red}>RED</button>
      <button onClick={blue}>BLUE</button>
      <button onClick={green}>GREEN</button>



{/* gender selection */}
<div>
    <h1>Select Your Gender</h1>
    <input type="radio" name="gender" onChange={male}/>MALE
    <br />
     <input type="radio"  name="gender" onChange={female}/>FEMALE
     <br />
     <p>Your Selected Gender :<b>{gender}</b>
     </p>
</div>

        </>
       
    );
}
export default Practice