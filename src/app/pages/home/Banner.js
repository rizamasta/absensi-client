import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { getItem } from "app/utils";
import { PRIMARY_BUTTON } from "assets/css/main";
import { Link } from "react-router-dom";
import { ImgBanner } from "assets/img";

export default class Banner extends React.Component {
  render() {
    return (
      <Grid container style={{ backgroundColor: "black", minHeight: 300 }}>
        <img
          src={ImgBanner}
          alt="Banner"
          width="100%"
          style={{
            opacity: 0.7,
            resize: ""
          }}
        />
        <div style={{ position: "absolute", top: 180, left: "8%", width: 500 }}>
          <Typography
            variant="h3"
            style={{
              color: "white",
              fontWeight: "bold",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}>
            Getting hired has just got lot smarter
          </Typography>
          {!getItem("access_token") && (
            <Link to="/user/register">
              <Button
                variant="contained"
                size="small"
                style={{
                  ...PRIMARY_BUTTON,
                  fontWeight: "bold",
                  marginTop: 20
                }}>
                Sign Up Now
              </Button>
            </Link>
          )}
        </div>
      </Grid>
    );
  }
}
