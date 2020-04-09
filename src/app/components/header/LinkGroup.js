import React from "react";
import { Link } from "react-router-dom";
import { PRIMARY_BOLD, PRIMARY_BUTTON } from "assets/css/main";
import { Button } from "@material-ui/core";
import { getItem, clearAll } from "app/utils";

class LinkGroup extends React.Component {
  anchorEl = null;
  linkStyle = { ...PRIMARY_BOLD, marginLeft: 20 };
  buttonStyle = {
    ...PRIMARY_BUTTON,
    fontWeight: "bold",
  };
  handleClose = () => {
    this.setState({ openLang: false });
    this.anchorEl = null;
  };
  doLogout() {
    clearAll();
    window.location.href = "/user/login";
  }
  render() {
    return (
      <div style={{ alignItems: "center" }}>
        {getItem("token") && (
          <div>
            <Link to="/user/absen" style={this.linkStyle}>
              Absen
            </Link>
            <Link to="/user/history" style={this.linkStyle}>
              History
            </Link>
            <Link to="/user/profile" style={this.linkStyle}>
              Profile
            </Link>
            <Button
              size="small"
              variant="contained"
              style={{ ...this.buttonStyle, marginLeft: 20 }}
              onClick={() => this.doLogout()}
            >
              Logout
            </Button>
          </div>
        )}
        {!getItem("token") && (
          <div>
            <Link to="" style={this.linkStyle}>
              Home
            </Link>
            <Link to="/user/login" style={this.linkStyle}>
              <Button size="small" variant="contained" style={this.buttonStyle}>
                Login
              </Button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}
export default LinkGroup;
