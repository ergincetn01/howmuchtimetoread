import {Input} from "antd"
import "./TextBox.css"

const {TextArea} = Input;
function TextBox({text,handleChange}){
   
    return (
            <TextArea autoSize className="textArea" placeholder="Enter a text to see how much time you need to read it!" 
            value={text}
            onChange={handleChange} 
            />
    )
}

export default TextBox;