//.................................................making a card component..................................
// import Card from './Card.jsx'
// function App() {
//   return(
// <>
//   <Card></Card>
//   <br />
//   <Card></Card>



// </>


// );
// }

// export default App

//,...................................................styling btn with css.....................................
//how to style react cmp with css

// import Button from './Button.jsx'
// function App(){
//   return(
//     <Button></Button>
//    );

// }
// export default App



//................................ props.........................

// props = read-only properties that are only shared between components
//             a parent component can send data to child component

//             <Component key=value />

// import Student from './Student.jsx'
// function App(){
//   return(
//     <>
//     {/* BY THIS METHOD WE CAN USE MULTIPLE COMP WITH DIFF DATA */}

//     <Student name="MD YASIN REZA" age={21} istudent={true}></Student> {/*//             <Component key=value /> */}
//     <Student name="ASHRAF ANSARI" age={2} istudent={false}></Student>{/*//             <Component key=value /> */}
//     <Student name="NATU SAJIDI" age={4} istudent={false}></Student>
//     <Student></Student>
//     </>
    
//   );
// }
// export default App



// ......................conditional rendering.................................
// import UserGreeting from "./UserGreeting";
// function App(){
// return (
//   <>
//     <UserGreeting  name="MD YASIN REZA !! " isLogedin={true} username="mdyasinreza1510" />
//   </>

// );
// }
// export default App


// ..............................RENDERING LISTS................................  
//arrayyyys


// import List from './List.jsx'
// function App(){ 
//          const fruits=[

//     {id:1, name:"APPLE", cal:10},
//     {id:2, name:"BANANA" ,cal:20}, 
//     {id:3, name:"ORANGE", cal:30},
//     {id:4, name:"GRAPE", cal:40}];

//  // now we will use the same list component to make a list of vegetables with their calories
//          const vegs=[

//     {id:6, name:"AALU", cal:100},
//     {id:7, name:"PYAZ" ,cal:200}, 
//     {id:8, name:"TAMATAR", cal:300},
//     {id:9, name:"KHEERA", cal:400}];


// return(
//      <>
//      <div className="fruits">
//           <List items={fruits} category="Fruits"></List>
//           </div>
     
//      <div className="vegetables">
//           <List items={vegs} category="vegetables"></List>
//      </div>
//      </>


     //now we transform the list component
     //so that we can use it in app.jsx
     //now we will pass the props to list .jsx and then we will use it in list.jsx to make a list of fruits with their calories
     
     // <List items={fruits} category="Fruits"></List>

     //now we will pass the items and category as props to list.jsx
     //  and then we will use it in list.jsx to make a list of fruits with their calories
 

// sb se zaruri point hm kisi bhi comp ko reusable banae keliye uske comp me porps add krna hoga 
    


// .............................EVENT HANDLING IN REACT.............................
//click event= an interaction when a user click on a specific elemnt it gives some responce
// a callback to the click event

// import Profile from './Button2.jsx';
// import Button2 from './Button2.jsx'
// function App(){
//      return(
//          <Profile></Profile>
//      );

//  }
//   export default App




// ..............................REACT HOOKS........................................................
//hooks are special functions that allow us to use state and other react features in functional components

//useState is a hook that allows us to add state to functional components
// useState() = A React hook that allows the creation of a stateful variable
                // AND a setter function to update its value in the Virtual DOM.
                // [name, setName]

// import Mycomponent from './Mycomponent.jsx'
// function App(){
//     return(

//         <Mycomponent></Mycomponent>
//     );
// }
// export default App



//................................COUNTER....................

import Counter from './Mycomponent.jsx'

function App(){
    return(
        <Counter></Counter>

    );
}
export default App