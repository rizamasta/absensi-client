import React from "react";
import MyHelmet from "app/components/header/MyHelmet";
import PrimaryAppBar from "app/components/header/PrimaryAppBar";
import { getItem } from "app/utils";
import { Grid, Typography } from "@material-ui/core";
import { palette } from "assets/css/main";
import { ImgEmployee } from "assets/img";
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
        <div style={{ paddingTop: 80, paddingRight: 20, paddingLeft: 20 }}>
          <Grid
            container
            justify="center"
            style={{
              paddingTop: 40,
              // paddingLeft: 20,
              // paddingRight: 20,
              minHeight: 400,
              backgroundImage: "url(" + ImgEmployee + ")",
              backgroundSize: "contain",
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Grid item lg={10} md={10} sm={10}>
              <Typography
                style={{ ...content, fontSize: 32, fontWeight: "bolder" }}
              >
                Selamat Datang
              </Typography>
              <Typography style={content}>
                Di Website Absensi, Silahkan <br />
                Login untuk memulai
              </Typography>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}
