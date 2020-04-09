import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: "white",
    // marginTop: theme.spacing(8),
    padding: theme.spacing(2, 0)
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justify="center" alignItems="center">
        <Grid item lg={4}>
          <Grid container justify="center" alignItems="center">
            <Grid
              item
              md={4}
              style={{ textAlign: "center", fontWeight: "bold" }}>
              About
            </Grid>
            <Grid
              item
              md={2}
              style={{
                textAlign: "center",
                fontWeight: "bold",
                borderLeft: "1px solid black",
                borderRight: "1px solid black"
              }}>
              FAQ
            </Grid>
            <Grid
              item
              md={6}
              style={{ textAlign: "center", fontWeight: "bold" }}>
              Term & Conditions
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
};
