import ComponentD from "./ComponentD.jsx";
import React,{useContext} from 'react'
import { userContext } from './ComponentA.jsx'

function ComponentC(){
    const user=useContext(userContext);
    return(
        <div className="box">
            <h1>component C</h1>
            <h3>{`${user} PAGLU YOURE IN COMPONENT C`}</h3>
        
            <ComponentD />
        </div>
    );
}
export default ComponentC