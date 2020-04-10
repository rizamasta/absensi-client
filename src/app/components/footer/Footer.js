import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { palette } from "assets/css/main";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "transparent",
    // marginTop: theme.spacing(8),
    padding: theme.spacing(2, 0),
  },
  link: {
    marginLeft: 10,
    marginRight: 10,
    fontWeight: "bold",
    color: palette.primary,
  },
  grid: {
    backgroundColor: palette.grey,
    minHeight: 60,
    width: "100vw",
    position: "fixed",
    bottom: 0,
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.grid}
      >
        <Link className={classes.link} to="/home/about">
          Tentang
        </Link>
        |
        <Link className={classes.link} to="/home/faq">
          FAQ
        </Link>
        |
        <Link className={classes.link} to="/home/termcondition">
          Syarat & Ketentuan
        </Link>
      </Grid>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
