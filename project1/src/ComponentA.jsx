// // useContext() = React Hook that allows you to share values

// between multiple levels of components

// without passing props through each level
// PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
{/* <Child />
</MyContext.Provider> */}

// CONSUMER COMPONENTS
// 1. import React, { useContext } from 'react';
// import { MyContext } from './ComponentA';
//in dono ko add krne k baad ab hme use krna hai to hm koi bhi variable leke usme jaha use krnahai usecontext(jo context import kiya) ko likhnge 

// 2. const value = useContext(MyContext);



import ComponentB from "./ComponentB.jsx";

import React, {useState, createContext} from "react";
//to hme jiska context chaiye use ek refrence deke export krlenge jaise hme abhi use ka chaiye
export const userContext=createContext()
// ab hme isko use krna hai to hme Comp A ko provider banana hoga jo sbko property provide kre to hm usercontext kolenge aour usme. provider laga ke uske ande compb KO ADD KRENGE


function ComponentA(){
    const[user , setuser]=useState("YASIN");
    return(
        <div className="box">
            <h1>component A</h1>
            <h3>{`HELLO ${user}`}</h3>
           
            <userContext.Provider value={user}>
                <ComponentB user={user}/>
            </userContext.Provider>
            
        </div>
    );
}
export default ComponentA