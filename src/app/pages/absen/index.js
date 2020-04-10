import React from "react";
import { getItem, RequestPost, RequestGet, RequestPut } from "app/utils";
import MyHelmet from "app/components/header/MyHelmet";
import { Header, Footer } from "app/components";
import { Grid, Button, Typography } from "@material-ui/core";
import { palette } from "assets/css/main";
const buttonStyle = {
  marginTop: 20,
  backgroundColor: palette.primary,
  color: "white",
  fontWeight: "bold",
};
class Absensi extends React.Component {
  constructor(props) {
    super(props);
    if (!getItem("token")) {
      this.props.history.push("/user/login");
    }
  }
  state = { user_data: {}, create: false, load: false };
  componentDidMount() {
    this.setState({ user_data: JSON.parse(getItem("user_data")) });
    this.checkPoint();
  }
  checkPoint() {
    RequestGet("absensi/checkpoint")
      .then((res) => {
        this.setState({ create: res.data.data.create, load: true });
      })
      .catch((err) => {
        this.setState({ error: err.data.message });
      });
  }
  absenMasuk() {
    this.setState({ load: false });
    RequestPost("absensi/punchin")
      .then((res) => {
        this.setState({ create: false, load: true });
      })
      .catch((e) => {
        this.setState({ load: true, error: e.data.message });
      });
  }
  absenPulang() {
    this.setState({ load: false });
    RequestPut("absensi/punchout")
      .then((res) => {
        this.setState({ create: true, load: true });
      })
      .catch((e) => {
        this.setState({ load: true, error: e.data.message });
      });
  }
  render() {
    return (
      <div>
        <MyHelmet title={"Absen"} />
        <Header shadow={true} linkgroup={true} />
        <div style={{ paddingTop: 100 }}>
          <Grid container justify="center" alignItems="center">
            <Grid item lg={4} md={6} sm={10} xs={10}>
              <Typography
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  color: palette.primary,
                }}
              >
                Halo,&nbsp;{this.state.user_data.name}{" "}
              </Typography>
              <Typography
                style={{
                  fontSize: 24,
                  color: palette.primary,
                  marginTop: 20,
                }}
              >
                Silahkan Klik tombol dibawah untuk:
              </Typography>
              {!this.state.load && "Mohon tunggu"}
              {this.state.load && (
                <div>
                  {this.state.create && (
                    <Button
                      size="large"
                      variant="contained"
                      style={buttonStyle}
                      onClick={() => this.absenMasuk()}
                    >
                      Absen Masuk
                    </Button>
                  )}
                  {!this.state.create && (
                    <Button
                      size="large"
                      variant="contained"
                      style={{ ...buttonStyle, backgroundColor: palette.error }}
                      onClick={() => this.absenPulang()}
                    >
                      Absen Pulang
                    </Button>
                  )}
                </div>
              )}
              <p style={{ color: palette.error }}>{this.state.error}</p>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Absensi;
