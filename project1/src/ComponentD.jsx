import React,{useContext} from "react";
import {userContext} from './ComponentA.jsx'

function ComponentD(){
    const user=useContext(userContext);
    return(
        <div className="box">
            <h1>component D</h1>
            <h3>{`bye ${user}`}</h3> 
            {/* isse prop drillling bolte hain, sbse phle compA me jo Compb hai usme user={user} krnege fir compBme ake props pass krenge  aur compB me jo compC hai usme props.user likhnge aise fir c me ake d me props.user aur D me final jo bhi ans chaiye usme add krdenge ${props.user} krke .. mtlb phle Ato d pass krenge fir wo execute hoga */}

        </div>
    );
}
export default ComponentD