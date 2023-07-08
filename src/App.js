import { useState } from "react";
import TextBox from "./Components/TextBox";
import Time from "./Components/Time";
import { Button } from "antd";
import "./Styles/App.css"

function App() {
    const [text, setText] = useState("")
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const reset = () => {
        setText("")
    }

    return (
        <div className="app">
            <div className="heads">
                <h1>WordsToTime</h1>
                <h4>Estimate time for speeches & presentations!</h4>
            </div>
            <TextBox handleChange={handleChange} text={text} />
            <Button className="btn" onClick={reset}>Clear Text </Button>
            <Time text={text} />
        </div>
    )
}

export default App;