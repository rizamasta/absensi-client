import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { palette } from "assets/css/main";
import { Link } from "react-router-dom";
import { ImgApplicant } from "assets/img";

export default class Applicant extends React.Component {
  render() {
    return (
      <Grid
        container
        style={{
          backgroundColor: palette.bg,
          height: 620
        }}>
        <div style={{ position: "relative", paddingTop: 120, left: "8%" }}>
          <Typography style={{ marginBottom: 20, color: "white" }}>
            FOR APPLICANTS
          </Typography>
          <Typography
            variant="h6"
            style={{
              color: "white",
              marginBottom: 20,
              fontWeight: "bold",
              maxWidth: 300,
              height: 80,
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}>
            Solving the age-old <br />
            problems of getting a job.
          </Typography>
          <div
            style={{
              width: "100%",
              maxWidth: 500,
              height: 200,
              color: "white"
            }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <Link to="" style={{ color: "white", textDecoration: "underline" }}>
            LEARN MORE
          </Link>
        </div>
        <div style={{ position: "absolute", right: "10%" }}>
          <img src={ImgApplicant} alt="Applicant" />
        </div>
      </Grid>
    );
  }
}
