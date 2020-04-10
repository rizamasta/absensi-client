import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { palette } from "assets/css/main";
import MenuIcon from "@material-ui/icons/Menu";
import { clearAll, getItem } from "app/utils";
export default function SmallMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    setAnchorEl(null);
    clearAll();
    window.location.href = "/user/login";
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon style={{ color: palette.primary }} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {getItem("token") && (
          <div>
            <MenuItem onClick={handleClose} style={{ width: 100 }}>
              <Link
                to="/user/absen"
                style={{ color: palette.primary, fontWeight: "bold" }}
              >
                Absen
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/user/history"
                style={{ color: palette.primary, fontWeight: "bold" }}
              >
                History
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/user/profile"
                style={{ color: palette.primary, fontWeight: "bold" }}
              >
                Profil
              </Link>
            </MenuItem>
            <MenuItem
              onClick={logout}
              style={{ color: palette.primary, fontWeight: "bold" }}
            >
              Keluar
            </MenuItem>
          </div>
        )}
        {!getItem("token") && (
          <div>
            <MenuItem onClick={handleClose} style={{ width: 100 }}>
              <Link
                to=""
                style={{ color: palette.primary, fontWeight: "bold" }}
              >
                Beranda
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} style={{ width: 100 }}>
              <Link
                to="/user/login"
                style={{ color: palette.primary, fontWeight: "bold" }}
              >
                Masuk
              </Link>
            </MenuItem>
          </div>
        )}
      </Menu>
    </div>
  );
}
