import {Input} from "antd"
import "../Styles/TextBox.css"

const {TextArea} = Input;
function TextBox({text,handleChange}){
   
    return (
            <TextArea rows={10} className="textArea" placeholder="Enter a text to see how much time you need to read it!" 
            value={text}
            onChange={handleChange} 
            />
    )
}

export default TextBox;