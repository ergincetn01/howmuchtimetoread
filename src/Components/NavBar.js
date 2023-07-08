import {Menu} from "antd"
import MenuItem from "antd/es/menu/MenuItem"
import "./Styles/NavBar.css"
function NavBar () {
    return (
        <Menu className="menu" selectable={false} 
            theme="dark" mode="horizontal">
            <MenuItem className="menuItem">WordToTime</MenuItem>
        </Menu>
    )
}

export default NavBar;