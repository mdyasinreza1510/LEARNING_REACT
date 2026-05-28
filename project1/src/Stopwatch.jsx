import React ,{useState, useEffect,useRef} from "react";

function Stopwatch(){

    const [isrunning, setisrunning]=useState(false);
    const[elapsedtime, setelapsedtime]=useState(0);
    const intervalid=useRef(null);
    const starttime=useRef(0);
useEffect(() => {

    if(isrunning){

        intervalid.current = setInterval(() => {

            setelapsedtime(
                Date.now() - starttime.current
            );

        }, 10);
    }

    return () => {

        clearInterval(intervalid.current);

    };

}, [isrunning]);

function start(){
setisrunning(true);
starttime.current=Date.now() -elapsedtime;
// console.log(starttime.current);
     
}
function stop(){
    setisrunning(false);
}
function reset(){
    setelapsedtime(0);
    setisrunning(false);
}
function format(){
    const hour=Math.floor(elapsedtime/(1000*60*60));
    const minutes=Math.floor((elapsedtime/(1000*60))%60);
        const second=Math.floor((elapsedtime/1000)%60);
            const ms=Math.floor((elapsedtime %1000 )/10);
    return `${minutes} : ${second} : ${ms}`;
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