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
  state = { rules: 0 };
  componentDidMount() {
    if (getItem("token")) {
      var data = JSON.parse(getItem("user_data"));
      this.setState({ rules: data.rules });
    }
  }
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
              Profil
            </Link>
            {this.state.rules === 1 && (
              <Link to="/user/report" style={this.linkStyle}>
                Report
              </Link>
            )}
            <Button
              size="small"
              variant="contained"
              style={{ ...this.buttonStyle, marginLeft: 20 }}
              onClick={() => this.doLogout()}
            >
              Keluar
            </Button>
          </div>
        )}
        {!getItem("token") && (
          <div>
            <Link to="" style={this.linkStyle}>
              Beranda
            </Link>
            <Link to="/user/login" style={this.linkStyle}>
              <Button size="small" variant="contained" style={this.buttonStyle}>
                Masuk
              </Button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}
export default LinkGroup;
