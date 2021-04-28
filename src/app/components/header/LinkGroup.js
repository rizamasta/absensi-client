import React from "react";
import { Link } from "react-router-dom";
import { palette, PRIMARY_BOLD, PRIMARY_BUTTON } from "assets/css/main";
import { Button } from "@material-ui/core";
import { getItem, clearAll } from "app/utils";
const menuList = [
  {
    link: "/user/absen",
    label: "Absen",
    rules: 0,
  },
  {
    link: "/user/history",
    label: "History",
    rules: 0,
  },
  {
    link: "/user/profile",
    label: "Profil",
    rules: 0,
  },
  {
    link: "/user/kinerja",
    label: "Kinerja",
    rules: 0,
  },
  {
    link: "/user/report",
    label: "Report",
    rules: 1,
  },
  {
    link: "/user/data",
    label: "Data Pegawai",
    rules: 1,
  },
];
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
      this.setState({ rules: data.rules, pathname: window.location.pathname });
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
    const { pathname, rules } = this.state;
    return (
      <div style={{ alignItems: "center" }}>
        {getItem("token") && (
          <div>
            {menuList.map(v => {
              if (rules >= v.rules) {
                return (
                  <Link
                    to={v.link}
                    key={v.link}
                    style={{
                      ...this.linkStyle,
                      borderBottom:
                        pathname === v.link
                          ? "2px solid " + palette.primary
                          : "none",
                    }}>
                    {v.label}
                  </Link>
                );
              }
              return null;
            })}
            <Button
              size="small"
              variant="contained"
              style={{ ...this.buttonStyle, marginLeft: 20 }}
              onClick={() => this.doLogout()}>
              Keluar
            </Button>
          </div>
        )}
        {!getItem("token") && (
          <div>
            <Link to="" style={{ ...this.linkStyle }}>
              Beranda
            </Link>
            <Link to="/user/login" style={{ ...this.linkStyle }}>
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
