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



//HOBBIES SELECTOR...............

const [hobbies, sethobbies]=useState([]);


function selectedhobbies(event){
    const value= event.target.value;
    const checked=event.target.checked;

    if (checked){
        sethobbies([...hobbies, value]);
    } 
    
    else 
        {
        // filter() new array banata hai
      // Jo hobby unchecked hui usko remove kar do
        sethobbies( hobbies.filter((hobby)=> hobby !==value));

        }
}

//controlled form.........................
const [name,setname]=useState();
const [email,setemail]=useState();
const[submitname, setsubmitname]=useState();
const[submitemail, setsubmitemail]=useState();


function changename(event){
    setname(event.target.value);
}

function changemail(event){
setemail(event.target.value);

}
function submit(){
    //yaha hmne submit me setsubmitname/email me ko name aur email
    //  paas krenge jinme input k through values add honge fir ham
    //  submit k through acces krlenge aur auto type p me nhi hoga
setsubmitname(name);
setsubmitemail(email);

///yaha pe setsub k zariya submitname/email me name aur email k value ko add krdiya 
//ab jab submitname/email e values hain to hm p m submitname/aur email hi paas krenge
}




//..................................dark and light mode..................................
const [mode,setmode]=useState("white");

function changemode(){
    const btm=document.querySelector("#btn")
    const bg=document.querySelector("#bg");
    if(mode=="white"){
        setmode("black");
        btm.innerText="Switch to Light";
        bg.classList.add("lighttxt")
        bg.classList.remove("darktxt")
       

    }
    else{
         setmode("white");
          btm.innerText="Switch to Dark"
          bg.classList.add("darktxt")
             bg.classList.remove("lighttxt")
    }


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



{/*HOBBIES SELECTOR................................. */}


<div>
    <h1>Select Your Hobbies</h1>
    <label>
{/* jaise hi input ka value change hoga fir check hoga ki checked hai ya nahi
 if yes then wo list me add hojayega */}
    <input  onChange={selectedhobbies} type="checkbox" value="Gaming"/> Gaming
    <input  onChange={selectedhobbies} type="checkbox" value="Fishing"/>Fishing 
    <input  onChange={selectedhobbies} type="checkbox"  value="Coding"/>Coding 
    <input  onChange={selectedhobbies} type="checkbox"  value="Esports"/>Esports 
    <input  onChange={selectedhobbies} type="checkbox"  value="soccer"/>soccer 
</label>
    <h3>Your Hobbies are:</h3>
    <ul>
        {/* map() se hobbies show kar rahe hain 
        aur hobby ya koi bhi para meter jo map me define hota hai wo 
        array ka singl elemnthoota hai 
        like gaming = 0
        fishing=1 etc*/}


        {hobbies.map((hobby,index) => (
        <li key={index}>
        {hobby}
        </li>
        ))}
       
    </ul>
</div>

{/* controlled forms......................................... */}
<div>

<h1>Controlled Forms</h1>
<input onChange={changename} type="text" placeholder='enter your name' />
<br />
<input onChange={changemail} id='emailform' type="email"placeholder='enter email' />
<button onClick={submit} >Submit</button>
<p>Name : <b>{submitname}</b></p>
<p>Email : <b>{submitemail}</b></p>
</div>




{/* ...........................................................light and dark mode................................................. */}
      <div id='bg'  style={{backgroundColor:mode}}>
        <h1>MODE SWITCHING</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit ad iure molestiae culpa minus neque consectetur, maiores eos exercitationem ut similique esse magnam dolorum porro atque aut, cum iste!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure error culpa esse amet eum porro atque adipisci quaerat provident non necessitatibus accusamus natus, fugiat deleniti nemo voluptatibus sit vel ullam.
            Laudantium, aliquam rem. Sed fugit cum ipsum! Quisquam aut voluptas ea voluptatum nesciunt. Obcaecati hic dignissimos laboriosam voluptates, qui reprehenderit maxime ducimus harum quisquam sequi quam earum accusamus consequatur veritatis?
            Perspiciatis itaque expedita neque omnis sed natus eveniet veniam voluptates quibusdam amet vel dolore illum nesciunt aut corrupti labore illo esse consequatur ullam id repellat, incidunt voluptatem praesentium maiores? Obcaecati.
            Quaerat pariatur at soluta voluptatum fugiat possimus omnis eveniet! Tenetur fugit necessitatibus eius quo id sint cumque, eos magnam incidunt sed dicta recusandae, mollitia iusto officia, non enim nihil illo.
        </p>
  <button id='btn' onClick={changemode}>Switch to Dark</button>
        
        </div>  
        
        
        
        
        
        
        
        
        
        </>
       
    );
}
export default Practice