import { useState } from "react";
import TextBox from "./Components/TextBox";
import Time from "./Components/Time";
import { Button, Layout } from "antd";
import "./App.css"
import NavBar from "./Components/NavBar";

const { Content, Header, Footer } = Layout;

function App() {
    const [text, setText] = useState("")
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const reset = () => {
        setText("")
    }
    
    return (
   <div className="main">

   <NavBar/>
                <div className="app">
                    
                    <TextBox handleChange={handleChange} text={text} />
                    <Button className="btn" onClick={reset}>Clear Text </Button>
                    <Time text={text} />
                </div>
</div>
  
    )

}

export default App;