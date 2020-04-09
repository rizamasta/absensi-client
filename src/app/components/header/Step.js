import React from "react";
import { Stepper, Step, StepLabel, makeStyles } from "@material-ui/core";
import { palette } from "assets/css/main";
import clsx from "clsx";
import { Check } from "@material-ui/icons";
import "./style.css";

const useCustomIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 30,
    height: 30,
    fontWeight: "bold",
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: palette.primary,
  },
  completed: {
    color: "#fff",
    backgroundColor: "rgb(215,225,239)",
  },
});
function CustomIcon(props) {
  const classes = useCustomIconStyles();
  const { active, completed } = props;

  const icons = {
    1: "1",
    2: "2",
    3: "c",
    4: "d",
    5: "e",
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {completed ? <Check /> : icons[String(props.icon)]}
    </div>
  );
}
export default class StepHeader extends React.Component {
  render() {
    const { activeStep, translate } = this.props;
    return (
      <Stepper activeStep={activeStep} style={{ width: 230 }}>
        <Step completed={activeStep > 0 ? true : false}>
          <StepLabel className="Header-Step" StepIconComponent={CustomIcon}>
            {translate("step.bio-data")}
          </StepLabel>
        </Step>
        <Step>
          <StepLabel className="Header-Step" StepIconComponent={CustomIcon}>
            {translate("step.test")}
          </StepLabel>
        </Step>
      </Stepper>
    );
  }
}
