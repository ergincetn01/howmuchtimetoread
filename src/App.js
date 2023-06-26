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
    return (
        <div>
            <TextBox handleChange={handleChange} text={text}/>
            <button onClick={reset}>Reset text </button>
       <p>Text: {text}</p>
        Text len: {text.length}
        </div>
    )

}

export default App;