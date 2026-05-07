import typeCheck from 'prop-types'
function Student(props){ //props is a js obj 
    //PROPS ARE USED IN ONLY COMPONENETS FUN
    return(
<div className="std">
    <p>NAME: {props.name}</p>{/* THIS .NAME IS DEFINED IN THE APP.JSX */} 
    <p>AGE:  {props.age} yrs</p>  {/* iska ye mtlb hai ki hm ".age"" property jo ki ek no. hai  yaha use krhe hain*/}
    <p>STUDENT: {props.istudent ? "YES" : "NO"}</p>
    
    
    </div>
    );
}
// .............proptypes..............
// PropTypes React ka ek feature hai jo components ke 
// props ka type check karta hai — basically yeh ensure
//  karta hai ki tum component ko jo data pass kar rahe
//  ho wo sahi type ka hai ya nahi.
Student.typeCheck={
    name:typeCheck.string,
    age: typeCheck.number,
    istudent:typeCheck.bool,
}
export default Student