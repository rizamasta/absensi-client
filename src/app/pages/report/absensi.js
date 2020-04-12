import React from "react";
import MyHelmet from "app/components/header/MyHelmet";
import { Header, Footer } from "app/components";
import { Grid, Button } from "@material-ui/core";
import { palette } from "assets/css/main";
import { Link } from "react-router-dom";
const buttonStyle = {
  marginTop: 20,
  backgroundColor: palette.primary,
  color: "white",
  fontWeight: "bold",
};
export default class AbsensiReport extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <MyHelmet title={"Absen"} />
        <Header shadow={true} linkgroup={true} />
        <div style={{ paddingTop: 100 }}>
          <Grid container justify="center" alignItems="center">
            <Grid item lg={4} md={6} sm={10} xs={10}>
              <div>
                <Link
                  to="route"
                  target="_blank"
                  onClick={(event) => {
                    event.preventDefault();
                    window.open(
                      process.env.REACT_APP_API.replace("v1/", "") +
                        "s/file/" +
                        new Date().getTime()
                    );
                  }}
                >
                  <Button size="large" variant="contained" style={buttonStyle}>
                    Download Absen Mingguan
                  </Button>
                </Link>
              </div>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}
