import React from "react";
import { observer } from "mobx-react";
import alertData from "./alert-data";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import propTypes from "prop-types";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const AbsensiAlert = observer(props => {
  const {
    vertical,
    horizontal,
    onClose,
    open,
    severity,
    message,
    hidetime,
  } = props;
  var openAlert, messageAlert, hidingTime, severityAlert;

  if (typeof open != "undefined") {
    openAlert = open;
  } else {
    openAlert = alertData.open;
  }

  if (typeof messages != "undefined") {
    messageAlert = message;
  } else {
    messageAlert = alertData.message;
  }
  if (typeof hidetime != "undefined") {
    hidingTime = hidetime;
  } else {
    hidingTime = alertData.hidetime;
  }
  if (typeof severity != "undefined") {
    severityAlert = severity;
  } else {
    severityAlert = alertData.severity;
  }
  const closing = () => {
    onClose(false);
    alertData.setOpen(false);
  };

  return (
    <Snackbar
      autoHideDuration={hidingTime ? hidingTime * 1000 : null}
      open={openAlert}
      anchorOrigin={{ vertical, horizontal }}
      onClose={(event, reason) => {
        if (reason === "clickaway") {
          return;
        } else {
          closing();
        }
      }}>
      <Alert
        onClose={() => {
          closing();
        }}
        severity={severityAlert}>
        {messageAlert}
      </Alert>
    </Snackbar>
  );
});
AbsensiAlert.propTypes = {
  vertical: propTypes.string,
  horizontal: propTypes.string,
  onClose: propTypes.func,
  severity: propTypes.oneOf(["error", "warning", "info", "success"]),
};
AbsensiAlert.defaultProps = {
  vertical: "bottom",
  horizontal: "center",
  onClose: e => {},
};
export default AbsensiAlert;
