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


    return(
        <>
        <div className="ch-count">
        <textarea onChange={countCharacter}></textarea>
        <p>number of character : {count}</p>
        </div>



        {/* Show/Hide Password */}

        <div className="pass-visib">
            <input type={showpass ? "text" : "password"} />
            {/* yaha hmne phlse se hi type define kiya hai to hme bs toggle krna hai koi bhi onchange ki zarurat nhi hai */}
            <button onClick={passhow}>{showpass?"hide":"show"}</button>
            {/* onclick me hamesha arrow function call hoga 
            click krne pe passshow call hua waha se showpass toggle hua  */}
        </div>
      
        </>
       
    );
}
export default Practice