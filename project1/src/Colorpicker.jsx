
import {useState} from 'react'

function Colorpicker(){
    const [color,setColor]=useState("#ffffff");

    const colorchange = (event)=> {
            setColor(event.target.value);
    }

    return(
        <div className="color-picker">
            <h1>COLOR PICKER</h1>

            <h3>Select Color 👇</h3>

            <input type="color" value={color} onChange={colorchange}></input>   
            
            <h3>selected color: {color}</h3>
            
            <div className="color-display" style={{backgroundColor: color}}>
               
               <p style={{color: color}}></p>

            </div>
        </div>
            
    );
}
export default Colorpicker