import React from "react";
import MyHelmet from "app/components/header/MyHelmet";
import { Header, Footer } from "app/components";
import { Grid, Button, CircularProgress } from "@material-ui/core";
import { palette } from "assets/css/main";
import { RequestDownload } from "app/utils";
const buttonStyle = {
  marginTop: 20,
  backgroundColor: palette.primary,
  color: "white",
  fontWeight: "bold",
};
export default class AbsensiReport extends React.Component {
  state = { loading: false };
  download() {
    this.setState({ loading: true });
    RequestDownload("absensi/export")
      .then((r) => {
        this.setState({ loading: false });
        const url = window.URL.createObjectURL(new Blob([r.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", new Date().getTime() + ".xlsx");
        document.body.appendChild(link);
        link.click();
      })
      .catch((e) => {
        console.log(e);
        this.setState({ loading: false });
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
              <div>
                <Button
                  disabled={this.state.loading}
                  size="large"
                  variant="contained"
                  onClick={() => this.download()}
                  style={{
                    ...buttonStyle,
                    backgroundColor: this.state.loading
                      ? "#ccc"
                      : palette.primary,
                  }}
                >
                  Download Absen Mingguan
                  {this.state.loading && (
                    <CircularProgress
                      style={{ width: 20, height: 20, marginLeft: 20 }}
                    />
                  )}
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
