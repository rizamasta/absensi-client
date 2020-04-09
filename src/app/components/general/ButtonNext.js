import React from "react";
import { Button } from "@material-ui/core";
import { palette } from "assets/css/main";
import { ArrowForward } from "@material-ui/icons";
import { observer } from "mobx-react";
export const NextBtn = observer((props) => {
  const { color, text, onClick, style, textStyle, iconSize } = props;
  return (
    <Button onClick={onClick} style={{ ...style }}>
      <span
        style={{
          fontSize: 24,
          fontWeight: "bolder",
          color: color ? color : palette.primary,
          textTransform: "capitalize",
          marginRight: 5,
          textDecoration: "underline",
          ...textStyle,
        }}
      >
        {text}
      </span>
      <ArrowForward
        style={{ color: color ? color : palette.primary, ...iconSize }}
      />
    </Button>
  );
});
