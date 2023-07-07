import {Input} from "antd"

const {TextArea} = Input;
function TextBox({text,handleChange}){
   
    return (
            <TextArea placeholder="Enter a text to see how much time you need to read it!" value={text} onChange={handleChange} 
            style={{borderColor: "lightgreen", 
            borderWidth: "2px", 
            backgroundColor: "gray", 
            color: "lightgray"}}/>
    )
}

export default TextBox;