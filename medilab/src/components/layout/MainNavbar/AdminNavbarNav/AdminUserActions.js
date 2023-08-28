import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }
  logout(){
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem('user')
  }

  render() {
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={require("./../../../../images/avatars/0.png")}
            alt="User Avatar"
          />{" "}
          
<span className="d-none d-md-inline-block" style={{fontWeight:"bold",color:"black" , cursor:"pointer"}}>Admin</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          <DropdownItem tag={Link} to="/admin-user-profile-lite">
            <i className="material-icons">&#xE7FD;</i> Profile
          </DropdownItem>
          {/* <DropdownItem tag={Link} to="/admin-user-profile-lite">
            <i className="material-icons">&#xE8B8;</i> Update Profile
    </DropdownItem>*/}
          
          <DropdownItem tag={Link} to="/UpdatePassword">
            <i className="material-icons">&#xf070;</i> Change Password
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag={Link} to="/" className="text-danger" onClick={this.logout}>
            <a class="text-danger" style={{textDecoration:"none",fontWeight:"normal"}}><i className="material-icons text-danger">&#xE879;</i> Logout</a>
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
