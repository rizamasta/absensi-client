import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Grid, Hidden, Typography } from "@material-ui/core";
import LinkGroup from "./LinkGroup";
import SmallMenu from "./SmallMenu";
import { palette } from "assets/css/main";
class PrimaryAppBar extends React.Component {
  render() {
    const { shadow, linkgroup } = this.props;
    return (
      <div>
        <AppBar
          position="absolute"
          color="default"
          style={{
            backgroundColor: "white",
            top: 0,
            bottom: "auto",
            position: "fixed",
            boxShadow: !shadow ? "none" : "",
          }}
        >
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              spacing={2}
            >
              <Grid item lg={2} md={2} sm={2}>
                <Link to="/">
                  <Typography
                    style={{
                      fontWeight: "bolder",
                      fontSize: 24,
                      color: palette.primary,
                    }}
                  >
                    Absensi
                  </Typography>
                </Link>
              </Grid>
              <Grid item lg={10} md={10} sm={10}>
                <Grid container justify="flex-end" alignItems="center">
                  <Hidden smDown>{linkgroup && <LinkGroup />}</Hidden>
                  <Hidden mdUp>{linkgroup && <SmallMenu />}</Hidden>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default PrimaryAppBar;
