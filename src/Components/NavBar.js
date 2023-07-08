import {Menu} from "antd"
import MenuItem from "antd/es/menu/MenuItem"
function NavBar () {
    return (
        <Menu style={{justifyContent: "center"}} 
        selectable={false} color="white" theme="dark" mode="horizontal">
            <MenuItem style={{fontSize: 30}} >WordToTime</MenuItem>
        </Menu>
    )
}

export default NavBar;