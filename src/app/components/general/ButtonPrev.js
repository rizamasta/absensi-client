import React from "react";
import { Button } from "@material-ui/core";
import { palette } from "assets/css/main";
import { ArrowBack } from "@material-ui/icons";
export default class ButtonPrev extends React.Component {
  render() {
    const { color, text, onClick, style } = this.props;
    return (
      <Button onClick={onClick} style={style}>
        <ArrowBack style={{ color: color ? color : palette.primary }} />
        <span
          style={{
            fontSize: 24,
            fontWeight: "bolder",
            color: color ? color : palette.primary,
            textTransform: "capitalize",
            marginRight: 5,
            textDecoration: "underline"
          }}>
          {text}
        </span>
      </Button>
    );
  }
}
