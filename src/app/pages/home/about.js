import React from "react";
import MyHelmet from "app/components/header/MyHelmet";
import PrimaryAppBar from "app/components/header/PrimaryAppBar";
import { getItem } from "app/utils";
import { Grid, Typography } from "@material-ui/core";
import { palette } from "assets/css/main";
import { ImgEmployee } from "assets/img";
import { Footer } from "app/components";
import Partner from "./Partner";
const content = {
  fontWeight: "bold",
  color: palette.primary,
  fontSize: 18,
};
export default class About extends React.Component {
  constructor(props) {
    super(props);
    if (getItem("token")) {
      this.props.history.push("/user/absen");
    }
  }
  render() {
    return (
      <React.Fragment>
        <PrimaryAppBar shadow={true} linkgroup={true} />
        <MyHelmet title="Tentang" description="Tentang Absensi" />
        <div
          style={{
            paddingTop: 80,
            paddingBottom: 40,
            paddingRight: 20,
            paddingLeft: 20,
          }}
        >
          <Typography
            style={{ ...content, fontSize: 32, fontWeight: "bolder" }}
          >
            Tentang
          </Typography>
        </div>
        <Grid
          container
          justify="flex-start"
          style={{
            backgroundColor: palette.primary,
            height: "100vh",
            paddingTop: 40,
            paddingLeft: 20,
            paddingRight: 50,
          }}
        >
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: 24,
              width: 553,
              color: "white",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Absensi secara digital membantu untuk mempermudah dan mempercepat
            pencatatan absen Pegawai.
          </Typography>
        </Grid>
        <Footer />
      </React.Fragment>
    );
  }
}
