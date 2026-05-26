import ComponentC from "./ComponentC.jsx";
import React,{useContext} from 'react'
import { userContext } from './ComponentA.jsx'
function ComponentB(){
    const value=useContext(userContext);
    return(
        <div className="box">
            <h1>component B</h1>
            <h3>{`${value} YOURE IN COMPONENT B`}</h3>
            <ComponentC />
        </div>
    );
}
export default ComponentB