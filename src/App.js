import { useState } from "react";
import TextBox from "./Components/TextBox";
import Time from "./Components/Time";
import { Button, Layout } from "antd";

const {Content, Header, Footer}= Layout;

function App() {
        const [text, setText]=useState("")
        const handleChange=(e)=>{
            setText(e.target.value)
        }

        const reset=()=>{
            setText("")
        }
        const ph="Enter some text..."

        
    return (
        <Layout>
            <Content>
                
            <TextBox handleChange={handleChange} text={text}/>
            <Button style={{backgroundColor: "black", color: "lightgreen", borderColor: "green", width: 1000, borderWidth: "3px"}} onClick={reset}>Clear text </Button>
        <Time text={text} />
       
            </Content>

       
        

        
        </Layout>
    )

}

export default App;