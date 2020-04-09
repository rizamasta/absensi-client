import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { palette } from "assets/css/main";
import { Link } from "react-router-dom";
import { ImgRecruiter } from "assets/img";

export default class Employer extends React.Component {
  render() {
    return (
      <Grid
        container
        style={{
          backgroundColor: palette.secondary
        }}>
        <div style={{ position: "relative" }}>
          <img src={ImgRecruiter} alt="Recruiter" />
        </div>
        <div style={{ position: "relative", paddingTop: 120, left: "10%" }}>
          <Typography style={{ marginBottom: 20, color: palette.primary }}>
            FOR EMPLOYER
          </Typography>
          <Typography
            variant="h6"
            style={{
              color: palette.primary,
              marginBottom: 20,
              fontWeight: "bold",
              width: 300,
              height: 80,
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}>
            Slising costs on company wide hiring.
          </Typography>
          <div
            style={{
              width: 500,
              height: 200,
              color: palette.primary
            }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <Link
            to=""
            style={{ color: palette.primary, textDecoration: "underline" }}>
            LEARN MORE
          </Link>
        </div>
      </Grid>
    );
  }
}
