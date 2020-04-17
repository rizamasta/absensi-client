import React from "react";
import MyHelmet from "app/components/header/MyHelmet";
import PrimaryAppBar from "app/components/header/PrimaryAppBar";
import { getItem } from "app/utils";
import { Grid, Typography } from "@material-ui/core";
import { palette } from "assets/css/main";
import { ImgPicture, ImgLogo } from "assets/img";
import { Footer } from "app/components";
import Partner from "./Partner";
const content = {
  fontWeight: "bold",
  color: palette.primary,
  fontSize: 18,
};
export default class Home extends React.Component {
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
        <MyHelmet title="Home" description="Absensi" />
        <div
          style={{
            paddingTop: 80,
            paddingBottom: 40,
            paddingRight: 20,
            paddingLeft: 20,
          }}
        >
          <Grid
            container
            justify="center"
            style={{
              paddingTop: 40,
              minHeight: 400,
            }}
          >
            <Grid item lg={6} md={6} sm={6} style={{ marginBottom: 40 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <img src={ImgLogo} width={200} alt="Pelogo" />
              </div>
              <div style={{ textAlign: "center" }}>
                <Typography
                  style={{ ...content, fontSize: 32, fontWeight: "bolder" }}
                >
                  Selamat Datang
                </Typography>
                <Typography style={content}>
                  Di Website Absensi ASN Kemenag Kab. Way Kanan
                  <br />
                  Silahkan Login untuk memulai
                </Typography>
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={6}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={ImgPicture}
                  width={"50%"}
                  alt="People"
                  style={{ borderRadius: "50%" }}
                />
              </div>
            </Grid>
          </Grid>
        </div>
        <Partner />
        <Footer />
      </React.Fragment>
    );
  }
}
