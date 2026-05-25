import React, {useState, useEffect} from 'react'


function DigitalClock(){

const [time, settime]=useState(new Date());
useEffect(()=>{
const interval_id=setInterval(()=>{
    settime(new Date());
}, 1000);

return ()=>{
    clearInterval(interval_id)
}
}, []);

function formattime(){
    let hour=time.getHours();
    const min=time.getMinutes();
    const sec=time.getSeconds();
    const merd= hour >=12 ? "PM" : "AM";
    hour= hour % 12 || 12;//if hour =0 then it remainsame as 12
    return `${hour}:${min}:${sec} ${merd}`
}


    return(
        <>
        <div className="blurbg"></div>
        <div className="clock-box">
            <div className="clock">
                <span>{formattime()}</span>
            </div>
        </div>
        </>
    );
}
export default DigitalClock