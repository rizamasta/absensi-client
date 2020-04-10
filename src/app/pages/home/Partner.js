import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { palette } from "assets/css/main";
// import { Link } from "react-router-dom";

export default class Partner extends React.Component {
  render() {
    return (
      <Grid
        container
        justify="center"
        style={{
          backgroundColor: palette.primary,
          minHeight: 300,
          paddingTop: 64,
        }}
      >
        <Typography
          style={{
            fontWeight: "bold",
            fontSize: 24,
            width: 553,
            textAlign: "center",
            color: "white",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          Absensi secara digital membantu untuk mempermudah dan mempercepat
          pencatatan absen Pegawai.
        </Typography>
      </Grid>
    );
  }
}
