import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { PRIMARY_BUTTON } from "assets/css/main";
class NotFound extends React.Component {
  render() {
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        style={{ paddingTop: 50 }}
      >
        <Typography variant="h3">ERROR 404</Typography>
        <Typography variant="h5">PAGE NOT FOUND</Typography>
        <Link to="" style={{ marginTop: 30 }}>
          <Button variant="contained" style={{ ...PRIMARY_BUTTON }}>
            Back
          </Button>
        </Link>
      </Grid>
    );
  }
}
export default NotFound;
