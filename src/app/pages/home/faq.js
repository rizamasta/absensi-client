import React from "react";
import MyHelmet from "app/components/header/MyHelmet";
import PrimaryAppBar from "app/components/header/PrimaryAppBar";
import { getItem } from "app/utils";
import { Grid, Typography } from "@material-ui/core";
import { palette } from "assets/css/main";
import { Footer } from "app/components";
import Partner from "./Partner";
const content = {
  fontWeight: "bold",
  color: palette.primary,
  fontSize: 18,
};
export default class FAQPage extends React.Component {
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
        <MyHelmet title="Pertanyaan Umum" description="Pertanyaan Umum" />
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
            FAQ
          </Typography>
        </div>
        <Partner />
        <Footer />
      </React.Fragment>
    );
  }
}
