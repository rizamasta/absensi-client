import React from "react";
import { getItem, RequestPost, UserSession } from "app/utils";
import MyHelmet from "app/components/header/MyHelmet";
import { Header, Footer } from "app/components";
import { Grid, Button, Typography } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { palette } from "assets/css/main";
const content = {
  fontWeight: "bold",
  color: palette.primary,
  fontSize: 18,
};
class UserLogin extends React.Component {
  state = { username: "", password: "" };
  constructor(props) {
    super(props);
    if (getItem("token")) {
      this.props.history.push("/user/absen");
    }
    this.submitFormAction = this.submitForm.bind(this);
  }
  submitForm = (ev) => {
    ev.preventDefault();
    RequestPost("user/auth/login", this.state)
      .then((res) => {
        UserSession.setData(res.data.data);
        this.props.history.push("/user/absen");
      })
      .catch((e) => {
        this.setState({ error: e.data.message });
      });
  };
  render() {
    return (
      <div>
        <MyHelmet title={"Login"} />
        <Header shadow={true} linkgroup={true} />
        <div style={{ paddingTop: 100 }}>
          <Grid container justify="center" alignItems="center">
            <Grid item lg={4} md={6} sm={10} xs={10}>
              <Typography style={{ ...content }}>
                Silahkan masukkan Username/NIP dan password Anda
              </Typography>
              <ValidatorForm onSubmit={this.submitFormAction}>
                <TextValidator
                  label={"Username / NIP"}
                  onChange={(e) => {
                    this.setState({ username: e.target.value });
                  }}
                  name="username"
                  value={this.state.username}
                  style={{ width: "100%", marginTop: 20 }}
                  required
                  autoComplete="username"
                  validators={["required"]}
                  errorMessages={["Username / NIP wajib diisi"]}
                />
                <TextValidator
                  label={"Password"}
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                  type="password"
                  name="password"
                  value={this.state.password}
                  style={{ width: "100%", marginTop: 20 }}
                  required
                  autoComplete="password"
                  validators={["required"]}
                  errorMessages={["Password wajib diisi"]}
                />
                <p style={{ color: palette.error, fontSize: 14 }}>
                  {this.state.error}
                </p>
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
                  Login
                </Button>
              </ValidatorForm>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}
export default UserLogin;
