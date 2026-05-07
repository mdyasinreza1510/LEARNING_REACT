//........................RENDERING LISTS................................RENDERING LISTS................................

function List(props){
    // to make a string an obj just put them in
    // { "apple"}
    // to add diferent values in it;
//    const fruits=[
//     {id:1, name:"APPLE", cal:10},
//     {id:2, name:"BANANA" ,cal:20}, 
//     {id:3, name:"ORANGE", cal:30},
//     {id:4, name:"GRAPE", cal:40}];
    
//fruits.sort((a, b)=>a.name.localeCompare(b.name)); //ALPHABETICAL
//fruits.sort((a, b) =>b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
//fruits.sort((a, b) => a.calories - b.calories); // NUMERIC
//fruits.sort((a, b) => b.calories - a.calories); // REVERSE NUMERIC


//       //when we make them an obj then we have to add thier props in list
//       // eg fruit.name, fruit.cal
//     const items= fruits.map(fruit =><li key={fruit.id}>{fruit.name}: {fruit.cal} cals.</li>)
//    //for every fruit in fruits => means do this, mean for every fuit in fruits add them in a list
//    // we use key{} so that react can identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:
//     return (<ol>{items}</ol>);
//     //and then return an ordered list with all the items in it

// .........................................................
//in this section we

const itemlist=props.items
 //yaha pe jo app me items hain unke properties ko acces kiya hai aur items fuits hain
 //ye items hmne app.jsx se lekr aya hai
const listItems=itemlist.map(item => <li>{item.name} : {item.cal} cals.</li>)
//yaha pe itemlist jo hmne abhi banaya hai aur item ko props.items se nikala hai

return(
    <>
    <h2>{props.category}</h2>
    <ol>{listItems}</ol>
    
    

    </>

);
}
export default List