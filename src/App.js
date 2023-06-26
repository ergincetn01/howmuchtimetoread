import { useState } from "react";
import TextBox from "./Components/TextBox";

function App() {
        const [text, setText]=useState("")
        const handleChange=(e)=>{
            setText(e.target.value)
        }

        const reset=()=>{
            setText("")
        }

        const timeRequired=()=> {
            let timeReq=0
            // within this function, calculate how much time required to read the given input text and show user.
            return timeReq; 
        }
    return (
        <div>
            <TextBox handleChange={handleChange} text={text}/>
            <button onClick={reset}>Reset text </button>
       <p>Text: {text}</p>
        Text len: {text.length}
        Time Required to read this text: {timeRequired()}
        </div>
    )

}

export default App;