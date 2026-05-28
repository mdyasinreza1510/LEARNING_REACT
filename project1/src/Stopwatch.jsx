import React ,{useState, useEffect,useRef} from "react";

function Stopwatch(){

    const [isrunning, setisrunning]=useState(false);
    const[elapsedtime, setelapsedtime]=useState(0);
    const intervalid=useRef(null);
    const starttime=useRef(0);

useEffect(()=>{

},[isrunning]);

function start(){
setisrunning(true);
     
}
function stop(){
    setisrunning(false);
}
function reset(){
    
}
function format(){
    return `00 : 00 : 00`;
}

return(

<div className="stopwatch">
    <div className="display"> {format()}</div>
    <div className="control">
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
        <button onClick={reset}>reset</button>
    </div>

</div>

);
}
export default Stopwatch