import React from "react";
import MyHelmet from "app/components/header/MyHelmet";
import { Header, Footer } from "app/components";
import { Grid, Typography, Button } from "@material-ui/core";
import { palette } from "assets/css/main";
import { RequestGet } from "app/utils";
const label = {
  fontWeight: "bold",
  fontSize: 18,
};
const content = {
  fontWeight: "bold",
  color: palette.primary,
  fontSize: 24,
};
export default class Profile extends React.Component {
  state = {};
  componentDidMount() {
    this.getProfile();
  }
  getProfile() {
    RequestGet("user/me")
      .then((res) => {
        this.setState(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  changePassword() {
    this.props.history.push("/user/profile/change-password");
  }
  render() {
    return (
      <div>
        <MyHelmet title="Profile" />
        <Header shadow={true} linkgroup={true} />
        <div style={{ paddingTop: 100 }}>
          <Grid container justify="center" alignItems="center">
            <Grid item lg={4} md={6} sm={10} xs={10}>
              <div style={{ marginBottom: 25 }}>
                <Typography style={label}>NIP</Typography>
                <Typography style={content}>
                  {this.state.username ? this.state.username : "-"}
                </Typography>
              </div>
              <div style={{ marginBottom: 25 }}>
                <Typography style={label}>Nama</Typography>
                <Typography style={content}>
                  {this.state.fullname ? this.state.fullname : "-"}
                </Typography>
              </div>
              <div style={{ marginBottom: 25 }}>
                <Typography style={label}>Satuan Kerja</Typography>
                <Typography style={content}>
                  {this.state.location ? this.state.location : "-"}
                </Typography>
              </div>
              <div style={{ marginBottom: 25 }}>
                <Typography style={label}>Golongan</Typography>
                <Typography style={content}>
                  {this.state.level ? this.state.level : "-"}
                </Typography>
              </div>
              <div style={{ marginBottom: 25 }}>
                <Typography style={label}>Jabatan</Typography>
                <Typography style={content}>
                  {this.state.position ? this.state.position : "-"}
                </Typography>
              </div>
              <div style={{ marginTop: 10, marginBottom: 25 }}>
                <Button
                  onClick={() => {
                    this.changePassword();
                  }}
                  variant="contained"
                  color="primary"
                >
                  Ubah Password
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}
