import React from "react";
import { RequestPut, clearAll } from "app/utils";
import MyHelmet from "app/components/header/MyHelmet";
import { Header } from "app/components";
import { Grid, Button, Typography } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { palette } from "assets/css/main";
const content = {
  fontWeight: "bold",
  color: palette.primary,
  fontSize: 18,
};
class ChangePassword extends React.Component {
  state = {
    passwordnow: "",
    passwordnew: "",
    passwordconfirm: "",
    success: "",
  };
  constructor(props) {
    super(props);
    this.submitFormAction = this.submitForm.bind(this);
  }
  submitForm = (ev) => {
    ev.preventDefault();
    this.setState({ success: "" });
    RequestPut("user/change-password", this.state)
      .then((res) => {
        if (res.status) {
          clearAll();
          this.setState({
            success: "Password berhasil diubah, Anda akan logout otomatis",
          });
          setTimeout(() => {
            window.location.href = "/user/login";
          }, 2500);
        }
      })
      .catch((e) => {
        this.setState({ error: e.data.message });
      });
  };
  render() {
    return (
      <div>
        <MyHelmet title={"Ubah Password"} />
        <Header shadow={true} linkgroup={true} />
        <div style={{ paddingTop: 100 }}>
          <Grid container justify="center" alignItems="center">
            <Grid item lg={4} md={6} sm={10} xs={10}>
              <Typography style={{ ...content }}>
                Silahkan Data Berikut
              </Typography>
              <ValidatorForm onSubmit={this.submitFormAction}>
                <TextValidator
                  label={"Password Sekarang"}
                  onChange={(e) => {
                    this.setState({ passwordnow: e.target.value });
                  }}
                  type="password"
                  name="passwordnow"
                  value={this.state.passwordnow}
                  style={{ width: "100%", marginTop: 20 }}
                  required
                  autoComplete="passwordnow"
                  validators={["required"]}
                  errorMessages={["Wajib diisi"]}
                />
                <TextValidator
                  label={"Password Baru"}
                  onChange={(e) => {
                    this.setState({ passwordnew: e.target.value });
                  }}
                  type="password"
                  name="passwordnew"
                  value={this.state.passwordnew}
                  style={{ width: "100%", marginTop: 20 }}
                  required
                  autoComplete="passwordnew"
                  validators={["required"]}
                  errorMessages={["Wajib diisi"]}
                />
                <TextValidator
                  label={"Ulangi Password Baru"}
                  onChange={(e) => {
                    this.setState({ passwordconfirm: e.target.value });
                  }}
                  type="password"
                  name="passwordconfirm"
                  value={this.state.passwordconfirm}
                  style={{ width: "100%", marginTop: 20 }}
                  required
                  autoComplete="passwordconfirm"
                  validators={["required"]}
                  errorMessages={["Wajib diisi"]}
                />
                {this.state.error && (
                  <p style={{ color: palette.error, fontSize: 14 }}>
                    {this.state.error}
                  </p>
                )}
                {this.state.success && (
                  <p style={{ color: palette.primary, fontWeight: "bold" }}>
                    {this.state.success}
                  </p>
                )}
                <Button
                  size="large"
                  variant="contained"
                  style={{
                    marginTop: 20,
                    backgroundColor: palette.primary,
                    color: "white",
                    fontWeight: "bold",
                  }}
                  type="submit"
                >
                  Ubah Password
                </Button>
              </ValidatorForm>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
export default ChangePassword;
