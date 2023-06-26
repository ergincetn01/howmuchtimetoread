import { useState } from "react"

function TextBox({text,handleChange}){
 
   
    return (
        <div>
            <input value={text} onChange={handleChange} type="textbox"/>
        </div>
    )


}

export default TextBox;